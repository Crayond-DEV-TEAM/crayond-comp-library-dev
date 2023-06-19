import { ComponentStory, ComponentMeta } from '@storybook/react';
import { TimeLine } from './index';

export default {
  title: 'Components/TimeLine',
  component: TimeLine,
} as ComponentMeta<typeof TimeLine>;

const Template: ComponentStory<typeof TimeLine> = (args) => (
  <TimeLine {...args} />
);

export const Primary = Template.bind({});
(Primary.argTypes = {
  variation2: {
    description: 'Boolean',
  },
  timeLinePosition: {
    description: '"left"|"right"',
  },
  TimelineConnectorColor: {
    description: 'string',
  },
  TimelineConnectorWidth: {
    description: 'number',
  },
  TimelineDotVariant: {
    description: '"filled"|"outlined"',
  },
  TimelineDotHeight: {
    description: 'number',
  },
  TimelineDotWidth: {
    description: 'number',
  },
  profileUrlHeight: {
    description: 'number',
  },
  profileUrlWidth: {
    description: 'number',
  },
  TimelineDotColor: {
    description: 'string',
  },
  TimelineDotBorder: {
    description: 'string',
  },
  CardBackground: {
    description: 'string',
  },
  hoverBgColor: {
    description: 'string',
  },
  text1Color: {
    description: 'string',
  },
  hoverBorderStyle: {
    description: 'string',
  },

  text3Color: {
    description: 'string',
  },
  text2Color: {
    description: 'string',
  },
  cardWidth: {
    description: 'number',
  },
  cardMinWidth: {
    description: 'number',
  },
  cardMaxWidth: {
    description: 'number',
  },
  cardMaxHeight: {
    description: 'number',
  },
  cardMinHeight: {
    description: 'number',
  },
  text1Size: {
    description: 'number',
  },
  text3Size: {
    description: 'number',
  },
  text2Size: {
    description: 'number',
  },
  cardHeight: {
    description: 'number',
  },
  CardHoverStyle: {
    description: 'object',
  },
  CardStyle: {
    description: 'object',
  },
  handleClick: {
    description: '()=>{}',
  },
 
}),
  (Primary.args = {
    variation2: false,
    rootStyle:{
        background:"#F5F5F5"
    },
    timeLinePosition: 'right',
    TimelineConnectorColor: '',
    TimelineConnectorWidth: 2,

    TimelineDotVariant: 'filled',
    TimelineDotHeight: 2,
    TimelineDotWidth: 2,
    TimelineDotColor: '#929292',
    TimelineDotBorder: '',
    profileUrlHeight: 24,
    profileUrlWidth: 24,

    cardWidth: 0,
    cardMinWidth: 212,
    cardMaxWidth: 0,
    cardMaxHeight: 131,
    cardMinHeight: 0,
    cardHeight: undefined,
    CardBackground: '#FFFFFF',
    CardHoverStyle: {},
    CardStyle: {},
    hoverBorderStyle: '',
    hoverBgColor: '#EEEE',
    text1Size: 10,
    text1Color: '#929292',
    text2Size: 12,
    text2Color: '#3B3B3B',
    text3Size: 10,
    text3Color: '#929292',
    handleClick: () => {},
  });
