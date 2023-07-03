import { ComponentMeta, ComponentStory } from '@storybook/react';
import ErrorWithInfographic from './errorWithPage';

export default {
  title: 'components/ErrorWithInfographic',
  component: ErrorWithInfographic,
} as ComponentMeta<typeof ErrorWithInfographic>;

const Template: ComponentStory<typeof ErrorWithInfographic> = (args) => (
  <ErrorWithInfographic {...args} />
);

export const Primary = Template.bind({});
Primary.args = {
    open:true,
    handleClose:()=>{},
    onBackdropClick:()=>{},
    cardRootStyle:{},
    infogarphicIcon:"",
    infogarphicMessage:" You don't have any reportees fom organization assigned to you",
    textBlockStyle:{},
    iconStyleBlock:{},
    messageTextStyle:{},
    buttonBlock:{},
    
     buttons: [
        {
          label: 'open',
          onClick: () => {},
          style: { background: '#EFEEFB', color: '#665CD7', padding: '10px',width: "138px",textTransform:"capitalize" },
        },
      ],
}
