import React from 'react';
import { connect } from 'react-redux';
import { Alert, IconButton } from 'emerald-ui/lib/';

const AlertInput = (props) => {
  const { showToast } = props.infoForm;
  const { inputName, messageCase } = props;
  let message = `Please fill in the field: ${inputName}`;
  let color = 'warning';

  if (messageCase === 2) {
    message = `The field: '${inputName}' has not the correct format`;
    color = 'danger';
  }

  const handleHide = () => {
    props.close(false);
  };

  return (
    <React.Fragment>
      {showToast && (
        <Alert color={color}>
          <div>{message}</div>
          <div className="btn-toolbar">
            <IconButton
              ariaLabel="Close"
              icon="cancel"
              title="Close"
              onClick={handleHide}
            />
          </div>
        </Alert>
      )}
    </React.Fragment>
  );
};

const mapStateToProps = (state) => {
  return {
    infoForm: state,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    close: (showToast) =>
      dispatch({
        type: 'CLOSETOAST',
        payload: {
          showToast,
        },
      }),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(AlertInput);
