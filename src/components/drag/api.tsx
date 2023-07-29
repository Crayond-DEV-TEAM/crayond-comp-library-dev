import React from 'react';
import AddNewButtonIcon from '../../assets/addNewBtn';
import ActiveNotification from '../../assets/activeNotification';
import MoreIcon from '../../assets/moreIcon';
import NormalNotification from '../../assets/normalNotification';

export interface cardItemProp {
  id: string;
  title: string;
  status: string;
  cardTitle: string;
  isActive: boolean;
  notifyIcon: any;
  moreIcon: any;
  subTitles: {
    label: string;
    bgColor: string;
    borderColor: string;
    textColor: string;
  }[];

  images: { img: string; height: number; width: number }[];
  created_at: string;
}
[];

export interface ButtonProps {
  icon: React.ReactNode;
  buttonLabel: string;
}
export interface ColumnType {
  id: string;
  title: string;
  bottomButton: {
    buttonLabel: string;
    icon: any;
  };
  tasks: any[];
}

export interface TaskBoardType {
  columns: ColumnType[];
}

const card1 = [
  {
    content: 'Henry Dyson J',
    id: "1",
    title: 'title1',
    status: 'Progress',
    cardTitle: 'Progress Create Components',
    isActive: true,
    notifyIcon: <ActiveNotification />,
    moreIcon: <MoreIcon />,
    subTitles: [
      {
        label: '# design',
        bgColor: '',
        borderColor: '#D3D3D3',
        textColor: '',
      },
      {
        label: 'Design System',
        bgColor: '#DEE6F9',
        borderColor: '',
        textColor: '#2B5ED6',
      },
    ],
    images: [
      { img: '/sample.jpg', height: '', width: '' },
      { img: '/sample.jpg', height: '', width: '' },
    ],
    created_at: 'On 17 Mar, 23',
  },
  {
    id: "2",
    title: 'title2',
    status: 'Progress',
    cardTitle: 'Progress Create Components',
    isActive: true,
    notifyIcon: <NormalNotification />,
    moreIcon: <MoreIcon />,
    subTitles: [
      {
        label: '# design',
        bgColor: '',
        borderColor: '#D3D3D3',
        textColor: '',
      },
      {
        label: 'Design System',
        bgColor: '#DEE6F9',
        borderColor: '',
        textColor: '#2B5ED6',
      },
    ],
    images: [
      { img: '/sample.jpg', height: '', width: '' },
      { img: '/sample.jpg', height: '', width: '' },
    ],
    created_at: 'On 17 Mar, 23',
  },
  {
    id: "3",
    title: 'title3',
    status: 'Progress',
    cardTitle: 'Progress Create Components',
    isActive: true,
    notifyIcon: <NormalNotification />,
    moreIcon: <MoreIcon />,
    subTitles: [
      {
        label: '# design',
        bgColor: '',
        borderColor: '#D3D3D3',
        textColor: '',
      },
      {
        label: 'Design System',
        bgColor: '#DEE6F9',
        borderColor: '',
        textColor: '#2B5ED6',
      },
    ],
    images: [
      { img: '/sample.jpg', height: '', width: '' },
      { img: '/sample.jpg', height: '', width: '' },
    ],
    created_at: 'On 17 Mar, 23',
  },
];

const card2 =[
  {
    id:"4",
    title: 'title4',
    status: 'Pending',
    cardTitle: 'Pending Create Components',
    isActive: true,
    notifyIcon: <ActiveNotification />,
    moreIcon: <MoreIcon />,
    subTitles: [
      {
        label: '# design',
        bgColor: '',
        borderColor: '#D3D3D3',
        textColor: '',
      },
      {
        label: 'Design System',
        bgColor: '#DEE6F9',
        borderColor: '',
        textColor: '#2B5ED6',
      },
    ],
    images: [
      { img: '/sample.jpg', height: '', width: '' },
      { img: '/sample.jpg', height: '', width: '' },
    ],
    created_at: 'On 17 Mar, 23',
  },
  {
    id: "5",
    title: 'title5',
    status: 'Pending',
    cardTitle: 'Pending Create Components',
    isActive: true,
    notifyIcon: <NormalNotification />,
    moreIcon: <MoreIcon />,
    subTitles: [
      {
        label: '# design',
        bgColor: '',
        borderColor: '#D3D3D3',
        textColor: '',
      },
      {
        label: 'Design System',
        bgColor: '#DEE6F9',
        borderColor: '',
        textColor: '#2B5ED6',
      },
    ],
    images: [
      { img: '/sample.jpg', height: '', width: '' },
      { img: '/sample.jpg', height: '', width: '' },
    ],
    created_at: 'On 17 Mar, 23',
  },
  {
    id:"6",
    title: 'title3',
    status: 'Completed',
    cardTitle: ' Completed Create Components',
    isActive: true,
    notifyIcon: <NormalNotification />,
    moreIcon: <MoreIcon />,
    subTitles: [
      {
        label: '# design',
        bgColor: '',
        borderColor: '#D3D3D3',
        textColor: '',
      },
      {
        label: 'Design System',
        bgColor: '#DEE6F9',
        borderColor: '',
        textColor: '#2B5ED6',
      },
    ],
    images: [
      { img: '/sample.jpg', height: '', width: '' },
      { img: '/sample.jpg', height: '', width: '' },
    ],
    created_at: 'On 17 Mar, 23',
  },
]

const card3 =[
  {
    id: "7",
    title: 'title3',
    status: 'Completed',
    cardTitle: 'Completed Create Components',
    isActive: true,
    notifyIcon: <NormalNotification />,
    moreIcon: <MoreIcon />,
    subTitles: [
      {
        label: '# design',
        bgColor: '',
        borderColor: '#D3D3D3',
        textColor: '',
      },
      {
        label: 'Design System',
        bgColor: '#DEE6F9',
        borderColor: '',
        textColor: '#2B5ED6',
      },
    ],
    images: [
      { img: '/sample.jpg', height: '', width: '' },
      { img: '/sample.jpg', height: '', width: '' },
    ],
    created_at: 'On 17 Mar, 23',
  },
  {
    id: "8",
    title: 'title3',
    status: 'Completed',
    cardTitle: 'Completed Create Components',
    isActive: true,
    notifyIcon: <ActiveNotification />,
    moreIcon: <MoreIcon />,
    subTitles: [
      {
        label: '# design',
        bgColor: '',
        borderColor: '#D3D3D3',
        textColor: '',
      },
      {
        label: 'Design System',
        bgColor: '#DEE6F9',
        borderColor: '',
        textColor: '#2B5ED6',
      },
    ],
    images: [
      { img: '/sample.jpg', height: '', width: '' },
      { img: '/sample.jpg', height: '', width: '' },
    ],
    created_at: 'On 17 Mar, 23',
  },
  {
    id: "9",
    title: 'title3',
    status: 'Pending',
    cardTitle: 'Pending Create Components',
    isActive: true,
    notifyIcon: <NormalNotification />,
    moreIcon: <MoreIcon />,
    subTitles: [
      {
        label: '# design',
        bgColor: '',
        borderColor: '#D3D3D3',
        textColor: '',
      },
      {
        label: 'Design System',
        bgColor: '#DEE6F9',
        borderColor: '',
        textColor: '#2B5ED6',
      },
    ],
    images: [
      { img: '/sample.jpg', height: '', width: '' },
      { img: '/sample.jpg', height: '', width: '' },
    ],
    created_at: 'On 17 Mar, 23',
  },
]

export const api: TaskBoardType = {
  columns: [
    {
      id:"1",
      title: 'Processing',
      bottomButton: {
        buttonLabel: 'string',
        icon: <AddNewButtonIcon />,
      },
      tasks: card1,
    },
    {
      id: "2",
      title: 'Pending',
      bottomButton: {
        buttonLabel: 'string',
        icon: <AddNewButtonIcon />,
      },
      tasks:card2,
    },
    {
      id: "3",
      title: 'Completed',
      bottomButton: {
        buttonLabel: 'string',
        icon: <AddNewButtonIcon />,
      },
      tasks:card3,
    },
   
  ],
};
