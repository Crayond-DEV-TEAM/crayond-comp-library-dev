import { ComponentMeta, ComponentStory } from '@storybook/react';
import EditIcon from '../../assets/editIcon';
import DocsIcon from '../../assets/docsIcon';
import profileImg from '../../assets/sampleprof.png';
import SelectBox from './selectBox';

export default {
  title: 'Components/selectBox',
  component: SelectBox,
} as ComponentMeta<typeof SelectBox>;

const Template: ComponentStory<typeof SelectBox> = (args) => (
  <SelectBox {...args} />
);

export const Primary = Template.bind({});

Primary.args = {
  rootStyle: { backgroundColor: '' },
};
