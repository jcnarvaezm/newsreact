import React, { useState } from 'react';
import { connect } from 'react-redux';

import inputsController from '../../controllers/inputsController';
import regularExpresion from '../../controllers/regularExpresion';

import { Panel, Row, Col, TextField, Checkbox } from 'emerald-ui/lib/';

import { InitialStateformData } from './formData';

const FormContainer = (props) => {
  const [formData, setFormData] = useState(InitialStateformData);
  const [messageFirstname, setmessageFirstname] = useState('');
  const [messageLastname, setmessageLastname] = useState('');
  const [messageEmail, setmessageEmail] = useState('');
  const [messagePhonenumber, setmessagePhonenumber] = useState('');
  const [messageEmailtext, setmessageEmailtext] = useState('');

  const handleChangeInput = (e) => {
    e.preventDefault();
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
    if (e.target.value) {
      switch (e.target.name) {
        case 'firstname':
          setmessageFirstname('');
          break;
        case 'lastname':
          setmessageLastname('');
          break;
        case 'email':
          setmessageEmail('');
          break;
        case 'phonenumber':
          setmessagePhonenumber('');
          break;
        default:
          setmessageEmailtext('');
          break;
      }
    }
    switch (e.target.name) {
      case 'phonenumber':
        validateRegularExpresion(e.target.name, e.target.value);
        break;
      default:
        validateRegularExpresion(e.target.name, e.target.value);
        break;
    }
  };
  const hanleClickChkSendMe = (e) => {
    e.preventDefault();
    setFormData({
      ...formData,
      chksendme: e.target.checked,
    });
  };
  const inputValidator = (inputName, inputData) => {
    if (inputsController(inputData)) {
      switch (inputName) {
        case 'firstname':
          setmessageFirstname(
            `The field: '${inputName}' has not the correct format`
          );
          break;
        case 'lastname':
          setmessageLastname(
            `The field: '${inputName}' has not the correct format`
          );
          break;
        case 'email':
          setmessageEmail(
            `The field: '${inputName}' has not the correct format`
          );
          break;
        case 'phonenumber':
          setmessagePhonenumber(
            `The field: '${inputName}' has not the correct format`
          );
          break;
        default:
          setmessageEmailtext(
            `The field: '${inputName}' has not the correct format`
          );
          break;
      }
      return true;
    } else {
      switch (inputName) {
        case 'firstname':
          setmessageFirstname('');
          break;
        case 'lastname':
          setmessageLastname('');
          break;
        case 'email':
          setmessageEmail('');
          break;
        case 'phonenumber':
          setmessagePhonenumber('');
          break;
        default:
          setmessageEmailtext('');
          break;
      }
      return false;
    }
  };
  const validateRegularExpresion = (inputName, inputData) => {
    if (regularExpresion(inputName, inputData)) {
      switch (inputName) {
        case 'email':
          setmessageEmail(
            `The field: '${inputName}' has not the correct format`
          );
          break;
        default:
          setmessagePhonenumber(
            `The field: '${inputName}' has not the correct format`
          );
          break;
      }
      return true;
    } else {
      switch (inputName) {
        case 'email':
          setmessageEmail('');
          break;
        default:
          setmessagePhonenumber('');
          break;
      }
      return false;
    }
  };
  const handleSubmitForm = (e) => {
    e.preventDefault();
    let modalValidatorFirstName = inputValidator(
      'firstname',
      formData.firstname
    );
    let modalValidatorLasttName = inputValidator('lastname', formData.lastname);
    let modalValidatorPhoneNumber = inputValidator(
      'phonenumber',
      formData.phonenumber
    );
    let modalValidatorEmail = inputValidator('email', formData.email);
    let modalValidatorEmailText = inputValidator(
      'emailtext',
      formData.emailtext
    );
    let modalValidatorREEmail = validateRegularExpresion(
      'email',
      formData.email
    );
    let modalValidatorREPhoneNumber = validateRegularExpresion(
      'phonenumber',
      formData.phonenumber
    );
    if (
      modalValidatorFirstName ||
      modalValidatorLasttName ||
      modalValidatorEmail ||
      modalValidatorPhoneNumber ||
      modalValidatorEmailText ||
      modalValidatorREPhoneNumber ||
      modalValidatorREEmail
    ) {
      return null;
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
          <form>
            <Row>
              <Col xs={12} sm={6} className="field-section">
                <TextField
                  errorMessage={messageFirstname}
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
                  errorMessage={messageLastname}
                />
              </Col>
              <Col xs={12} sm={6} className="field-section">
                <TextField
                  label="Email"
                  onChange={handleChangeInput}
                  name="email"
                  value={formData.email}
                  errorMessage={messageEmail}
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
                  errorMessage={messagePhonenumber}
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
