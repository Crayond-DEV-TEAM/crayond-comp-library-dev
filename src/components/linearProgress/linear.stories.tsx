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
Primary.argTypes = {
  value: {
    description: 'number',
  },
  valueBuffer: {
    description: 'number',
  },
  thumbHeight: {
    description: 'number',
  },
  progressLabel: {
    description: 'boolean',
  },
  isShowToolTip: {
    description: 'boolean',
  },
  linearBarStyle: {
    description: 'object',
  },
  symbols: {
    description: 'string',
  },
  TooltipTextColor: {
    description: 'string',
  },
  TooltipBgColor: {
    description: 'string',
  },
  TooltipArrowColor: {
    description: 'string',
  },
  thumbPrimaryColor: {
    description: 'string',
  },
  thumbSecondaryColor: {
    description: 'string',
  },
  variant: {
    description: "'buffer' | 'determinate' | 'indeterminate' | 'query'",
  },
};




Primary.args = {
  value: 0,
  variant: 'buffer',
  valueBuffer: 0,
  progressLabel: false,
  linearBarStyle: {},
  symbols: '',
  thumbHeight: 10,
  isShowToolTip:false,
  TooltipTextColor:'',
  TooltipBgColor: '',
  TooltipArrowColor: '',
  symbolsColor: '',
  thumbPrimaryColor: '',
  thumbSecondaryColor: '',
};
