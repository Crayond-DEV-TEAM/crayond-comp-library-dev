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
import { Box, Button } from '@mui/material';
import VisibilityOffOutlinedIcon from '@mui/icons-material/VisibilityOffOutlined';
import VisibilityOutlinedIcon from '@mui/icons-material/VisibilityOutlined';
import { ProfileThree } from './components/profileThree';
import yup from './utils/yupSchema';
import { Screen } from './components/screen';
import { CustomButtonGroup } from './components/buttonGroup';
import { CustomRating } from './components/rating';
import SmilyHeart from './assets/smily_heart';
import SmilyHeartDisabled from './assets/smily_heart_disabled';
import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import StarIcon from '@mui/icons-material/Star';

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


  const phoneRegExp =
    /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;
  const formSchema = yup.object({
    firstName: yup
      .string()
      .min(4, 'Min length 4')
      .max(14, 'Max length 7')
      .required('Please enter first name'),
    lastName: yup
      .string()
      .min(4, 'Min length 4')
      .max(14, 'Max length 7')
      .required('Please enter Last name'),
    dob: yup.date().required('Please enter DOB'),
    gender: yup.string().required('Please enter Gender'),
    designation: yup.string().required('Please enter Designation'),
    mobileNumber: yup
      .object()
      .shape({
        mobile: yup.string().required('Please enter Phone number'), //.matches(phoneRegExp, 'Phone number is not valid'),
        mobile_code: yup.string().required('Please select Country code'),
      })
      .required('Please enter Phone number...'),
    address1: yup
      .string()
      .min(4, 'Min length 4')
      .max(14, 'Max length 7')
      .required('Please enter Address 1'),
    address2: yup
      .string()
      .min(4, 'Min length 4')
      .max(14, 'Max length 7')
      .required('Please enter Address 2'),
    email: yup
      .string()
      .email('Please enter valid email')
      .required('Please enter email'),
  });

  const buttons = [
    { label: 'Button 1', value: 1, startIcon: <FcGoogle />, isdisabled: false },
    { label: 'Button 2', value: 2, isdisabled: false },
    { label: 'Button 3', value: 3, isdisabled: false },
  ];
  const handleButtonChange = (e: any, value: any) => {
    console.log(e, value, 'value');
  };
  const customIcons = [
    {
      SelectIcon: <SmilyHeart />,
      unSelectIcon: <SmilyHeartDisabled />,
      label: 'Totally wrong',
      value: 0,
    },
    {
      SelectIcon: <SmilyHeart />,
      unSelectIcon: <SmilyHeartDisabled />,
      label: 'Not liked it',
      value: 0,
    },
    {
      SelectIcon: <SmilyHeart />,
      unSelectIcon: <SmilyHeartDisabled />,
      label: 'Average',
      value: 0,
    },
    {
      SelectIcon: <SmilyHeart />,
      unSelectIcon: <SmilyHeartDisabled />,
      label: 'Liked it',
      value: 0,
    },
    {
      SelectIcon: <SmilyHeart />,
      unSelectIcon: <SmilyHeartDisabled />,
      label: 'Loved it',
      value: 0,
    },
  ];

  const styledRating = [
    {
      filled: <FavoriteIcon />,
      unFilled: <FavoriteBorderIcon />,
      starValue: 0.5,
      remark: '100',
      maximumIcon: 5,
    },
    {
      filled: <StarIcon style={{ color: 'red' }} />,
      unFilled: (
        <StarIcon
          style={{ color: 'green', opacity: 0.55 }}
          fontSize="inherit"
        />
      ),
      starValue: 3.5,
      remark: '200 Reviews',
      maximumIcon: 8,
    },
  ];

  return (
    <div className="App" style={{ width: '100vw', height: '100vh' }}>
      <Screen
        containerStyle={{}}
        headerStyle={{}}
        bodyStyle={{}}
        footerStyle={{}}
        headerComponent={<>Header</>}
        bodyComponent={<>Body</>}
        footerComponent={<>Footer</>}
      />

      <CustomButtonGroup
        buttons={buttons}
        onClick={handleButtonChange}
        variant="contained"
        size="medium"
        disabled={false}
        selectedColor="#fff"
        unselectBgColor={'#665CD7'}
        selectedBgColor={'#4B42B8'}
        color="#fff"
        btnStyle={{
          '&:hover': {
            opacity: 1,
          },
          borderRadius: '4px',
        }}
      />

      <Box sx={{ mt: 2 }}>
        <CustomRating
          customIcons={customIcons}
          variant="star"
          styledRating={styledRating}
          remarkStyle={{}}
          selectedLabelStyle={{}}
          emojiContainerStyle={{}}
          onMouseEnter={(index: number) => {
            console.log(index);
          }}
          onMouseLeave={(index: number) => {
            console.log(index);
          }}
          onClick={(data) => {
            console.log(data);
          }}
          isReadOnly={false}
          isLabelVisible={true}
          children={<BasicButtons />}
          childrenStyle={{ m: 3 }}
          precision={0.5}
        />
      </Box>

      {/* <CommonTable
        Header={[
          {
            id: 'id',
            align: 'left',
            disablePadding: false,
            label: 'Sl No',
            isSortable: true,
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
      <Viewer
        rootStyle={{ backgroundColor: '' }}
        headerOptions={{
          title: 'My Profile',
          fontSize: '20px',
          fontWeight: 'bold',
          color: '#111111',
          titleBoxStyle: { backgroundColor: '' },
        }}
        viewBody={{
          viewBodyStyle: {},
          gridStyle: { justifyContent: 'center' },
          profileimage: {
            breakpoints: { xs: 12, sm: 3.5, md: 3, lg: 2 },
            profileImgStyle: {},
            imgSrc: profileImg,
            variant: 'rounded',
            profileimgContainer: {},
            avatarconStyle: {},
            profileImgEditStyle: {},
            profileImgEditIcon: <EditIcon color="#fff" />,
            onClick: () => {
              console.log('Profile Edit');
            },
            // customComp:<BasicButtons>hai</BasicButtons>
          },
          form: {
            breakpoints: { xs: 12, sm: 6, md: 6, lg: 4.5, xl: 4.5 },
            title: 'Michael Bloomberg',
            subTitle: 'Male',
            description: 'Senior Graphic Designer',
            titleStyle: {},
            descriptionStyle: {},
            subTitleStyle: {},
            formContainer: {},
            formList: [
              {
                icon: <DocsIcon color="#665CD7" />,
                label: 'Email',
                value: 'Michaelbloomberg@email.com',
                breakPoint: {
                  xs: 12,
                  sm: 12,
                  md: 12,
                  lg: 12,
                  lx: 12,
                },
                iconStyle: { backgroundColor: '#FAFAFA' },
                labelStyle: {},
                valueStyle: {},
                listWraper: { py: 1 },
              },
              {
                icon: <DocsIcon />,
                label: 'Date Of Birth',
                value: '01/06/1990',
                breakPoint: {
                  xs: 12,
                  sm: 12,
                  md: 12,
                  lg: 12,
                  lx: 12,
                },
                iconStyle: { backgroundColor: '#FAFAFA' },
                labelStyle: {},
                valueStyle: {},
                listWraper: { py: 1 },
              },
              {
                icon: <DocsIcon />,
                label: 'Mobile Number',
                value: '+1 9999999999',
                breakPoint: {
                  xs: 12,
                  sm: 12,
                  md: 12,
                  lg: 12,
                  lx: 12,
                },
                iconStyle: { backgroundColor: '#FAFAFA' },
                labelStyle: {},
                valueStyle: {},
                listWraper: { py: 1 },
              },
              {
                icon: <DocsIcon />,
                label: 'Desgination',
                value: 'Developer',
                breakPoint: {
                  xs: 12,
                  sm: 12,
                  md: 12,
                  lg: 12,
                  lx: 12,
                },
                iconStyle: { backgroundColor: '#FAFAFA' },
                labelStyle: {},
                valueStyle: {},
                listWraper: { py: 1 },
              },
              {
                icon: <DocsIcon />,
                label: 'City',
                value: 'Bell Gardens',
                breakPoint: {
                  xs: 12,
                  sm: 12,
                  md: 12,
                  lg: 12,
                  lx: 12,
                },
                listWraper: { py: 1 },
                iconStyle: { backgroundColor: '#FAFAFA' },
                labelStyle: {},
                valueStyle: {},
              },
              {
                icon: <DocsIcon />,
                label: 'State',
                value: 'California',
                breakPoint: {
                  xs: 12,
                  sm: 12,
                  md: 12,
                  lg: 12,
                  lx: 12,
                },
                iconStyle: { backgroundColor: '#FAFAFA' },
                labelStyle: {},
                valueStyle: {},
                listWraper: { py: 1 },
              },
            ],
          },
          btnList: [
            {
              buttonText: 'Edit',
              onClick: () => {
                console.log('Edit');
              },
              breakPoint: {
                xs: 12,
                sm: 12,
                md: 12,
                lg: 12,
                lx: 12,
              },
              btnStyle: { backgroundColor: '#665CD7' },
              btnListConStyle: {
                mt: 3,
                display: 'flex',
                justifyContent: 'center',
              },
            },
          ],
        }}
      />

      <Viewer
        rootStyle={{ backgroundColor: '' }}
        viewBody={{
          viewBodyStyle: {},
          gridStyle: { justifyContent: 'left' },
          profileimage: {
            breakpoints: { xs: 12, sm: 12, md: 12, lg: 12 },
            profileImgStyle: {},
            imgSrc: profileImg,
            variant: 'rounded',
            profileimgContainer: { display: 'flex', justifyContent: 'center' },
            profileImgEditIcon: <EditIcon color="#fff" />,
            onClick: () => {
              console.log('Profile Edit');
            },
          },
          form: {
            breakpoints: { xs: 12, sm: 12, md: 12, lg: 12, xl: 12 },
            title: 'Michael Bloomberg',
            titleStyle: { fontSize: '16px', py: 2, textAlign: 'center' },
            descriptionStyle: {},
            subTitleStyle: {},
            formContainer: {},
            formListContainer: {
              border: '1px solid #E9E9E9',
              borderRadius: '8px',
              p: 2,
            },
            formList: [
              {
                icon: <DocsIcon color="green" />,
                value: 'Mailidhere@gmail.com',
                breakPoint: {
                  xs: 12,
                  sm: 12,
                  md: 12,
                  lg: 12,
                  lx: 12,
                },
                iconStyle: {
                  backgroundColor: 'none',
                  borderRadius: '0px',
                  py: 0,
                },
                valueStyle: { fontSize: '14px' },
                listWraper: { alignItems: 'center' },
              },
              {
                icon: <DocsIcon color="yellow" />,
                value: '9999 999 999',
                breakPoint: {
                  xs: 12,
                  sm: 12,
                  md: 12,
                  lg: 12,
                  lx: 12,
                },
                iconStyle: {
                  backgroundColor: 'none',
                  borderRadius: '0px',
                  py: '0px',
                },
                valueStyle: { fontSize: '14px' },
                listWraper: { alignItems: 'center' },
              },

              {
                icon: <DocsIcon color="red" />,
                value: '01 Jan 1998 (25Yrs / Male)',
                breakPoint: {
                  xs: 12,
                  sm: 12,
                  md: 12,
                  lg: 12,
                  lx: 12,
                },
                iconStyle: {
                  backgroundColor: 'none',
                  borderRadius: '0px',
                  py: 0,
                },
                valueStyle: { fontSize: '14px' },
                listWraper: { alignItems: 'center' },
              },
              {
                icon: <DocsIcon color="blue" />,
                value:
                  '2/498, Ayshika Still water court Sunrise Avenue, 2nd Cross St, Neelankarai, Chennai - 600115',
                breakPoint: {
                  xs: 12,
                  sm: 6,
                  md: 6,
                  lg: 12,
                  lx: 12,
                },
                iconStyle: {
                  backgroundColor: 'none',
                  borderRadius: '0px',
                  py: 0,
                },
                valueStyle: { fontSize: '14px' },
                listWraper: { alignItems: 'center' },
              },
            ],
          },
          btnList: [
            {
              buttonText: 'Edit',
              onClick: () => {
                console.log('Edit');
              },
              breakPoint: {
                xs: 12,
                sm: 12,
                md: 12,
                lg: 12,
                lx: 12,
              },
              btnStyle: { width: '100%', backgroundColor: '#665CD7' },
              btnListConStyle: { mt: 3 },
            },
          ],
        }}
      />

      <SignupScreen
        option='mobileNumberSignup'
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
      />
      <LoginScreen
        option="emailWithPasswordLogin"
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
      />
    </div>
  )
}

export default App;
