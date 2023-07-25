import { ComponentStory, ComponentMeta } from '@storybook/react';
import { EmptyPages } from './index';
import EmptyIcon from '../../assets/emptyIcon';
import EmptyIconB from '../../assets/emptyIconB';

export default {
  title: 'Components/EmptyPages',
  component: EmptyPages,
} as ComponentMeta<typeof EmptyPages>;

const Template: ComponentStory<typeof EmptyPages> = (args) => (
  <EmptyPages {...args} />
);

export const Primary = Template.bind({});
Primary.argTypes = {
  containerStyle: {
    description: 'object',
  },
  buttonStyles: {
    description: 'object',
  },
  title1Styles: {
    description: 'object',
  },
  title2Styles: {
    description: 'object',
  },
  iconContainerStyle: {
    description: 'object',
  },
  emptyPageIcon: {
    description: 'ReactNode',
  },
  emptyPageInfographic: {
    description: 'ReactNode',
  },
  emptyPageUrl: {
    description: 'string',
  },
  emptyPageIconBgColor: {
    description: 'string',
  },
  emptyPageUrlHeight: {
    description: 'number',
  },
  emptyPageUrlWidth: {
    description: 'number',
  },
  title1Size: {
    description: 'number',
  },
  title1Weight: {
    description: 'number',
  },
  title1: {
    description: 'string',
  },
  title2: {
    description: 'string',
  },
  title2Size: {
    description: 'number',
  },
  title2Weight: {
    description: 'number',
  },
  buttonMarginTop: {
    description: 'number',
  },
  buttons: {
    description:
      '[ {label:"",handleClick:()=>{},color:"", backgroundColor:"" } ]',
  },
};

Primary.args = {
  containerStyle: { background: '#ffff',minHeight: '100vh' },

  emptyPageUrlHeight: 225,
  emptyPageUrlWidth: 225,

  iconContainerStyle: {},
  emptyPageIconBgColor: '#EFEEFB',
  handleClickIcon:()=>{alert('icon')},
  title1Styles: {},
  title2Styles: {},

  title1MarginTop: 2,
  title1MarginBottom: 3,
  title1Size: 16,
  title1Weight: 600,
  title1Color: '#3B3B3B',
  title1: 'Add Bookmark',

  title2Size: 14,
  title2Weight: 500,
  title2Color: '#3B3B3B',
  title2: 'Click the above icon to add',
  title2MarginTop: 0,
  title2MarginBottom: 0,

  emptyPageIcon:<EmptyIcon />,
  emptyPageInfographic: '',
  // !<EmptyIconB />,
  emptyPageUrl:'',
    // 'https://thumbs.dreamstime.com/b/d-cartoon-man-sleeping-pile-books-illustration-isolated-white-background-248545459.jpg',

  buttonMarginTop: 2,
  buttonStyles: {},
  buttons: [
    {
      label: 'Add Now',
      handleClick: () => {
        alert('add now');
      },
      color: '#FFFF',
      backgroundColor: '#665CD7',
    },
    {
      label: 'Add Now',
      handleClick: () => {
        alert('add now');
      },
      color: '#FFFF',
      backgroundColor: '#665CD7',
    },
    {
      label: 'Add Now',
      handleClick: () => {
        alert('add now');
      },
      color: '#FFFF',
      backgroundColor: '#665CD7',
    },
  ],
};
