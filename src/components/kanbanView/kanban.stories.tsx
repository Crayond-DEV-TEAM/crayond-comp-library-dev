import { ComponentStory, ComponentMeta } from '@storybook/react';
import KanbanView from './kanbanView';

export default {
  title: 'components/KanbanView',
  component: KanbanView,
} as ComponentMeta<typeof KanbanView>;

const Template: ComponentStory<typeof KanbanView> = (args) => (
  <KanbanView {...args} />
);

export const Primary = Template.bind({});
Primary.args = {
  cardContainerStyle:{},
  cardRootStyle:{},
  childCardStyle:{},
  // cardContainerData:[
  //   {title:"Progress"},
  //   {title:"Pending"},
  //   {title:"Complete"},
  // ],
  cardData: [
    {
      id: 9,
      title: 'title3',
      status: 'Pending',
      cardTitle: 'Create Components',
      isActive: true,
      notifyIcon: <img src="/activeNotify.svg" alt="noti" />,
      moreIcon: <img src="/more.svg" alt="more" />,
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
      id: 1,
      title: 'title1',
      status: 'Progress',
      cardTitle: 'Create Components',
      isActive: true,
      notifyIcon: <img src="/notifi.svg" alt="noti" />,
      moreIcon: <img src="/more.svg" alt="more" />,
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
      id: 2,
      title: 'title2',
      status: 'Progress',
      cardTitle: 'Create Components',
      isActive: true,
      notifyIcon: <img src="/activeNotify.svg" alt="noti" />,
      moreIcon: <img src="/more.svg" alt="more" />,
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
      id: 3,
      title: 'title3',
      status: 'Progress',
      cardTitle: 'Create Components',
      isActive: true,
      notifyIcon: <img src="/notifi.svg" alt="noti" />,
      moreIcon: <img src="/more.svg" alt="more" />,
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
      id: 4,
      title: 'title4',
      status: 'Pending',
      cardTitle: 'Create Components',
      isActive: true,
      notifyIcon: <img src="/activeNotify.svg" alt="noti" />,
      moreIcon: <img src="/more.svg" alt="more" />,
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
      id: 5,
      title: 'title5',
      status: 'Pending',
      cardTitle: 'Create Components',
      isActive: true,
      notifyIcon: <img src="/notifi.svg" alt="noti" />,
      moreIcon: <img src="/more.svg" alt="more" />,
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
      id: 6,
      title: 'title3',
      status: 'Completed',
      cardTitle: 'Create Components',
      isActive: true,
      notifyIcon: <img src="/notifi.svg" alt="noti" />,
      moreIcon: <img src="/more.svg" alt="more" />,
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
      id: 7,
      title: 'title3',
      status: 'Completed',
      cardTitle: 'Create Components',
      isActive: true,
      notifyIcon: <img src="/notifi.svg" alt="noti" />,
      moreIcon: <img src="/more.svg" alt="more" />,
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
      id: 8,
      title: 'title3',
      status: 'Completed',
      cardTitle: 'Create Components',
      isActive: true,
      notifyIcon: <img src="/activeNotify.svg" alt="noti" />,
      moreIcon: <img src="/more.svg" alt="more" />,
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
  ],

};
