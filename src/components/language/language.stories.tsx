import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Language } from './index';

export default {
  title: 'CommonTable/language',
  component: Language,
} as ComponentMeta<typeof Language>;

const Template: ComponentStory<typeof Language> = (args) =>
  <Language
  // cardStyle={{}}
  // unselectedCardStyle={{}}
  // cardTitleStyle={{}}
  // cardSubtitleStyle={{}}
  // languagesBoxStyle={{}}
  // value={args?.value}
  // selectedLang={args?.selectedLang}
  // options={args?.options}
  // handleDefaultChange={handleDefaultChange}
  // data={
  //   {
  //   suggestionData:data?.suggestionData,
  //   allData:data?.allData
  // }}
  // handleClick={handleClick}
    {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  cardStyle: {},
  unselectedCardStyle: {},
  cardTitleStyle: {},
  cardSubtitleStyle: {},
  languagesBoxStyle: {}
};
