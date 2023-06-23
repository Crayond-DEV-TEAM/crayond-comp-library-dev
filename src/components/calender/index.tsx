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
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import interactionPlugin from '@fullcalendar/interaction';
import timeGridPlugin from '@fullcalendar/timegrid';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import CloseIcon from '@mui/icons-material/Close';
import { customCalenderStyle } from './style';
import './fullcalenderStyle.css';
import { useRef, useState } from 'react';
import ReactDOM from 'react-dom';

interface EventCategory {
  name: string;
  color: string;
}
interface EventData {
  id: string;
  title: string;
  allDay: boolean;
  start: string;
  end: string;
  deletable: boolean;
}

interface CalenderProps {
  commanLeave: commanLeaveData[];
  commonLeave: string[];
  calenderList: object[];
  events: EventData[];
  select: number;
  eventValue: string;
  selectedCategory: string | null;
  searchCalendarList: string;
  eventCategories: EventCategory[];
  nationalLeaveDates: NationalLeaveDate[];
  onEventEdit: (data: EventData) => void;
  OnEventChange: (event: React.ChangeEvent<HTMLSelectElement>) => void;
  onCalenderListClick: (index: number) => void;
  onEventselectedDate: (data: any) => void;
  onEventDelete: (data: EventData) => void;
  onCalenderSearch: (e: any) => void;
  customCalenderListSx: object;
  addEventChange: (data: any) => void;
  addCalenderList:()=>void;
  onDeleteCalenderList:(data:any,index:any) => void;
  onCalendarSearch: () => void;
  onEditCalenderList:(data:any,index:any) => void;
  calenderCellackgroundColor: string;
  calendercellBackgroundColor:string;
  SearchCalenderList: string;
}

interface NationalLeaveDate {
  title: string;
  start: string;
  end: string;
  rendering: string;
  color: string;
  display: string;
}
interface EventData {
  id: string;
  title: string;
  start: Date;
  end: Date;
  allDay: boolean;
  deletable: boolean;
}

interface commanLeaveData {
  daysOfWeek: number[];
  background: string;
  rendering: string;
  color: string;
  display: string;
}

export function Calender(props: CalenderProps) {
  const {
    commanLeave = [],
    calenderList = [],
    events = [],
    select = '',
    eventValue = '',
    selectedCategory = '',
    SearchCalenderList = '',
    eventCategories = [],
    nationalLeaveDates = [],
    OnEventChange = () => false,
    onCalenderListClick = () => false,
    onEventselectedDate = () => false,
    onEventDelete = () => false,
    onEventEdit = () => false,
    customCalenderListSx ={},
    addEventChange = () => false,
    onCalenderSearch = () => false,
    addCalenderList=()=>false,
    onDeleteCalenderList= () => false,
    onEditCalenderList= () => false,
    calenderCellackgroundColor = '#FAFAFA',
    calendercellBackgroundColor="#E9E9E9",
  } = props;

  const [anchorEl, setAnchorEl] = useState(null);
  const calendarComponentRef = useRef<FullCalendar>(null);
  const [openModal, setOpenModal] = useState(false);
  const [selectedRange, setSelectedRange] = useState({
    start: null,
    end: null,
  });
  const [eventColors, setEventColors] = useState<{ [key: string]: string }>({});
  const open = Boolean(anchorEl);

  const handleClick = (e: any) => {
    setAnchorEl(e.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleDateClick = (arg: any) => {
    setSelectedRange({ start: arg.date, end: arg.date });
    setOpenModal(true);
  };

  const handleDateSelect = (arg: any) => {
    const { start, end } = arg;
    setSelectedRange({ start, end });
    setOpenModal(true);
  };

  const handleSelectedDates = () => {
    console.log(selectedRange, 'selectedRangeselectedRange');
    const updatedEvent = {
      start: selectedRange.start,
      end: selectedRange.end,
    };

    onEventselectedDate(updatedEvent);

    const color =  selectedCategory &&
      eventCategories.find(
        (category: any) => category.name === selectedCategory
      )?.color;m
    setEventColors((prevEventColors) => ({
      ...prevEventColors,
      [selectedCategory]: color || '',
    }));

    setOpenModal(false);
  };

  const allEvents = [...events, ...nationalLeaveDates, ...commanLeave];

  events.forEach((event: any) => {
    let color = '#FAFAFA';
    if (selectedCategory) {
      const category = eventCategories.find(
        (category: any) => category.name === selectedCategory
      );
      color = category ? category.color : '#FAFAFA';
    }
    eventColors[event.title] = eventColors[event.title] || color;
  });

  const handleEventDelete = (event: any | null) => {
    if (event) {
      const updatedEvent: EventData = {
        id: event?._def?.publicId,
        title: event._def?.title,
        start: event?._instance?.range?.start,
        end: event?._instance?.range?.start,
        allDay: true,
        deletable: true,
      };
      onEventDelete(updatedEvent);
      setOpenModal(false);
    }
  };

  const handleEventEdits = (event: any | null) => {
    if (event) {
      const updatedEvent: EventData = {
        id: event?._def?.publicId,
        title: event._def?.title,
        start: event?._instance?.range?.start,
        end: event?._instance?.range?.start,
        allDay: true,
        deletable: true,
      };
      onEventEdit(updatedEvent);
      setOpenModal(true);
    }
  };

  const inlineStyles = {
    '--date-cell-background-color': calenderCellackgroundColor,
    '--date-cell-border-color': calendercellBackgroundColor
  } as React.CSSProperties;

  const getEventCount = (calendarTitle: string): number => {
    const count = events.filter(
      (event: any) => event.type === calendarTitle
    ).length;
    return count;
  };

  return (
    <Box sx={{ ...customCalenderStyle.rootSx }}>
      <Box sx={{...customCalenderStyle.rootHeadSx}}>
           <Box sx={{...customCalenderStyle.calenderSx}}>
           <Typography sx={{...customCalenderStyle.headSx}}>
               Calendar
           </Typography> 

           <IconButton sx={{color:'#665CD7',ml:'8px'}} onClick={addCalenderList} >   
              <AddCircleIcon sx={{fontSize:'30px'}}/>
           </IconButton>
           </Box>
          <Box>
          <TextField
              placeholder="Search"
              sx={{ ...customCalenderStyle.textFieldSx }}
              value={SearchCalenderList}
              onChange={(e) => onCalenderSearch(e.target.value)}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <SearchIcon
                      sx={{ ml: 1, fontSize: '16px', color: '#818181' }}
                    />
                  </InputAdornment>
                ),
              }}
            />
          </Box>
        </Box>
      <Grid container display="flex" spacing={3} sx={{p:'18px 0px !important'}}>    
        {/* Calender Details */}
        <Grid item xs={12} sm={4} md={2}>
          <Box sx={{ ...customCalenderStyle.searchBoxSx }}>
            <TextField
              placeholder="Search"
              sx={{ ...customCalenderStyle.textFieldSx }}
              value={SearchCalenderList}
              onChange={(e) => onCalenderSearch(e.target.value)}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <SearchIcon
                      sx={{ ml: 1, fontSize: '16px', color: '#818181' }}
                    />
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
              calenderList?.map((val: any, index: number) => {
                return (
                  <Box
                    key={index}
                    sx={{
                      ...customCalenderStyle?.calenderlistSx,
                      backgroundColor:
                        select === index ? '#EFEEFB' : 'transparent',
                      padding: select === index ? '6px 20px' : '16px 20px',
                      ...customCalenderListSx
                    }}
                    onClick={() => onCalenderListClick(index)}
                  >
                    <Box sx={{ ...customCalenderStyle?.totalCalenderSx }}>
                      <Typography
                        sx={{
                          ...customCalenderStyle.calenderTitle,
                          color: select === index ? '#665CD7' : '#3B3B3B',
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
                                <Box onClick={()=>onEditCalenderList(val,index)}
                                  sx={{ ...customCalenderStyle.editTextSx }}
                                >
                                  Edit
                                </Box>
                              </MenuItem>
                              <MenuItem
                                sx={{ justifyContent: 'space-between' }}
                              >
                                <Box onClick={()=>onDeleteCalenderList(val,index)}
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
            <div style={inlineStyles}>
              <FullCalendar
                ref={calendarComponentRef}
                licenseKey="GPL-My-Project-Is-Open-Source"
                plugins={[dayGridPlugin, interactionPlugin, timeGridPlugin]}
                headerToolbar={{
                  left: 'prev,next today',
                  center: 'title',
                  right: 'dayGridMonth,timeGridWeek,timeGridDay,listWeek',
                }}
                initialView="dayGridMonth"
                selectable={true} // Enable selection
                select={(arg) => handleDateSelect(arg)}
                events={allEvents}
                dayMaxEventRows={true}
                dayPopoverFormat={{
                  day: 'numeric',
                  month: 'short',
                  year: 'numeric',
                }}
                eventDidMount={(arg) => {
                  const color = eventColors[arg.event.title] || '';
                  arg.el.style.background = color;
                  arg.backgroundColor = '#eaeaea';
                  if (arg.event.extendedProps.deletable) {
                    const deleteButton = document.createElement('div');

                    const handleDeleteClick = (e: React.MouseEvent) => {
                      e.stopPropagation();
                      handleEventDelete(arg.event);
                    };

                    const handleEventEdit = (e: React.MouseEvent) => {
                      e.stopPropagation();
                      handleEventEdits(arg.event);
                    };

                    const deleteIconButton = (
                      <IconButton
                        onClick={handleDeleteClick}
                        size="small"
                        color="inherit"
                        aria-label="delete event"
                        sx={{
                          color: '#000',
                          padding: '0px',
                          paddingRight: '4px',
                        }}
                      >
                        <DeleteIcon sx={{ fontSize: '18px' }} />
                      </IconButton>
                    );

                    const editIconButton = (
                      <IconButton
                        onClick={handleEventEdit}
                        size="small"
                        color="inherit"
                        aria-label="edit event"
                        sx={{ color: '#000', padding: '0px' }}
                      >
                        <EditIcon sx={{ fontSize: '18px' }} />
                      </IconButton>
                    );
                    ReactDOM.render(
                      <div>
                        {editIconButton}
                        {deleteIconButton}
                      </div>,
                      deleteButton
                    );
                    arg.el.appendChild(deleteButton);
                    arg.el.addEventListener('click', (e) => {
                      e.stopPropagation();
                    });
                  }
                }}
                dateClick={handleDateClick}
              />
            </div>

            <Dialog
              PaperProps={{
                sx: { ...customCalenderStyle.dialogRootSx },
              }}
              open={openModal}
            >
              <DialogTitle sx={{ ...customCalenderStyle.dialogHeaderSx }}>
                Add New Event
              </DialogTitle>
              <Box>
                <IconButton
                  sx={{ ...customCalenderStyle.closeSx }}
                  onClick={() => setOpenModal(false)}
                >
                  <CloseIcon />
                </IconButton>{' '}
              </Box>
              <DialogContent sx={{ ...customCalenderStyle.bodyContentSx }}>
                <Select
                  sx={{ width: '100%', mb: 2 }}
                  value={selectedCategory}
                  onChange={OnEventChange}
                  defaultValue={selectedCategory || eventCategories[0].name}
                >
                  {eventCategories.map((category: any, index: number) => (
                    <MenuItem key={index} value={category.name}>
                      {category.name}
                    </MenuItem>
                  ))}
                </Select>
                <TextField
                  label="Event Title"
                  value={eventValue}
                  onChange={(e) => addEventChange(e.target.value)}
                  fullWidth
                  inputProps={{
                    style: { backgroundColor: '#fff' },
                  }}
                />
              </DialogContent>
              <DialogActions>
                <Button
                  onClick={handleSelectedDates}
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

Calender.defaultProps = {
  commanLeave : [],
  calenderList : [],
  events : [],
  select : '',
  eventValue : '',
  selectedCategory : '',
  SearchCalenderList : '',
  eventCategories : [],
  nationalLeaveDates : [],
  OnEventChange : () => false,
  onCalenderListClick :() => false,
  onEventselectedDate : () => false,
  onEventDelete : () => false,
  onEventEdit : () => false,
  customCalenderListSx :{},
  addEventChange : () => false,
  onCalenderSearch : () => false,
  addCalenderList:()=>false,
  onDeleteCalenderList: () => false,
  onEditCalenderList: () => false,
  calenderCellackgroundColor : '#FAFAFA',
  calendercellBackgroundColor:"#E9E9E9",

};
