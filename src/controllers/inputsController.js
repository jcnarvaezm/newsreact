const inputsController = (input, value) => {
  if (value.trim() === null || value.trim() === '') {
    return true;
  }
  return false;
};

export default inputsController;
