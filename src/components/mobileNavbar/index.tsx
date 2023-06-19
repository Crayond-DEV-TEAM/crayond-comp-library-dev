import { Box, Icon, Typography } from '@mui/material';
import React, { ReactElement } from 'react';

interface NavbarItem {
  icon: ReactElement;
  label?: string;
  url?: string;
}

interface MobileNavbarProps {
  items: NavbarItem[];
  onClick: Function;
  iconActiveColor?: string;
  iconInActiveColor?: string;
  labelActiveColor?: string;
  labelInActiveColor?: string;
  rootStyle?: object;
  listStyle?: object;
  iconStyle?: object;
  labelStyle?: object;
  variant: 'withLabel' | 'withoutLabel';
  itemStyle?: object;
}

const MobileNavbar: React.FC<MobileNavbarProps> = ({
  items,
  onClick,
  iconActiveColor,
  iconInActiveColor,
  labelActiveColor,
  labelInActiveColor,
  rootStyle,
  listStyle,
  iconStyle,
  labelStyle,
  variant = 'withLabel',
  itemStyle,
}) => {
  const [selectedItem, setSelectedItem] = React.useState<NavbarItem>();
  const getSelectedItem = (item: NavbarItem) => {
    setSelectedItem(item);
    onClick(item);
  };

  return (
    <Box
      sx={{
        p: 3,
        backgroundColor: 'white',
        borderRadius: '24px 24px 0px 0px',
        boxShadow: '0px -2px 23px #00000014',
        ...rootStyle,
      }}
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
              <Icon
                sx={{
                  backgroundColor:
                    selectedItem?.icon === item.icon
                      ? iconActiveColor
                      : iconInActiveColor,
                  borderRadius: '50%',
                  p: 0.8,
                  display: 'grid',
                  placeItems: 'center',
                  color:
                    selectedItem?.icon === item.icon
                      ? labelActiveColor
                      : labelInActiveColor,
                  ...iconStyle,
                }}
              >
                {item.icon}
              </Icon>
              {variant === 'withLabel' && item.label && (
                <Typography
                  sx={{
                    color:
                      selectedItem?.label === item.label
                        ? labelActiveColor
                        : labelInActiveColor,
                    fontSize: '12px',
                    textAlign: 'center',
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
    </Box>
  );
};

MobileNavbar.defaultProps = {
  items: [],
  onClick: () => {},
  iconActiveColor: '',
  iconInActiveColor: '',
  labelActiveColor: '',
  labelInActiveColor: '',
  rootStyle: {},
  listStyle: {},
  iconStyle: {},
  labelStyle: {},
  variant: 'withLabel',
  itemStyle: {},
};

export default MobileNavbar;
