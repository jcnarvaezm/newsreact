const RegularExpresion = (input, textInput) => {
  switch (input) {
    case 'phonenumber':
      if (/^([0-9]{10})$/.test(textInput)) {
        return false;
      } else {
        if (!/^3/.test(textInput)) {
          return true;
        } else if (textInput.length > 10) {
          return true;
        } else if (textInput.length < 10) {
          return true;
        } else {
          return true;
        }
      }

    case 'email':
      if (
        /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-]{4,})+\.)+([a-zA-Z0-9]{2,})((\.+([a-zA-Z0-9]{2,}))?)+$/.test(
          textInput
        )
      ) {
        return false;
      } else {
        if (/^[@-_.]/.test(textInput)) {
          return true;
        } else {
          if (/^[0-9]/.test(textInput)) {
            return true;
          } else {
            return true;
          }
        }
      }

    default:
      break;
  }
};

export default RegularExpresion;
