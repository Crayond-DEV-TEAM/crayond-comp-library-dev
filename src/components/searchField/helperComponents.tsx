import { Box, Divider, Stack, SxProps, Typography } from '@mui/material';
import {
  Category1Props,
  ControlsProps,
  RecentSearchProps,
  SuggestionProp,
} from './props';
import ClockIcon from '../../assets/clockIcon';

export const SuggestionRecentSearch = (props: SuggestionProp) => {
  const { searchValue, option } = props;

  const filteredRows = option.filter((row: any) => {
    return row.label.toLowerCase().includes(searchValue?.toLowerCase());
  });
  return (
    <>
      {option?.map((item: any) => (
        <Stack
          direction={'row'}
          columnGap={'8px'}
          rowGap={'24px'}
          p={'0 14px'}
          marginBottom={'16px'}
        >
          <>
            <Box>
              <ClockIcon />
            </Box>
            <Box>
              <Typography color={'#262626'} fontSize={'14px'} fontWeight={600}>
                {item?.label}
              </Typography>
            </Box>
          </>
        </Stack>
      ))}
    </>
  );
};

export const FoodCategory = (props: Category1Props) => {
  const { searchValue, option, handleCategoryData = () => {} } = props;

  const filteredRows = option.filter((row: any) => {
    return row.label.toLowerCase().includes(searchValue?.toLowerCase());
  });

  return (
    <>
      <Stack direction={'row'} overflow={'scroll'}>
        {option?.map((val: any) => (
          <Stack
            {...props}
            sx={{
              p: '14px',
              cursor: 'pointer',
            }}
            direction={'column'}
            onClick={() => handleCategoryData(val)}
          >
            <img
              src={val?.url}
              alt=" "
              style={{
                width: '74px',
                height: '74px',
                borderRadius: '50%',
              }}
            />
            <Typography
              color={'#3B3B3B'}
              fontSize={'12px'}
              mt={'6px'}
              width={'74px'}
              className="title1"
              textAlign={'center'}
            >
              {val?.label}
            </Typography>
          </Stack>
        ))}
      </Stack>
    </>
  );
};

export const EmployeeCategory = (props: Category1Props) => {
  const { searchValue, option, handleCategoryData = () => {} } = props;

  const filteredRows = option.filter((row: any) => {
    return row?.label?.toLowerCase()?.includes(searchValue?.toLowerCase());
  });
  return (
    <>
      {option?.map((val: any) => (
        <Stack
          {...props}
          sx={{
            p: '14px',
            cursor: 'pointer',
          }}
          direction={'row'}
          alignItems={'center'}
          onClick={() => handleCategoryData(val)}
        >
          <Box>
            <img
              src={val?.url}
              alt=" "
              style={{
                width: '40px',
                height: '40px',
                borderRadius: '4px',
              }}
            />
          </Box>
          <Box ml={'8px'}>
            <Typography
              color={'#3B3B3B'}
              fontSize={'12px'}
              fontWeight={600}
              className="title1"
            >
              {val?.label}
            </Typography>
            <Typography color={'#666666'} fontSize={'10px'} mt={'6px'}>
              {val?.label}
            </Typography>
          </Box>
        </Stack>
      ))}
    </>
  );
};

export const ControlSearch = (props: ControlsProps) => {
  const {
    navigateButtons,
    controlsRootStyles,
    controlsBgColor,
    controlsTextSize,
    controlsTextColor,
  } = props;
  return (
    <Stack
      sx={
        {
          ...controlsRootStyles,
          cursor: 'pointer',
          minHeight: '34px',
          padding: '9px',
          borderBottomRightRadius: '8px',
          borderBottomLeftRadius: '8px',
        } as SxProps
      }
      direction={'row'}
      alignItems={'center'}
      columnGap={'20px'}
      bgcolor={controlsBgColor}
    >
      {navigateButtons?.map((val: any) => (
        <Stack
          direction={'row'}
          alignItems={'center'}
          onClick={() => val?.onClick()}
        >
          {val?.icon}
          <Typography
            ml={'6px'}
            color={controlsTextColor}
            fontSize={controlsTextSize}
          >
            {val?.navigateLabel}
          </Typography>
        </Stack>
      ))}
    </Stack>
  );
};

export const RecentSearch = (props: RecentSearchProps) => {
  const {
    recentVal,
    recentLabel,
    recentLabelTextColor,
    recentLabelFontSize,
    recentLabelStyle,
    recentSearchItemStyles,
    recentSearchItemTextColor,
    recentSearchItemBgcolor,
    recentSearchItemSize,
    handleRecentSearch=()=>{},
  } = props;

  return (
    <Stack
      style={{
        cursor: 'pointer',
        padding: '9px',
      }}
    >
      <Typography
        color={recentLabelTextColor}
        fontSize={recentLabelFontSize}
        sx={{ ...recentLabelStyle }}
      >
        {recentLabel}
      </Typography>
      <Stack direction={'row'} mt={'8px'} mb={1} overflow={'scroll'}>
        {recentVal?.map((val: any) => (
          <>
            <Typography
              fontWeight={600}
              padding={'4px 6px'}
              mr={'12px'}
              color={recentSearchItemTextColor}
              fontSize={recentSearchItemSize}
              bgcolor={recentSearchItemBgcolor}
              borderRadius={'8px'}
              minWidth={'fit-content'}
              sx={{ ...recentSearchItemStyles }}
              onClick={()=>handleRecentSearch(val)}
            >
              {val?.label}
            </Typography>
          </>
        ))}
      </Stack>
      <Divider sx={{ mt: '0px' }} />
    </Stack>
  );
};
