import React, { useState, useEffect } from 'react';
import {
  Box,
  Button,
  Checkbox,
  Chip,
  Divider,
  IconButton,
  InputAdornment,
  Popover,
  TextField,
  Typography,
} from '@mui/material';
import {
  ExpandLess,
  ExpandMore,
  Search as SearchIcon,
} from '@mui/icons-material';
import Collapse from '@mui/material/Collapse';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';

import FunnelIcon from '../../assets/funnelIcon';
import { Label } from '../label';
import { BasicButtons } from '../button';

import { FilterComponentProps } from './props';

const CustomFilter: React.FC<FilterComponentProps> = ({
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
}) => {
  const [anchorEl, setAnchorEl] = useState<HTMLButtonElement | null>(null);
  const [filteredCustomData, setFilteredCustomData] = useState([...customData]);
  const [unfilteredCustomData, setUnfilteredCustomData] = useState([
    ...customData,
  ]);

  const restoreInitialSubList = (index: number) => {
    const previousValue = customData[index]?.subList;
    setFilteredCustomData((prevCustomData) => {
      const updatedCustomData = [...prevCustomData];
      updatedCustomData[index].subList = previousValue;
      return updatedCustomData;
    });
  };

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
    const input = event.target.value;

    setFilteredCustomData((prevCustomData) => {
      const filteredData = [...prevCustomData];
      const unfilteredItem = unfilteredCustomData[index];
      const filteredSubList = unfilteredItem.subList?.filter((subItem) =>
        subItem.list.toLowerCase().includes(input.toLowerCase())
      );

      // Preserve the selected state of the filtered subList items
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
        subList: updatedSubList,
      };

      return filteredData;
    });
  };

  useEffect(() => {
    // Update unfiltered data when customData prop changes
    setUnfilteredCustomData(customData);
    setFilteredCustomData(customData);
  }, [customData]);

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
      return updatedCustomData;
    });
  };

  return (
    <Box sx={{ ...rootStyle }}>
      <BasicButtons
        aria-describedby={id}
        variant="contained"
        onClick={handleClick}
        inLineStyles={{
          p: '10px',
          height: '36px',
          width: '100px',
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
          '& .MuiPopover-paper': {
            marginLeft: open ? '-16px' : '0',
          },
          mt: 1,
          ...PopoverStyle,
        }}
        disableRestoreFocus
      >
        <Box sx={{ p: 1, ...contentWrapStyle }}>
          {filterTitle && (
            <Typography sx={{ ...filterTitleStyle }}>{filterTitle}</Typography>
          )}
          <List sx={{ ...listContainerStyle }}>
            {filteredCustomData.map((item, index) => (
              <React.Fragment key={index}>
                <ListItemButton
                  component="div"
                  onClick={() => onHandleClick(index)}
                >
                  {item?.listIcon && (
                    <ListItemIcon sx={{ ...listIconStyle }}>
                      {item?.listIcon}
                    </ListItemIcon>
                  )}

                  <ListItemText
                    primary={item?.listName}
                    sx={{ ...item?.listNameStyle }}
                  />
                  {item?.selected ? <ExpandLess /> : <ExpandMore />}
                </ListItemButton>
                <Collapse in={item?.selected} timeout="auto" unmountOnExit>
                  <List component="div" disablePadding>
                    <Box>
                      {item?.subList?.map(
                        (subItem, subIndex) =>
                          subItem.selected && (
                            <Label
                              key={subIndex}
                              label={subItem.list}
                              bgColor={subItem?.LabelbgColor}
                              color={subItem?.LabelColor}
                              sx={{ mx: 0.5 }}
                              onClickFun={() =>
                                getSelectedSubList(index, subIndex)
                              }
                            />
                          )
                      )}
                    </Box>
                    {showSearchBar && (
                      <TextField
                        placeholder="Search"
                        variant="outlined"
                        onChange={(event) => handleSearch(event, index)}
                        InputProps={{
                          startAdornment: (
                            <InputAdornment position="start">
                              <IconButton edge="start" aria-label="search">
                                <SearchIcon />
                              </IconButton>
                            </InputAdornment>
                          ),
                        }}
                        sx={{ p: 2, ...searchBarStyle }}
                      />
                    )}
                    {item?.subList?.map((subItem, subIndex) => (
                      <ListItemButton
                        key={subIndex}
                        sx={{ ...subListContainerStyle }}
                      >
                        {item?.subListType === 'checkbox' && (
                          <>
                            <ListItemIcon>
                              <Checkbox
                                onClick={() =>
                                  getSelectedSubList(index, subIndex)
                                }
                                checked={subItem.selected}
                              />
                            </ListItemIcon>
                            <ListItemText
                              primary={subItem.list}
                              sx={{ ...subItem?.listStyle }}
                            />
                          </>
                        )}
                        {item.subListType === 'chip' && (
                          <Chip
                            label={subItem.list}
                            onClick={() => getSelectedSubList(index, subIndex)}
                            color={subItem.selected ? 'primary' : 'default'}
                            variant="outlined"
                            sx={{ display: 'flex', ...chipStyle }}
                          />
                        )}
                      </ListItemButton>
                    ))}
                  </List>
                </Collapse>
                <Divider />
              </React.Fragment>
            ))}
          </List>
          <Box
            sx={{
              display: 'flex',
              gap: 2,
              justifyContent: 'center',
              ...buttonContainerStyle,
            }}
          >
            {buttons.map((item: any, index: number) => (
              <Button
                key={index}
                onClick={() =>
                  item.onClick(filteredCustomData, setFilteredCustomData)
                }
                sx={item?.btnstyle}
              >
                {item.label}
              </Button>
            ))}
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
};

export default CustomFilter;
