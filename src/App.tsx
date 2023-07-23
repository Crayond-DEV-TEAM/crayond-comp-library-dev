import '@fontsource/poppins/400.css';
import '@fontsource/poppins/500.css';
import '@fontsource/poppins/600.css';
import '@fontsource/poppins/700.css';
import { Viewer } from './components/viewer';
import DeleteIcon from './assets/deleteIcon';
import profileImg from './assets/sampleprof.png';
import React, { Component } from 'react';
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
import { CustomFilter } from './components/filter';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import { useState } from 'react';
import { SelectBoxComponent } from './components/selectBox';

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

  // const products = [
  //   {
  //     id: 1,
  //     name: 'Product 1',
  //     category: 'Electronics',
  //     price: 100,
  //     brand: 'Brand A',
  //   },
  //   {
  //     id: 2,
  //     name: 'Product 2',
  //     category: 'Clothing',
  //     price: 50,
  //     brand: 'Brand B',
  //   },
  //   // Add more product objects as needed
  // ];

  const customData = [
    {
      listName: 'Category',
      selected: false,
      // listIcon: <InboxIcon />,
      subList: [
        {
          list: 'Category1',
          selected: false,
          listStyle: {},
          LabelbgColor: '#E9E9E9',
          LabelColor: '#666666',
        },
        {
          list: 'Category2',
          selected: false,
          listStyle: {},
          LabelbgColor: '#E9E9E9',
          LabelColor: '#666666',
        },
        {
          list: 'Category3',
          selected: false,
          listStyle: {},
          LabelbgColor: '#E9E9E9',
          LabelColor: '#666666',
        },
        {
          list: 'Category4',
          selected: false,
          listStyle: {},
          LabelbgColor: '#E9E9E9',
          LabelColor: '#666666',
        },
        {
          list: 'Category5',
          selected: false,
          listStyle: {},
          LabelbgColor: '#E9E9E9',
          LabelColor: '#666666',
        },
        {
          list: 'Category6',
          selected: false,
          listStyle: {},
          LabelbgColor: '#E9E9E9',
          LabelColor: '#666666',
        },
      ],
      listNameStyle: {},
      subListType: 'checkbox',
    },
    {
      listName: 'product',
      // listIcon: <InboxIcon />,
      selected: false,
      subList: [
        {
          list: 'Product1',
          selected: false,
          LabelbgColor: '#E9E9E9',
          LabelColor: '#666666',
        },
        {
          list: 'product2',
          selected: false,
          LabelbgColor: '#E9E9E9',
          LabelColor: '#666666',
        },
        {
          list: 'product3',
          selected: false,
          LabelbgColor: '#E9E9E9',
          LabelColor: '#666666',
        },
        {
          list: 'product4',
          selected: false,
          LabelbgColor: '#E9E9E9',
          LabelColor: '#666666',
        },
      ],
      subListType: 'chip',
    },
    {
      listName: 'Price',
      selected: false,
      // listIcon: <InboxIcon />,

      subList: [
        {
          list: '100',
          selected: false,
        },
        {
          list: '200',
          selected: false,
        },
        {
          list: '300',
          selected: false,
        },
      ],
      subListType: 'checkbox',
    },
  ];

  const getSelectedData = (data: any) => {
    const selectedData: any = [];

    data.forEach((item: any) => {
      const { listName, subList } = item;
      const selectedSubList = subList?.filter(
        (subItem: any) => subItem.selected
      );
      if (selectedSubList && selectedSubList.length > 0) {
        selectedData.push({ listName, subList: selectedSubList });
      }
    });
    console.log(selectedData);
  };
  const buttons = [
    {
      label: 'Clear all',
      onClick: (data: any, state: any) => {
        state();
        getSelectedData(customData);
      },
      btnstyle: {
        backgroundColor: '#FFE8E9',
        padding: '4px',
        color: '#F44F5A',
        width: '121px',
        height: '36px',
        fontSize: '14px',
      },
    },
    {
      label: 'Apply',
      onClick: (data: any, state: any, setAnchorEl: any) => {
        getSelectedData(data);
        setAnchorEl(false);
      },
      btnstyle: {
        backgroundColor: '#665CD7',
        padding: '4px',
        color: '#fff',
        width: '121px',
        height: '36px',
        fontSize: '14px',
      },
    },
  ];
  return (
    <div className="App" style={{ width: '100vw', height: '100vh' }}>
      <CustomFilter
        icon={<FunnelIcon color="#fff" width="16px" height="16px" />}
        customData={customData}
        buttons={buttons}
        rootStyle={{}}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'left',
        }}
        // transformOrigin={{}}
        filterTitle="Filter"
        filterTitleStyle={{}}
        listIconStyle={{}}
        subListContainerStyle={{}}
        buttonContainerStyle={{}}
        PopoverStyle={{}}
        contentWrapStyle={{}}
        searchBarStyle={{}}
        showSearchBar={true}
        filterButtonStyle={{ height: '36px', width: '10px' }}
        labelStyle={{}}
        listItemStyle={{}}
        maxLabelShow={2}
        visibleSubList={3}
        moreLabelStyle={{
          backgroundColor: '#E9E9E9',
          padding: '3px 8px',
          fontSize: '10px',
          m: 0,
          color: '#fff',
        }}
        titleWrapperStyle={{}}
        btnWrapperStyle={{}}
        selectedchipConStyle={{}}
        searchPlaceHolder="Search"
        searchVariant="outlined"
        searchbarSize="small"
        checkboxStyle={{}}
        chipStyle={{}}
        chipVariant="outlined"
        badgeColor="secondary"
      />
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
            id: 'id',
            align: 'left',
            disablePadding: false,
            label: 'Sl No',
            isSortable: true,
  return (
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
      {/* <Viewer
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
      /> */}

      {/* <Viewer
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
      /> */}

      {/* <ProfileThree
        isEditMode={isEdit}
        titleOptions={{
          title: 'My Profile',
          sxProps: {
            fontSize: '16px',
            fontWeight: '600',
            color: '#11111199',
          },
          icon: <DocsIcon color="#665Cff" />,
        }}
        uploadOptions={{
          imgScr: profile,
          buttonEnabled: true,
          deleteProfile: deleteProfile,
          uploadProfile: uploadProfile,
          variant: 'rounded',
        }}
        afterProfileComponent={<>Custom Component here...</>}
        overallSxProps={{
          backgroundColor: '#DAE8FC',
          padding: '20px 0',
        }}
        cardSxProps={{}}
        gridContainerProps={{ columnSpacing: 3, spacing: 0 }}
        renderForm={{
          formButtonContainerStyle: {},
          submitButton: {
            visible: true,
            title: 'Save',
            onClick: (data: object) => onSubmitFun(data),
            sx: {},
          },
          cancelButton: {
            visible: true,
            title: 'Cancel',
            onClick: (data: object) => console.log(data),
            sx: {},
            variant: 'outlined',
          },
          customButton: {
            component: <></>,
          },
          yupSchemaValidation: formSchema,
          defaultValues: {
            address1: 'My Address 1',
            address2: 'My Address 2',
            designation: 'Developer',
            email: 'hari@gmail.co',
            dob: '12/06/2022',
            firstName: 'Hari',
            gender: 'Male',
            lastName: 'Haran',
            mobileNumber: { mobile: '845678906789', mobile_code: '+91' },
          },
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
        }}
      /> */}
      <SignupScreen
        option="socialMediaSignup"
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
            title: 'Welcome!',
            description:
              'One positive feedback per day or week can make us grow exponentially',
            logo: {
              logoSrc: CompanyLogo,
              logoHeight: '29px',
              logoWidth: '147px',
              alt: 'logo',
              logoStyle: {},
            },
            childrenStyle: {},
            mobileNumberSignup: {
              labelText: 'Mobile Number',
              labelStyle: {},
              mobileFieldstyle: {
                contryCodefontSize: '14px',
                fontWeight: '600',
                numberFontSize: '16px',
              },
              dropDownStyle: { width: '120px' },
            },
            socialMedia: {
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
            emailWithPassword: {
              nameStyle: {},
              firstName: {
                FnameFieldStyle: {},
                labelStyle: {},
                label: 'First Name',
              },
              lastName: {
                LnameFieldStyle: {},
                labelStyle: {},
                label: 'Last Name',
              },
              email: {
                fieldstyle: {},
                labelStyle: {},
                label: 'Email',
              },
              password: {
                label: 'Password',
                labelStyle: {},
                fieldstyle: {},
                visbleIcon: <VisibilityOutlinedIcon />,
                invisibleIcon: <VisibilityOffOutlinedIcon />,
              },
              confirmPassword: {
                label: 'Confirm Password',
                labelStyle: {},
                fieldstyle: {},
                visbleIcon: <VisibilityOutlinedIcon />,
                invisibleIcon: <VisibilityOffOutlinedIcon />,
              },
            },
            bottomText: 'You have an account?',
            buttonText: 'Sign Up',
            titleStyle: {},
            cardStyle: {},
            btnStyle: {},
            signupActionText: 'Login',
            actionstyle: {},
            bottomTextStyle: {},
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
