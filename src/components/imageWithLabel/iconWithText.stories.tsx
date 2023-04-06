import { ComponentStory, ComponentMeta } from '@storybook/react';
import { ImageWithLabel } from './index';

export default {
  title: 'CommonTable/ImageWithLabel',
  component: ImageWithLabel,
} as ComponentMeta<typeof ImageWithLabel>;

const Template: ComponentStory<typeof ImageWithLabel> = (args) => (
  <ImageWithLabel {...args} />
);

export const Primary = Template.bind({});
Primary.args = {
  label: '',
  variant: 'circular',
  image:  "",
};

