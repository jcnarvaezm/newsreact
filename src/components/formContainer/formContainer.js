import React, { useRef } from 'react';
import { Panel, Row, Col, TextField, Checkbox } from 'emerald-ui/lib/';
import ModalForm from '../modalForm';
import { Provider } from 'react-redux';
import store from '../../redux/store';

const FormContainer = () => {
  const phonenumber = useRef();
  const email = useRef();
  const handleSubmitForm = (e) => {
    e.preventDefault();
    return {
      type: 'SEND',
      payload: {
        firstname: e.target[0].value,
      },
    };
    /*console.log(e.target[0].value);
    console.log(phonenumber.current.state.value);*/
  };

  return (
    <section className="section-form">
      <h2>Contact Us</h2>
      <Panel className="container form-container">
        <Panel.Body>
          <form onSubmit={handleSubmitForm}>
            <Row>
              <Col xs={12} sm={6} className="field-section">
                <TextField label="First name" />
              </Col>
              <Col xs={12} sm={6} className="field-section">
                <TextField label="Last name" />
              </Col>
              <Col xs={12} sm={6} className="field-section">
                <TextField label="Email" ref={email} />
              </Col>
              <Col xs={12} sm={6} className="field-section">
                <TextField
                  label="Phone number"
                  ref={phonenumber}
                  type="number"
                  maxLength="10"
                />
              </Col>
              <Col xs={12} className="field-section">
                <TextField
                  label="Email"
                  role="textbox"
                  className="email-text-field"
                />
              </Col>
              <Col xs={12} className="field-section">
                <Checkbox label="Send me emails about breaking news and promotions." />
              </Col>
              <Col xs={12} className="field-section section-button">
                <button type="submit">Submit form</button>
              </Col>
            </Row>
          </form>
          <Provider store={store}>
            <ModalForm name="jonathan test" />
          </Provider>
        </Panel.Body>
      </Panel>
    </section>
  );
};
export default FormContainer;
