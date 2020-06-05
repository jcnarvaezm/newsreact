import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { mapStateToProps } from '../../components/formContainer/formContainer';

configure({
  adapter: new Adapter(),
});

describe('Testing InfoForm', () => {
  test('Testing InfoForm State', () => {
    const appState = {
      firstname: '',
      lastname: '',
      phonenumber: '',
      email: '',
      emailtext: '',
      chksendme: false,
      show: false,
      showToast: false,
    };
    const ownProps = {
      firstname: 'firstname',
      lastname: 'lastname',
      email: 'email@email.com',
      phonenumber: '1234567890',
      emailtext: 'email text test',
      chksendme: true,
      show: true,
      showToast: false,
    };
    const componentState = mapStateToProps(appState, ownProps);
    expect(componentState.infoForm).toEqual(appState);
  });
});
