/* eslint-disable react/prop-types */
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Grid,
  IconButton,
  InputAdornment,
  Menu,
  MenuItem,
  TextField,
  Typography,
  Select,
} from '@mui/material';

import Box from '@mui/material/Box';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import SearchIcon from '@mui/icons-material/Search';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import { Calendar, momentLocalizer } from 'react-big-calendar';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import moment from 'moment';
import CloseIcon from '@mui/icons-material/Close';
import './customCalenderStyle.css';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import { customCalenderStyle } from './style';
import { ReactNode, useState } from 'react';

interface CalenderProps {
  CommonLeaves: string[];
  nationalLeaves: object[];
  eventsIcon: EventIcon[];
  calenderList: calenderLists[];
  eventsData: EventData[];
  select: number;
  eventValue: string;
  selectedCategory: string | null;
  searchCalendarList: string;
  eventCategories: EventCategory[];
  remainderOption: DayOption[];
  isEventModal: boolean;
  CustomEventComponent: CustomEventComponentProps;
  calenderCellackgroundColor: string;
  calendercellBackgroundColor: string;
  SearchCalenderList: string;
  styleProps?: Partial<DefaultStyleProps>;
  CustomEvents: boolean;
  nationalLeaveBgColor: string;
  commonLeaveBgcolor: string;
  calenderActiveBgColor: string;
  calenderActiveColor: string;
  customHeadStyle: object;
  CalenderStyle:object;
  AddEventValue: string;
  eventTitleHeadStyle:object;
  onEventEdit: (data: EventData) => void;
  OnEventChange: (event: React.ChangeEvent<HTMLSelectElement>) => void;
  onCalenderListClick: (index: number) => void;
  OnEventAdd: (data: any) => void;
  onCalenderSearch: (e: onCalenderSearchs) => void;
  onEventsDelete: (data: EventData) => void;
  customCalenderListSx: object;
  addCalenderList: () => void;
  onDeleteCalenderList: (data: calenderLists, index: number) => void;
  onCalendarSearch: () => void;
  onEventsEdit:(data:EventData)=>void;
  onCalenderListSearch: (e: CalendarListSearchProps) => void;
  onEditCalenderList: (data: calenderLists, index: number) => void;
  onCustomizeEvent: (data: CustomizeEventProps) => void;
}

interface calenderLists {
  calenderTitle:string;
}

interface EventIcon {
  icon: ReactNode;
  onClick: (val:any,index:any) => void;
}

interface EventCategory {
  name: string;
  color: string;
}

interface DayOption {
  value: string;
  label: string;
}

interface CustomEventComponentProps {
  children: React.ReactNode;
}

interface LeaveEvent {
  title: string;
  start: Date;
  end: Date;
}

interface EventCategory {
  name: string;
  color: string;
}

interface EventData {
  id: string|number;
  title:string;
  allDay: boolean;
  start: string | null;
  end: string | null;
  startTime: string;
  endTime: string;
  deletable: boolean;
  eventRemaindTime: string;
  eventRemind: string;
}

interface DefaultStyleProps {
  layoutBorderStyle: {
    borderColor: string;
    [key: string]: any;
  };
  beforeMonthStyle: {
    backgroundColor: string;
    [key: string]: any;
  };
  todayDateStyle: {
    backgroundColor: string;
    [key: string]: any;
  };
  addEventStyle?: {
    color: string;
    [key: string]: any;
  };
  tabStyle: {
    backgroundColor: string;
    color: string;
    borderColor: string;
    fontSize: string;
    fontWeight: string;
    [key: string]: any;
  };
  headStyle: {
    color: string;
    fontSize: string;
    fontWeight: string;
    [key: string]: any;
  };
  fontFamily: {
    fontFamily: string;
    [key: string]: any;
  };
}
interface CalendarListSearchProps {
value: string | any
}

interface onCalenderSearchs {
  value: string; // Specify the type of the `value` parameter
}

interface CustomizeEventProps {
  start: Date; // Specify the type of the `start` property
  end: Date; // Specify the type of the `end` property
}

export function CustomCalender(props: CalenderProps) {
  const {
    calenderList = [],
    eventsData = [],
    CommonLeaves = [],
    nationalLeaves = [],
    eventCategories = [],
    select = '',
    AddEventValue = '',
    SearchCalenderList = '',
    onCalenderListClick = () => false,
    onCalenderListSearch = () => false,
    customCalenderListSx = {},
    onCalenderSearch = () => false,
    addCalenderList = () => false,
    onDeleteCalenderList = () => false,
    onEditCalenderList = () => false,
    OnEventAdd = () => false,
    onEventsEdit=()=>false,
    onEventsDelete=()=>false,
    isEventModal = true,
    onCustomizeEvent = () => false,
    remainderOption = [],
    nationalLeaveBgColor = 'red',
    commonLeaveBgcolor = '#FAFAFA',
    styleProps={},
    eventTitleHeadStyle={},
    customHeadStyle = {},
    CalenderStyle={},
    calenderActiveBgColor = '#EFEEFB',
    calenderActiveColor = '#665CD7',
  } = props;

  const localizer = momentLocalizer(moment);
  const [anchorEl, setAnchorEl] = useState(null);
  const [eventColors, setEventColors] = useState<{ [key: string]: string }>({});
  const [openModal, setOpenModal] = useState(false);
  const [modalTitle, setModalTitle] = useState('');
  const [selectedPeriod, setSelectedPeriod] = useState('AM');
  const [selectedPeriodPm, setSelectedPeriodPm] = useState('PM');
  const [selectedDay, setSelectedDay] = useState(remainderOption?.[0]?.value);
  const [startTime, setStartTime] = useState(moment().format('HH:mm'));
  const [endTime, setEndTime] = useState('00:00');
  const [eventRemainder, setEventRemainder] = useState('0');
  const [openTime, setOpenTime] = useState(true);
  const [endTimeModal, setEndTimeModal] = useState(true);
  const [selectedRange, setSelectedRange] = useState({
    start: null,
    end: null,
  });
  const open = Boolean(anchorEl);
 
  
  const [selectedCategory, setSelectedCategory] = useState(
    eventCategories?.[0]?.name
  );

  const handleClick = (e: any) => {
    setAnchorEl(e.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  // Onchange For Event
  const OnEventChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedCategory(event.target.value);
  };

  // Change  Event Remainder
  const onDayChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedDay(event.target.value);
  };

  const getEventCount = (calendarTitle: string): number => {
    const count = eventsData.filter((event: any) => event.type === calendarTitle).length;
    return count;
  };

 // Open Dialog to Handle Events
  const handleSelect = ({ start, end }: any) => {
    setSelectedRange({ start, end });
    if (isEventModal) {
      setOpenModal(true);
    } else {
      onCustomizeEvent({ start, end });
    }
  };

  // Fint the  National Leave
  const eventsleave: LeaveEvent[] = nationalLeaves.map((leave: any) => ({
    title: leave.title,
    start: new Date(leave.date),
    end: new Date(leave.date),
  }));

  // Getting all Events Access
  const allEvents = [...eventsData, ...eventsleave];

  // Event Customize Component
  const EventComponent = ({ event }: any) => {
    const eventColor = eventColors[event.title] || '';
    const isLeaveEvent = eventsleave.some(
      (leaveEvent) => leaveEvent.title === event.title
    );
    if (isLeaveEvent) {
      return <Box sx={{...customCalenderStyle.eventTitleHeadSx,...eventTitleHeadStyle  }}>{event?.title}</Box>;
    } else {
      return (
        <Box sx={{...customCalenderStyle.eventListSx, backgroundColor: eventColor,}}>
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <Typography sx={{ padding: '0px 8px',fontSize:'12px',fontWeight:'500' }}>{event.title}</Typography>
            {/* Display the time only if it is not an all-day event */}
            {!event.allDay && (
              <Box sx={{...customCalenderStyle?.overAllEventSx}}>
               <Typography sx={{fontSize:'12px',fontWeight:'500',color:'#929292'}}>
               {event?.startTime}
               {selectedPeriod}
             </Typography>
                </Box>
            )}
          </Box>
          <Box sx={{...customCalenderStyle.customEventIconSx,}}>
          <Box >
                    <IconButton
                      onClick={(e)=>handleEventEdits(e)}
                      size="small"
                      color="inherit"
                      aria-label="delete event"
                      disableRipple
                      sx={{ ...customCalenderStyle.eventIconAddSx }}
                    >
                      <EditIcon sx={{...customCalenderStyle.eventIcons}}/>
                    </IconButton>
                  </Box>

                  <Box  >
                    <IconButton
                      onClick={(e)=>handleEventDelete(e)}
                      size="small"
                      color="inherit"
                      aria-label="delete event"
                      disableRipple
                      sx={{ ...customCalenderStyle.eventIconAddSx }}
                    >
                      <DeleteIcon sx={{...customCalenderStyle.eventIcons}}/>
                    </IconButton>
                  </Box>
               
          </Box>
{/* 
          <Box sx={{...customCalenderStyle.customEventIconSx,}}>
            {eventsIcon &&
              eventsIcon?.map((val, index) => {
                return (
                  <Box key={index} >
                    <IconButton
                      onClick={()=>val?.onClick(val,index)}
                      size="small"
                      color="inherit"
                      aria-label="delete event"
                      sx={{ ...customCalenderStyle.eventIconAddSx }}
                    >
                      {val?.icon}
                    </IconButton>
                  </Box>
                );
              })}
          </Box> */}
        </Box>
      );
    }
  };

  // On Event change
  const onAddEvent = () => {
    const newEvent = {
      id:'',
      title: modalTitle,
      allDay: false,
      start: selectedRange.start,
      end: selectedRange.end,
      startTime: startTime,
      endTime: endTime,
      deletable: true,
      eventRemaindTime: eventRemainder,
      eventRemind: selectedDay,
    };
    OnEventAdd(newEvent);
    // setEventsData((prevState): any => [...prevState, newEvent]);
    const color = selectedCategory && eventCategories.find((category: any) => category.name === selectedCategory)?.color;
    setEventColors((prevEventColors) => ({ ...prevEventColors,[AddEventValue]: color || '',}));
    setModalTitle('')
    setEventRemainder('0')
    setOpenTime(true)
    setStartTime(moment().format('HH:mm'))
    setEndTime('00:00')
    setEndTimeModal(true)
    setSelectedDay(remainderOption?.[0]?.value)
    setOpenModal(false);
  };

  // Event Fetch
  eventsData.forEach((event: any) => {
    let color = '#FAFAFA';
    if (selectedCategory) {
      const category = eventCategories.find(
        (category: any) => category.name === selectedCategory
      );
      color = category ? category.color : '#FAFAFA';
    }
    eventColors[event.title] = eventColors[event.title] || color;
  });

  const dialogClose =()=>{
    setEventRemainder('0')
    setOpenTime(true)
    setModalTitle('')
    setStartTime(moment().format('HH:mm'))
    setEndTime('00:00')
    setEndTimeModal(true)
    setSelectedDay(remainderOption?.[0]?.value)
    setOpenModal(false)
  }

  // Common Leave Days Index
  const CommonLeaveDays: any = {
    sunday: 0,
    monday: 1,
    tuesday: 2,
    wednesday: 3,
    thursday: 4,
    friday: 5,
    saturday:6,
  };

  // Date and day Identify and Changes
  const dayPropGetter = (date: Date) => {
    const dayOfWeek = date.getDay();

    {/* Common Leaves */}
    const matchedWeekday = CommonLeaves.find(
      (weekday) => dayOfWeek === CommonLeaveDays[weekday]
    );
    if (matchedWeekday) {
      return {
        className: 'disabled-day',
        style: {
          background: commonLeaveBgcolor,
        },
      };
    }

    {/* National Leaves */}
    const matchedLeave = nationalLeaves.find(
      (leave: any) =>
        date.toDateString() === new Date(leave.date).toDateString()
    );

    if (matchedLeave) {
      return {
        className: 'disabled-day',
        style: {
          backgroundColor: nationalLeaveBgColor,
        },
      };
    }
    return {};
  };

  // Handle The Perdiod Change
  const handlePeriodChange = (e: any) => {
    setSelectedPeriod(e.target.value);
  };

  const handlePeriodChangePm = (e: any) => {
    setSelectedPeriodPm(e.target.value);
  };

  // Styled Props for Calender Style
  const defaultStyleProps = {
    layoutBorderStyle: {
      borderColor: '#000',
      ...(styleProps?.layoutBorderStyle??{}),
    },
    beforeMonthStyle: {
      backgroundColor: '#000',
      ...(styleProps?.beforeMonthStyle??{}),
    },
    todayDateStyle: {
      backgroundColor: 'red',
      ...(styleProps?.todayDateStyle??{}),
    },
    addEventStyle: {
      color: 'red',
      ...(styleProps?.addEventStyle??{}),
    },
    tabStyle: {
      backgroundColor: '#665cd7',
      color: '#fff',
      borderColor: '##665cd7',
      fontSize: '14px',
      fontWeight: 600,
      ...(styleProps?.tabStyle??{}),
    },
    headStyle: {
      color: '#000',
      fontSize: '14px',
      fontWeight: '500',
      ...(styleProps?.headStyle??{}),
    },
    fontFamily: {
      fontFamily: 'Poppins, sans-serif',
      ...(styleProps?.fontFamily??{}),
    },
  };

  // Can Control the Inline style For Calender
  const inlineStyles = {
    '--date-cell-borderColumn': `1px solid ${defaultStyleProps?.layoutBorderStyle?.borderColor} `,
    '--date-cell-borderRow': `1px solid ${defaultStyleProps?.layoutBorderStyle?.borderColor}`,
    '--date-borderOverallCalender': `1px solid ${defaultStyleProps?.layoutBorderStyle?.borderColor}`,
    '--date-head-borderbottom': `1px solid ${defaultStyleProps?.layoutBorderStyle?.borderColor}`,
    '--date-head-borderRow': `1px solid ${defaultStyleProps?.layoutBorderStyle?.borderColor}`,
    '--date-beforeMonthsBgColor': `${defaultStyleProps?.beforeMonthStyle?.backgroundColor}`,
    '--date-todayDateBgcolor': `${defaultStyleProps?.todayDateStyle?.backgroundColor}`,
    '--date-addEventColor': `${defaultStyleProps?.addEventStyle?.color}`,
    '--date-TabBgColor': `${defaultStyleProps?.tabStyle?.backgroundColor}`,
    '--date-TabColor': `${defaultStyleProps?.tabStyle?.color}`,
    '--date-TabBgborder': `${defaultStyleProps?.tabStyle?.borderColor}`,
    '--date-tabFontSize': `${defaultStyleProps?.tabStyle?.fontSize}`,
    '--date-tabFontweight': `${defaultStyleProps?.tabStyle?.fontWeight}`,
    '--date-cell-labelColor': `${defaultStyleProps?.headStyle?.color}`,
    '--date-cell-labelfont': `${defaultStyleProps?.headStyle?.fontSize}`,
    '--date-cell-labelWeight': `${defaultStyleProps?.headStyle?.fontWeight}`,
    '--date-fontFamily': `${defaultStyleProps?.fontFamily?.fontFamily}`,
  } as React.CSSProperties;

  // Increase and decrease for Remaind  before
  const handleIncrease = () => {
    setEventRemainder((prevStartTime) => String(parseInt(prevStartTime) + 1));
  };

  const handleDecrease = () => {
    setEventRemainder((prevStartTime) => String(parseInt(prevStartTime) - 1));
  };

  // Events Edits
  const handleEventEdits = (event: any | null) => {
    if (event) {
        const newEvent = {
          id:'',
          title:modalTitle,
          allDay: false,
          start: selectedRange.start,
          end: selectedRange.end,
          startTime: startTime,
          endTime: endTime,
          deletable: true,
          eventRemaindTime: eventRemainder,
          eventRemind: selectedDay,
        }
        onEventsEdit(newEvent);
        setOpenModal(true);
    }
  };

  //Events Delete
  const handleEventDelete = (event: any | null) => {
    if (event) {
         const newEvent:EventData = {
          id: '',
          title:'',
          allDay: false,
          start: selectedRange.start,
          end: selectedRange.end,
          startTime: startTime,
          endTime: endTime,
          deletable: true,
          eventRemaindTime: eventRemainder,
          eventRemind: selectedDay,
        };
      onEventsDelete(newEvent);
      setOpenModal(false);
    }
  };
 

  return (
    <Box sx={{ ...customCalenderStyle.rootSx }}>
      <Box sx={{ ...customCalenderStyle.rootHeadSx }}>
        <Box sx={{ ...customCalenderStyle.calenderSx }}>
          <Typography sx={{ ...customCalenderStyle.headSx }}>
            Calendar
          </Typography>

          <IconButton sx={{ ...customHeadStyle, ...customCalenderStyle.addCalenderListSx }} onClick={addCalenderList} >
            <AddCircleIcon sx={{ fontSize: '30px' }} />
          </IconButton>
        </Box>
        <Box>
          <TextField
            placeholder="Search"
            sx={{ ...customCalenderStyle.textFieldSx,border: '1px solid #000',
            borderRadius: '8px', }}
            value={SearchCalenderList}
            onChange={(e) => onCalenderListSearch({ value: e.target.value })}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <SearchIcon 
                    sx={{...customCalenderStyle.searchIconStyle , }}
                  />
                </InputAdornment>
              ),
            }}
          />
        </Box>
      </Box>
      <Grid
        container
        display="flex"
        spacing={3}
        sx={{ p: '18px 0px !important' }}
      >
        {/* Calender Details */}
        <Grid item xs={12} sm={4} md={2} paddingTop={'20px'}>
          <Box sx={{ ...customCalenderStyle.searchBoxSx }}>
            <TextField
              placeholder="Search"
              sx={{
                ...customCalenderStyle.textFieldSx,
                
              }}
              value={SearchCalenderList}
              onChange={(e) => onCalenderSearch({ value: e.target.value })}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <SearchIcon sx={{ ...customCalenderStyle.searchIconSx }} />
                  </InputAdornment>
                ),
              }}
            />
            <Typography sx={{ ...customCalenderStyle.calenderHeaderSx }}>
              My Calender
            </Typography>
          </Box>

          <Box>
            {calenderList &&
              calenderList?.map((val: calenderLists, index: number) => {
                return (
                  <Box
                    key={index}
                    sx={{
                      ...customCalenderStyle?.calenderlistSx,
                      backgroundColor:
                        select === index
                          ? calenderActiveBgColor
                          : 'transparent',
                      padding: select === index ? '6px 20px' : '16px 20px',
                      ...customCalenderListSx,
                    }}
                    onClick={() => onCalenderListClick(index)}
                  >
                    <Box sx={{ ...customCalenderStyle?.totalCalenderSx }}>
                      <Typography
                        sx={{
                          ...customCalenderStyle.calenderTitle,
                          color:
                            select === index ? calenderActiveColor : '#3B3B3B',
                          fontWeight: select === index ? '600' : '400',
                        }}
                      >
                        {val?.calenderTitle}
                      </Typography>
                      <Box sx={{ ...customCalenderStyle.subSx }}>
                        {select === index && (
                          <>
                            <IconButton
                              disableRipple
                              onClick={handleClick}
                              sx={{ ...customCalenderStyle.moreSx }}
                              // onMouseOver={handleClick}
                            >
                              <MoreHorizIcon />
                            </IconButton>
                            <Menu
                              open={open}
                              anchorEl={anchorEl}
                              onClose={handleClose}
                              sx={{ ...customCalenderStyle.menuSx }}
                            >
                              <MenuItem
                                sx={{ justifyContent: 'space-between' }}
                              >
                                <Box
                                  onClick={() => onEditCalenderList(val, index)}
                                  sx={{ ...customCalenderStyle.editTextSx }}
                                >
                                  Edit
                                </Box>
                              </MenuItem>
                              <MenuItem
                                sx={{ justifyContent: 'space-between' }}
                              >
                                <Box
                                  onClick={() =>
                                    onDeleteCalenderList(val, index)
                                  }
                                  sx={{ ...customCalenderStyle.editTextSx }}
                                >
                                  Delete
                                </Box>
                              </MenuItem>
                            </Menu>
                          </>
                        )}
                        <Typography
                          sx={{
                            ...customCalenderStyle.countSx,
                            backgroundColor:
                              select === index ? '#CAC7F1' : '#EEEEEE',
                          }}
                        >
                          0{getEventCount(val?.calenderTitle)}
                        </Typography>
                      </Box>
                    </Box>
                  </Box>
                );
              })}
          </Box>
        </Grid>
        {/* Full Calender Details */}
        <Grid item xs={12} sm={8} md={10} padding={'0px!important'}>
          <Box sx={{ ...customCalenderStyle.FullCalendarSx }}>
            <div style={inlineStyles} className="myCustomHeight">
              <Calendar
                localizer={localizer}
                events={allEvents}
                startAccessor="start"
                endAccessor="end"
                selectable
                onSelectSlot={handleSelect}
                dayPropGetter={dayPropGetter}
                components={{
                  event: EventComponent,
                }}
                // showMore
                style={{ height: '100vh', width: '100%' ,...CalenderStyle}}
              />
            </div>
            <Dialog
              PaperProps={{sx: { ...customCalenderStyle.dialogRootSx },}}
              open={openModal}
            >
              <DialogTitle sx={{ ...customCalenderStyle.dialogHeaderSx }}>
                Add New Event
              </DialogTitle>
              <Box>
                <IconButton
                  sx={{ ...customCalenderStyle.closeSx }}
                  onClick={dialogClose}
                >
                  <CloseIcon />
                </IconButton>{' '}
              </Box>
              <DialogContent sx={{ ...customCalenderStyle.bodyContentSx }}>
                <Box sx={{ ...customCalenderStyle.eventtitle }}>
                  <TextField
                    placeholder="Add Event"
                    value={modalTitle}
                    onChange={(e) => setModalTitle(e.target.value)}
                    fullWidth
                    inputProps={{
                      style: { backgroundColor: '#fff',fontWeight:'500' },
                    }}
                  />
                </Box>
                <Box>
                  <Typography sx={{ ...customCalenderStyle.dialogTitle }}>
                    Select Event
                  </Typography>
                  <Select
                    sx={{
                      ...customCalenderStyle.eventSelect,
                      width: '100%',
                    }}
                    value={selectedCategory}
                    onChange={(event: any) => OnEventChange(event)}
                    IconComponent={KeyboardArrowUpIcon}
                    defaultValue={selectedCategory || eventCategories[0].name}
                  >
                    {eventCategories.map((category: any, index: number) => (
                      <MenuItem
                        key={index}
                        value={category.name}
                        sx={{ ...customCalenderStyle.menuItems }}
                      >
                        {category.name}
                      </MenuItem>
                    ))}
                  </Select>
                </Box>
                <Box sx={{ marginBottom: '12px' }}>
                  <Typography sx={{ ...customCalenderStyle.dialogTitle }}>
                    Select Time
                  </Typography>
                  <Box
                    sx={{
                      ...customCalenderStyle.startEndSx,
                      padding: openTime && endTimeModal ? '9px 2px' : '9px 2px',
                    }}
                  >
                    {openTime ? (
                      <Box onClick={() => setOpenTime(false)}>
                        <Typography
                          sx={{
                            ...customCalenderStyle.titleTime,
                            padding: openTime || endTimeModal ? '0px 15px' : '',
                          }}
                        >
                          StartTime
                        </Typography>
                      </Box>
                    ) : (
                      <TextField
                        value={startTime}
                        onChange={(e) => setStartTime(e.target.value)}
                        fullWidth
                        id="time"
                        type="time"
                        inputProps={{
                          style: { backgroundColor: '#fff', fontSize: '14px' },
                        }}
                        InputLabelProps={{
                          shrink: true,
                        }}
                        InputProps={{
                          endAdornment: (
                            <InputAdornment position="end">
                              <Select
                                value={selectedPeriod}
                                sx={{ fontSize: '14px' }}
                                onChange={handlePeriodChange}
                                IconComponent={KeyboardArrowUpIcon}
                              >
                                <MenuItem value="AM">AM</MenuItem>
                                <MenuItem value="PM">PM</MenuItem>
                              </Select>
                            </InputAdornment>
                          ),
                        }}
                      />
                    )}

                    {endTimeModal ? (
                      <Box onClick={() => setEndTimeModal(false)}>
                        <Typography
                          sx={{
                            ...customCalenderStyle.titleTime,
                            padding: openTime || endTimeModal ? '0px 15px' : '',
                          }}
                        >
                          End Time
                        </Typography>
                      </Box>
                    ) : (
                      <TextField
                        value={endTime}
                        onChange={(e) => setEndTime(e.target.value)}
                        fullWidth
                        type="time"
                        inputProps={{
                          style: { backgroundColor: '#fff', fontSize: '14px' },
                        }}
                        InputLabelProps={{
                          shrink: true,
                        }}
                        InputProps={{
                          endAdornment: (
                            <InputAdornment position="end">
                              <Select
                                value={selectedPeriodPm}
                                sx={{ ...customCalenderStyle.daySelectSx }}
                                IconComponent={KeyboardArrowUpIcon}
                                onChange={handlePeriodChangePm}
                              >
                                <MenuItem
                                  sx={{ ...customCalenderStyle.menuItems }}
                                  value="AM"
                                >AM</MenuItem>
                                <MenuItem
                                  sx={{ ...customCalenderStyle.menuItems }}
                                  value="PM"
                                >
                                  PM
                                </MenuItem>
                              </Select>
                            </InputAdornment>
                          ),
                        }}
                      />
                    )}
                  </Box>
                </Box>
                <Box>
                  <Typography sx={{ ...customCalenderStyle.dialogTitle }}>
                    Remind Before
                  </Typography>
                  <Box
                    sx={{  ...customCalenderStyle.yearDaySx,
                      display: 'flex',
                      justifyContent: 'start',
                      alignItems: 'center',
                      width: '100%',
                      maxWidth: '163px',
                    }}
                  >
                    <TextField
                      value={eventRemainder}
                      onChange={(e) => setEventRemainder(e.target.value)}
                      fullWidth
                      type="number"
                      inputProps={{
                        style: { backgroundColor: '#fff', fontSize: '12px' },
                      }}
                      InputLabelProps={{
                        shrink: true,
                      }}
                      InputProps={{
                        endAdornment: (
                          <Box sx={{ ...customCalenderStyle.totalArrowSx,}}>
                            <KeyboardArrowUpIcon
                              onClick={handleIncrease}
                              sx={{...customCalenderStyle.keyArrowSx}}
                            />
                            <KeyboardArrowDownIcon
                              onClick={handleDecrease}
                              sx={{ ...customCalenderStyle.keyArrowSx,}}
                            />
                          </Box>
                        ),
                      }}
                      sx={{...customCalenderStyle.dropDownSx}}
                    />
                    <Select
                      sx={{...customCalenderStyle.daySelect,}}
                      MenuProps={{ sx:{ margin:'10px 0px'}}}
                      value={selectedDay}
                      onChange={(e: any) => onDayChange(e)}
                      IconComponent={KeyboardArrowUpIcon}
                      defaultValue={selectedDay || remainderOption[0]?.label}
                    >
                      {remainderOption.map((category: any, index: number) => (
                          <MenuItem
                          key={index}
                            value={category.value}
                            sx={{ width: '100%', maxWidth: '102px' }}
                          >
                            {category?.label}
                          </MenuItem>
                      ))}
                    </Select>
                  </Box>
                </Box>
              </DialogContent>
              <DialogActions>
                <Button
                  onClick={onAddEvent}
                  sx={{ ...customCalenderStyle.eventbtn }}
                >
                  Add Event
                </Button>
              </DialogActions>
            </Dialog>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
}

CustomCalender.defaultProps = {
    calenderList : [],
    eventsData : [],
    CommonLeaves : [],
    nationalLeaves : [],
    eventCategories : [],
    eventsIcon:[],
    select : '',
    AddEventValue : '',
    SearchCalenderList : '',
    onCalenderListClick : () => false,
    onCalenderListSearch: () => false,
    customCalenderListSx : {},
    onCalenderSearch : () => false,
    addCalenderList : () => false,
    onDeleteCalenderList : () => false,
    onEditCalenderList : () => false,
    onEventDateSelect : () => false,
    isEventModal : true,
    onHandleDateSelect : () => false,
    remainderOption : [],
    nationalLeaveBgColor : 'red',
    commonLeaveBgcolor : '#FAFAFA',
    styleProps : {},
    eventTitleHeadStyle:{},
    customHeadStyle : {},
    calenderActiveBgColor : '#EFEEFB',
    calenderActiveColor : '#665CD7',
};
