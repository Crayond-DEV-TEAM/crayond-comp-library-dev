import React from 'react';
import { Stepper } from './stepper';
import DocsIcon from '../../assets/docsIcon';

export default {
    title: 'Components/Stepper',
    component: Stepper,
};

const steps = [
    {
        step: 'Step 1',
        stepDescription: 'This is the first step',
        stepperIcon: <DocsIcon />,
    },
    {
        step: 'Step 2',
        stepDescription: 'This is the second step',
        stepperIcon: <DocsIcon />,
    },
    {
        step: 'Step 3',
        stepDescription: 'This is the third step',
        stepperIcon: <DocsIcon />,
    },
];

export const Primary = () => {
    const [activeIndex, setActiveIndex] = React.useState(0);
    const handleChange = (index: any) => {
        setActiveIndex(index);
    };

    return (
        <Stepper
            StepperFunc={steps}
            activeIndex={activeIndex}
            handleChange={handleChange}
            
        />
    );
};
