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
/*
const notNullOrSpace = (input, textInput) => {
  if (textInput === null || textInput.length === 0 || /^\s+$/.test(textInput)) {
    return false;
  } else {
    return true;
  }
};

function addCssError(input) {
  $(`.${input}`).removeClass('has-success');
  $(`.${input}`).addClass('has-error');
  $(`#${input}`).css({ border: 'solid 1px red', color: 'red' });
}
function addCssSuccess(input) {
  $(`.${input}`).removeClass('has-error');
  $(`.${input}`).addClass('has-success');
  $(`#${input}`).css({ border: 'solid 1px #ccc', color: 'black' });
}
*/
export default RegularExpresion;
