import { ComponentStory, ComponentMeta } from '@storybook/react';
import { RenderForm } from './index';
import { BasicButtons } from '../button';

export default {
  title: 'components/RenderForm',
  component: RenderForm,
} as ComponentMeta<typeof RenderForm>;

const Template: ComponentStory<typeof RenderForm> = (args) => (
  <RenderForm {...args} />
);

export const Primary = Template.bind({});
Primary.args = {
  formList: [
    {
      type: 'heading',
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
        value: 'Basic Details',
        sx: {
          fontSize: '16px',
          color: '#111111',
          fontWeight: '500',
          margin: '0 0 8px 0',
        },
      },
    },
    {
      type: 'input',
      containerStyle: {},
      gridStyle: {},
      breakPoint: {
        xs: 12,
        sm: 6,
        md: 6,
        lg: 6,
        lx: 6,
      },
      inputProps: {
        type: 'text',
        label: 'First Name',
        name: 'firstName',
        labelVariant: 'standard',
        // rules: {
        //   required: 'Please enter First name',
        //   minLength: {
        //     value: 5,
        //     message: 'min length is 4',
        //   },
        //   maxLength: {
        //     value: 15,
        //     message: 'min length is 14',
        //   },
        // },
      },
    },
    {
      type: 'input',
      containerStyle: {},
      gridStyle: {},
      breakPoint: {
        xs: 12,
        sm: 6,
        md: 6,
        lg: 6,
        lx: 6,
      },
      inputProps: {
        type: 'text',
        label: 'Last Name',
        name: 'lastName',
        labelVariant: 'standard',
        rules: {
          required: 'Please enter Last name',
          minLength: {
            value: 5,
            message: 'min length is 4',
          },
          maxLength: {
            value: 15,
            message: 'min length is 14',
          },
        },
      },
    },
    {
      type: 'date',
      containerStyle: {},
      gridStyle: {},
      breakPoint: {
        xs: 12,
        sm: 6,
        md: 6,
        lg: 6,
        lx: 6,
      },
      inputProps: {
        type: 'text',
        label: 'DOB',
        name: 'dob',
        labelVariant: 'standard',
        rules: {
          required: 'Please enter DOB',
        },
        inputFormat: 'dd-MM-yyyy',
        // components:{
        //   OpenPickerIcon: <DocsIcon/>
        // },
      },
    },
    {
      type: 'chipSelect',
      containerStyle: {},
      gridStyle: {},
      breakPoint: {
        xs: 12,
        sm: 6,
        md: 6,
        lg: 6,
        lx: 6,
      },
      inputProps: {
        label: 'Gender',
        name: 'gender',
        labelVariant: 'standard',
        rules: {
          required: 'Please enter Gender',
          minLength: {
            value: 5,
            message: 'min length is 4',
          },
          maxLength: {
            value: 15,
            message: 'min length is 14',
          },
        },
        options: [
          { label: 'Male', value: 'Male' },
          { label: 'Female', value: 'Female' },
          { label: 'Others', value: 'Others' },
        ],
      },
    },
    {
      type: 'dropDown',
      containerStyle: {},
      gridStyle: {},
      breakPoint: {
        xs: 12,
        sm: 6,
        md: 6,
        lg: 6,
        lx: 6,
      },
      inputProps: {
        type: 'text',
        label: 'Designation',
        name: 'designation',
        labelVariant: 'standard',
        rules: {
          required: 'Please enter Designation',
        },
        selectOption: [
          { label: 'Developer', value: 'Developer' },
          { label: 'Designer', value: 'Designer' },
          { label: 'designation', value: 'designation' },
        ],
      },
    },
    {
      type: 'heading',
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
        value: 'Contact Information',
        sx: {
          fontSize: '16px',
          color: '#111111',
          fontWeight: '500',
          margin: '18px 0 8px 0',
        },
      },
    },
    {
      type: 'mobileNumberInput',
      containerStyle: {},
      gridStyle: {},
      breakPoint: {
        xs: 12,
        sm: 6,
        md: 6,
        lg: 6,
        lx: 6,
      },
      inputProps: {
        label: 'Mobile Number',
        name: 'mobileNumber',
        labelVariant: 'standard',
        required: true,
        // rules: {
          // required: 'Please enter Designation',
          // minLength: {
          //   value: 5,
          //   message: 'min length is 4',
          // },
          // maxLength: {
          //   value: 15,
          //   message: 'min length is 14',
          // },
        // },
        // error:true,
        // errorMessage: 'Please enter Mobile number',
      },
    },
    {
      type: 'input',
      containerStyle: {},
      gridStyle: {},
      breakPoint: {
        xs: 12,
        sm: 6,
        md: 6,
        lg: 6,
        lx: 6,
      },
      inputProps: {
        type: 'text',
        label: 'Email ID',
        name: 'email',
        labelVariant: 'standard',
        rules: {
          required: 'Please enter Email',
          minLength: {
            value: 5,
            message: 'min length is 4',
          },
          maxLength: {
            value: 15,
            message: 'min length is 14',
          },
        },
        errorMessage: 'Please enter Email Id',
      },
    },
    {
      type: 'input',
      containerStyle: {},
      gridStyle: {},
      breakPoint: {
        xs: 12,
        sm: 6,
        md: 6,
        lg: 6,
        lx: 6,
      },
      inputProps: {
        type: 'text',
        label: 'Address Line 1',
        name: 'address1',
        labelVariant: 'standard',
        rules: {
          required: 'Please enter Address 1',
          minLength: {
            value: 5,
            message: 'min length is 4',
          },
          maxLength: {
            value: 15,
            message: 'min length is 14',
          },
        },
        errorMessage: 'Please enter Address Line 1',
      },
    },
    {
      type: 'input',
      containerStyle: {},
      gridStyle: {},
      breakPoint: {
        xs: 12,
        sm: 6,
        md: 6,
        lg: 6,
        lx: 6,
      },
      inputProps: {
        type: 'text',
        label: 'Address Line 2',
        name: 'address2',
        labelVariant: 'standard',
        rules: {
          required: 'Please enter Address 2',
          minLength: {
            value: 5,
            message: 'min length is 4',
          },
          maxLength: {
            value: 15,
            message: 'min length is 14',
          },
        },
        errorMessage: 'Please enter Address Line 2',
      },
    },
    {
      type: 'custom',
      containerStyle: {},
      gridStyle: {},
      breakPoint: {
        xs: 12,
        sm: 6,
        md: 6,
        lg: 6,
        lx: 6,
      },
      component: <BasicButtons>Custom Com</BasicButtons>,
    },
  ],
};
