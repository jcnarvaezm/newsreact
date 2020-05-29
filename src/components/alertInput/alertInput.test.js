import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { mapStateToProps } from './alertInput';

configure({
  adapter: new Adapter(),
});

describe('test alert input', () => {
  test('testing send', () => {
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
      showToast: false,
    };
    const componentState = mapStateToProps(appState, ownProps);

    expect(componentState.infoForm).toEqual(appState);
  });
});
