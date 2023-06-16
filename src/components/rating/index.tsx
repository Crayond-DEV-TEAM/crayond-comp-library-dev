import React, { useState } from 'react';
import Rating from '@mui/material/Rating';
import { Box, Typography } from '@mui/material';

interface RadioGroupRatingProps {
  customIcons?: {
    SelectIcon: React.ReactElement;
    unSelectIcon: React.ReactElement;
    label: string;
    value: number;
  }[];
  styledRating?: {
    filled: React.ReactElement;
    unFilled: React.ReactElement;
    startValue: number;
    remark: string;
  }[];
  variant: 'star' | 'emoji';
  remarkStyle?: object;
  selectedLabelStyle?: object;
  emojiContainerStyle?: object;
  onHover?: (index: number) => void;
  onClick?: (index: number) => void;
}

const CustomRating: React.FC<RadioGroupRatingProps> = ({
  customIcons,
  variant,
  styledRating,
  remarkStyle,
  selectedLabelStyle,
  emojiContainerStyle,
  onHover,
  onClick,
}) => {
  const maxRatingValue = customIcons?.length || 0;
  const [customIconSet, setCustomIconSet] = useState(customIcons || []);
  const [selectedLabel, setSelectedLabel] = useState('');

  const handleIconHover = (index: number) => {
    if (onHover) {
      onHover(index);
    }
  };

  const handleIconClick = (index: number) => {
    if (onClick) {
      onClick(index);
    }
    const updatedIconSet = customIconSet.map((item, i) => {
      if (i === index) {
        return { ...item, value: 1 };
      } else {
        return { ...item, value: 0 };
      }
    });
    setSelectedLabel(updatedIconSet[index].label);
    setCustomIconSet(updatedIconSet);
  };

  return (
    <>
      {variant === 'emoji' ? (
        <>
          <Box sx={{ display: 'flex', gap: 3, justifyContent: 'center', ...emojiContainerStyle }}>
            {customIconSet?.map((item, index) => (
              <Box
                key={index}
                onClick={() => handleIconClick(index)}
                onMouseEnter={() => handleIconHover(index)}
                onMouseLeave={() => handleIconHover(-1)}
              >
                <div>{item.value === 0 ? item.SelectIcon : item.unSelectIcon}</div>
              </Box>
            ))}
          </Box>
          <Box
            sx={{
              fontSize: '20px',
              fontWeight: 600,
              textAlign: 'center',
              mt: 3,
              ...selectedLabelStyle,
            }}
          >
            {selectedLabel}
          </Box>
        </>
      ) : (
        <>
          {styledRating?.map((item) => (
            <Box sx={{ display: 'flex', gap: 1 }}>
              <Rating
                name="customized-color"
                defaultValue={item.startValue}
                precision={0.5}
                icon={item.filled}
                emptyIcon={item.unFilled}
                readOnly
              />
              <Typography sx={{ color: '#98A0AC', fontSize: '12px', ...remarkStyle }}>
                {item.remark}
              </Typography>
            </Box>
          ))}
        </>
      )}
    </>
  );
};

export default CustomRating;
