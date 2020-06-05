import React from 'react';
import { create, act } from 'react-test-renderer';
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import FormContainer from './formContainer';
import store from '../../redux/store';
import { Provider } from 'react-redux';
import { TextField, Checkbox } from 'emerald-ui/lib/';

configure({
  adapter: new Adapter(),
});

describe('Testing Form Container', () => {
  let component;
  let tree;
  let instance;

  beforeAll(() => {
    component = create(
      <Provider store={store}>
        <FormContainer />
      </Provider>
    );
    tree = component.toJSON();
    instance = component.root;
  });

  test('renders form container correctly', () => {
    expect(tree).toMatchSnapshot();
  });

  test('Content has class', () => {
    const content = instance.findByType('section');
    expect(content.props.className).toEqual('section-form');
  });
});

describe('FormContainer: Send ', () => {
  const event = {
    preventDefault: jest.fn(),
  };

  const handleSubmitFormMock = jest.fn();
  const formData = {
    firstname: 'firstname',
    lastname: 'lastname',
    email: 'email@email.com',
    phonenumber: '3216549870',
    emailtext: 'test text',
    chksendme: true,
  };

  let component;
  let form;
  let instance;
  let textInputs;
  let textArea;
  let messageInputFn;
  let messageInputLn;
  let messageInputPn;
  let messageInputEm;
  let messageInputEt;

  beforeEach(() => {
    act(() => {
      component = create(
        <Provider store={store}>
          <FormContainer handleSubmitForm={handleSubmitFormMock} />
        </Provider>
      );
    });

    instance = component.root;
    form = instance.findByType('form');

    // Get form inputs
    textInputs = form.findAllByType(TextField);
    textArea = form.findAllByType('textarea');
    messageInputFn = form.findByProps({ name: 'firstname' });
    messageInputLn = form.findByProps({ name: 'lastname' });
    messageInputPn = form.findByProps({ name: 'phonenumber' });
    messageInputEm = form.findByProps({ name: 'email' });
    messageInputEt = form.findByProps({ name: 'emailtext' });
  });

  it('Contact form submit without firstname', () => {
    act(() => {
      for (let index = 0; index < textInputs.length; index++) {
        const input = textInputs[index];
        if (input.props.name !== 'firstname') {
          input.props.onChange({
            ...event,
            target: {
              name: input.props.name,
              value: formData[input.props.name],
            },
          });
        }
      }
    });
    const form = instance.findByType('button');
    // Submit form
    act(() => {
      form.props.onClick(event);
    });
    expect(messageInputFn.props.errorMessage).toEqual(
      `The field: 'firstname' is required`
    );
  });

  it('Contact form submit without lastname', () => {
    act(() => {
      for (let index = 0; index < textInputs.length; index++) {
        const input = textInputs[index];
        if (input.props.name !== 'lastname') {
          input.props.onChange({
            ...event,
            target: {
              name: input.props.name,
              value: formData[input.props.name],
            },
          });
        }
      }
    });
    const form = instance.findByType('button');
    // Submit form
    act(() => {
      form.props.onClick(event);
    });
    expect(messageInputLn.props.errorMessage).toEqual(
      `The field: 'lastname' is required`
    );
  });

  it('Contact form submit without email', () => {
    act(() => {
      for (let index = 0; index < textInputs.length; index++) {
        const input = textInputs[index];
        if (input.props.name !== 'email') {
          input.props.onChange({
            ...event,
            target: {
              name: input.props.name,
              value: formData[input.props.name],
            },
          });
        }
      }
    });
    const form = instance.findByType('button');
    // Submit form
    act(() => {
      form.props.onClick(event);
    });
    expect(messageInputEm.props.errorMessage).toEqual(
      `The field: 'email' has not the correct format`
    );
  });

  it('Contact form submit without phonenumber', () => {
    act(() => {
      for (let index = 0; index < textInputs.length; index++) {
        const input = textInputs[index];
        if (input.props.name !== 'phonenumber') {
          input.props.onChange({
            ...event,
            target: {
              name: input.props.name,
              value: formData[input.props.name],
            },
          });
        }
      }
    });
    const form = instance.findByType('button');
    // Submit form
    act(() => {
      form.props.onClick(event);
    });
    expect(messageInputPn.props.errorMessage).toEqual(
      `The field: 'phonenumber' has not the correct format`
    );
  });

  it('Contact form submit with phonenumber wrong', () => {
    act(() => {
      for (let index = 0; index < textInputs.length; index++) {
        const input = textInputs[index];
        if (input.props.name === 'phonenumber') {
          input.props.onChange({
            ...event,
            target: {
              name: input.props.name,
              value: '3214',
            },
          });
        }
      }
    });
    const form = instance.findByType('button');
    // Submit form
    act(() => {
      form.props.onClick(event);
    });
    expect(messageInputPn.props.errorMessage).toEqual(
      `The field: 'phonenumber' has not the correct format`
    );
  });

  it('Contact form submit with phonenumber and email good', () => {
    act(() => {
      for (let index = 0; index < textInputs.length; index++) {
        const input = textInputs[index];
        if (input.props.name === 'phonenumber') {
          input.props.onChange({
            ...event,
            target: {
              name: input.props.name,
              value: formData[input.props.name],
            },
          });
        }
        if (input.props.name === 'email') {
          input.props.onChange({
            ...event,
            target: {
              name: input.props.name,
              value: formData[input.props.name],
            },
          });
        }
      }
    });
    const form = instance.findByType('button');
    // Submit form
    act(() => {
      form.props.onClick(event);
    });
    expect(messageInputEm.props.errorMessage).toEqual(
      `The field: 'email' has not the correct format`
    );
    expect(messageInputPn.props.errorMessage).toEqual(``);
  });

  it('Contact form submit without emailtext', () => {
    // act(() => {
    //   for (let index = 0; index < textInputs.length; index++) {
    //     const input = textInputs[index];
    //     if (input.props.name !== 'emailtext') {
    //       input.props.onChange({
    //         ...event,
    //         target: {
    //           name: input.props.name,
    //           value: formData[input.props.name],
    //         },
    //       });
    //     }
    //   }
    //   messageInput.props.onChange({
    //     ...event,
    //     target: { name: 'firstname', value: 'Test message' },
    //   });
    // });
    // const form = instance.findByType('button');
    // // Submit form
    // act(() => {
    //   form.props.onClick(event);
    // });
    // expect(handleSubmitFormMock).toHaveBeenCalledTimes(0);
  });

  it('Contact form submit with email wrong', () => {
    act(() => {
      for (let index = 0; index < textInputs.length; index++) {
        const input = textInputs[index];
        if (input.props.name === 'email') {
          input.props.onChange({
            ...event,
            target: {
              name: input.props.name,
              value: 'testfail',
            },
          });
        }
      }
    });
    const form = instance.findByType('button');
    // Submit form
    act(() => {
      form.props.onClick(event);
    });
    expect(messageInputEm.props.errorMessage).toEqual(
      `The field: 'email' has not the correct format`
    );
  });

  it('Contact form submit all right', () => {
    act(() => {
      for (let index = 0; index < textInputs.length; index++) {
        const input = textInputs[index];
        input.props.onChange({
          ...event,
          target: {
            name: input.props.name,
            value: formData[input.props.name],
          },
        });
      }
    });
    act(() => {
      // textArea.props.onChange({
      //   ...event,
      //   target: {
      //     name: 'emailtext',
      //     value: 'Test tex',
      //   },
      // });
      console.log(textArea.props);
    });
    const form = instance.findByType('button');
    // Submit form
    act(() => {
      form.props.onClick(event);
    });
    console.log(messageInputEt.props.value);
    expect(messageInputPn.props.errorMessage).toEqual('');
  });

  it('Contact form submit without text', () => {
    act(() => {
      for (let index = 0; index < textInputs.length; index++) {
        const input = textInputs[index];
        input.props.onChange({
          ...event,
          target: {
            name: input.props.name,
            value: '',
          },
        });
      }
    });
    const form = instance.findByType('button');
    // Submit form
    act(() => {
      form.props.onClick(event);
    });
    expect(messageInputFn.props.errorMessage).toEqual(
      `The field: 'firstname' is required`
    );
  });

  it('Contact form change state checkbox', () => {
    const form = instance.findByType('form');
    const checkInput = form.findByType(Checkbox);
    act(() => {
      checkInput.props.onChange({
        ...event,
        target: {
          name: 'chksendme',
          checked: true,
        },
      });
    });
    expect(checkInput.props.value).toEqual(true);
  });

  it('Contact form submit with email and phonenumber wrong', () => {
    act(() => {
      for (let index = 0; index < textInputs.length; index++) {
        const input = textInputs[index];
        if (input.props.name === 'email') {
          input.props.onChange({
            ...event,
            target: {
              name: input.props.name,
              value: 'email@',
            },
          });
        }
        if (input.props.name === 'phonenumber') {
          input.props.onChange({
            ...event,
            target: {
              name: input.props.name,
              value: '31254',
            },
          });
        }
      }
    });
    const form = instance.findByType('button');
    // Submit form
    act(() => {
      form.props.onClick(event);
    });
    expect(messageInputPn.props.errorMessage).toEqual(
      `The field: 'phonenumber' has not the correct format`
    );
  });

  it('Contact form submit with just email and phonenumber right', () => {
    act(() => {
      for (let index = 0; index < textInputs.length; index++) {
        const input = textInputs[index];
        if (
          input.props.name !== 'email' ||
          input.props.name !== 'phonenumber'
        ) {
          input.props.onChange({
            ...event,
            target: {
              name: input.props.name,
              value: '',
            },
          });
        }
      }
    });
    const form = instance.findByType('button');
    // Submit form
    act(() => {
      form.props.onClick(event);
    });
    expect(messageInputEm.props.errorMessage).toEqual(
      `The field: 'email' has not the correct format`
    );
  });
});
