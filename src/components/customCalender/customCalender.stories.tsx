import React, { useState } from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { CustomCalender } from './index';
import { EventApi } from '@fullcalendar/core';



export default {
  title: 'Components/CustomCalender',
  component: CustomCalender,
} as ComponentMeta<typeof CustomCalender>;

const Template: ComponentStory<typeof CustomCalender> = (args) => {
  const [select, setSelect] = useState<number>(0);
  const [events, setEvents] = useState([]);
  const [modalTitle, setModalTitle] = useState('');
  const [editEvent, setEditEvent] = useState<EventApi | null>(null);
  const eventCategories = [
    { name: 'Event Planning', color: '#DBE9FF' },
    { name: 'Campaign', color: '#F4DBFF' },
    { name: 'Birthday Calendar', color: '#DBFFE5' },
  ];

  const onCalenderListClick = (index: number) => {
    setSelect(index);
  };

  const generateUniqueId = (): string => {
    return Math.random().toString(36).substr(2, 9);
  };

  const onEventDateSelect = (setEvents: any) => {
      const updatedEvent = {
          id: generateUniqueId(),
          title: modalTitle,
          allDay: setEvents?.allDay,
          start: setEvents?.start,
          end: setEvents?.end,
          deletable: setEvents?.deletable,
          eventRemaindTime: setEvents?.eventRemainder,
          eventRemind: setEvents?.selectedDay,
          startTime: setEvents?.startTime,
          endTime: setEvents?.endTime,
      };
      const updatedEvents = editEvent
        ? events.map((event:any) =>
            event?.id === editEvent.id ? updatedEvent : event
          )
        : [...events, updatedEvent];

          setEvents((prevState:any) => [...prevState, updatedEvents]);

      setModalTitle('');
      setEditEvent(null);
    
  };

  const onEventDelete = (event: any) => {
    const updatedEvents = events.filter((evt:any) => evt?.id !== event.id);
    setEvents(updatedEvents);
    setEditEvent(null);
  };

  const onEventEdit = (event: any) => {
    setEditEvent(event);
    setModalTitle(event);
  };

  return (
    <CustomCalender
      {...args}
      select={select}
      eventsData={events}
      AddEventValue={modalTitle}
      onEventsDelete={onEventDelete}
      onEventEdit={onEventEdit}
      eventCategories={eventCategories}
      OnEventAdd={onEventDateSelect}
      onCalenderListClick={onCalenderListClick}
    //   onCalenderSearch={onCalenderSearch}
    />
  );
};

export const Primary = Template.bind({});
Primary.args = {
  select: 0, 

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
  nationalLeaves:[
    { date: '2023-06-14', title: 'deepavali' },
    { date: '2023-06-23', title: 'pongal' },
    { date: '2023-06-27', title: 'Holiday Enjoy' },
    { date: '2023-09-27', title: 'Holiday Enjoy' },
  ],
CommonLeaves :['monday', 'sunday'],

  styleProps:{
    layoutBorderStyle:{
      borderColor:'#E9E9E9',
   },
   beforeMonthStyle:{
        backgroundColor:'#FAFAFA',
   },
   todayDateStyle:{
       backgroundColor:'#EFEEFB',
   },
   addEventStyle:{
       color:'#665CD7',
   },
   tabStyle:{
       backgroundColor:'#665cd7',
       color:'#fff',
       borderColor:'##665cd7',
       fontSize:'14px',
       fontWeight:'600',
   },
   headStyle:{
       color:'#000',
       fontSize:'14px',
       fontWeight:'500',
   },
   fontFamily:{
   fontFamily: 'Poppins, sans-serif',
   }
  },

  remainderOption:[{value:'min',label:'Min'},{value:'hour',label:'Hours'},{value:'months',label:'Months'}],

  nationalLeaveBgColor:'#efeefb',

  // onCalenderListClick: (index: number) => {
  //   console.log('Clicked index:', index);
  // },
  // OnEventChange: (event: React.ChangeEvent<HTMLSelectElement>) => {
  //   console.log('event', event);
  // },

  // addEventChange: (e: any) => {
  //   console.log('e', e);
  // },
  // onCalenderSearch :(e:any)=>{
  //   console.log('e', e);
  // }
};
