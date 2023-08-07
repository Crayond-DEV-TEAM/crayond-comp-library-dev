import { FormControlLabel, Radio, RadioGroup } from '@mui/material';
import React from 'react'

const RadioButton = (props:any) => {
    const {} = props;
  return (
    <>
    <RadioGroup
        row
        aria-labelledby="demo-row-radio-buttons-group-label"
        name="row-radio-buttons-group"
      >
        <FormControlLabel value="male" control={<Radio />} label="Male" />
        <FormControlLabel value="other" control={<Radio />} label="Other" />
        <FormControlLabel
          value="disabled"
          disabled
          control={<Radio />}
          label="other"
        />
      </RadioGroup>
    </>
  )
}

export default RadioButton