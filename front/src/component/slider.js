import React from "react";
import PropTypes from "prop-types";

import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Slider from "@material-ui/core/Slider";

const useStyles = makeStyles({
  root: {
    width: 300,
  },
});

const RangeSlider = (props) => {
  const classes = useStyles();
  const { onChange, title, rangeValue } = props;

  const [value, setValue] = React.useState(rangeValue);
  const handleChange = (event, newValue) => {
    setValue(newValue);
    onChange(newValue);
  };

  return (
    <div className={classes.root}>
      {title && (
        <Typography id="range-slider" gutterBottom>
          {title}
        </Typography>
      )}
      <Slider
        value={value}
        onChange={handleChange}
        valueLabelDisplay="auto"
        aria-labelledby="range-slider"
        min={rangeValue[0]}
        max={rangeValue[1]}
      />
    </div>
  );
};

RangeSlider.defaultProps = {
  title: null,
  onChange: () => null,
  value: [],
};

RangeSlider.prototypes = {
  title: PropTypes.string,
  onChange: PropTypes.func,
  value: PropTypes.arrayOf(PropTypes.number),
};

export default RangeSlider;
