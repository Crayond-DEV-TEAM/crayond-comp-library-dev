import React, { useState } from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { CustomCalender } from './index';
import { EventApi } from '@fullcalendar/core';
interface EventData {
  id: string | number;
  title: string;
  allDay: boolean;
  start: Date | null;
  end: Date | null;
  startTime: string | null;
  endTime: string | null;
  deletable: boolean;
  eventRemaindTime: string;
  eventRemind: string;
  type: string;
}
interface calenderLists {
  calenderTitle: string;
}

export default {
  title: 'Components/CustomCalender',
  component: CustomCalender,
} as ComponentMeta<typeof CustomCalender>;

const Template: ComponentStory<typeof CustomCalender> = (args) => {
  const [select, setSelect] = useState<number>(0);
  const [events, setEventsList] = useState<EventData[]>([]);
  const [modalTitle, setModalTitle] = useState('');
  const [editEvent, setEditEvent] = useState<EventApi | null>(null);
  const [calenderList, setCalenderList] = useState([
    { calenderTitle: 'Default Calendar' },
    { calenderTitle: 'Event Planning' },
    { calenderTitle: 'Campaign' },
    { calenderTitle: 'Birthday Calendar' },
  ]);
  const eventCategories = [
    { name: 'Default Calendar', color: '#DBE9FF' },
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

  const onEventDateSelect = (setEvents: EventData) => {
    const updatedEvent = {
      id: generateUniqueId(),
      title: setEvents?.title,
      allDay: setEvents?.allDay,
      start: setEvents?.start,
      end: setEvents?.end,
      deletable: setEvents?.deletable,
      eventRemaindTime: setEvents?.eventRemaindTime,
      eventRemind: setEvents?.eventRemind,
      startTime: setEvents?.startTime,
      endTime: setEvents?.endTime,
      type: setEvents?.type,
    };
    const updatedEvents = editEvent
      ? events.map((event: EventData) =>
          event?.id === editEvent.id ? updatedEvent : event
        )
      : [...events, updatedEvent];

    setEventsList((prevState: EventData[]) => [...prevState, ...updatedEvents]);

    setModalTitle('');
    setEditEvent(null);
  };

  const onEventDelete = (event: EventData) => {
    const updatedEvents = events.filter((evt: any) => evt?.id !== event.id);
    setEventsList(updatedEvents);
    setEditEvent(null);
  };

  const onEventEdit = (event: EventData) => {
    console.log(event,'event')
  };

  const addCalenderList = () => {
    const newCalender = { calenderTitle: 'New Calendar' };
    setCalenderList((prevCalenderList) => [...prevCalenderList, newCalender]);
  };

  return (
    <CustomCalender
      {...args}
      select={select}
      eventsData={events}
      AddEventValue={modalTitle}
      onEventsDelete={onEventDelete}
      onEventsEdit={onEventEdit}
      eventCategories={eventCategories}
      OnEventAdd={onEventDateSelect}
      onCalenderListClick={onCalenderListClick}
      addCalenderList={addCalenderList}
      calenderList={calenderList}
    />
  );
};

export const Primary = Template.bind({});
Primary.args = {
  select: 0,
  CommonLeaves: ['monday', 'sunday'],
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
      backgroundColor: '#EFEEFB',
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
  onDeleteCalenderList: (data: calenderLists, index: number) => {
    console.log(data, 'data'), console.log(index, 'index');
  },
};
