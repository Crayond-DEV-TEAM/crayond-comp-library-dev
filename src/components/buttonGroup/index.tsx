import { Box, Button, ButtonGroup } from '@mui/material';
import React, { useState } from 'react';
import { CustomButtonGroupProps } from './props';

const CustomButtonGroup: React.FC<CustomButtonGroupProps> = ({
  buttons,
  onClick,
  variant = 'outlined',
  size,
  disabled = false,
  selectedColor,
  unselectBgColor,
  selectedBgColor,
  color,
  fontSize,
  fontWeight,
  btnStyle,
  rootstyle,
  btnGroupStyle,
  ...restProps
}) => {
  const [selectedButton, setSelectedButton] = useState<any>(null);
  return (
    <Box sx={{ ...rootstyle }}>
      <ButtonGroup
        variant={variant}
        size={size}
        disabled={disabled}
        {...restProps}
        sx={{
          '& .MuiButtonGroup-grouped:not(:first-of-type)': {
            marginLeft: 0,
          },
          ...btnGroupStyle,
        }}
      >
        {buttons.map((button, index) => (
          <Button
            key={index}
            variant={selectedButton === button.value ? 'contained' : variant}
            startIcon={button.startIcon}
            endIcon={button.endIcon}
            onClick={() => {
              onClick(button.value), setSelectedButton(button.value);
            }}
            sx={{
              backgroundColor:
                selectedButton === button.value
                  ? selectedBgColor
                  : variant === 'outlined'
                  ? 'transparent'
                  : unselectBgColor,
              color: selectedButton === button.value ? selectedColor : color,
              fontSize: fontSize,
              fontWeight: fontWeight,
              marginLeft: 0,
              '&:focus': {
                outline: 'none',
                boxShadow: 'none',
                border: 'none',
              },
              '&:hover': {
                borderColor: '#E9E9E9',
              },
              ...btnStyle,
            }}
          >
            {button.label}
          </Button>
        ))}
      </ButtonGroup>
    </Box>
  );
};

CustomButtonGroup.defaultProps = {
  variant: 'contained',
  disabled: false,
  color: '#fff',
  size: 'medium',
  fontSize: '',
  fontWeight: '',
  btnStyle: {},
  rootstyle: {},
  btnGroupStyle: {},
  buttons: [],
  selectedColor: '',
  unselectBgColor: '',
  selectedBgColor: '',
};

export default CustomButtonGroup;
