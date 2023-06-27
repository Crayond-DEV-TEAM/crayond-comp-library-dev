import { Box, IconButton, Paper, Typography } from '@mui/material';
import React, { useState } from 'react';
import { MobileNavbarProps, NavbarItem } from './props';

export const MobileNavbar: React.FC<MobileNavbarProps> = ({
  items,
  onClick,
  iconActiveBgColor,
  iconInActiveBgColor,
  labelActiveColor,
  labelInActiveColor,
  rootStyle,
  listStyle,
  iconStyle,
  labelStyle,
  variant,
  itemStyle,
  inActiveFontWeight,
  activeFontWeight,
  isDisableRipple,
  elevation,
  iconHeightPng,
  iconWidthPng,
}) => {
  const [selectedItem, setSelectedItem] = useState<NavbarItem | undefined>(
    undefined
  );

  const getSelectedItem = (item: NavbarItem) => {
    setSelectedItem(item);
    onClick(item);
  };

  return (
    <Box>
      <Paper
        sx={{
          p: 1.9,
          backgroundColor: '#ebdcdc',
          borderRadius: '24px 24px 0px 0px',
          ...rootStyle,
        }}
        elevation={elevation}
      >
        <Box
          sx={{ display: 'flex', justifyContent: 'space-around', ...listStyle }}
        >
          {items.map((item, index) => (
            <Box key={index}>
              <Box
                onClick={() => getSelectedItem(item)}
                sx={{ display: 'grid', placeItems: 'center', ...itemStyle }}
              >
                <IconButton
                  disableRipple={isDisableRipple}
                  sx={{
                    '& svg': {
                      '& path': {
                        fill:
                          selectedItem?.icon === item.icon
                            ? item.iconSelectedColor
                            : item.iconUnSelectedColor,
                      },
                    },
                    backgroundColor:
                      selectedItem?.icon === item.icon
                        ? iconActiveBgColor
                        : iconInActiveBgColor,
                    p: 1.5,
                    display: 'grid',
                    placeItems: 'center',
                    '&:focus': {
                      outline: 'none',
                    },
                    ...iconStyle,
                  }}
                >
                  {typeof item.icon === 'string' ? (
                    <img
                      src={item.icon}
                      alt={item.label}
                      style={{ width: iconWidthPng, height: iconHeightPng }}
                    />
                  ) : (
                    item.icon
                  )}
                </IconButton>
                {variant === 'withLabel' && item.label && (
                  <Typography
                    sx={{
                      color:
                        selectedItem?.label === item.label
                          ? labelActiveColor
                          : labelInActiveColor,
                      fontSize: '12px',
                      textAlign: 'center',
                      fontWeight:
                        selectedItem?.label === item.label
                          ? activeFontWeight
                          : inActiveFontWeight,
                      ...labelStyle,
                    }}
                  >
                    {item.label}
                  </Typography>
                )}
              </Box>
            </Box>
          ))}
        </Box>
      </Paper>
    </Box>
  );
};

MobileNavbar.defaultProps = {
  items: [],
  onClick: () => {},
  iconActiveBgColor: '',
  iconInActiveBgColor: '',
  labelActiveColor: '',
  labelInActiveColor: '',
  rootStyle: {},
  listStyle: {},
  iconStyle: {},
  labelStyle: {},
  variant: 'withLabel',
  itemStyle: {},
  activeFontWeight: '',
  inActiveFontWeight: '',
  isDisableRipple: false,
  elevation: 1,
  iconWidthPng: '',
  iconHeightPng: '',
};
