export interface StepperProps {
    vertical?: boolean;
    horizontal?: boolean;
    StepperFunc: Step[];
    stepsCompleted?: number[];
    activeIndex: number;
    handleChange: (index: number) => void;
}

export interface Step {
    step: string;
    stepDescription: string;
    stepperIcon: any;
}  