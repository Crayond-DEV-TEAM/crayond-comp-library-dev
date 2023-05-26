import { ComponentMeta, ComponentStory } from '@storybook/react';
import CustomStepper from './stepper';
import AcUnitIcon from "@mui/icons-material/AcUnit";
import AccessAlarmIcon from "@mui/icons-material/AccessAlarm";
import AccessibilityIcon from "@mui/icons-material/Accessibility";
import StepperIcon from '../../assets/stepperIcon';

export default {
    title: 'components/CustomStepper',
    component: CustomStepper,
} as ComponentMeta<typeof CustomStepper>;

const Template: ComponentStory<typeof CustomStepper> = (args) => (
    <CustomStepper {...args} />
);

export const Primary = Template.bind({});

Primary.args = {
   steps : [
    {
      label: "settings",
      icon: <StepperIcon sx={{ fontSize: 50}} />,
      status: "inprogress",
      color: "green"
    },
    {
      label: "settings",
      icon: <StepperIcon sx={{ fontSize: 50 }} />,
      status: "inprogress",
      color: "green"
    },
    {
      label: "settings",
      icon: <StepperIcon sx={{ fontSize: 50 }} />,
      status: "inprogress",
      color: "green"
    },
   
  ],
};


