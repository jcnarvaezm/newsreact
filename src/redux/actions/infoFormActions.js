export const SEND = 'SEND';
export const CLOSE = 'CLOSE';
export const CLOSETOAST = 'CLOSETOAST';

export const send = () => {
  return {
    type: SEND,
  };
};

export const close = () => {
  return {
    type: CLOSE,
  };
};

export const closeToast = () => {
  return {
    type: CLOSETOAST,
  };
};
