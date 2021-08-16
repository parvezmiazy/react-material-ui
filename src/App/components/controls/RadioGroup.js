import React from "react";
import {
  FormControl,
  FormLabel,
  Radio,
  FormControlLabel,
  RadioGroup as MuiRadioGroup,
} from "@material-ui/core";
export default function RadioGroup(props) {
  const { name, label, value, onChange } = props;
  return (
    <FormControl>
      <FormLabel>{label}</FormLabel>

      <MuiRadioGroup row name={name} value={value} onChange={onChange}>
        {items.map((item, index) => {
          <FormControlLabel
            value={item.id}
            control={<Radio />}
            label={item.title}
          />;
        })}
      </MuiRadioGroup>
    </FormControl>
  );
}
