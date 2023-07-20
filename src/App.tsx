import '@fontsource/poppins/400.css';
import '@fontsource/poppins/500.css';
import '@fontsource/poppins/600.css';
import '@fontsource/poppins/700.css';
import KanbanView from './components/kanbanView/kanbanView';

const cardContainerData = [
  { title: 'Progress' },
  { title: 'Pending' },
  { title: 'Completed' },
];
const cardData = [
  {
    id: 1,
    title: 'title1',
    status: 'Progress',
    cardTitle: 'Progress Create Components',
    isActive: true,
    notifyIcon: <img src="/notifi.svg" alt="notify" />,
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
    cardTitle: 'Progress Create Components',
    isActive: true,
    notifyIcon: <img src="/activeNotify.svg" alt="notify" />,
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
    cardTitle: 'Progress Create Components',
    isActive: true,
    notifyIcon: <img src="/notifi.svg" alt="notify" />,
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
    cardTitle: 'Pending Create Components',
    isActive: true,
    notifyIcon: <img src="/activeNotify.svg" alt="notify" />,
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
    cardTitle: 'Pending Create Components',
    isActive: true,
    notifyIcon: <img src="/notifi.svg" alt="notify" />,
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
    cardTitle: ' Completed Create Components',
    isActive: true,
    notifyIcon: <img src="/notifi.svg" alt="notify" />,
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
    cardTitle: 'Completed Create Components',
    isActive: true,
    notifyIcon: <img src="/notifi.svg" alt="notify" />,
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
    cardTitle: 'Completed Create Components',
    isActive: true,
    notifyIcon: <img src="/activeNotify.svg" alt="notify" />,
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
    id: 9,
    title: 'title3',
    status: 'Pending',
    cardTitle: 'Pending Create Components',
    isActive: true,
    notifyIcon: <img src="/activeNotify.svg" alt="notify" />,
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
];

function App() {
  return (
    <>
      <div style={{ height: '100vh', width: '100vh', background: '#ffff' }}>
        <h2>Kamban view</h2>
        <KanbanView cardData={cardData} cardContainerData={cardContainerData} />
      </div>
    </>
  );
}

export default App;
