const inputsController = (value) => {
  if (!value.trim()) {
    return true;
  }
  return false;
};

export default inputsController;
