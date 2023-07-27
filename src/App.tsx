import '@fontsource/poppins/400.css';
import '@fontsource/poppins/500.css';
import '@fontsource/poppins/600.css';
import '@fontsource/poppins/700.css';
import {BasicButtons} from "./components";
function App() {
  const sectionOne: Item[] = [
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
      type: 'text',
      value: '',
      maxNumber: 19,
      errorMessage: 'please Enter card Number',
      endAdornment: <DeleteIcon />,
      required: true,
      validationType: 'cardNumber',
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
      validationType: 'text',
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
      dateFormat: 'MM / YYYY',
      value: '',
      error: false,
      errorMessage: 'please select any value',
      required: true,
      validationType: 'text',
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
      validationType: 'cvv',
    },
  ];

  const sectionTwo: Item[] = [
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
      errorMessage: 'please Enter First Name',
      required: true,
      validationType: 'text',
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
      errorMessage: 'please Enter Last Name',
      required: false,
      validationType: 'text',
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
      errorMessage: 'please Enter Address',
      required: true,
      validationType: 'text',
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
      errorMessage: 'please Enter Address',
      required: false,
      validationType: 'text',
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
      errorMessage: 'please select any value',
      required: true,
      validationType: 'text',
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
      errorMessage: 'please Enter Zip code/ Postal code',
      required: true,
      maxNumber: 6,
      validationType: 'postalCode',
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
      errorMessage: 'please select any value',
      required: true,
      validationType: 'text',
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
        { label: 'IN', value: 'IN' },
      ],
      errorMessage: 'please select any value',
      required: true,
      validationType: 'text',
    },
  ];

  const paymentSections = [
    {
      subTitle: 'Card Details',
      items: sectionOne,
    },
    {
      subTitle: 'Billing Details',
      items: sectionTwo,
    },
  ];

  const buttons = [
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
  ];

  return (
    <div className="App" style={{ width: '100vw', height: '100vh' }}><BasicButtons >asdadsasdasda</BasicButtons> Check  <code>App.tsx</code></div>
  );
}

export default App;
