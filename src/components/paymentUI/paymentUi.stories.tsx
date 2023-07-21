import { ComponentMeta, ComponentStory } from '@storybook/react';
import { PaymentUI } from './index';

export default {
  title: 'components/PaymentUI',
  component: PaymentUI,
} as ComponentMeta<typeof PaymentUI>;

const Template: ComponentStory<typeof PaymentUI> = (args) => (
  <PaymentUI {...args} />
);

export const Primary = Template.bind({});

Primary.args = {
  title: 'Billing & Payment',
  description:
    'Cras gravida bibendum dolor eu varius. Morbi fermentum velit nisl, eget vehicula lorem sodales eget.',
  section: [
    {
      subTitle: 'Card Details',
      items: [
        {
          breakpoints: {
            sm: 8,
            md: 8,
            lg: 8,
            xs: 6,
          },
          label: 'Credit /debit card Number',
          cardImage: true,
          fullWidth: true,
          inputType: 'input',
          type: 'number',
          value: '',
          maxNumber: 16,
          errorMessage: 'please Enter card Number',
          required: true,
        },
        {
          breakpoints: {
            sm: 4,
            md: 4,
            lg: 4,
            xs: 6,
          },
          label: 'Account holder Name',
          fullWidth: true,
          inputType: 'input',
          value: '',
          errorMessage: 'please Enter Name',
          required: true,
        },
        {
          breakpoints: {
            sm: 4,
            md: 5,
            lg: 4,
            xs: 6,
          },
          label: 'Month / Year',
          fullWidth: true,
          inputType: 'date',
          dateFormat: 'MM-YYYY',
          value: '',
          error: false,
          errorMessage: 'please select any value',
          required: true,
        },
        {
          breakpoints: {
            sm: 4,
            md: 3,
            lg: 4,
            xs: 6,
          },
          label: 'Cvv',
          fullWidth: true,
          inputType: 'input',
          value: '',
          maxNumber: 3,
          errorMessage: 'please Enter Valid Cvv',
          type: 'number',
          required: true,
        },
      ],
    },
    {
      subTitle: 'Billing Details',
      items: [
        {
          breakpoints: {
            sm: 6,
            md: 6,
            lg: 6,
            xs: 6,
          },
          label: 'First Name',
          inputType: 'input',
          value: '',
          fullWidth: true,
          errorMessage: 'Please enter First Name',
        },
        {
          breakpoints: {
            sm: 6,
            md: 6,
            lg: 6,
            xs: 6,
          },
          label: 'Last Name',
          inputType: 'input',
          value: '',
          fullWidth: true,
          errorMessage: 'Please enter Last Name',
        },
        {
          breakpoints: {
            sm: 6,
            md: 6,
            lg: 6,
            xs: 6,
          },
          label: 'Address Line 1',
          inputType: 'input',
          value: '',
          fullWidth: true,
          errorMessage: 'Please enter Address',
        },
        {
          breakpoints: {
            sm: 6,
            md: 6,
            lg: 6,
            xs: 6,
          },
          label: 'Address Line 2',
          inputType: 'input',
          value: '',
          fullWidth: true,
          errorMessage: 'Please enter Address',
        },
        {
          breakpoints: {
            sm: 6,
            md: 6,
            lg: 6,
            xs: 6,
          },
          label: 'City',
          inputType: 'dropdown',
          fullWidth: true,
          selectOption: [{ label: 'chennai', value: 'chennai' }],
          value: '',
          errorMessage: 'Please select a value',
        },
        {
          breakpoints: {
            sm: 6,
            md: 6,
            lg: 6,
            xs: 6,
          },
          label: 'Zip code/ Postal code',
          fullWidth: true,
          type: 'number',
          value: '',
          inputType: 'input',
          errorMessage: 'Please enter Zip code/ Postal code',
        },
        {
          breakpoints: {
            sm: 6,
            md: 6,
            lg: 6,
            xs: 6,
          },
          label: 'State',
          inputType: 'dropdown',
          fullWidth: true,
          value: '',
          selectOption: [{ label: 'New York', value: 'New York' }],
          errorMessage: 'Please select a value',
        },
        {
          breakpoints: {
            sm: 6,
            md: 6,
            lg: 6,
            xs: 6,
          },
          label: 'Country',
          inputType: 'dropdown',
          fullWidth: true,
          value: '',
          selectOption: [
            { label: 'US', value: 'US' },
            { label: 'IN', value: 'US' },
          ],
          errorMessage: 'Please select a value',
        },
      ],
    },
  ],
  gridContainerProps: {},
  titleStyle: {},
  descStyle: {},
  subTitleStyle: {},
  rootStyle: {},
  buttons: [
    {
      buttonText: 'Make payment',
      onClick: (data: any) => {
        console.log('clicked', data);
      },
      breakpoints: {
        sm: 4,
        md: 4,
        lg: 4,
        xs: 6,
      },
    },
  ],
};
