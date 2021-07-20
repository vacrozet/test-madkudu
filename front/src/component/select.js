import PropTypes from "prop-types";

import { makeStyles } from "@material-ui/core/styles";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}));

const SelectComponent = (props) => {
  const { options, onChange, value, name } = props;
  const classes = useStyles();

  const handleChange = (event) => {
    onChange(event.target.value);
  };

  return (
    <FormControl className={classes.formControl}>
      {name && (
        <InputLabel id="demo-simple-select-helper-label">{name}</InputLabel>
      )}
      <Select
        labelId="demo-simple-select-helper-label"
        id="demo-simple-select-helper"
        value={value}
        onChange={handleChange}
      >
        <MenuItem value="">
          <em>N/C</em>
        </MenuItem>
        {options.map((item, index) => {
          return (
            <MenuItem key={index} value={item}>
              {item}
            </MenuItem>
          );
        })}
      </Select>
    </FormControl>
  );
};

SelectComponent.defaultProps = {
  onChange: () => null,
  options: [],
  value: null,
  name: null,
};

SelectComponent.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string),
  onChange: PropTypes.func,
  name: PropTypes.string,
  value: PropTypes.string,
};

export default SelectComponent;
