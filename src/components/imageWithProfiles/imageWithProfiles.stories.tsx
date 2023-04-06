import { ComponentStory, ComponentMeta } from '@storybook/react';
import { ImageWithProfiles } from './index';

export default {
  title: 'CommonTable/ImageWithProfile',
  component: ImageWithProfiles,
} as ComponentMeta<typeof ImageWithProfiles>;

const Template: ComponentStory<typeof ImageWithProfiles> = (args) => (
  <ImageWithProfiles {...args} />
);

export const Primary = Template.bind({});
Primary.args = {
  variant: 'circular',
  profiles: [
    {
      image: 'sample.jpg',
      label: 'Hari Ram',
    },
    {
      image: 'sample.jpg',
      label: 'Hariharan',
    },
  ],
};

