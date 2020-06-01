import React from 'react';
import { connect } from 'react-redux';
import { Checkbox, Modal, Label } from 'emerald-ui/lib/';

const ModalForm = (props) => {
  const {
    firstname,
    lastname,
    phonenumber,
    email,
    emailtext,
    chksendme,
    show,
  } = props.infoForm;

  const close = (e) => {
    props.close(false);
  };

  return (
    <section className="container">
      <Modal onHide={close} show={show}>
        <Modal.Header closeButton={true}>
          <Modal.Title>Information</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <section className="container">
            <Label>Firstname:</Label>
            <p>{firstname}</p>
            <Label>Lastname:</Label>
            <p>{lastname}</p>
            <Label>Email:</Label>
            <p>{email}</p>
            <Label>Phone number:</Label>
            <p>{phonenumber}</p>
            <Label>Email text:</Label>
            <p>{emailtext}</p>
            <Checkbox
              label="Send me emails about breaking news and promotions."
              readOnly
              checked={chksendme}
            />
          </section>
        </Modal.Body>
      </Modal>
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
    close: (showModal) =>
      dispatch({
        type: 'CLOSE',
        payload: {
          show: showModal,
        },
      }),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ModalForm);
