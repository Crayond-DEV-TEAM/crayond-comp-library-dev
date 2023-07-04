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
import { SelectChangeEvent } from '@mui/material';
import Box from '@mui/material/Box';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import SearchIcon from '@mui/icons-material/Search';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import HighlightOffOutlinedIcon from '@mui/icons-material/HighlightOffOutlined';
import {
  Calendar,
  NavigateAction,
  SlotInfo,
  ToolbarProps,
  momentLocalizer,
} from 'react-big-calendar';
import DeleteOutlinedIcon from '@mui/icons-material/DeleteOutlined';
import EditOutlinedIcon from '@mui/icons-material/EditOutlined';
import moment from 'moment';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import CloseIcon from '@mui/icons-material/Close';
import './customCalenderStyle.css';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import { customCalenderStyle } from './style';
import { useRef, useState } from 'react';

import ArrowBackIcon from '../../assets/arrowBackIcon';
import CalenderIcon from '../../assets/calender';
import {
  CalenderProps,
  CommonLeaveDays,
  DayOption,
  EventCategory,
  EventComponentInferface,
  EventData,
  LeaveEvent,
  NationalLeave,
  calenderLists,
} from './interface';

type CustomToolbarProps = ToolbarProps<EventData, object> & {
  onNavigate: (navigate: NavigateAction, date?: Date) => void;
  onView: (view: string) => void;
};
export function CustomCalender(props: CalenderProps) {
  const {
    calenderList = [],
    eventsData = [],
    CommonLeaves = [],
    nationalLeaves = [],
    eventCategories = [],
    select = '',
    SearchCalenderList = '',
    onCalenderListClick = () => false,
    onCalenderListSearch = () => false,
    customCalenderListSx = {},
    onCalenderSearch = () => false,
    addCalenderList = () => false,
    onDeleteCalenderList = () => false,
    // onEditCalenderList = () => false,
    OnEventAdd = () => false,
    onEventsEdit = () => false,
    onEventsDelete = () => false,
    isEventModal = true,
    onCustomizeEvent = () => false,
    remainderOption = [],
    nationalLeaveBgColor = 'red',
    isCustomizeToolbar = false,
    commonLeaveBgcolor = '#FAFAFA',
    addEventBtnSx = {},
    styleProps = {},
    CustomizedToolbar = () => false,
    SearchCalender = '',
    closeEventDialog = () => false,
    customHeadStyle = {},
    CalenderStyle = {},
    calenderActiveBgColor = '#EFEEFB',
    calenderActiveColor = '',
    onEventDialogChange = () => false,
    eventDialogTitle = '',
    eventDialogDescription = '',
    selectedCategoryDialog = '',
    startTimeDialog = '',
    endTimeDialog = '',
    eventRemainder = 0,
    selectedDay = '',
    calenderIconSx={},
    onSelectEventFunc = () => false,
    handleEventChange=()=>false,
    onSaveCalenderList=()=>false,
    editListValue='',
    onHandleDateSelect=()=>false,
    calenderTitle='Calender'
  } = props;

  // React BigCalender Moments
  const localizer = momentLocalizer(moment);

  // General States
  const [anchorEl, setAnchorEl] = useState<Element | ((element: Element) => Element) | null | undefined>(null);
  const [eventColors, setEventColors] = useState<{ [key: string]: string }>({});
  const [editAccoss, seteditAccoss] = useState(false);
  const [openModal, setOpenModal] = useState(false);
  const [openTime, setOpenTime] = useState(true);
  const [error, setError] = useState<{selectevent?: string;startEnd?:string}>({
    selectevent:'',
    startEnd:''
  });
  const [endTimeModal, setEndTimeModal] = useState(true);
  const [isEdit, setIsedit] = useState(false);
  const [isEditList, setIsEditList] = useState(false);
  const [selectedRange, setSelectedRange] = useState<{start?: Date | null;end?: Date | null;action?: string;}>({ start: null, end: null, action: '' });
  const selectedStartDate = moment(selectedRange?.start);
  const [endHourss, endMinutess] = startTimeDialog.split(':');
  const [editdata, seteditdata] = useState<any>({});
  const open = Boolean(anchorEl);

  const start = selectedStartDate.clone().set({
      hour: parseInt(endHourss, 10),
      minute: parseInt(endMinutess, 10),
      second: 0,
    })
    .toDate();

  const selectedEndDate = moment(selectedRange?.end);
  const [endHours, endMinutes] = endTimeDialog.split(':');
  const end = selectedEndDate.clone().set({
      hour: parseInt(endHours, 10),
      minute: parseInt(endMinutes, 10),
      second: 0,
    })
    .toDate();

  const handleClick = (e: React.MouseEvent<Element>) => {
    setAnchorEl(e.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const validation = (): boolean => {
    if (startTimeDialog?.length === 0 || endTimeDialog?.length === 0) {
      setError({startEnd:'Please select a valid start and end time'});
      return false;
    }
    if(selectedCategoryDialog?.length === 0){
      setError({selectevent:'Please select Event'});
      return false;
    }
    return true;
  };

  const getEventCount = (calendarTitle: string): number => {
    const count = eventsData.filter(
      (event: EventData) => event.type === calendarTitle
    ).length;
    return count;
  };

  // Open Dialog to Handle Events
  const handleSelect = ({ start, action, slots }: SlotInfo) => {
    setAnchorEl(null);
    setIsEditList(false);
    const multipleDate = slots[slots?.length - 1];
    if (action === 'click') {
      setSelectedRange({ start, action, end: multipleDate });
      
    } else if (action === 'select') {
      setSelectedRange({ start, end: multipleDate, action });
    }
    if (isEventModal) {
      setOpenModal(true);
      seteditAccoss(true)
      setIsedit(false)
      setOpenTime(true)
      setEndTimeModal(true)
      onHandleDateSelect()
    } else {
      onCustomizeEvent({ start, end: multipleDate });
    }
    seteditdata({});
    
  };

  // Fint the  National Leave
  const eventsleave: LeaveEvent[] = nationalLeaves.map(
    (leave: NationalLeave) =>
      ({
        title: leave.title,
        start: new Date(leave.date),
        end: new Date(leave.date),
        allDay: true,
        type: selectedCategoryDialog,
      } as unknown as LeaveEvent)
  );

  // Getting all Events Access
  const allEvents = [...eventsData, ...eventsleave];

  // On Event change
  const onAddEvent = () => {
    let newEvent: EventData = {
      id: '',
      title: eventDialogTitle ?? '',
      des: eventDialogDescription ?? '',
      allDay: false,
      start: start ?? '',
      end: end ?? '',
      startTime: startTimeDialog,
      endTime: endTimeDialog,
      deletable: true,
      eventRemaindTime: eventRemainder,
      eventRemind: selectedDay,
      type: selectedCategoryDialog,
    };

    if (validation()) {
      if (editdata?.id) {
        newEvent = {
          ...newEvent,
          id: editdata?.id ?? '',
        };
      }
      OnEventAdd(newEvent);
      const color =
        selectedCategoryDialog &&
        eventCategories.find(
          (category: EventCategory) => category.name === selectedCategoryDialog
        )?.color;
      setEventColors((prevEventColors) => ({
        ...prevEventColors,
        [selectedCategoryDialog]: color || '',
      }));
      if(isEventModal){
        setOpenTime(true);
        setEndTimeModal(true);
        setOpenModal(false);
        setEndTimeModal(false)
        seteditAccoss(false)
        setIsedit(false)
        setError({selectevent:'',startEnd:''})
      }
    } else {
      return false;
    }
  };

  // Event Fetch
  eventsData.forEach((event: EventData) => {
    let color = '#FAFAFA';
    if (selectedCategoryDialog) {
      const category = eventCategories.find(
        (category: EventCategory) => category.name === selectedCategoryDialog
      );
      color = category ? category.color : '#FAFAFA';
    }
    eventColors[event.title] = eventColors[event.title] || color;
  });

  // Close dialog
  const dialogClose = () => {
    setOpenTime(true);
    setEndTimeModal(true);
    setOpenModal(false);
    closeEventDialog();
    setOpenTime(true)
    setEndTimeModal(true)
    setError({selectevent:'',startEnd:''})
    setSelectedRange({ start:null, end:null });

  };

  // Common Leave Days Index
  const CommonLeaveDays: CommonLeaveDays = {
    sunday: 0,
    monday: 1,
    tuesday: 2,
    wednesday: 3,
    thursday: 4,
    friday: 5,
    saturday: 6,
  };

  // Date and day Identify and Changes
  const dayPropGetter = (date: Date) => {
    const dayOfWeek = date.getDay();

    {
      /* Common Leaves */
    }
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

    {
      /* National Leaves */
    }
    const matchedLeave = nationalLeaves.find(
      (leave: NationalLeave) =>
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

  // Styled Props for Calender Style
  const defaultStyleProps = {
    layoutBorderStyle: {
      borderColor: '#000',
      ...(styleProps?.layoutBorderStyle ?? {}),
    },
    beforeMonthStyle: {
      backgroundColor: '#000',
      ...(styleProps?.beforeMonthStyle ?? {}),
    },
    todayDateStyle: {
      backgroundColor: '#000',
      ...(styleProps?.todayDateStyle ?? {}),
    },
    addEventStyle: {
      color: 'red',
      ...(styleProps?.addEventStyle ?? {}),
    },
    tabStyle: {
      backgroundColor: '#665cd7',
      color: '#fff',
      borderColor: '##665cd7',
      fontSize: '14px',
      fontWeight: 600,
      ...(styleProps?.tabStyle ?? {}),
    },
    headStyle: {
      color: '#000',
      fontSize: '14px',
      fontWeight: '500',
      ...(styleProps?.headStyle ?? {}),
    },
    fontFamily: {
      fontFamily: 'Poppins, sans-serif',
      ...(styleProps?.fontFamily ?? {}),
    },
    dragandDropStyle:{
      dragAndSelectBg:'#EFEEFB',
      ...(styleProps?.dragAndSelectBg ?? {}),
    }
  };

  // Events Edits
  const handleEventEdits = (event: React.MouseEvent<HTMLButtonElement> | null) => {
    if (event) {
      const newEvent: EventData = {
        id: '',
        title: eventDialogTitle ?? '',
        des: eventDialogDescription ?? '',
        allDay: false,
        start: start ?? '',
        end: end ?? '',
        startTime: startTimeDialog,
        endTime: endTimeDialog,
        deletable: true,
        eventRemaindTime: eventRemainder,
        eventRemind: selectedDay,
        type: selectedCategoryDialog,
      };
      onEventsEdit(newEvent);
      if(isEventModal){
      seteditdata(event)
      seteditAccoss(true)
      setOpenTime(false)
      setEndTimeModal(false)}
    }
  };

  // //Events Delete
  const handleEventDelete = (event: React.MouseEvent<HTMLButtonElement> | null  ) => {
    if (event) {
      const newEvent: EventData = {
        id: editdata?.id,
        title: eventDialogTitle ?? '',
        des: eventDialogDescription ?? '',
        allDay: false,
        start: start ?? '',
        end: end ?? '',
        startTime: startTimeDialog,
        endTime: endTimeDialog,
        deletable: true,
        eventRemaindTime: eventRemainder,
        eventRemind: selectedDay,
        type: selectedCategoryDialog,
      };
      onEventsDelete(newEvent);
      setOpenModal(false);
    }
  };

  // Total Event Data
  const eventList: EventData[] = allEvents.map((event) => {
      if ('title' in event) {
        return {
          id: event.id,
          title: event.title,
          allDay: event.allDay,
          des:event.des,
          start: event.start ?? null,
          end: event.end ?? null,
          startTime: event?.startTime,
          endTime: event.endTime,
          deletable: event.deletable,
          eventRemaindTime: event.eventRemaindTime,
          eventRemind: event.eventRemind,
          type:event?.type,
        };
      } else {
        return null;
      }
})
    .filter((event): event is EventData => event !== null);

  // Event Select funcion
  const onSelectEvent = (e: EventData) => {
    setOpenModal(true);
    setIsedit(true);
    onEventsEdit(e);
    onSelectEventFunc(e);
    setSelectedRange({ start:e?.start, end:e?.end });
    seteditdata(e);
    seteditAccoss(false)
    setOpenTime(false)
    setEndTimeModal(false)
  };


  // Even  Style
  const eventStyleGetter = (event: EventData,) => {
    const backgroundColor = eventColors[event?.title] || 'transparent';

    const isLeaveEvent = eventsleave.some(
      (leaveEvent) => leaveEvent.title === event.title
    );

    if (isLeaveEvent) {
      const style = {
        backgroundColor,
        borderRadius: '2px',
        color: '#333333',
        border: '0px',
        display: 'block',
      };

      return { style };
    }

    const style = {
      backgroundColor,
      borderRadius: '2px',
      color: '#333333',
      border: '0px',
      display: 'block',
    };

    return {
      style,
    };
  };


  const MAX_TITLE_LENGTH = 20;
  function truncateText(text: string, maxLength: number) {
      if (text.length <= maxLength) {
        return text;
      }
      return text.slice(0, maxLength) + '...';
  }


  // Event component
  const EventComponent = ({ event }: EventComponentInferface) => ( 
    <Box >
      <Box sx={{display:'flex',alignItems:'center',justifyContent:'start'}}>
        <Box>
        <Typography
           sx={{ ...customCalenderStyle.eventLabel }}
        >
          {truncateText(event.title, MAX_TITLE_LENGTH)}
        </Typography> 
        </Box>
        {!event?.allDay && (
        <Box sx={{ ...customCalenderStyle?.overAllEventSx }}>
          <Typography
            sx={{ fontSize: '12px', fontWeight: '500', color: '#929292' }}
          >
            {event?.startTime}
            {/* {selectedPeriod?.am} */}
          </Typography>
        </Box>
      )}
      </Box>
        <Typography
          sx={{ ...customCalenderStyle.eventLabel }}
        >
          {event?.des}
        </Typography>

      {/* Display the time only if it is not an all-day event */}
      
    </Box>
  );

  // Custom tool bar
  const CustomToolbar = ({label,onNavigate,onView,view,}: CustomToolbarProps) => {
    const goToBack = () => {
      onNavigate('PREV');
    };
    const goToNext = () => {
      onNavigate('NEXT');
    };
    const handleViewChange = (value: string) => {
      onView(value);
    };

    return (
      <Box
        sx={{...customCalenderStyle.toolbarSx}}
      >
        <IconButton
          sx={{ backgroundColor: '#EEEEEE', padding: '6px' }}
          disableRipple
          onClick={goToBack}
        >
          <ArrowBackIcon />
        </IconButton>
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}
        >
          <IconButton
            onClick={goToBack}
            sx={{
              ...customCalenderStyle.arrowCalenderSx,
              paddingRight: '16px !important',
            }}
            disableRipple
          >
            <ArrowBackIosIcon
              sx={{ fontSize: '14px', color: '#262626', fill: '#262626' }}
            />
          </IconButton>
          <Typography
            sx={{
             ...customCalenderStyle.toolBarLabelSx
            }}
          >
            {label}
          </Typography>
          <Box sx={{ ml: '6px', mt: '8px', ...calenderIconSx }}>
            <CalenderIcon />
          </Box>
          <IconButton
            onClick={goToNext}
            sx={{
              ...customCalenderStyle.arrowCalenderSx,
              paddingLeft: '16px !important',
            }}
            disableRipple
          >
            <ArrowForwardIosIcon
              sx={{ fontSize: '14px', color: '#262626', fill: '#262626' }}
            />
          </IconButton>
        </Box>
        <Box
          sx={{
           ...customCalenderStyle.toolbarViewSx
          }}
        >
          <Button
            sx={{...customCalenderStyle.ViewToolSx,
              backgroundColor: view === 'month' ? '#665CD7' : 'transparent',
              color: view === 'month' ? '#fff' : '#262626',
             
            }}
            onClick={() => handleViewChange('month')}
          >
            Month
          </Button>
          <Button
            sx={{...customCalenderStyle.ViewToolSx,
              backgroundColor: view === 'week' ? '#665CD7' : 'transparent',
              color: view === 'week' ? '#fff' : '#262626',
              
            }}
            onClick={() => handleViewChange('week')}
          >
            Week
          </Button>
          <Button
            sx={{...customCalenderStyle.ViewToolSx,
              backgroundColor: view === 'day' ? '#665CD7' : 'transparent',
              color: view === 'day' ? '#fff' : '#262626',
              
            }}
            onClick={() => handleViewChange('day')}
          >
            Day
          </Button>
        </Box>
      </Box>
    );
  };

  const onEditCalenderList = () => {
    setIsEditList(true);
    setAnchorEl(null)
  };

  const toolbarComponent: any = isCustomizeToolbar ? CustomizedToolbar : CustomToolbar;
  const components = {
    event: EventComponent,
    toolbar: toolbarComponent,
  };

  const onCalenderListClicks = (index: number) => {
    if (isEditList && select === index) {
      setIsEditList(false);
    }else if(select !== index){
      onCalenderListClick(index)
      setIsEditList(false)
    } 
    
  };

  const onCloseList =(val:calenderLists,index:number)=>{
    if (isEditList && select === index) {
      setAnchorEl(null);
      setIsEditList(false);
    } 
  }

  const onSaveCalenderLists =(val:calenderLists,index:number)=>{
    setIsEditList(false)
    onSaveCalenderList(val,index)
  }

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
    '--date-eventsColorbackground': `${eventColors}`,
    '--date-dragandselectBgColor' : `${defaultStyleProps?.dragandDropStyle?.dragAndSelectBg}`
  } as React.CSSProperties;

  const inputRef = useRef(null);

  return (
    <Box sx={{ ...customCalenderStyle.rootSx }}>
      <Box sx={{ ...customCalenderStyle.rootHeadSx }}>
        <Box sx={{ ...customCalenderStyle.calenderSx }}>
          <Typography sx={{ ...customCalenderStyle.headSx }}>
            {calenderTitle}
          </Typography>
          <IconButton
            sx={{
              ...customHeadStyle,
              ...customCalenderStyle.addCalenderListSx,
            }}
            onClick={addCalenderList}
          >
            <AddCircleIcon sx={{ fontSize: '30px' }} />
          </IconButton>
        </Box>
        <Box>
          <TextField
            placeholder="Search"
            sx={{
              ...customCalenderStyle.textFieldSx,
              border: '1px solid #000',
              borderRadius: '8px',
            }}
            value={SearchCalender}
            onChange={(e) => onCalenderSearch({ value: e.target.value })}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <SearchIcon sx={{ ...customCalenderStyle.searchIconStyle }} />
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
        <Grid item xs={12} sm={4} md={2} paddingTop={'16px'}>
          <Box sx={{ ...customCalenderStyle.searchBoxSx }}>
            <TextField
              placeholder="Search"
              sx={{
                ...customCalenderStyle.textFieldSx,
              }}
              value={SearchCalenderList}
              onChange={(e) => onCalenderListSearch({ value: e.target.value })}
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
            {   calenderList &&
              calenderList?.map((val: calenderLists, index: number) => {
                return (
                  <> 
                  {isEditList && select === index ? 
                <Box
                sx={{ ...customCalenderStyle.eventtitleList, paddingTop: '4px' }}
              >
                <TextField
                placeholder="New Calender"
                label=""
                value={editListValue}
                inputRef={inputRef}
                onChange={handleEventChange}
                fullWidth
                inputProps={{
                  style: {
                    backgroundColor: '#fff',
                    fontWeight: '500',
                    fontSize: '14px',
                  },
                }}
                InputProps={{
                  endAdornment: (
                    <>
                      <IconButton sx={{ p: 0 }} onClick={() => onSaveCalenderLists(val,index)} disableRipple>
                        <CheckCircleOutlineIcon sx={{color:'green'}} />
                      </IconButton>
                      <IconButton
                        sx={{  p:0}}
                        onClick={()=>onCloseList(val,index)}
                        disableRipple
                      >
                        <HighlightOffOutlinedIcon
                          sx={{ ...customCalenderStyle.closeInput }}
                        />
                      </IconButton>
                    </>
                  ),
                }}
              /> 
                </Box>
                :
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
                    onClick={() => onCalenderListClicks(index)}
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
                                  onClick={() => onEditCalenderList()}
                                  sx={{ ...customCalenderStyle.editTextSx }}
                                >
                                  Edit
                                </Box>
                              </MenuItem>
                              <MenuItem
                                sx={{ justifyContent: 'space-between' }}
                              >
                                <Box
                                  onClick={() => onDeleteCalenderList(val, index)
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
                }
                  </>
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
                events={eventList}
                startAccessor="start"
                endAccessor="end"
                eventPropGetter={eventStyleGetter}
                components={components}
                defaultDate={new Date()}
                defaultView="month"
                views={['month', 'week', 'day']}
                selectable
                onSelectSlot={handleSelect}
                dayPropGetter={dayPropGetter}
                showMultiDayTimes
                step={15}
                onSelectEvent={onSelectEvent}
                style={{ height: '100vh', width: '100%', ...CalenderStyle }}
              />
            </div>
            <Dialog
              PaperProps={{ sx: { ...customCalenderStyle.dialogRootSx } }}
              open={openModal}
            >
              <DialogTitle sx={{ ...customCalenderStyle.dialogHeaderSx }}>
                Add New Event
              </DialogTitle>
              <Box>
                {isEdit && (
                  <>
                    <IconButton
                      onClick={(e) => handleEventEdits(e)}
                      size="small"
                      color="inherit"
                      aria-label="delete event"
                      disableRipple
                      sx={{
                        ...customCalenderStyle.eventIconAddSx,
                       
                        right: '66px',
                      }}
                    >
                      <EditOutlinedIcon sx={{ ...customCalenderStyle.eventIcons,color: editAccoss ? '#665CD7' : '#000', }} />
                    </IconButton>

                    <IconButton
                      onClick={(e) => handleEventDelete(e)}
                      size="small"
                      color="inherit"
                      aria-label="delete event"
                      disableRipple
                      disabled={editAccoss=== true ? true : false}
                      sx={{
                        ...customCalenderStyle.eventIconAddSx,
                        color: editdata ? '#3B3B3B' : '#000',
                        right: '36px',
                      }}
                    >
                      <DeleteOutlinedIcon  sx={{ ...customCalenderStyle.eventIcons }} />
                    </IconButton>
                  </>
                )}
                <IconButton
                  sx={{ ...customCalenderStyle.closeSx }}
                  onClick={dialogClose}
                >
                  <CloseIcon />
                </IconButton>
              </Box>
              <DialogContent sx={{ ...customCalenderStyle.bodyContentSx }}>
                <Box
                  sx={{ ...customCalenderStyle.eventtitle, paddingTop: '9px' }}
                >
                  <TextField
                    placeholder="Add Event"
                    value={eventDialogTitle}
                    onChange={(e) => onEventDialogChange(e, 'modalTitle')}
                    fullWidth
                    disabled={!editAccoss?true:false}
                    inputProps={{
                      style: {
                        backgroundColor: '#fff',
                        fontWeight: '500',
                        fontSize: '14px',
                      },
                    }}
                  />
                </Box>
                <Box sx={{ ...customCalenderStyle.eventtitle,py:'8px' }}>
                  <TextField
                    placeholder="Add Description"
                    value={eventDialogDescription}
                    disabled={!editAccoss?true:false}
                    onChange={(
                      e: React.ChangeEvent<
                        HTMLInputElement | HTMLTextAreaElement
                      >
                    ) => onEventDialogChange(e, 'modalDescription')}
                    fullWidth
                    inputProps={{
                      style: {
                        backgroundColor: '#fff',
                        fontWeight: '500',
                        fontSize: '14px',
                      },
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
                    value={selectedCategoryDialog}
                    onChange={(event: SelectChangeEvent<string>) =>
                      onEventDialogChange(event, 'selectEvent')
                    }
                    disabled={!editAccoss?true:false}
                    IconComponent={KeyboardArrowUpIcon}
                    defaultValue={
                      selectedCategoryDialog || eventCategories[0].name
                    }
                  >
                    {eventCategories.map(
                      (category: EventCategory, index: number) => (
                        <MenuItem
                          key={index}
                          value={category.name}
                          sx={{ ...customCalenderStyle.menuItems }}
                        >
                          {category.name}
                        </MenuItem>
                      )
                    )}
                  </Select>
                  {error?.selectevent && (
                    <Typography sx={{ ...customCalenderStyle.errorSx, marginBottom: '12px',                    
                    }}>
                      {error?.selectevent}
                    </Typography>
                  )}
                 
                </Box>
                <Box sx={{ marginBottom: '12px' }}>
                  <Typography sx={{ ...customCalenderStyle.dialogTitle }}>
                    Select Time
                  </Typography>
                  <Box
                    sx={{
                      ...customCalenderStyle.startEndSx,
                      padding: openTime && endTimeModal ? '7px 2px' : '7px 2px',
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
                        value={startTimeDialog}
                        onChange={(e) => onEventDialogChange(e, 'startTime')}
                        fullWidth
                        id="time"
                        type="time"
                        disabled={!editAccoss?true:false}
                        inputProps={{
                          style: { backgroundColor: '#fff', fontSize: '14px' },
                        }}
                        InputLabelProps={{
                          shrink: true,
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
                        value={endTimeDialog}
                        onChange={(e) => onEventDialogChange(e, 'endTime')}
                        fullWidth
                        type="time"
                        disabled={!editAccoss?true:false}
                        inputProps={{
                          style: { backgroundColor: '#fff', fontSize: '14px' },
                        }}
                        InputLabelProps={{
                          shrink: true,
                        }}
                       
                      />
                    )}
                  </Box>
                  {error?.startEnd && (
                    <Typography sx={{ ...customCalenderStyle.errorSx }}>
                      {error?.startEnd}
                    </Typography>
                  )}
                </Box>
                <Box>
                  <Typography sx={{ ...customCalenderStyle.dialogTitle }}>
                    Remind Before
                  </Typography>
                  <Box
                    sx={{
                      ...customCalenderStyle.yearDaySx,
                      display: 'flex',
                      justifyContent: 'start',
                      alignItems: 'center',
                      width: '100%',
                      maxWidth: '163px',
                    }}
                  >
                    <TextField
                      value={eventRemainder}
                      onChange={(
                        e: React.ChangeEvent<
                          HTMLInputElement | HTMLTextAreaElement
                        >
                      ) => onEventDialogChange(e, 'eventRemainder')}
                      fullWidth
                      type="number"
                    disabled={!editAccoss?true:false}

                      inputProps={{
                        style: { backgroundColor: '#fff', fontSize: '14px' },
                      }}
                      InputLabelProps={{
                        shrink: true,
                      }}
                      InputProps={{
                        endAdornment: (
                          <Box sx={{ ...customCalenderStyle.totalArrowSx }}>
                            <IconButton  sx={{p:'0',height:'0px',marginTop:'8px'}}  onClick={(e: any) =>
                              onEventDialogChange(e, 'increase')
                            }  
                    disabled={!editAccoss?true:false}
                            
                            >
                            <KeyboardArrowUpIcon 
                            
                          
                            sx={{ ...customCalenderStyle.keyArrowSx }}
                          />
                            </IconButton>
                           <IconButton onClick={(e: any) =>
                                onEventDialogChange(e, 'decrease')
                              } sx={{p:'0',height:'0px',marginTop:'-8px'}}
                    disabled={!editAccoss?true:false}
                              
                              >
                           <KeyboardArrowDownIcon
                              
                              sx={{ ...customCalenderStyle.keyArrowSx }}
                            />

                           </IconButton>
                            
                          </Box>
                        ),
                      }}
                      sx={{ ...customCalenderStyle.dropDownSx }}
                    />
                    <Select
                      sx={{ ...customCalenderStyle.daySelect }}
                      MenuProps={{ sx: { margin: '10px 0px' } }}
                      value={selectedDay}
                      onChange={(event: SelectChangeEvent<string>) =>
                        onEventDialogChange(event, 'dayOption')
                      }
                      disabled={!editAccoss?true:false}
                      IconComponent={KeyboardArrowUpIcon}
                      defaultValue={selectedDay || remainderOption[0]?.label}
                    >
                      {remainderOption.map(
                        (category: DayOption, index: number) => (
                          <MenuItem
                            key={index}
                            value={category.value}
                            sx={{ width: '100%', maxWidth: '102px' }}
                          >
                            {category?.label}
                          </MenuItem>
                        )
                      )}
                    </Select>
                  </Box>
                </Box>
              </DialogContent>
              <DialogActions>
                <Button
                  onClick={onAddEvent}
                  disabled={eventDialogTitle?.length ?? 0 > 0 ? false : true}
                  sx={{ ...customCalenderStyle.eventbtn, ...addEventBtnSx }}
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
  calenderList: [],
  eventsData: [],
  CommonLeaves: [],
  nationalLeaves: [],
  eventCategories: [],
  eventsIcon: [],
  select: '',
  AddEventValue: '',
  SearchCalenderList: '',
  onCalenderListClick: () => false,
  onCalenderListSearch: () => false,
  customCalenderListSx: {},
  onCalenderSearch: () => false,
  addCalenderList: () => false,
  onDeleteCalenderList: () => false,
  onEditCalenderList: () => false,
  onEventDateSelect: () => false,
  isEventModal: true,
  onHandleDateSelect: () => false,
  remainderOption: [],
  nationalLeaveBgColor: 'red',
  commonLeaveBgcolor: '#FAFAFA',
  styleProps: {},
  eventTitleHeadStyle: {},
  customHeadStyle: {},
  calenderActiveBgColor: '#EFEEFB',
  calenderActiveColor: '#665CD7',
  calenderTitle:"calender"
};
