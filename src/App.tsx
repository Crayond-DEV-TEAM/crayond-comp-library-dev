import '@fontsource/poppins/400.css';
import '@fontsource/poppins/500.css';
import '@fontsource/poppins/600.css';
import '@fontsource/poppins/700.css';
import {
  // Dialog,DialogContent,TextField,IconButton,
  Box,
  // Select,MenuItem
} from '@mui/material';
import { CustomCalender } from './components/customCalender';
// import moment from 'moment';
import {  useState } from 'react';
export interface EventData {
  id: string | number;
  title: string;
  des: string;
  allDay: boolean;
  type: string;
  start: Date | null;
  end: Date | null;
  startTime: string ;
  endTime: string ;
  deletable: boolean;
  eventRemaindTime: number;
  eventRemind: string;
}

function App() {
// calender component Function
const [select, setSelect] = useState<number>(0);
const [events, setEventsList] = useState<EventData[]>([]);
const [eventRemainder, setEventRemainder] = useState<number>(0);
const [startTime, setStartTime] = useState("");
// const [modalTitle,setModalTitle]=useState('')
const [endTime, setEndTime] = useState<string>("");
const [editEvent, setEditEvent] = useState<boolean| EventData>(false);
const [editValue, setEditValue] = useState('');
const [modalContent, setModalContent] = useState<{
  modalTitle?: string;
  modalDescription?: string;
}>({
  modalTitle: '',
  modalDescription: '',
});
// const [selectedRange, setSelectedRange] = useState<{
//   start?: Date | null;
//   end?: Date | null;
//   action?: string;
// }>({ start: null, end: null, action: '' });

// const selectedStartDate = moment(selectedRange?.start);
// const [endHourss, endMinutess] = startTime.split(':');


// const start = selectedStartDate
// .clone()
// .set({
//   hour: parseInt(endHourss, 10),
//   minute: parseInt(endMinutess, 10),
//   second: 0,
// })
// .toDate();

// const selectedEndDate = moment(selectedRange?.end);
// const [endHours, endMinutes] = endTime.split(':');
// const end = selectedEndDate
// .clone()
// .set({
//   hour: parseInt(endHours, 10),
//   minute: parseInt(endMinutes, 10),
//   second: 0,
// })
// .toDate();

// const [open ,setOpenModal]=useState(false)
const [calenderList, setCalenderList] = useState([
  { calenderTitle: 'Default Calendar' },
  { calenderTitle: 'Event Planning' },
  { calenderTitle: 'Campaign' },
  { calenderTitle: 'Birthday Calendar' },
]);
// const [openModal, setOpenModal] = useState(false);

const eventCategories = [
  { name: 'Default Calendar', color: '#DBE9FF' },
  { name: 'Event Planning', color: '#DBE9FF' },
  { name: 'Campaign', color: '#F4DBFF' },
  { name: 'Birthday Calendar', color: '#DBFFE5' },
];

const [selectedCategory, setSelectedCategory] = useState("");


const remainderOption = [
  { value: 'min', label: 'Min' },
  { value: 'hour', label: 'Hours' },
  { value: 'months', label: 'Months' },
];
const [selectedDay, setSelectedDay] = useState(remainderOption?.[0]?.value);

const onCalenderListClick = (index: number) => {
  setSelect(index);
};


const generateUniqueId = (): string => {
  return Math.random().toString(36).substr(2, 9);
};

const onEventDateSelect = (setEventData: EventData) => {
  const updatedEvent = {
    id: generateUniqueId(),
    title: setEventData?.title,
    start: setEventData?.start,
    des:setEventData?.des,
    end: setEventData?.end,
    allDay:setEventData?.allDay,
    startTime: setEventData?.startTime,
    endTime: setEventData?.endTime,
    deletable: setEventData?.deletable,
    eventRemaindTime: setEventData?.eventRemaindTime,
    eventRemind: setEventData?.eventRemind,
    type: setEventData?.type,
  };

  if(editEvent && typeof editEvent !== 'boolean') {
    setEventsList((prevEvents: EventData[]) =>
      prevEvents.map((event: EventData) =>
        event.id === editEvent.id ? { ...event, ...updatedEvent } : event
      )
    );
  }
  else {
    setEventsList((prevState: EventData[]) => [...prevState, updatedEvent]);
  }
  setEventRemainder(0);
  setStartTime('');
  setEndTime('');
  setModalContent({ modalTitle: '', modalDescription: '' });
  setEditEvent(false)
};

 // For customize Events
// const onEventDateSelectEvent = () => {
//   const updatedEvent = {
//     id: generateUniqueId(),
//     title: modalTitle,
//     type: selectedCategory,
//     startTime:startTime,
//     endTime:endTime,
//     start:start,
//     end:end,
//     allDay:false
    
//   };

//   if(editEvent && typeof editEvent !== 'boolean') {
//     setEventsList((prevEvents:any) =>
//       prevEvents.map((event: any) =>
//         event.id === editEvent.id ? { ...event, ...updatedEvent } : event
//       )
//     );
//   }
//   else {
//     setEventsList((prevState: any) => [...prevState, updatedEvent]);
//   } 
//   setOpenModal(false)
//   // setSelectedCategory('')
// };

const onEventsEdit = (e: EventData) => {
  const inx = events.findIndex((x:EventData) => x.id === e.id);
  events[inx] = {...e,};
  setEventsList([...events]);
  setModalContent({ modalTitle: e?.title, modalDescription: e?.des });
  setEventRemainder( e?.eventRemaindTime)
  setStartTime(e?.startTime)
  setEndTime(e?.endTime)
  setSelectedCategory(e?.type)
  setSelectedDay(e?.eventRemind)
}; 

const onEventDelete = (event: EventData) => {
    const updatedEvents = events.filter((evt: EventData) => evt.id !== event.id);
    setEventsList(updatedEvents);
    setModalContent({ modalTitle: '', modalDescription: '' });
    setEventRemainder(0);
  setStartTime('');
  setEndTime('');
};
 

// const onEventEdit = (event: any) => {
//   setEditEvent(event);
// };

const addCalenderList = () => {
  const newCalender = { calenderTitle: 'New Calendar' };
  setCalenderList((prevCalenderList) => [...prevCalenderList, newCalender]);
};

const closeEventDialog = () => {
  setModalContent({modalTitle:'',modalDescription:''})
  setEventRemainder(0);
  setStartTime('');
  setEndTime('');
};

const onEventDialogChange = (value: any, key: string) => {
  if (key === 'modalTitle' || key === 'modalDescription') {
    setModalContent({
      ...modalContent,
      [key]: value?.target?.value,
    });
  }
  if (key === 'selectEvent') {
    setSelectedCategory(value.target.value);
  }
  if (key === 'startTime') {
    setStartTime(value?.target?.value);
  }
  if (key === 'endTime') {
    setEndTime(value.target.value);
  }
  if (key === 'eventRemainder') {
    const values = value.target.value;
    const parsedValue = parseInt(values, 10);
    if (!isNaN(parsedValue)) {
      setEventRemainder(parsedValue);
    }
  }
  if (key === 'increase') {
    setEventRemainder(eventRemainder + 1);
  }
  if (key === 'decrease') {
    if (eventRemainder > 0) {
      setEventRemainder(eventRemainder - 1);
    }
  }
  if (key === 'dayOption') {
    setSelectedDay(value.target.value);
  }
};

const onSelectEventFunc = (e:EventData) => {
  //  setOpenModal(true)
   setStartTime(e?.startTime)
   setEndTime(e?.endTime)
   setEditEvent(e)

};

const handleTextChange = (event:any) => {
  setEditValue(event.target.value);
};

const onHandleDateSelect=()=>{
  setStartTime('');
  setEndTime('');
  setSelectedCategory('')
 }

//  const onCustomizeEvent = (data: CustomizeEventProps) => {
//   setOpenModal(true);
//   const { action, start, slots } = data;
//   const multipleDate: Date = slots[slots.length - 1] as Date;

//   if (action === 'click') {
//     setSelectedRange({ start, end: multipleDate, action });
//   } else if (action === 'select') {
//     setSelectedRange({ start, end: multipleDate, action });
//   }

// };

const nationalLeaves = [
  { date: '2023-07-14', title: 'Deepavali' },
  { date: '2023-07-23', title: 'pongal' },
  { date: '2023-07-27', title: 'Holiday Enjoy' },
];

const CommonLeaves = ['saturday', 'sunday'];

const styleProps = {
  layoutBorderStyle: {
    borderColor: '#E9E9E9',
  },
  beforeMonthStyle: {
    backgroundColor: '#FAFAFA',
  },
  todayDateStyle: {
    backgroundColor: '#E9E9E9',
  },
  addEventStyle: {
    color: '#665CD7',
  },
  tabStyle: {
    backgroundColor: '#665cd7',
    color: '#fff',
    borderColor: '##665cd7',
    fontSize: '14px',
    fontWeight: '600',
  },
  headStyle: {
    color: '#000',
    fontSize: '14px',
    fontWeight: '500',
  },
  fontFamily: {
    fontFamily: 'Poppins, sans-serif',
  },
};

 
  return (
    <Box sx={{height:'100vh',width:'100%'}}>
       <CustomCalender
        select={select}
        styleProps={styleProps}
        eventsData={ events }
        CommonLeaves={CommonLeaves}
        editListValue={editValue}
        remainderOption={remainderOption}
        nationalLeaves={nationalLeaves}
        onEventsDelete={onEventDelete}
        handleEventChange={handleTextChange}
        onEventsEdit={onEventsEdit}
        OnEventAdd={onEventDateSelect}
        onCalenderListClick={onCalenderListClick}
        addCalenderList={addCalenderList}
        calenderList={calenderList}
        closeEventDialog={closeEventDialog}
        onEventDialogChange={onEventDialogChange}
        eventDialogTitle={modalContent?.modalTitle}
        eventDialogDescription={modalContent?.modalDescription}
        selectedCategoryDialog={selectedCategory}
        startTimeDialog={startTime}
        endTimeDialog={endTime}
        eventRemainder={eventRemainder}
        selectedDay={selectedDay}
        eventCategories={eventCategories}
        isEventModal={true}
        onSelectEventFunc={onSelectEventFunc}
        onHandleDateSelect={onHandleDateSelect}
        // onCustomizeEvent={onCustomizeEvent}  
            />
      {/* <Dialog open={open}>
        <DialogContent>
                 <>
                 <TextField
                    placeholder="Add Event"
                    value={modalTitle}
                    onChange={(e) => setModalTitle(e.target.value)}
                    fullWidth
                    inputProps={{
                      style: { backgroundColor: '#fff' },
                    }}
                  />
                  <Select
                    sx={{
                    
                      width: '100%',
                    }}
                    value={selectedCategory}
                    onChange={(event:any) =>
                      onEventDialogChange(event, 'selectEvent')
                    }
                    IconComponent={KeyboardArrowUpIcon}
                  >
                    {eventCategories.map(
                      (category:any, index: number) => (
                        <MenuItem
                          key={index}
                          value={category.name}
                         
                        >
                          {category.name}
                        </MenuItem>
                      )
                    )}
                  </Select>
                  <IconButton onClick={onEventDateSelectEvent}>+</IconButton></>
        </DialogContent>
      </Dialog> */}
    </Box>
  );
}

export default App;
