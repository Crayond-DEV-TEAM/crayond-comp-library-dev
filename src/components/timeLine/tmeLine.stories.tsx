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
  profileUrlRadius: {
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
  profileComponentContainer: {
    description: 'object',
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
    TimelineDotProfileUrlHeight:24,
    TimelineDotProfileUrlWidth:24,
    TimelineDotProfileUrlRadius:1,
    TimelineDotVariant: 'filled',
    TimelineDotHeight: 1.2,
    TimelineDotWidth: 1.2,
    TimelineDotColor: '#929292',
    TimelineDotBorder: '',
    profileUrlHeight: 24,
    profileUrlWidth: 24,

    profileUrlRadius:5,
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
    handleClick: () => {alert("Time line")},
    profileComponentContainer:{},
    timeLineData:[
      {
        id: 1,
        text1: '18 Mins ago',
        text2: 'Elit convallis',
        text3: 'invited you',
        profileComponent:"",
        profileUrl:
          'https://cdna.artstation.com/p/assets/images/images/053/054/138/large/avetetsuya-studios-alien.jpg?1661309922',
      },
      {
        id: 2,
        text1: '18 Mins ago',
        text2:
          'Duis mauris augue, efficitur eu arcu sit amet, posuere dignissim neque. Aenean enim sem, pharetra et magna sit amet, luctus aliquet nibh.',
        text3: '',
        profileComponent: '',
        profileUrl:
          'https://cdna.artstation.com/p/assets/images/images/053/054/138/large/avetetsuya-studios-alien.jpg?1661309922',
      },
      {
        id: 3,
        text1: '18 Mins ago',
        text2: 'Elit convallis',
        text3: 'invited you',
        profileComponent: (
          <>
            <img
              src="https://cdna.artstation.com/p/assets/images/images/053/054/138/large/avetetsuya-studios-alien.jpg?1661309922"
              alt="profile"
              height={'24px'}
              width={'24px'}
              style={{ borderRadius: '50%' }}
            />
          </>
        ),
        profileUrl: '',
      },
      {
        id: 4,
        text1: '18 Mins ago',
        text2: 'Elit convallis',
        text3: 'invited you',
        profileComponent: (
          <>
            <img
              src="https://cdna.artstation.com/p/assets/images/images/053/054/138/large/avetetsuya-studios-alien.jpg?1661309922"
              alt="profile"
              height={'24px'}
              width={'24px'}
              style={{ borderRadius: '50%' }}
            />
          </>
        ),
        profileUrl: '',
      },
      {
        id: 5,
        text1: '18 Mins ago',
        text2:
          'Duis mauris augue, efficitur eu arcu sit amet, posuere dignissim neque. Aenean enim sem, pharetra et magna sit amet, luctus aliquet nibh.',
        text3: '',
        profileComponent: '',
        profileUrl:
          'https://cdna.artstation.com/p/assets/images/images/053/054/138/large/avetetsuya-studios-alien.jpg?1661309922',
      },
    ],
  });
