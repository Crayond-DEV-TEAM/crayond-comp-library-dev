export interface StepData {
  label: string;
  status: string;
  color?: string | any;
  icon?: React.ReactNode;
  completeBadge?: React.ReactNode;
  styles?: {
    anchorOrigin?: string | any;
    labelStyle?: object;
    statusStyle?: object;
    dividerStyle?: object;
    iconCompletedStyle?: object;
    iconActiveStyle?: object;
    boxActiveStyle?:object;
    boxInActiveStyle?:object;
    textAreaStyle?:object;
  };
}

export interface CustomStepperProps {
  steps: StepData[];
  styles?:{buttonsContainer?:object,btnStyle?:object,rootStyle?:object};
  prevBtn?:any;
  nextBtn?:any;
  resetBtn?:any;
}
