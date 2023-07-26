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
  { id: 1, title: '' },
  { id: 2, title: 'Starter' },
  { id: 3, title: 'Personal' },
  { id: 4, title: 'Professional' },
];
const rowData = [
  {
    id: 1,
    title: 'Import Data from Cloud Storage Services',
    Starter: <TickIcon />,
    Personal: <TickIcon />,
    Professional: <TickIcon />,
  },
  {
    id: 2,
    title: 'Upload Excel and CSV Files',
    Starter: '',
    Personal: <TickIcon />,
    Professional: <TickIcon />,
  },
  {
    id: 3,
    title: 'Export Charts',
    Starter: <TickIcon />,
    Personal: '',
    Professional: <TickIcon />,
  },
  {
    id: 3,
    title: 'Import Data from Cloud Storage Services',
    Starter: <TickIcon />,
    Personal: <TickIcon />,
    Professional: <TickIcon />,
  },
  {
    id: 4,
    title: 'Share Charts with Other Users',
    Starter: <TickIcon />,
    Personal: <TickIcon />,
    Professional: <TickIcon />,
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
  iconRootStyle: {
    description: 'object',
  },
  tableRootStyle: {
    description: 'object',
  },
  compareHeadingAlign: {
    description: '"center"|"left"|"right"',
  },
  rowTitleAlign: {
    description: '"center"|"left"|"right"',
  },
  rowIconAlign: {
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
  compareHeadingAlign: 'center',

  rowTitleAlign: 'center',
  compareRowTitleColor: '',
  compareRowTitleSize: 12,
  compareRowTitleStyle: {},

  rowIconAlign: 'center',
  rowBorderColor: '',
  iconRootStyle: {},
  tableRootStyle:{},
  
  columnData:columnData,
  rowData:rowData,
};
