import { ComponentStory, ComponentMeta } from '@storybook/react';
import LinearProcess from './linearProgress';

export default {
  title: 'components/LinearProcess',
  component: LinearProcess,
} as ComponentMeta<typeof LinearProcess>;

const Template: ComponentStory<typeof LinearProcess> = (args) => (
  <LinearProcess {...args} />
);

export const Primary = Template.bind({});
Primary.args = {
  value: 60,
  progressLabel: false,
  linearBarStyle: {},
  symbols: '',
  thumbHeight: 10,
  isShowToolTip:false,
  TooltipTextColor:'',
  TooltipBgColor: '',
  TooltipArrowColor: '',
  symbolsColor: '',
  thumbPrimaryColor: 'green',
  thumbSecondaryColor: 'lightgreen',
};
