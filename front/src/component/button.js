import PropTypes from "prop-types";

import Button from "@material-ui/core/Button";

const ButtonMui = (props) => {
  const { text, doAction } = props;
  return (
    <Button variant="contained" onClick={doAction} color="primary">
      {text}
    </Button>
  );
};

ButtonMui.defaultProps = {
  doAction: () => null,
  text: null,
};

ButtonMui.propTypes = {
  doAction: PropTypes.func,
  text: PropTypes.string.isRequired,
};

export default ButtonMui;
