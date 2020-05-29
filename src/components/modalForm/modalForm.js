import React from 'react';
import { connect } from 'react-redux';
import { Checkbox, Modal } from 'emerald-ui/lib/';

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
    <section>
      <Modal onHide={close} show={show}>
        <Modal.Header closeButton={true}>
          <Modal.Title>Information</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div>
            <p>
              <b>First Name: </b>
              {firstname}
            </p>
            <p>
              <b>Last Name: </b>
              {lastname}
            </p>
            <p>
              <b>Email: </b>
              {email}
            </p>
            <p>
              <b>Phone number: </b>
              {phonenumber}
            </p>
            <p>
              <b>Email: </b>
              {emailtext}
            </p>
            <Checkbox
              label="Send me emails about breaking news and promotions."
              readOnly
              checked={chksendme}
            />
          </div>
        </Modal.Body>
      </Modal>
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
