import { ComponentMeta, ComponentStory } from '@storybook/react';
import TimeLineV2 from './timelineV2';
import UserIcon from '../../assets/user';

export default {
  title: 'Components/TimeLineV2',
  component: TimeLineV2,
} as ComponentMeta<typeof TimeLineV2>;

const Template: ComponentStory<typeof TimeLineV2> = (args) => (
  <TimeLineV2 {...args} />
);

export const Primary = Template.bind({});

(Primary.argTypes = {
  variation2: {
    description: 'Boolean',
  },
  timelineContainerStyle: {
    description: 'object',
  },
  timelinePosition: {
    description: ' left|right|alternate',
  },
  timelineDotSize: {
    description: 'string',
  },
  timelineDotColor: {
    description: 'string',
  },
  timelineDotBorderColor: {
    description: 'string -> works for outlined dot variant',
  },
  timelineDotGapRadius: {
    description: 'string',
  },
  timelineDotVariant: {
    description: ' filled | outlined',
  },
  timelineDotChildrenStyle: {
    description: 'object -> works for variation2=true ',
  },
  timelineDotStyle: {
    description: 'object',
  },
  timelineConnectorColor: {
    description: 'string',
  },
  timelineSeperatorStyle: {
    description: 'object',
  },
  timelineContentStyle: {
    description: 'object',
  },
  timelineContentBoxStyle: {
    description: 'object',
  },
  timelineItemImageStyle: {
    description: 'object',
  },
  timelineItems: {
    description: 'Array[] of object{}',
  },
  handleMouseEnter: {
    description: 'Function ()=>{}',
  },
  handleMouseLeave: {
    description: 'Function ()=>{}',
  },
  handleClick: {
    description: 'Function ()=>{}',
  },
}),
(Primary.args = {
  variation2: false,
  timelineContainerStyle: {},
  timelinePosition: 'right',

  timelineDotSize: '5px',
  timelineDotColor: '#fff',
  timelineDotBorderColor: '#fff',
  timelineDotGapRadius: '0px',
  timelineDotVariant: 'filled',
  timelineDotChildrenStyle: {
    width: '20px',
    height: '20px',
  },
  timelineDotStyle: {
    marginTop: '3px',
    marginBottom: '3px',
  },

  timelineConnectorColor: '#b0b0b0',

  timelineSeperatorStyle: {},

  timelineContentStyle: {},

  timelineContentBoxStyle: {
    backgroundColor: '#fff',
    width: '220px',
    borderRadius: '4px',
    margin: '0px',
    marginTop: '3px',
    height: '260px',
  },

  timelineItemImageStyle: {
    width: '30px',
    height: '30px',
  },
  timelineItems: [
    {
      time: new Date('2023-07-31 10:11:24'),
      content1: 'Hello chan',
      content2: 'Invited you',
      image: 'user.png',
    },
    {
      time: new Date('2023-07-31 10:58:58'),
      content1:
        'Hello chan  pseudo-element selector, which selects and styles the first letter of the element that its applied to.the Text will not wrap, but instead will truncate with a text overflow ellipsis.Note that text overflow can only happen with block or inline-block level elements ',
      image: 'user.png',
    },
    {
      time: new Date('2023-07-31 10:50:24'),
      content1: 'Hello chan',
      content2: 'Invited you',
      image: 'user.png',
    },

    {
      time: new Date('2023-07-31 10:50:24'),
      content1: 'Hello chan',
      content2: 'Invited you',
      image: 'user.png',
    },
  ],
  handleMouseEnter: (index: number) => {},
  handleMouseLeave: (index: number) => {},
  handleClick: (index: number) => {},
});
