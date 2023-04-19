import { ComponentMeta, ComponentStory } from '@storybook/react';
import { MobileInput } from './index';

export default {
  title: 'components/MobileInput',
  component: MobileInput,
} as ComponentMeta<typeof MobileInput>;

const Template: ComponentStory<typeof MobileInput> = (args) => (
  <MobileInput {...args} />
);

export const Default = Template.bind({});
Default.args = {};
