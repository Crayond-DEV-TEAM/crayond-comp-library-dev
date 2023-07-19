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

Primary.args = {
 
};

