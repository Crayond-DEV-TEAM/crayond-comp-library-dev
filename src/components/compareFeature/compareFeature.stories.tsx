import { ComponentMeta, ComponentStory } from '@storybook/react';
import CompareFeature from './compareFeature';
export default {
  title: 'components/CompareFeature',
  component: CompareFeature,
} as ComponentMeta<typeof CompareFeature>;

const Template: ComponentStory<typeof CompareFeature> = (args) => (
  <CompareFeature {...args} />
);

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
  compareHeadingAlign: {
    description: '"center"|"left"|"right"',
  },
  rowTitleAlign: {
    description: '"center"|"left"|"right"',
  },
  rowIconAlign: {
    description: '"center"|"left"|"right"',
  },
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
};
