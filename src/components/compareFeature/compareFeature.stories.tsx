import { ComponentMeta, ComponentStory } from '@storybook/react';
import CompareFeature from './compareFeature';
import TickIcon from '../../assets/tickIcon';
export default {
  title: 'components/CompareFeature',
  component: CompareFeature,
} as ComponentMeta<typeof CompareFeature>;

const Template: ComponentStory<typeof CompareFeature> = (args) => (
  <CompareFeature {...args} />
);

const columnData = [
  { id: 1, key: 'title', title: '', style: {} },
  { id: 2, key: 'Starter', title: 'Starter', style: {} },
  { id: 3, key: 'Personal', title: 'Personal', style: {} },
  { id: 4, key: 'Professional', title: 'Professional', style: {}},
];
const rowData = [
  {
    id: 1,
    title: 'Import Data from Cloud Storage Services',
    Personal: "",
    Starter: <TickIcon />,
    Professional: <TickIcon />,
    style: {},
  },
  {
    id: 2,
    title: 'Upload Excel and CSV Files',
    Starter:<TickIcon />,
    Personal: <TickIcon />,
    Professional: <TickIcon />,
    style: {}
  },
  {
    id: 3,
    title: 'Export Charts',
    Starter: <TickIcon />,
    Personal: '',
    Professional: <TickIcon />,
    style: {},
  },
  {
    id: 3,
    title: 'Import Data from Cloud Storage Services',
    Starter: <TickIcon />,
    Personal: <TickIcon />,
    Professional: <TickIcon />,
    style: {},
  },
  {
    id: 4,
    title: 'Share Charts with Other Users',
    Starter: <TickIcon />,
    Personal: <TickIcon />,
    Professional: <TickIcon />,
    style: {},
  },
];
export const Primary = Template.bind({});

Primary.argTypes = {
  compareHeadingColor: {
    description: 'string',
  },
  compareRowTitleColor: {
    description: 'string',
  },
  rowBorderColor: {
    description: 'string',
  },
  compareHeadingSize: {
    description: 'number',
  },
  compareRowTitleSize: {
    description: 'number',
  },
  compareHeadingStyle: {
    description: 'object',
  },
  compareRowTitleStyle: {
    description: 'object',
  },
  tableRootStyle: {
    description: 'object',
  },
  compareHeadingAlign: {
    description: '"center"|"left"|"right"',
  },
  columnData:{
    description:"[array]"
  },
  rowData:{
    description:"[array]"
  }
};

Primary.args = {

  compareHeadingColor: '',
  compareHeadingSize: 12,
  compareHeadingStyle: {},
  compareHeadingAlign:"left",

  rowAlign:"left",
  compareRowTitleColor: '',
  compareRowTitleSize: 12,
  compareRowTitleStyle: {},

  rowBorderColor: '',
  tableRootStyle: {},
  rowData:columnData,
  columnData:rowData,
};
