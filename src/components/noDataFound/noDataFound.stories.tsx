import { ComponentStory, ComponentMeta } from '@storybook/react';
import { NoDataFound } from './index';

export default {
  title: 'CommonTable/NoDataFound',
  component: NoDataFound,
} as ComponentMeta<typeof NoDataFound>;

const Template: ComponentStory<typeof NoDataFound> = (args) => (
  <NoDataFound {...args} />
);

export const Primary = Template.bind({});
Primary.args = {
    fontSize: '16px',
    fontWeight: '600',
    color: '#353448',
    bgColor: '#F7F7F7',
    text:"No Data Found!",
     component:null
};

