import React from "react";
import FormGroup from "@material-ui/core/FormGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";

export default {
  title: "Check Box"
};

export const CheckBox = () => (
  <FormGroup row>
    <FormControlLabel
      control={
        <Checkbox
          
          
          value="checkedB"
          color="primary"
        />
      }
      label="Primary"
    />    
    <FormControlLabel
      disabled
      control={<Checkbox value="checkedD" />}
      label="Disabled"
    />    
  </FormGroup>
);

