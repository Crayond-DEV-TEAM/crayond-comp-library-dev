import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Language } from './index';

export default {
  title: 'CommonTable/language',
  component: Language,
} as ComponentMeta<typeof Language>;

const Template: ComponentStory<typeof Language> = (args) =>
  <Language
  
    {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  cardStyle: {},
  unselectedCardStyle: {},
  cardTitleStyle: {},
  cardSubtitleStyle: {},
  languagesBoxStyle: {}
};
