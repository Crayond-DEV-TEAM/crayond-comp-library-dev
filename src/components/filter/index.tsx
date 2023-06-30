import {
  ExpandLess,
  ExpandMore,
  Search as SearchIcon,
} from '@mui/icons-material';
import CloseIcon from '@mui/icons-material/Close';
import {
  Box,
  Checkbox,
  Chip,
  Divider,
  InputAdornment,
  Popover,
  SxProps,
  TextField,
  Typography,
} from '@mui/material';
import Collapse from '@mui/material/Collapse';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import React, { useState, useEffect } from 'react';
import FunnelIcon from '../../assets/funnelIcon';
import { BasicButtons } from '../button';
import { Label } from '../label';
import { FilterComponentProps } from './props';
import { styles } from './style';

export const CustomFilter: React.FC<FilterComponentProps> = ({
  icon,
  customData,
  buttons,
  rootStyle,
  filterButtonStyle,
  anchorOrigin,
  transformOrigin,
  filterTitle,
  filterTitleStyle,
  listContainerStyle,
  listIconStyle,
  subListContainerStyle,
  buttonContainerStyle,
  PopoverStyle,
  contentWrapStyle,
  searchBarStyle,
  showSearchBar,
  chipStyle,
  labelStyle,
  listItemStyle,
  maxLabelShow,
  visibleSubList,
  moreLabelStyle,
  titleWrapperStyle,
  btnWrapperStyle,
  selectedchipConStyle,
  searchPlaceHolder,
  searchVariant,
  searchbarSize,
  checkboxStyle,
  chipVariant,
}) => {
  const [anchorEl, setAnchorEl] = useState<HTMLButtonElement | null>(null);
  const [filteredCustomData, setFilteredCustomData] = useState([...customData]);
  const [previousCustomData, setPreviousCustomData] =
    useState(filteredCustomData);
  const [unfilteredCustomData, setUnfilteredCustomData] = useState([
    ...customData,
  ]);

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? 'simple-popover' : undefined;

  const onHandleClick = (index: number) => {
    setFilteredCustomData((prevCustomData) => {
      const updatedCustomData = [...prevCustomData];
      updatedCustomData[index].selected = !updatedCustomData[index].selected;
      return updatedCustomData;
    });
  };

  const handleSearch = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
    index: number
  ) => {
    const input = event.target.value ? event.target.value : '';
    setFilteredCustomData((prevCustomData) => {
      const filteredData = [...prevCustomData];
      const unfilteredItem = unfilteredCustomData[index];
      const filteredSubList = unfilteredItem.subList?.filter((subItem) =>
        subItem.list.toLowerCase().includes(input.toLowerCase())
      );

      const updatedSubList = filteredSubList?.map((subItem) => {
        const existingItem = unfilteredItem.subList?.find(
          (item) => item.list === subItem.list
        );
        return {
          ...subItem,
          selected: existingItem?.selected ?? false,
        };
      });

      filteredData[index] = {
        ...unfilteredItem,
        selected: true,
        subList: updatedSubList,
      };

      return filteredData;
    });
  };

  const getUpdateUnfiltered = (data: any) => {
    setUnfilteredCustomData((prevCustomData) => {
      const updatedCustomData = prevCustomData.map((item) => {
        if (item.subList) {
          const updatedSubList = item.subList.map((subItem) => {
            if (subItem.list === data.list) {
              return { ...subItem, ...data };
            }
            return subItem;
          });
          return { ...item, subList: updatedSubList };
        }
        return item;
      });
      return updatedCustomData;
    });
  };

  const getSelectedSubList = (index: number, subIndex: number) => {
    setFilteredCustomData((prevCustomData) => {
      const updatedCustomData = [...prevCustomData];
      const subList = [...(updatedCustomData[index]?.subList ?? [])];
      const boolVal = subList[subIndex].selected;
      subList[subIndex] = {
        ...subList[subIndex],
        selected: !boolVal,
      };
      updatedCustomData[index] = {
        ...updatedCustomData[index],
        subList: subList,
      };
      getUpdateUnfiltered(subList[subIndex]);
      return updatedCustomData;
    });
  };

  const getUnselectList = (list: string) => {
    setFilteredCustomData((prevCustomData) => {
      const updatedCustomData = [...prevCustomData];
      updatedCustomData.forEach((item) => {
        const subListItem = item.subList.find(
          (subItem) => subItem.list === list
        );
        if (subListItem) {
          subListItem.selected = false;
        }
      });
      return updatedCustomData;
    });
  };

  const getResultData = (item: any) => {
    item.onClick(unfilteredCustomData, getClearState, setAnchorEl);
  };

  const getClearState = () => {
    setPreviousCustomData((prevCustomData) => {
      const updatedCustomData = prevCustomData.map((item) => ({
        ...item,
        selected: false,
      }));
      return updatedCustomData;
    });
  };

  useEffect(() => {
    if (previousCustomData !== null) {
      setFilteredCustomData(previousCustomData);
      setUnfilteredCustomData(previousCustomData);
    }
  }, [previousCustomData]);

  return (
    <Box sx={{ ...rootStyle }}>
      <BasicButtons
        aria-describedby={id}
        variant="contained"
        onClick={handleClick}
        inLineStyles={{
          ...styles.filterButtonStyle,
          ...filterButtonStyle,
        }}
      >
        {icon}
      </BasicButtons>
      <Popover
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'left',
          ...anchorOrigin,
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'left',
          ...transformOrigin,
        }}
        sx={{
          ...styles.PopoverStyle,
          '& .MuiPopover-paper': {
            marginLeft: open ? '-16px' : '0',
          },
          mt: 1,
          ...PopoverStyle,
        }}
      >
        <Box sx={{ ...contentWrapStyle }}>
          <Box
            sx={{ ...styles.titleWrapperSx, ...titleWrapperStyle } as SxProps}
          >
            {filterTitle && (
              <Typography
                sx={{
                  ...styles.filterTitleStyle,
                  ...filterTitleStyle,
                }}
              >
                {filterTitle}
              </Typography>
            )}
          </Box>
          <List
            sx={{
              ...styles.listContainerStyle,
              ...listContainerStyle,
            }}
          >
            {filteredCustomData.map((item, index) => (
              <React.Fragment key={index}>
                <ListItemButton
                  disableRipple
                  onClick={() => onHandleClick(index)}
                  sx={{
                    ...styles.listItemStyle,
                    ...listItemStyle,
                  }}
                >
                  {item?.listIcon && (
                    <ListItemIcon sx={{ ...listIconStyle }}>
                      {item?.listIcon}
                    </ListItemIcon>
                  )}

                  <ListItemText
                    primary={item?.listName}
                    primaryTypographyProps={{
                      sx: { ...styles.listNameStyle, ...item?.listNameStyle },
                    }}
                  />
                  {item?.selected ? <ExpandLess /> : <ExpandMore />}
                </ListItemButton>
                <List disablePadding>
                  <Box
                    sx={{
                      ...styles.selectedchipConStyle,
                      ...selectedchipConStyle,
                    }}
                  >
                    {item?.subList
                      ?.filter((subItem) => subItem.selected)
                      .slice(0, maxLabelShow)
                      .map((subItem, subIndex) => (
                        <Label
                          key={subIndex}
                          label={
                            <span
                              style={{
                                display: 'flex',
                                alignItems: 'center',
                                padding: 0,
                              }}
                            >
                              {subItem.list}
                              <CloseIcon style={{ fontSize: '16px' }} />
                            </span>
                          }
                          bgColor={subItem?.LabelbgColor}
                          color={subItem?.LabelColor}
                          sx={{
                            fontSize: '10px',
                            ...labelStyle,
                            mr: 0.5,
                          }}
                          onClickFun={() => getUnselectList(subItem.list)}
                        />
                      ))}
                    {item?.subList?.filter((subItem) => subItem.selected)
                      .length > maxLabelShow && (
                      <Label
                        key="more"
                        label={
                          <span
                            style={{
                              display: 'flex',
                              alignItems: 'center',
                              borderRadius: '6px',
                              color: '#666666',
                            }}
                          >
                            {`+${
                              item?.subList?.filter(
                                (subItem) => subItem.selected
                              ).length - maxLabelShow
                            } more`}
                          </span>
                        }
                        sx={{ ...styles.moreLabelStyle, ...moreLabelStyle }}
                      />
                    )}
                  </Box>
                  <Collapse in={item?.selected} timeout="auto" unmountOnExit>
                    {showSearchBar && (
                      <TextField
                        placeholder={searchPlaceHolder}
                        variant={searchVariant}
                        onChange={(event) => handleSearch(event, index)}
                        size={searchbarSize}
                        InputProps={{
                          startAdornment: (
                            <InputAdornment
                              position="start"
                              sx={{ alignSelf: 'center', width: '12px' }}
                            >
                              <SearchIcon fontSize="small" />
                            </InputAdornment>
                          ),
                        }}
                        sx={{
                          ...styles.searchBarStyle,
                          ...searchBarStyle,
                        }}
                      />
                    )}
                    {item?.subList?.map((subItem, subIndex) => {
                      if (visibleSubList && subIndex < visibleSubList) {
                        return (
                          <ListItemButton
                            disableRipple
                            key={subIndex}
                            sx={{
                              ...styles.subListContainerStyle,
                              ...subListContainerStyle,
                            }}
                          >
                            {item?.subListType === 'checkbox' && (
                              <>
                                <Checkbox
                                  disableRipple
                                  onClick={() =>
                                    getSelectedSubList(index, subIndex)
                                  }
                                  checked={subItem.selected}
                                  sx={
                                    {
                                      ...styles.checkboxStyle,
                                      ...checkboxStyle,
                                    } as SxProps
                                  }
                                />

                                <ListItemText
                                  primary={subItem.list}
                                  primaryTypographyProps={{
                                    sx: {
                                      fontSize: '12px',
                                      color: '#3B3B3B',
                                      ...subItem?.listStyle,
                                    },
                                  }}
                                />
                              </>
                            )}
                            {item.subListType === 'chip' && (
                              <Chip
                                label={subItem.list}
                                onClick={() =>
                                  getSelectedSubList(index, subIndex)
                                }
                                color={subItem.selected ? 'primary' : 'default'}
                                variant={chipVariant}
                                sx={{ display: 'flex', ...chipStyle }}
                              />
                            )}
                          </ListItemButton>
                        );
                      }
                    })}
                    {visibleSubList &&
                      item?.subList?.length > visibleSubList && (
                        <span
                          style={{ fontSize: '12px', color: '#3B3B3B' }}
                        >{`...${
                          item?.subList.length - visibleSubList
                        } more`}</span>
                      )}
                  </Collapse>
                </List>
                {index !== filteredCustomData.length - 1 && <Divider />}
              </React.Fragment>
            ))}
          </List>
          <Box
            sx={
              {
                ...styles.buttonContainerStyle,
                ...buttonContainerStyle,
              } as SxProps
            }
          >
            <Box sx={{ ...styles.btnWrapper, ...btnWrapperStyle }}>
              {buttons.map((item: any, index: number) => (
                <BasicButtons
                  key={index}
                  onClick={() => {
                    setFilteredCustomData(() => {
                      const updatedCustomData = unfilteredCustomData.map(
                        (item) => ({
                          ...item,
                          selected: false,
                        })
                      );
                      getResultData(item);
                      return updatedCustomData;
                    });
                  }}
                  inLineStyles={{ ...styles.btnstyle, ...item?.btnstyle }}
                >
                  {item.label}
                </BasicButtons>
              ))}
            </Box>
          </Box>
        </Box>
      </Popover>
    </Box>
  );
};

CustomFilter.defaultProps = {
  icon: <FunnelIcon />,
  customData: [],
  buttons: [],
  rootStyle: {},
  filterButtonStyle: {},
  anchorOrigin: { vertical: 'bottom', horizontal: 'left' },
  transformOrigin: { vertical: 'top', horizontal: 'left' },
  filterTitle: '',
  filterTitleStyle: {},
  listContainerStyle: {},
  listIconStyle: {},
  subListContainerStyle: {},
  buttonContainerStyle: {},
  PopoverStyle: {},
  contentWrapStyle: {},
  searchBarStyle: {},
  showSearchBar: true,
  chipStyle: {},
  labelStyle: {},
  listItemStyle: {},
  maxLabelShow: 2,
  visibleSubList: 3,
  moreLabelStyle: {},
  titleWrapperStyle: {},
  btnWrapperStyle: {},
  selectedchipConStyle: {},
  searchPlaceHolder: '',
  searchVariant: 'outlined',
  searchbarSize: 'small',
  checkboxStyle: {},
  chipVariant: 'outlined',
};
