import {
  SEND,
  /*UPDATE_FIRSTNAME,
  UPDATE_LASTNAME,
  UPDATE_EMAIL,
  UPDATE_PHONENUMBER,
  UPDATE_EMAILTEXT,
  UPDATE_CHKSENDME,*/
} from '../actions/infoFormActions';

const initalState = {
  firstname: 'asdsd',
  lastname: 'El willy',
  phonenumber: '',
  email: '',
  emailtext: '',
  chksendme: false,
};

const infoForm = (state = initalState, action) => {
  switch (action.type) {
    case SEND:
      return {
        ...state,
        firstname: action.payload.firstname,
      };
    /*case UPDATE_FIRSTNAME:
      return {
        ...state,
      };
    case UPDATE_LASTNAME:
      return {
        ...state,
      };
    case UPDATE_EMAIL:
      return {
        ...state,
      };
    case UPDATE_PHONENUMBER:
      return {
        ...state,
      };
    case UPDATE_EMAILTEXT:
      return {
        ...state,
      };
    case UPDATE_CHKSENDME:
      return {
        ...state,
      };*/
    default:
      return state;
  }
};

export default infoForm;
