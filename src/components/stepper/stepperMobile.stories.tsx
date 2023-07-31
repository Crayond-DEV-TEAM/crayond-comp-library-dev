import { ComponentMeta, ComponentStory } from '@storybook/react';
import StepperIcon from '../../assets/stepperIcon';
import { StepperMobile } from './stepperMobile';

export default {
  title: 'components/StepperMobile',
  component: StepperMobile,
  description:
    'A custom stepper component for guiding users through a multi-step process for mobile.',
  argTypes: {
    steps: {
      description:
        'Json for steps.here we can modify the styles and value of steps',
    },
    styles: {
      description:
        ' we can control the styles for button area,buttons,rootstyle and content style with this ',
    },
    buttons: {
      description:
        'collection of button. here we can add buttons and their functions',
    },
    activeStep: {
      description: 'active step mobile is used for active state',
    },
    'steps.stepperStyle': {
      description:
        'To control or modify the step styles, it contain  and etc..',
    },
    'steps.stepperStyle.labelStyle': {
      description: 'The style for label/title which in used in the step.',
    },
    'steps.stepperStyle.textAreaStyle': {
      description: 'The style for the active step.',
    },
    'steps.stepperStyle.subTitleMobStyle': {
      description: 'The style for subtitle of step in mobileview .',
    },
    'steps.stepperStyle.progressStyle': {
      description:
        'The style for the progress bar below the step in mobileview .',
    },
    'steps.label': {
      description: 'Value of lable/title of step',
    },
    'steps.icon': {
      description: 'An icon which is used in step',
    },
    'steps.status': {
      description: 'status of the step like complete/pending..etc',
    },
    'steps.content': {
      description:
        'The content connect with stepper it may be a form, component or anything',
    },
    'styles.buttonsContainer': {
      description: 'The style for the buttons parent.',
    },
    'styles.btnStyle': {
      description: 'The style for the button.',
    },
    'styles.rootStyle': {
      description: 'The style for parent.',
    },
    'styles.contentStyle': {
      description: 'The style for the content.',
    },
    'styles.stepperParent': {
      description: 'The style for the parent of stepper.',
    },
    'buttons.label': {
      description: 'label/name of the button.',
    },
    'buttons.onClick': {
      description: 'action of the button',
    },
    'buttons.disabled': {
      description: 'we can disable a button if we required',
    },
  },
} as ComponentMeta<typeof StepperMobile>;

const Template: ComponentStory<typeof StepperMobile> = (args) => (
  <StepperMobile {...args} />
);
export const Primary = Template.bind({});
Primary.args = {
  steps: [
    {
      label: 'akila',
      icon: <StepperIcon />,
      status: 'completed',
      content: 'First Step',
      stepperStyle: {
        labelStyle: {},
        textAreaStyle: {},
        subTitleMobStyle: {},
        progressStyle: {},
      },
    },
    {
      label: 'settings',
      icon: <StepperIcon />,
      status: 'inprogress',
    },
    {
      label: 'settings',
      icon: <StepperIcon />,
      status: 'inprogress',
    },
    {
      label: 'settings',
      icon: <StepperIcon />,
      status: 'inprogress',
    },
  ],
  styles: {
    buttonsContainer: {},
    btnStyle: { width: '183px' },
    rootStyle: {},
    stepperParent: {},
  },
  buttons: [
    {
      label: 'Back',
      onClick: () => {
        console.log('jhchiuhiuhidc');
      },
    },
    {
      label: 'Next',
      disabled: false,
      onClick: () => {
        console.log('jhcdc');
      },
    },
  ],
  activeStep: 0,
};
