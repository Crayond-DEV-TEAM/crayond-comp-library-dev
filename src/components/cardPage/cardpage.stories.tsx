import { ComponentMeta, ComponentStory } from '@storybook/react';
import  CardPage  from './index';
import sampleImage from '../../assets/sampleprof.png';

export default {
  title: 'components/CardPage',
  component: CardPage,
} as ComponentMeta<typeof CardPage>;

const Template: ComponentStory<typeof CardPage> = (args) => (
  <CardPage {...args} />
);

export const Primary = Template.bind({});

Primary.args = {
    cardImage:sampleImage,
    buttons:[
    {
      text: 'Button',
      onClick: () => {
        console.log('Button 1');
      },
      style: { width: '78px' },
    },
    {
      text: 'Button',
      onClick: () => {
        console.log('Button e');
      },
      style: { width: '78px' },
    },
  ],
    title:'Jerry Foster',
    mailId:'ethan.holmes@mail.com',
    mobile:'(621)668-1434',
    divider:true,
    desc:'Integer ac interdum lacus. Nunc porta semper lacus a varius.',
    variant:'imageOriented',

};


