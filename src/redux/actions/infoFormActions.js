export const SEND = 'SEND';
export const CLOSE = 'CLOSE';

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
