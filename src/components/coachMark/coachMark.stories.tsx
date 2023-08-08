import { ComponentStory, ComponentMeta } from '@storybook/react';
import { CoachMark } from './index';
import { Step } from './props';
import { Typography } from '@mui/material';
import { styles } from './styles';

export default {
  title: 'CommonTable/CoachMark',
  component: CoachMark,
  argTypes: {
    continuous: {
      description: 'The tour is played sequentially with the Next button'
    },
    HandleCallBack: {
      description: 'callBack function which contains step details as params'
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


const Template: ComponentStory<typeof CoachMark> = (args) => {
  const step: Step[] = [
    {
      content: '',
      locale: {
        skip: <Typography sx={styles.skip}>Skip</Typography>,
        next: <strong>Next</strong>
      },
      placement: "bottom",
      target: "#step-1",
      disableBeacon: false,
      title: <Typography sx={styles?.stepTitle}>Tap to `Back` pages</Typography>
    },
    {
      content: '',
      placement: "bottom",
      disableBeacon: true,
      target: "#step-2",
      title: <Typography sx={styles?.stepTitle}> Add `Bookmark` here</Typography>
    },
    {
      content: '',
      placement: "bottom",
      disableBeacon: true,
      target: '#step-10',
      title: <Typography sx={styles?.stepTitle}>`Menus` to navigate!</Typography>
    },
    {
      content: '',
      placement: "bottom",
      disableBeacon: true,
      target: "#step-3",
      title: <Typography sx={styles?.stepTitle}> Here is `Home` menu!</Typography>
    },
    {
      content: '',
      placement: "bottom",
      disableBeacon: true,
      target: "#step-4",
      title: <Typography sx={styles?.stepTitle}> Here is `Clinical` menu!</Typography>
    },
    {
      content: '',
      placement: "bottom",
      disableBeacon: true,
      target: "#step-5",
      title: <Typography sx={styles?.stepTitle}> Here is `MBF`` menu!</Typography>
    },
    {
      content: '',
      placement: "bottom",
      disableBeacon: true,
      target: "#step-6",
      title: <Typography sx={styles?.stepTitle}>  Here is `Masters` menu!</Typography>
    },
    {
      content: '',
      placement: "bottom",
      disableBeacon: true,
      target: "#step-7",
      title: <Typography sx={styles?.stepTitle}>  Here is `Profile` menu!</Typography>
    },
  ]
  console.log(step)
  return (
    <CoachMark
    run={true}
    stepsProps={step}
    continuous={true}
 {...args} />
  )
};

export const Primary = Template.bind({});
Primary.args = {
  continuous: true,
  HandleCallBack: () => null,
  run: true,
  stepsProps: [],
  hideCloseButton: false,
  scrollToFirstStep: false,
  spotlightClicks: false,
  showSkipButton: false,
  showProgress: false,
  spotlightPadding: 1,
};
