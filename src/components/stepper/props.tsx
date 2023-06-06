export interface StepData {
  label: string;
  status: string;
  content?: string | any;
  color?: string | any;
  icon?: any;
  completeBadge?: React.ReactNode | any;
  stepperStyle?: {
    anchorOrigin?: string | any;
    labelStyle?: object;
    statusStyle?: object;
    stepWrapStyle?: object;
    iconCompletedStyle?: object;
    iconActiveStyle?: object;
    stepActiveStyle?: object;
    stepInActiveStyle?: object;
    textAreaStyle?: object;
    subTitleMobStyle?: object;
    titleBoxMobStyle?: object;
    progressStyle?: object;
    iconBackgroundStyle?: object;
    iconInActiveStyle?: object;
  };
}

export interface CustomStepperProps {
  steps: StepData[];
  styles?: {
    buttonsContainer?: object;
    btnStyle?: object;
    rootStyle?: object;
    contentStyle?: object;
    buttonsContainerMob?: object;
    stepperParent?:object;
  };
  mobileButtons?: any;
  buttons?: any;
  resetBtn?: any;
  activeStep?: number;
  activeStepMobile?: number;
  handleSubmit?: () => void;
}
export interface ButtonProps {
  label: string;
  onClick: () => void;
  disabled?: boolean;
}
