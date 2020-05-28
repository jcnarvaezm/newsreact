import React from 'react';
import { connect } from 'react-redux';
import Checkbox from 'emerald-ui/lib/Checkbox';
import { send } from '../../redux/actions/infoFormActions';

const ModalForm = (props) => {
  const {
    firstname,
    lastname,
    phonenumber,
    email,
    emailtext,
    chksendme,
  } = props.infoForm;

  const { name } = props;

  return (
    <section>
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
    send: () =>
      dispatch(
        send({
          type: 'SEND',
          payload: {
            firstname: 'asdteste',
          },
        })
      ),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ModalForm);
