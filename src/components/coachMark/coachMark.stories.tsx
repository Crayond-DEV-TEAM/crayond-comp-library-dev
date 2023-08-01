import { ComponentStory, ComponentMeta } from '@storybook/react';
import { CoachMark } from './index';

export default {
  title: 'CommonTable/CoachMark',
  component: CoachMark,
  argTypes: {
    continuous: {
      description: 'The tour is played sequentially with the Next button'
    },
    run: {
      description: 'Run/stop the tour'
    },
    stepsProps: {
      description: 'The tour steps'
    },
    hideCloseButton: {
      description: 'Hide the "close" button'
    },
    scrollToFirstStep: {
      description: 'Scroll the page for the first step'
    },
    spotlightClicks: {
      description: 'Allow mouse and touch events through the spotlight'
    },
    showSkipButton: {
      description:'Display a button to skip the tour'
    },
    showProgress: {
      description: 'Display the tour progress in the next button'
    },
    spotlightPadding: {
      description:'The padding of the spotlight'
    },
  }
} as ComponentMeta<typeof CoachMark>;


const Template: ComponentStory<typeof CoachMark> = (args) => <CoachMark {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  continuous: true,
  callback: () => null,
  run: true,
  stepsProps: [],
  hideCloseButton: false,
  scrollToFirstStep: false,
  spotlightClicks: false,
  showSkipButton: false,
  showProgress: false,
  spotlightPadding: 1,
};
