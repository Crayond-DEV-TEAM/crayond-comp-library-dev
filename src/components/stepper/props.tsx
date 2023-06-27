export interface StepData {
  label: string;
  status: string;
  content?: string | React.ReactNode;
  color?: string;
  icon?: string | React.ReactNode | SVGRectElement;
  completeBadge?: React.ReactNode;
  stepperStyle?: {
    anchorOrigin?:
      | string
      | Partial<Record<'vertical' | 'horizontal', 'top' | 'bottom' | 'center'>>
      | object;
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
    badgeStyle?:object;
    
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
    stepperParent?: object;
  };
  mobileButtons?: ButtonProps[];
  buttons?: ButtonProps[];
  resetBtn?: ButtonProps[];
  activeStep?: number;
  activeStepMobile?: number;
  handleSubmit?: () => void;
}
export interface ButtonProps {
  label: string;
  onClick: () => void;
  disabled?: boolean;
}
