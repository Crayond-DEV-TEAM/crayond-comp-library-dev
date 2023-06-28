import React, { useState } from 'react';
import Rating from '@mui/material/Rating';
import { Box, Typography } from '@mui/material';
import { RadioGroupRatingProps } from './props';

export const CustomRating: React.FC<RadioGroupRatingProps> = ({
  customIcons,
  variant,
  styledRating,
  remarkStyle,
  selectedLabelStyle,
  emojiContainerStyle,
  onMouseEnter,
  onMouseLeave,
  onClick,
  isReadOnly,
  isLabelVisible,
  children,
  childrenStyle,
  precision,
}) => {
  const [customIconSet, setCustomIconSet] = useState(customIcons || []);
  const [styledIconSet, setStyledIconSet] = useState(styledRating || []);
  const [selectedLabel, setSelectedLabel] = useState('');

  const handleIconHover = (index: number) => {
    if (onMouseEnter && onMouseLeave) {
      onMouseEnter(index);
      // onMouseLeave(1);
    }
  };

  const handleIconClick = (index: number) => {
    const updatedIconSet = customIconSet.map((item, i) => {
      if (i === index) {
        return { ...item, value: 1 };
      } else {
        return { ...item, value: 0 };
      }
    });
    setSelectedLabel(updatedIconSet[index].label);
    setCustomIconSet(updatedIconSet);
    if (onClick) {
      onClick(updatedIconSet[index]);
    }
  };
  const handleRatingChange = (newValue: number | null, index: number) => {
    if (newValue !== null) {
      const updatedStyledIconSet = styledIconSet?.map((item, i) => {
        if (i === index) {
          return { ...item, starValue: newValue };
        } else {
          return { ...item };
        }
      });
      setStyledIconSet(updatedStyledIconSet);
      if (onClick) {
        onClick(updatedStyledIconSet[index]);
      }
    }
  };

  return (
    <>
      {variant === 'emoji' ? (
        <>
          <Box
            sx={{
              display: 'flex',
              gap: 3,
              justifyContent: 'center',
              ...emojiContainerStyle,
            }}
          >
            {customIconSet?.map((item, index) => (
              <Box
                key={index}
                onClick={() => handleIconClick(index)}
                onMouseEnter={() => handleIconHover(index)}
                onMouseLeave={() => handleIconHover(-1)}
                sx={{
                  cursor: 'pointer',
                  transition: 'transform 0.2s',
                  '&:hover': {
                    transform: 'scale(1.2)',
                  },
                }}
              >
                <div>
                  {item.value === 0 ? item.SelectIcon : item.unSelectIcon}
                </div>
              </Box>
            ))}
          </Box>
          {isLabelVisible && (
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
          )}
          <Box sx={{ ...childrenStyle }}>{children}</Box>
        </>
      ) : (
        <>
          {styledIconSet?.map((item, index) => (
            <Box key={index} sx={{ display: 'flex', gap: 1 }}>
              <Rating
                name="customized-color"
                defaultValue={item.starValue}
                precision={precision}
                icon={item.filled}
                emptyIcon={item.unFilled}
                readOnly={isReadOnly}
                onChange={(e, newValue) => handleRatingChange(newValue, index)}
                onMouseEnter={() => handleIconHover(index)}
                onMouseLeave={() => handleIconHover(-1)}
                max={item.maximumIcon}
              />
              {item.remark && (
                <Typography
                  key={index}
                  sx={{ color: '#98A0AC', fontSize: '12px', ...remarkStyle }}
                >
                  {'(' + item.starValue + '|' + item.remark + ')'}
                </Typography>
              )}
            </Box>
          ))}
          {children && <Box sx={{ ...childrenStyle }}>{children}</Box>}
        </>
      )}
    </>
  );
};

CustomRating.defaultProps = {
  customIcons: [],
  variant: 'emoji',
  styledRating: [],
  remarkStyle: {},
  selectedLabelStyle: {},
  emojiContainerStyle: {},
  onMouseEnter: () => {},
  onMouseLeave: () => {},
  onClick: () => {},
  isReadOnly: false,
  isLabelVisible: true,
  children: <></>,
  childrenStyle: {},
  precision: 0.5,
};
