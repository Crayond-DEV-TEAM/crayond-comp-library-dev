import React, { useState } from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { CustomCalender } from './index';
import { CustomizeEventProps, EventData } from './interface';
// import moment from 'moment';



export default {
  title: 'Components/CustomCalender',
  component: CustomCalender,
} as ComponentMeta<typeof CustomCalender>;

const Template: ComponentStory<typeof CustomCalender> = (args) => {
  const [select, setSelect] = useState<number>(0);
  const remainderOption = [
    { value: 'min', label: 'Min' },
    { value: 'hour', label: 'Hours' },
    { value: 'months', label: 'Months' },
  ]
  const [selectedDay, setSelectedDay] = useState(remainderOption?.[0]?.value);
  const [events, setEventsList] = useState<EventData[]>([]);
  const [eventRemainder, setEventRemainder] = useState<number>(0);
  const [startTime, setStartTime] = useState('');
  const [endTime, setEndTime] = useState<string>('');
  const [editEvent, setEditEvent] = useState<boolean| EventData>(false);
  const [editValue, setEditValue] = useState('');
  const [selectedCategory, setSelectedCategory] = useState(
    "Default Calendar"
  );
  const [modalContent, setModalContent] = useState<{
    modalTitle?: string;
    modalDescription?: string;
  }>({
    modalTitle: '',
    modalDescription: '',
  });
  const [calenderList, setCalenderList] = useState([
    { calenderTitle: 'Default Calendar' },
    { calenderTitle: 'Event Planning' },
    { calenderTitle: 'Campaign' },
    { calenderTitle: 'Birthday Calendar' },
  ]);

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
    setEndTime('00:00');
    setModalContent({ modalTitle: '', modalDescription: '' });
    setEditEvent(false)
    setSelectedCategory( "Default Calendar")

  };

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
    setEndTime('00:00');
  };

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
 const  onCustomizeEvent = (e:CustomizeEventProps) => {
   console.log(e,'customizeevent')
 }

  
  return (
    <CustomCalender
      {...args}
      select={select}
      eventsData={events}
      editListValue={editValue}
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
      onSelectEventFunc={onSelectEventFunc}
      calenderIconSx={{ml:'6px',mt:'2px'}}
      onHandleDateSelect={onHandleDateSelect}
      onCustomizeEvent={onCustomizeEvent}
    />
  );
};

export const Primary = Template.bind({});
Primary.args = {
  select: 0,
  CommonLeaves: ['saturday', 'sunday'],
  calenderTitle:'Calender',
  nationalLeaves: [
    { date: '2023-06-14', title: 'deepavali' },
    { date: '2023-06-23', title: 'pongal' },
    { date: '2023-06-27', title: 'Holiday Enjoy' },
    { date: '2023-09-27', title: 'Holiday Enjoy' },
  ],
  eventCategories: [
    { name: 'Default Calendar', color: '#DBE9FF' },
    { name: 'Event Planning', color: '#DBE9FF' },
    { name: 'Campaign', color: '#F4DBFF' },
    { name: 'Birthday Calendar', color: '#DBFFE5' },
  ],
  calenderList: [
    { calenderTitle: 'Default Calendar' },
    { calenderTitle: 'Event Planning' },
    { calenderTitle: 'Campaign' },
    { calenderTitle: 'Birthday Calendar' },
  ],
  styleProps: {
    layoutBorderStyle: {
      borderColor: '#E9E9E9',
    },
    beforeMonthStyle: {
      backgroundColor: '#FAFAFA',
    },
    todayDateStyle: {
      backgroundColor: '#eaeaea',
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
  },

  remainderOption: [
    { value: 'min', label: 'Min' },
    { value: 'hour', label: 'Hours' },
    { value: 'months', label: 'Months' },
  ],

  nationalLeaveBgColor: '#efeefb',
  calenderActiveBgColor: '#EFEEFB',
  calenderActiveColor: '#665CD7',
  eventTitleHeadStyle: {
    fontSize: '14px',
    color: '#000',
  },

  // ReactBig Calender Search
  SearchCalender: '',
  onCalenderSearch: () => {
    // search in List Calender
  },

  // CalenderList
  SearchCalenderList: '',
  onCalenderListSearch: () => {
    // search in total Calender
  },

  customHeadStyle: {
    color: '#665CD7',
    ml: '8px',
  },
  addEventBtnSx: {
    backgroundColor: '#665CD7',
  },
  onCalenderListClick: (index: number) => {
    console.log('Clicked index:', index);
  },
  OnEventChange: (event: React.ChangeEvent<HTMLSelectElement>) => {
    console.log('event', event);
  },
  onEventsDelete: (data: EventData) => {
    console.log(data, 'data');
  },
  onEventsEdit: (data: EventData) => {
    console.log(data, 'data');
  },
  OnEventAdd: (data: EventData) => {
    console.log(data, 'data');
  },
  onEventDialogChange:(value:any,key:string) =>{
    console.log(value, 'data'), console.log(key, 'index');
  },
  onSelectEventFunc:(e:EventData)=>{
    console.log(e,'e')
  },
  onSaveCalenderList : () => {
    alert('calenderList Edit Function Here !!!')
   }
   ,
  onDeleteCalenderList :() => {
     alert('calenderList Delete Function Here !!!')
 
   },
};
