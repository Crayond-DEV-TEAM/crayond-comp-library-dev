import { ComponentMeta, ComponentStory } from '@storybook/react';
import TimeLineV2 from './timelineV2';
import EditIcon from '../../assets/editIcon';
import DocsIcon from '../../assets/docsIcon';
import profileImg from '../../assets/sampleprof.png';

export default {
  title: 'CommonTable/viewer',
  component: TimeLineV2,
} as ComponentMeta<typeof TimeLineV2>;

const Template: ComponentStory<typeof TimeLineV2> = (args) => (
  <TimeLineV2 {...args} />
);

export const Primary = Template.bind({});

Primary.args = {
 
};
