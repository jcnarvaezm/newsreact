import React, { useRef } from 'react';
import { Panel, Row, Col, TextField, Checkbox, Button } from 'emerald-ui/lib/';

const FormContainer = (props) => {
  const firstname = useRef();
  const lastname = useRef();
  const email = useRef();
  const phonenumber = useRef();
  const emailtext = useRef();
  const chkaccept = useRef();

  const handleClickSendForm = (e) => {
    e.preventDefault();
    console.log(firstname);
  };
  return (
    <section className="section-form">
      <h2>Contact Us</h2>
      <Panel className="container form-container">
        <Panel.Body>
          <Row>
            <Col xs={12} sm={6} className="field-section">
              <TextField label="First name" ref={firstname} />
            </Col>
            <Col xs={12} sm={6} className="field-section">
              <TextField label="Last name" ref={lastname} />
            </Col>
            <Col xs={12} sm={6} className="field-section">
              <TextField label="Email" ref={email} />
            </Col>
            <Col xs={12} sm={6} className="field-section">
              <TextField label="Phone number" ref={phonenumber} />
            </Col>
            <Col xs={12} className="field-section">
              <TextField
                label="Email"
                role="textbox"
                className="email-text-field"
                ref={emailtext}
              />
            </Col>
            <Col xs={12} className="field-section">
              <Checkbox label="Send me emails about breaking news and promotions." />
            </Col>
            <Col xs={12} className="field-section field-section-btn">
              <Button color="primary" onClick={handleClickSendForm}>
                <span>Submit form</span>
              </Button>
            </Col>
          </Row>
        </Panel.Body>
      </Panel>
    </section>
  );
};
export default FormContainer;
