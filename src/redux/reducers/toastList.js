import { ADD } from '../actions/toastListActions';

const initalState = {
  inputName: '',
  messageCase: '',
  show: false,
};

const toastList = (state = initalState, action) => {
  switch (action.type) {
    case ADD:
      return {
        inputName: action.payload.inputName,
        messageCase: action.payload.messageCase,
        show: action.payload.show,
      };
    default:
      return state;
  }
};

export default toastList;
