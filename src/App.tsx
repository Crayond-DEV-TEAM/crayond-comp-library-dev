import '@fontsource/poppins/400.css';
import '@fontsource/poppins/500.css';
import '@fontsource/poppins/600.css';
import '@fontsource/poppins/700.css';
import { Viewer } from './components/viewer';
import DeleteIcon from './assets/deleteIcon';
import profileImg from './assets/sampleprof.png';
import React, { Component, useState } from 'react';
import { FcGoogle } from 'react-icons/fc';
import CompanyLogo from './assets/companyLogo.png';
import loginImg from './assets/loginImg.png';
import LoginScreen from './components/loginPage/login';
import SignupScreen from './components/signUpPage/signUp';
import { BasicButtons, CommonTable } from '@components';
import FunnelIcon from './assets/funnelIcon';
import SearchIcon from './assets/searchIcon';
import DownloadIcon from './assets/downloadIcon';
import DocsIcon from './assets/docsIcon';
import EditIcon from './assets/editIcon';
import NotificationIcon from './assets/notificationIcon';
import AlertIcon from './assets/alertIcon';
import { Button } from '@mui/material';
import VisibilityOffOutlinedIcon from '@mui/icons-material/VisibilityOffOutlined';
import VisibilityOutlinedIcon from '@mui/icons-material/VisibilityOutlined';
import { ProfileThree } from './components/profileThree';
import yup from './utils/yupSchema';
import { Screen } from './components/screen';
import { Slider } from './components/slider';
import { SliderRange } from './components/sliderRange';
import { profile } from 'console';

function App() {
  const [isSelectedAll, setIsSelectedAll] = React.useState(false);
  const [selectedCheckbox, setSelectedCheckbox] = React.useState([1, 2]);
  const [switchList, setSwitchList] = React.useState([1, 4]);
  const [headerSelect, setHederSelect] = React.useState('');
  const [headerCheckbox, setHederCheckbox] = React.useState(true);
  const [alertOpen, setAlertOpen] = React.useState(false);
  const [isDataMask, setIsDataMask] = React.useState(false);
  const [value, setValue] = useState<number>(0);
  const [valuess, setValuess] = useState<number>(0);
  const checkboxHandleChange = (data: any) => {
    if (!selectedCheckbox.includes(data)) {
      setSelectedCheckbox([...selectedCheckbox, data]);
    } else {
      const index = selectedCheckbox.indexOf(data);
      if (index > -1) {
        selectedCheckbox.splice(index, 1);
        setSelectedCheckbox([...selectedCheckbox]);
      }
    }
  };
  const setHederSearch = (value: any) => {
    console.log('🚀 ~ file: App.tsx:31 ~ setHederSearch ~ value:', value);
  };
  const SelectAll = (data: any | undefined, isRestSet: boolean | undefined) => {
    if (!isRestSet) {
      setSelectedCheckbox([...data]);
      setIsSelectedAll(true);
    } else {
      setSelectedCheckbox([]);
      setIsSelectedAll(false);
    }
  };
  const handleSwitch = (id: any) => {
    if (!switchList.includes(id)) {
      setSwitchList([...switchList, id]);
    } else {
      const index = switchList.indexOf(id);
      if (index > -1) {
        switchList.splice(index, 1);
        setSwitchList([...switchList]);
      }
    }
  };
  const downloadMethod = (e: Event) => {
    console.log('Download Method working!', e);
  };
  const fillerMethod = () => {
    setIsDataMask(!isDataMask);
    console.log('Filter Method working!');
  };
  const primaryBtnMethod = () => {
    console.log('primary Btn Method working!');
  };
  const secondaryBtnMethod = () => {
    console.log('secondary Btn Method working!');
  };

function App() {

  interface FilmOptionType {
    title: string;
    year: number;
  }

  interface CheckedOption {
    title: string;
    isChecked: boolean;
  }

  const top100Films = [
    { title: 'Option 1', year: 1994 },
    { title: 'Option 2', year: 1972 },
    { title: 'Option 3', year: 1974 },
    { title: 'Option 4', year: 2008 },
    { title: 'Option 5', year: 1957 },
    { title: "Option 6", year: 1993 },
    { title: 'Option 7', year: 1994 },

  ];

  const CheckBoxData = [
    { title: 'The Shawshank Redemption', isChecked: false },
    { title: 'The Godfather', isChecked: false },
    { title: 'The Godfather: Part II', isChecked: false },
    { title: 'The Dark Knight', isChecked: false },
    { title: '12 Angry Men', isChecked: false },
    { title: "Schindler's List", isChecked: false },
    { title: 'Pulp Fiction', isChecked: false },
    {
      title: 'The Lord of the Rings: The Return of the King',
      isChecked: false,
    },
    { title: 'The Good, the Bad and the Ugly', isChecked: false },
    { title: 'Fight Club', isChecked: false },
    {
      title: 'The Lord of the Rings: The Fellowship of the Ring',
      isChecked: false,
    },
    {
      title: 'Star Wars: Episode V - The Empire Strikes Back',
      isChecked: false,
    },
    { title: 'Forrest Gump', isChecked: false },
    { title: 'Inception', isChecked: false },
    { title: "One Flew Over the Cuckoo's Nest", isChecked: false },
    { title: 'Goodfellas', isChecked: false },
    { title: 'The Matrix', isChecked: false },
    { title: 'Seven Samurai', isChecked: false },
    {
      title: 'Star Wars: Episode IV - A New Hope',
      isChecked: false,
    },
  ];

  const [checked, setChecked] = useState([])
  const [checkedArr] = useState([...CheckBoxData])
  const [defaultData, setDefaultData] = useState([])
  const [groupedData, setGroupedData] = useState([])
  const [chipData, setChipData] = useState([])

  const handleCheckedItem = (event: object, newValue: CheckedOption[]) => {
    const slicedData = newValue.length > 0 ? newValue?.filter((item: CheckedOption, index: number) =>
      newValue.findIndex((obj: CheckedOption) =>
        obj.title === item.title && obj.isChecked === item.isChecked) === index) : newValue
    const convertedValue = slicedData as never[];

    console.log(convertedValue, '00000');

    setChecked(convertedValue)
  }

  const handleDefaultChange = (val: any, newValue: FilmOptionType[]) => {
    const slicedData = newValue.length > 0 ? newValue.filter((item: FilmOptionType, index: number) =>
      newValue.findIndex((obj: FilmOptionType) =>
        obj.title === item.title && obj.year === item.year) === index) : newValue
    const convertedValue = slicedData as never[];
    setDefaultData(convertedValue)
  }
  const handleGroupChange = (event: any, newValue: FilmOptionType[]) => {
    const slicedData = newValue.length > 0 ? newValue.filter((item: FilmOptionType, index: number) =>
      newValue.findIndex((obj: FilmOptionType) =>
        obj.title === item.title && obj.year === item.year) === index) : newValue
    const convertedValue = slicedData as never[];
    setGroupedData(convertedValue)
  }

  const handleChipChange = (val: any, newValue: FilmOptionType[]) => {
    const slicedData = newValue.length > 0 ? newValue.filter((item: FilmOptionType, index: number) =>
      newValue.findIndex((obj: FilmOptionType) =>
        obj.title === item.title && obj.year === item.year) === index) : newValue
    const convertedValue = slicedData as never[];
    setChipData(convertedValue)
  }


  return (
    <div className="App" style={{ width: '100vw', height: '100vh' }}>
      <div
        className="slide"
        style={{
          width: '60%',
          minHeight: '20%',
          background: '#fff',
          padding: 5,
          marginTop: '35px',
        }}
      >
        <Slider
          value={valuess}
          step={10}
          size={'small'}
          sliderHeight={5}
          disabled={false}
          customMarks={false}
          progressLabel={false}
          valueLabelDisplay={'off'}
          labelColor={''}
          labelSize={2}
          sliderColor={''}
          thumbColor={''}
          sliderStyle={{}}
          symbol={''}
          labelStyle={{}}
          sliderThumbStyle={{}}
          marks={[]}
          handleChangeFun={(e, v) => {
            setValuess(v as number), console.log(e, v);
          }}
        />
        <SliderRange
          value={[20, 40]}
          step={10}
          minMaxValue={true}
          handleChangeFun={(e, v) => console.log(e, v)}
          minMaxValues={true}
        />
      </div>
      {/* <Screen
       containerStyle={{}}
       headerStyle={{}}
       bodyStyle={{}}
       footerStyle={{}}
       headerComponent={<>Header</>}
       bodyComponent={<>Body</>}
       footerComponent={<>Footer</>}
      /> */}
      {/* <CommonTable
        Header={[
          {
            id={'id',
            align: 'left',
            disablePadding: false,
            label: 'Sl No',
            isSortable: true,
    <div className="App" style={{ width: '100vw', background: '#fff', height: '100vh' }}>
      <SelectBoxComponent
        limitTags={2}
        groupingProps={{
          isCloseIcon: true,
          isSearch: true,
          handleGroupChange: handleGroupChange,
          groupedData: groupedData,
          arrData: top100Films,
          defaultValue: [],
          label: '',
          dropdown: {
            minHeight: '',
            maxHeight: '',
            maxWidth: '',
            minWidth: '',
            backgroundColor: '',
            color: ''
          },
          input: {
            minHeight: '',
            minWidth: '',
            backgroundColor: '',
            maxWidth: '',
            maxHeight: '',
            color: '',
            border: '',
            borderRadius: ''
          }
        }}
        defaultProps={{
          isCloseIcon: true,
          isSearch: true,
          handleDefaultChange: handleDefaultChange,
          defaultData: defaultData,
          arrData: top100Films,
          defaultValue: [],
          label: '',
          dropdown: {
            minHeight: '',
            maxHeight: '',
            maxWidth: '',
            minWidth: '',
            backgroundColor: '',
            color: ''
          },
          input: {
            minHeight: '',
            minWidth: '',
            backgroundColor: '',
            maxWidth: '',
            maxHeight: '',
            color: '',
            border: '',
            borderRadius: ''
          }
        }}
        // HeaderComponent={{
        //   variant: 2,
        //   styles: {
        //     padding: '10px 0',
        //     margin: '0',
        //   },
        //   searchPlaceholder: 'Search by name, email',
        //   setHederSearch: setHederSearch,
        //   checkboxLabel: 'Show only my reportees',
        //   primaryBtnText: 'Add Member',
        //   secondaryBtnText: 'Import',
        //   secondaryBtnIcon: <DocsIcon color={'#357968'} />,
        //   funnelIcon: <FunnelIcon color={'#fff'} />,
        //   searchIcon: <SearchIcon />,
        //   fillerMethod: fillerMethod,
        //   primaryBtnMethod: primaryBtnMethod,
        //   secondaryBtnMethod: secondaryBtnMethod,
        //   headerCheckbox: headerCheckbox,
        //   setHederCheckbox: setHederCheckbox,
        // }}
      /> */}   

   
      {/* <SignupScreen
        option='socialMediaSignup'
        sectionOne={{
          breakpoints: { xs: 12, md: 3, sm: 4, lg: 3 },
          image: { src: loginImg, height:'100%', width: '100%',style:{
            height:'100%', width: '100%'
          } },
          // backgroundWrapStyle:{height: '100%', width: '100%'},
          // component: <BasicButtons />
        }}
        sectionTwo={{
          breakpoints: { xs: 12, md: 9, sm: 8, lg: 9 },
          WraperStyle:{},
          cardParentStyle:{},
          cardData:{
            title:'Welcome!',
            description:'One positive feedback per day or week can make us grow exponentially',
            logo:{
              logoSrc: CompanyLogo, logoHeight: '29px', logoWidth: '147px',
              alt:'logo',
              logoStyle:{},
            },
            childrenStyle:{},
            mobileNumberSignup:{
              labelText:'Mobile Number',
              labelStyle:{},
              mobileFieldstyle:{contryCodefontSize:'14px',fontWeight:'600',numberFontSize:'16px'},
              dropDownStyle:{width:'120px'}
            },
            socialMedia:{
              socialMediaList:[
                {
                  label: 'SignUp with google',
                  icon: <FcGoogle />,
                  onSocialmediaLogin: () => {
                    console.log('SignUp with google');
                  },
                  style: {
                    textAlign: 'center',
                    width: '100%',
                    color: '#3B3B3B',
                    fontSize: '14px',
                    fontWeight: 'Medium',
                  },
                  SocialMediaButtonStyle: {},
                },
                {
                  label: 'Sign up with Outlook',
                  icon: <FcGoogle />,
                  onSocialmediaLogin: () => {
                    console.log('SignUp with Outlook');
                  },
                  style: {
                    textAlign: 'center',
                    width: '100%',
                    color: '#3B3B3B',
                    fontSize: '14px',
                    fontWeight: 'Medium',
                  },
                  SocialMediaButtonStyle: {},
                },
                {
                  label: 'Sign up with Email',
                  icon: <FcGoogle />,
                  onSocialmediaLogin: () => {
                    console.log('Sign up with Email');
                  },
                  style: {
                    textAlign: 'center',
                    width: '100%',
                    color: '#3B3B3B',
                    fontSize: '14px',
                    fontWeight: 'Medium',
                  },
                  SocialMediaButtonStyle: {},
                },
              ],        
            },
            emailWithPassword:{
              nameStyle:{},
              firstName:{
                FnameFieldStyle:{},
                labelStyle:{},
                label:'First Name'
              },
              lastName:{
                LnameFieldStyle:{},
                labelStyle:{},
                label:'Last Name'
              },        
              email:{
                fieldstyle:{},
                labelStyle:{},
                label:'Email'
              },
              password:{
                label:'Password',
                labelStyle:{},
                fieldstyle:{},
                visbleIcon: <VisibilityOutlinedIcon />,
                invisibleIcon: <VisibilityOffOutlinedIcon />,
              },
              confirmPassword:{
                label:'Confirm Password',
                labelStyle:{},
                fieldstyle:{},
                visbleIcon: <VisibilityOutlinedIcon />,
                invisibleIcon: <VisibilityOffOutlinedIcon />,
              }
            },
            bottomText:'You have an account?',
            buttonText:'Sign Up',
            titleStyle:{},
            cardStyle:{},
            btnStyle:{},
            signupActionText:'Login',
            actionstyle:{},
            bottomTextStyle:{},
            onLoginClick: () => {
              console.log('login');
            },
          },
        }}
        onSubmit={(detail: object) => {
          console.log(detail);
        }}
      /> */}
      {/* <LoginScreen
        option="mobileNumberLogin"
        sectionOne={{
          breakpoints: { xs: 12, md: 3, sm: 4, lg: 3 },
          image: {
            src: loginImg,
            height: '100%',
            width: '100%',
            style: {
              height: '100%',
              width: '100%',
            },
          },
          // backgroundWrapStyle:{height: '100%', width: '100%'},
          // component: <BasicButtons />
        }}
        
        sectionTwo={{
          breakpoints: { xs: 12, md: 9, sm: 8, lg: 9 },
          WraperStyle: {},
          cardParentStyle: {},
          cardData: {
            logo: {
              logoSrc: CompanyLogo,
              logoHeight: '29px',
              logoWidth: '147px',
            },
            title: 'Welcome!',
            description:
              'One positive feedback per day or week can make us grow exponentially',
            bottomText: "Don't have an account?",
            buttonText: 'Send OTP',
            loginActionText: 'Sign in',
            onSignUpClick: () => {
              console.log('signup');
            },
            titleStyle: {},
            btnStyle: {},
            cardStyle: {},
            childrenStyle: {},
            logoStyle: {},
            bottomTextStyle: {},
            actionstyle: {},
            socialMedia: {
              workMailInput: {
                label: 'Work Email',
                labelStyle: {},
                forgotStyle: {},
                onForgotClick: () => {
                  console.log('forgot');
                },
              },
              divider: {
                dividerStyle: {},
                dividerText: 'or',
                dividerTextStyle: {},
              },
              socialMediaList: [
                {
                  label: 'SignUp with google',
                  icon: <FcGoogle />,
                  onSocialmediaLogin: () => {
                    console.log('SignUp with google');
                  },
                  style: {
                    textAlign: 'center',
                    width: '100%',
                    color: '#3B3B3B',
                    fontSize: '14px',
                    fontWeight: 'Medium',
                  },
                  SocialMediaButtonStyle: {},
                },
                {
                  label: 'Sign up with Outlook',
                  icon: <FcGoogle />,
                  onSocialmediaLogin: () => {
                    console.log('SignUp with Outlook');
                  },
                  style: {
                    textAlign: 'center',
                    width: '100%',
                    color: '#3B3B3B',
                    fontSize: '14px',
                    fontWeight: 'Medium',
                  },
                  SocialMediaButtonStyle: {},
                },
              ],
            },
            emailWithPassword: {
              email: {
                label: 'Email',
                labelStyle: {},
                fieldstyle: {},
              },
              password: {
                label: 'password',
                labelStyle: {},
                fieldstyle: {},
                visbleIcon: <VisibilityOutlinedIcon />,
                invisibleIcon: <VisibilityOffOutlinedIcon />,
              },
              forgotStyle: {},
              onForgotClick: () => {
                console.log('forgot');
              },
            },
            mobileNumberLogin: {
              labelText: 'Mobile Number',
              labelStyle: {},
              mobileFieldstyle: {
                contryCodefontSize: '14px',
                fontWeight: '600',
                numberFontSize: '16px',
              },
              dropDownStyle: { width: '110px' },
            },
          },
        }}
        onSubmit={(detail: object) => {
          console.log(detail);
        }}
        rootStyle={{ height: '100%', width: '100%' }}
      /> */}

    </div>
  )
}
}

export default App;
