import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';

export default {
  title: "Radio Button"
};


export const RadioButton = () => (


  <FormControl component="fieldset">
        
        <RadioGroup aria-label="gender">        
          <FormControlLabel
          control={<Radio color="primary" />}
            value="female"
            label="Option 1"                                            
          />
          <FormControlLabel
            value="male"
            control={<Radio color="primary" />}
            label="Option 2"            
          />
          <FormControlLabel
            value="other"
            control={<Radio color="primary" />}
            label="Option 3"            
          />
          <FormControlLabel
            value="disabled"
            disabled
            control={<Radio />}
            label="(Disabled option)"            
          />
        </RadioGroup>
      </FormControl>
);

