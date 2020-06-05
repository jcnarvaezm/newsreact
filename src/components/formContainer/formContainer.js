import React, { useState } from 'react';
import { connect } from 'react-redux';

import inputsController from '../../controllers/inputsController';
import regularExpresion from '../../controllers/regularExpresion';

import { Panel, Row, Col, TextField, Checkbox } from 'emerald-ui/lib/';

import { InitialStateformData } from './formData';

const FormContainer = (props) => {
  const [formData, setFormData] = useState(InitialStateformData);
  const [message, setMessage] = useState({});
  let messageTem = {};
  let validator = false;
  const handleChangeInput = (e) => {
    e.preventDefault();
    let inputName = e.target.name;
    let inputValue = e.target.value;
    setFormData({
      ...formData,
      [inputName]: inputValue,
    });
    if (e.target.value) {
      setMessage({
        ...message,
        [inputName]: '',
      });
    }
    if (inputName === 'email' || inputName === 'phonenumber') {
      validateRegularExpresion(inputName, inputValue);
    }
  };
  const hanleClickChkSendMe = (e) => {
    setFormData({
      ...formData,
      chksendme: e.target.checked,
    });
  };
  const inputValidator = (inputName, inputData) => {
    if (inputsController(inputData)) {
      messageTem = {
        ...messageTem,
        [inputName]: `The field: '${inputName}' is required`,
      };
      return true;
    } else {
      messageTem = {
        ...messageTem,
        [inputName]: '',
      };
      return false;
    }
  };
  const validateRegularExpresion = (inputName, inputData) => {
    if (regularExpresion(inputName, inputData)) {
      messageTem = {
        ...messageTem,
        [inputName]: `The field: '${inputName}' has not the correct format`,
      };
      return true;
    } else {
      messageTem = {
        ...messageTem,
        [inputName]: '',
      };
      return false;
    }
  };
  const handleSubmitForm = (e) => {
    e.preventDefault();
    inputValidator('firstname', formData.firstname);
    inputValidator('lastname', formData.lastname);
    inputValidator('phonenumber', formData.phonenumber);
    inputValidator('email', formData.email);
    inputValidator('emailtext', formData.emailtext);
    validateRegularExpresion('email', formData.email);
    validateRegularExpresion('phonenumber', formData.phonenumber);
    setMessage(messageTem);
    Object.values(messageTem).forEach((message) => {
      if (message) {
        validator = true;
        return;
      }
    });
    let info = InitialStateformData;
    if (!validator) {
      info = {
        firstname: formData.firstname,
        lastname: formData.lastname,
        phonenumber: formData.phonenumber,
        email: formData.email,
        emailtext: formData.emailtext,
        chksendme: formData.chksendme,
        show: true,
        showToast: false,
      };
    }
    props.send(info);
  };
  return (
    <section className="section-form">
      <h2>Contact Us</h2>
      <Panel className="container form-container">
        <Panel.Body>
          <form>
            <Row>
              <Col xs={12} sm={6} className="field-section">
                <TextField
                  errorMessage={message.firstname}
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
                  errorMessage={message.lastname}
                />
              </Col>
              <Col xs={12} sm={6} className="field-section">
                <TextField
                  label="Email"
                  onChange={handleChangeInput}
                  name="email"
                  value={formData.email}
                  errorMessage={message.email}
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
                  errorMessage={message.phonenumber}
                />
              </Col>
              <Col xs={12} className="field-section">
                <div className="eui-text-field">
                  <div className="eui-text-field-wrapper">
                    <textarea
                      className="field-section-textarea"
                      onChange={handleChangeInput}
                      name="emailtext"
                      value={formData.emailtext}
                    ></textarea>
                    <div className="invalid">
                      <p> {message.emailtext} </p>
                    </div>
                  </div>
                  <label>Email</label>
                </div>
              </Col>
              <Col xs={12} className="field-section">
                <Checkbox
                  label="Send me emails about breaking news and promotions."
                  onChange={hanleClickChkSendMe}
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
          </form>
        </Panel.Body>
      </Panel>
    </section>
  );
};
export const mapStateToProps = (state) => {
  return {
    infoForm: state,
  };
};
export const mapDispatchToProps = (dispatch) => {
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
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(FormContainer);
