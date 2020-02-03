import React from "react";
import TextField from "@material-ui/core/TextField";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";

export default {
  title: "TextFields"
};

export const GenericField = () => (
  <div>
    <form className="f" noValidate autoComplete="off">
      <h4>Generic Field</h4>
      <TextField id="standard-basic" label="Standard" />
    </form>
  </div>
);


const FormControls = {
  minWidth: "120px"
};

export const SelectField = () => (
  <div>
    <h4>Select Field</h4>
    <FormControl style={FormControls}>
      <InputLabel id="demo-controlled-open-select-label">City</InputLabel>
      <Select
        labelId="demo-controlled-open-select-label"
        id="demo-controlled-open-select"
      >       
        <MenuItem value={10}>Ten</MenuItem>
        <MenuItem value={20}>Twenty</MenuItem>
        <MenuItem value={30}>Thirty</MenuItem>
      </Select>
    </FormControl>
  </div>
);


export const TextFiels = () => (
  <div>
    <h4>Text Field</h4>
    <form  noValidate autoComplete="off">
      <div>
        <TextField
          id="standard-multiline-static"
          label="Your message here"
          multiline
          rows="4"
          defaultValue=""
        />
      </div>
    </form>
  </div>
);