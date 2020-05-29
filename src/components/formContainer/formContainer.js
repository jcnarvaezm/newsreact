import React, { useState } from 'react';
import { Panel, Row, Col, TextField, Checkbox } from 'emerald-ui/lib/';
import { connect } from 'react-redux';
import inputsController from '../../controllers/inputsController';
import regularExpresion from '../../controllers/regularExpresion';
import AlertInput from '../alertInput/alertInput';
import { InitialStateformData } from './formData';

const FormContainer = (props) => {
  const [toasts, setToasts] = useState([]);
  const showToast = [];

  const [formData, setFormData] = useState(InitialStateformData);

  const handleChangeInput = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const hableClickChkSendMe = (e) => {
    setFormData({
      ...formData,
      chksendme: e.target.checked,
    });
  };

  const inputValidator = (inputName, formData) => {
    if (inputsController(inputName, formData)) {
      showToast.push({
        inputName,
        messageCase: 1,
        show: true,
      });
      props.closeToast(true);
    }
  };
  const validateRegularExpresion = (inputName, formData) => {
    if (regularExpresion(inputName, formData)) {
      showToast.push({
        inputName,
        messageCase: 2,
        show: true,
      });
      props.closeToast(true);
    }
  };

  const handleSubmitForm = (e) => {
    e.preventDefault();

    let isToastTrue = false;

    inputValidator('firstname', formData.firstname);
    inputValidator('lastname', formData.lastname);
    inputValidator('phonenumber', formData.phonenumber);
    inputValidator('email', formData.email);
    inputValidator('emailtext', formData.emailtext);

    validateRegularExpresion('phonenumber', formData.phonenumber);
    validateRegularExpresion('email', formData.email);

    showToast.map((toast, index) => {
      if (toast.show === true) {
        isToastTrue = true;
      }
    });

    setToasts(showToast);

    if (isToastTrue) {
      return;
    }

    const info = {
      firstname: formData.firstname,
      lastname: formData.lastname,
      phonenumber: formData.phonenumber,
      email: formData.email,
      emailtext: formData.emailtext,
      chksendme: formData.chksendme,
      show: true,
      showToast: false,
    };

    props.send(info);
  };

  return (
    <section className="section-form">
      <h2>Contact Us</h2>
      <Panel className="container form-container">
        <Panel.Body>
          <Row>
            <Col xs={12} sm={6} className="field-section">
              <TextField
                label="First name"
                onChange={handleChangeInput}
                name="firstname"
                value={formData.firstname}
              />
            </Col>
            <Col xs={12} sm={6} className="field-section">
              <TextField
                label="Last name"
                onChange={handleChangeInput}
                name="lastname"
                value={formData.lastname}
              />
            </Col>
            <Col xs={12} sm={6} className="field-section">
              <TextField
                label="Email"
                onChange={handleChangeInput}
                name="email"
                value={formData.email}
              />
            </Col>
            <Col xs={12} sm={6} className="field-section">
              <TextField
                label="Phone number"
                type="number"
                onChange={handleChangeInput}
                maxLength="10"
                name="phonenumber"
                value={formData.phonenumber}
              />
            </Col>
            <Col xs={12} className="field-section">
              <TextField
                label="Email"
                role="textbox"
                className="email-text-field"
                onChange={handleChangeInput}
                name="emailtext"
                value={formData.emailtext}
              />
            </Col>
            <Col xs={12} className="field-section">
              <Checkbox
                label="Send me emails about breaking news and promotions."
                onChange={hableClickChkSendMe}
                value={formData.chksendme}
                name="chksendme"
              />
            </Col>
            <Col xs={12} className="field-section section-button">
              <button type="submit" onClick={handleSubmitForm}>
                Submit form
              </button>
            </Col>
          </Row>
          <section>
            {toasts.map(
              (toast, index) =>
                toast.show && (
                  <AlertInput
                    key={index}
                    show={true}
                    inputName={toast.inputName}
                    messageCase={toast.messageCase}
                  />
                )
            )}
          </section>
        </Panel.Body>
      </Panel>
    </section>
  );
};

const mapStateToProps = (state) => {
  return {
    infoForm: state,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    send: ({
      firstname,
      lastname,
      email,
      phonenumber,
      emailtext,
      chksendme,
      show,
      showToast,
    }) =>
      dispatch({
        type: 'SEND',
        payload: {
          firstname,
          lastname,
          email,
          phonenumber,
          emailtext,
          chksendme,
          show,
          showToast,
        },
      }),
    closeToast: (showToast) =>
      dispatch({
        type: 'CLOSETOAST',
        payload: {
          showToast,
        },
      }),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(FormContainer);
