import { SEND, CLOSE } from '../actions/infoFormActions';

const initalState = {
  firstname: '',
  lastname: '',
  phonenumber: '',
  email: '',
  emailtext: '',
  chksendme: false,
  show: false,
  showToast: false,
};

const infoForm = (state = initalState, action) => {
  switch (action.type) {
    case SEND:
      return {
        firstname: action.payload.firstname,
        lastname: action.payload.lastname,
        phonenumber: action.payload.phonenumber,
        email: action.payload.email,
        emailtext: action.payload.emailtext,
        chksendme: action.payload.chksendme,
        show: action.payload.show,
      };
    case CLOSE:
      return {
        ...state,
        show: action.payload.show,
      };
    default:
      return state;
  }
};

export default infoForm;
