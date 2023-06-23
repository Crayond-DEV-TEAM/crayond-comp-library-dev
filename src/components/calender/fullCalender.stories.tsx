import React, { useState } from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Calender } from './index';
import moment from 'moment';
import { EventApi } from '@fullcalendar/core';

interface EventData {
  id: string;
  title: string;
  allDay: boolean;
  start: string;
  end: string;
  deletable: boolean;
}

export default {
  title: 'Components/Calendar',
  component: Calender,
} as ComponentMeta<typeof Calender>;

const Template: ComponentStory<typeof Calender> = (args) => {
  const [select, setSelect] = useState<number>(0);
  const [events, setEvents] = useState<EventData[]>([]);
  const [modalTitle, setModalTitle] = useState('');
  const [editEvent, setEditEvent] = useState<EventApi | null>(null);
  const eventCategories = [
    { name: 'Event Planning', color: '#DBE9FF' },
    { name: 'Campaign', color: '#F4DBFF' },
    { name: 'Birthday Calendar', color: '#DBFFE5' },
  ];
  const [selectedCategory, setSelectedCategory] = useState<string | null>(
    eventCategories?.[0]?.name
  );

  const onCalenderListClick = (index: number) => {
    setSelect(index);
  };

  const OnEventChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedCategory(event.target.value);
  };

  const generateUniqueId = (): string => {
    return Math.random().toString(36).substr(2, 9);
  };

  const onEventselectedDate = (date: any) => {
    if (modalTitle.trim() !== '') {
      const start = new Date(date.start);
      const end = new Date(date.end);
      const updatedEvent: EventData = {
        id: generateUniqueId(),
        title: modalTitle,
        allDay: false,
        start: moment(start).format('YYYY-MM-DD'),
        end: moment(end).format('YYYY-MM-DD'),
        deletable: true,
      };
      const updatedEvents = editEvent
        ? events.map((event) =>
            event.id === editEvent.id ? updatedEvent : event
          )
        : [...events, updatedEvent];

      setEvents(updatedEvents);
      setModalTitle('');
      setEditEvent(null);
    }
  };

  const onEventDelete = (event: any) => {
    const updatedEvents = events.filter((evt) => evt.id !== event.id);
    setEvents(updatedEvents);
    setEditEvent(null);
  };

  const onEventEdit = (event: any) => {
    setEditEvent(event);
    setModalTitle(event);
  };

  const addEventChange = (e: any) => {
    setModalTitle(e);
  };

  return (
    <Calender
      {...args}
      select={select}
      eventValue={modalTitle}
      events={events}
      onEventDelete={onEventDelete}
      addEventChange={addEventChange}
      onEventEdit={onEventEdit}
      selectedCategory={selectedCategory}
      onEventselectedDate={onEventselectedDate}
      onCalenderListClick={onCalenderListClick}
      OnEventChange={OnEventChange}
    />
  );
};

export const Primary = Template.bind({});
Primary.args = {
  select: 0, // Initial value for the select state
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
  commanLeave: [
    {
      daysOfWeek: [0, 6],
      background: '#FAFAFA',
      rendering: 'background',
      color: '#FAFAFA',
      display: 'background',
    },
  ],
  nationalLeaveDates: [
    {
      title: 'holiday',
      start: '2023-06-14',
      end: '2023-06-14',
      rendering: 'background',
      color: '#FAFAFA',
      display: 'background',
    },
    {
      title: 'holiday',
      start: '2023-05-14',
      end: '2023-05-14',
      rendering: 'background',
      color: '#FAFAFA',
      display: 'background',
    },
  ],
  onCalenderListClick: (index: number) => {
    console.log('Clicked index:', index);
  },
  OnEventChange: (event: React.ChangeEvent<HTMLSelectElement>) => {
    console.log('event', event);
  },
  onEventselectedDate: (date: EventData) => {
    console.log('eventselect', date);
  },
  addEventChange: (e: any) => {
    console.log('e', e);
  },
};
