import { ComponentStory, ComponentMeta } from '@storybook/react';

import { AvatarName } from './index';

export default {
  title: 'CommonTable/AvatarName',
  component: AvatarName,
} as ComponentMeta<typeof AvatarName>;

const Template: ComponentStory<typeof AvatarName> = (args) => (
  <AvatarName {...args} />
);

export const Primary = Template.bind({});
Primary.args = {
  profiles: [
    { name: 'Hari', label: 'Excelent', color: '#007C32' },
    { name: 'Ram', label: 'Good', color: '#F2B824' },
    { name: 'Anbu', label: 'Very Good', color: '#4C9E29' },
    { name: 'S', label: 'Bad', color: '#DE1010' },
    { name: 'Babu', label: 'Good', color: '#F2EB24' },
  ],
};
