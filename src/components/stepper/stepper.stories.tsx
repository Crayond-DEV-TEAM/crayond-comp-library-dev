import { ComponentMeta, ComponentStory } from '@storybook/react';
import CheckMark from '../../assets/checkmark';
import StepperIcon from '../../assets/stepperIcon';
import { CustomStepper } from './stepper';

export default {
  title: 'components/CustomStepper',
  component: CustomStepper,
  description:
    'A custom stepper component for guiding users through a multi-step process.',
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
      description: 'active step is used for active state',
    },
    'steps.stepperStyle': {
      description:
        'To control or modify the step styles, it contains stepWrapStyle,stepActiveStyle,stepInActiveStyle,iconCompletedStyle,anchorOrigin and etc..',
    },
    'steps.stepperStyle.stepWrapStyle': {
      description: 'To style the steps',
    },
    'steps.stepperStyle.stepActiveStyle': {
      description: 'The style for the active step.',
    },
    'steps.stepperStyle.stepInActiveStyle': {
      description: 'The style for the InActive step.',
    },
    'steps.stepperStyle.iconCompletedStyle': {
      description: 'To style the icon completed style',
    },
    'steps.stepperStyle.anchorOrigin': {
      description:
        'we can change position of the badge which is used for icon completed (tick icon)',
    },
    'steps.stepperStyle.iconActiveStyle': {
      description: 'The style for the active icon.',
    },
    'steps.stepperStyle.iconInActiveStyle': {
      description: 'The style for the inActive icon.',
    },
    'steps.stepperStyle.labelStyle': {
      description: 'The style for label/title which in used in the step.',
    },
    'steps.stepperStyle.statusStyle': {
      description:
        'The style for the status/description/subtitle which in used in the step.',
    },
    'steps.stepperStyle.textAreaStyle': {
      description: 'The style for the active step.',
    },
    'steps.stepperStyle.subTitleMobStyle': {
      description: 'The style for subtitle of step in mobileview .',
    },
    'steps.stepperStyle.titleBoxMobStyle': {
      description: 'The style for parent of the header in mobileview .',
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
    'steps.color': {
      description:
        'This color represents the status color.we can override the color of the status',
    },
    'steps.completeBadge': {
      description: 'This is the badge which we used for completed icon ',
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
} as ComponentMeta<typeof CustomStepper>;

const Template: ComponentStory<typeof CustomStepper> = (args) => (
  <CustomStepper {...args} />
);
export const Primary = Template.bind({});
Primary.args = {
  steps: [
    {
      label: 'akila',
      icon: <StepperIcon/>,
      status: 'completed',
      content: 'fefyguyrgf',
      color: 'green',
      completeBadge: <CheckMark />,
      stepperStyle: {
        stepWrapStyle: {},
        stepActiveStyle: {},
        stepInActiveStyle: {},
        iconCompletedStyle: {},
        iconActiveStyle: {},
        iconInActiveStyle: {},
        anchorOrigin: {
          vertical: 'top',
          horizontal: 'right',
        },
        labelStyle: {},
        statusStyle: {},
        textAreaStyle: {},
        subTitleMobStyle: {},
        titleBoxMobStyle: {},
        progressStyle: {},
      },
    },
    {
      label: 'settings',
      icon: <StepperIcon/>,
      status: 'inprogress',
      color: 'green',
    },
    {
      label: 'settings',
      icon: <StepperIcon/>,
      status: 'inprogress',
      color: 'green',
    },
    {
      label: 'settings',
      icon: <StepperIcon/>,
      status: 'inprogress',
      color: 'green',
    },
  ],
  styles: {
    buttonsContainer: {},
    btnStyle: { width: '30px' },
    rootStyle: {},
    contentStyle: {},
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
    {
      label: 'Reset',
      disabled: false,
      onClick: () => {
        console.log('jhcdc');
      },
    },
  ],
  activeStep: 1,
};
