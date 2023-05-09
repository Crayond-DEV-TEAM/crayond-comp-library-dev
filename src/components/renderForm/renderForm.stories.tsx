import { ComponentStory, ComponentMeta } from '@storybook/react';
import { RenderForm } from './index';

export default {
  title: 'CommonTable/Progress',
  component: RenderForm,
} as ComponentMeta<typeof RenderForm>;

const Template: ComponentStory<typeof RenderForm> = (args) => (
  <RenderForm {...args} />
);

export const Primary = Template.bind({});
Primary.args = {
  formList:[
    {
      type: 'input',
      containerStyle: {},
      gridStyle: {},
      breakPoint: {
        xs: 12,
        sm: 12,
        md: 12,
        lg: 12,
        lx: 12,
      },
      inputProps: {
        type: 'text',
        label: 'Email',
        labelVariant: 'standard',
        required: true,
        // value: state?.email,
        error: true,
        errorMessage:"dfdsfdsf",
        // onChange: (e: any) => {
        //   (e?.target?.value);
        // },
      },
    },
  ]
};
