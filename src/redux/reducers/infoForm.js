import { SEND, CLOSE, CLOSETOAST } from '../actions/infoFormActions';

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
        show: action.payload.show,
      };
    case CLOSE:
      return {
        ...state,
        show: action.payload.show,
      };
    case CLOSETOAST:
      return {
        ...state,
        showToast: action.payload.showToast,
      };
    default:
      return state;
  }
};

export default infoForm;
