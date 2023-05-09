import '@fontsource/poppins/400.css';
import '@fontsource/poppins/500.css';
import '@fontsource/poppins/600.css';
import '@fontsource/poppins/700.css';
import React from 'react';
import DocsIcon from './assets/docsIcon';
import { Profile } from './components/profile';

function App() {
  const [isSelectedAll, setIsSelectedAll] = React.useState(false);
  const [selectedCheckbox, setSelectedCheckbox] = React.useState([1, 2]);
  const [switchList, setSwitchList] = React.useState([1, 4]);
  const [headerSelect, setHederSelect] = React.useState('');
  const [headerCheckbox, setHederCheckbox] = React.useState(true);
  const [alertOpen, setAlertOpen] = React.useState(false);
  const [isDataMask, setIsDataMask] = React.useState(false);
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

  /// for profile

  // const formList = [
  //   {
  //     type: 'heading',
  //     containerStyle: {},
  //     gridStyle: {},
  //     breakPoint: {
  //       xs: 12,
  //       sm: 12,
  //       md: 6,
  //       lg: 6,
  //       lx: 6,
  //     },
  //   },
  //   // {
  //   //   type: 'input',
  //   //   containerStyle:{},
  //   //   gridStyle:{},
  //   //   breakPoint:{
  //   //     xs:12,
  //   //     sm:12,
  //   //     md:6,
  //   //     lg:6,
  //   //     lx:6
  //   //   },
  //   // },
  //   // {
  //   //   type: 'date',
  //   // },
  //   // {
  //   //   type: 'dateAndTime',
  //   // },
  // ];

  // const profileProps = {
  //   formList:formList
  // }
  const [isEdit, setIsEdit] = React.useState(true);
  const onSubmitBtn = () => {
    // if (formValidator()) {
    setIsEdit(!isEdit);
    // }
  };
  const img =
    'https://loveshayariimages.in/wp-content/uploads/2022/08/dp-pic-whatsapp-150x150.jpg';
  const [profile, setProfile] = React.useState(img);
  const uploadProfile = (event: any, data: any) => {
    setProfile(img);
  };
  const deleteProfile = () => {
    setProfile('');
  };

  const [state, setState] = React.useState({
    email: '',
    dob: null,
    mobileNumber: '',
    designation: '',
    city: '',
    state: '',
    country: '',
    timeZone: '',
    error: {
      email: '',
      dob: '',
      mobileNumber: '',
      designation: '',
      city: '',
      state: '',
      country: '',
      timeZone: '',
    },
  });

  const formValidator = () => {
    let status = false;
    let error = state?.error;
    if (state?.email?.length === 0) {
      status = false;
      error.email = 'Email is Required';
    }

    if (state?.dob) {
      status = false;
      error.dob = 'Date of Birth is Required';
    }

    if (state?.mobileNumber?.length === 0) {
      status = false;
      error.mobileNumber = 'Mobile Number is Required';
    }

    if (state?.designation?.length === 0) {
      status = false;
      error.designation = 'Designation is Required';
    }

    if (state?.city?.length === 0) {
      status = false;
      error.city = 'City is Required';
    }

    if (state?.state?.length === 0) {
      status = false;
      error.state = 'State is Required';
    }

    if (state?.country?.length === 0) {
      status = false;
      error.country = 'Country is Required';
    }

    if (state?.timeZone?.length === 0) {
      status = false;
      error.timeZone = 'Time Zone is Required';
    }
    return status;
  };
  const updateState = (key: string, value: string | number | object) => {
    let error: any = state?.error;
    error[key] = '';
    setState({ ...state, [key]: value, error });
  };

  return (
    <div className="App" style={{ width: '100vw', height: '100vh' }}>
      {/* <CommonTable
        Header={[
          {
            id: 'id',
            align: 'left',
            disablePadding: false,
            label: 'Sl No',
            isSortable: true,
          },
          {
            id: 'checkbox',
            align: 'left',
            disablePadding: false,
            label: 'Select',
            variant: 'CHECKBOX',
            isSortable: false,
          },
          {
            id: 'name',
            align: 'left',
            disablePadding: false,
            label: 'Dessert',
            isSortable: true,
          },
          {
            id: 'calories',
            align: 'left',
            disablePadding: false,
            label: 'Calories',
            isSortable: true,
          },
          {
            id: 'fat',
            align: 'left',
            disablePadding: false,
            label: 'Fat (g)',
            isSortable: true,
          },
          {
            id: 'carbs',
            align: 'left',
            disablePadding: false,
            label: 'Carbs (g)',
            isSortable: true,
          },
          {
            id: 'protein',
            align: 'left',
            disablePadding: false,
            label: 'Protein (g)',
            isSortable: true,
          },
          {
            id: 'profile',
            align: 'center',
            disablePadding: false,
            label: 'Profile',
            isSortable: false,
          },
          {
            id: 'overall_progress',
            align: 'left',
            disablePadding: false,
            label: 'Overall Progress',
            isSortable: true,
          },
          {
            id: 'production',
            align: 'left',
            disablePadding: false,
            label: 'Production',
            isSortable: false,
          },
          {
            id: 'status',
            align: 'left',
            disablePadding: false,
            label: 'Status',
            isSortable: false,
          },
          {
            id: 'performance',
            align: 'center',
            disablePadding: false,
            label: 'Performance',
            isSortable: false,
          },
          {
            id: 'signals',
            align: 'center',
            disablePadding: false,
            label: 'Signals',
            isSortable: false,
          },
          {
            id: 'reporting_to',
            align: 'center',
            disablePadding: false,
            label: 'Reporting to',
            isSortable: false,
          },
          {
            id: 'global_rating',
            align: 'center',
            disablePadding: false,
            label: 'Global Rating',
            isSortable: false,
          },
          {
            id: 'growth',
            align: 'center',
            disablePadding: false,
            label: 'Growth',
            isSortable: false,
          },
          {
            id: 'experience',
            align: 'center',
            disablePadding: false,
            label: 'Experience',
            isSortable: false,
          },
          {
            id: 'link',
            align: 'center',
            disablePadding: false,
            label: 'Link',
            isSortable: false,
          },
          {
            id: 'custom',
            align: 'center',
            disablePadding: false,
            label: 'Custom',
            isSortable: false,
          },

          {
            id: 'alert_type',
            align: 'center',
            disablePadding: false,
            label: 'Alert Type',
            isSortable: false,
          },
          {
            id: 'password',
            align: 'left',
            disablePadding: false,
            label: 'Password',
            isSortable: false,
          },
          {
            id: 'response',
            align: 'left',
            disablePadding: false,
            label: 'Response',
            isSortable: false,
          },
          {
            id: 'action',
            align: 'center',
            disablePadding: false,
            label: 'Action',
            isSortable: false,
          },
        ]}
        dataList={[
          {
            id: 1,
            name: 'Cupcake',
            calories: 305,
            fat: 3.7,
            carbs: 67,
            protein: 4.3,
            profile: {
              // image: 'sample.jpg',
              label: 'Hariharan',
            },
            overall_progress: '45',
            production: {
              label: 'Sufficient',
              color: '#7692cc',
              bgColor: '#e2eafa',
            },
            status: true,
            performance: 'Completely away',
            signals: [
              {
                name: 'Hari',
                label: 'Excelent',
                color: '#007C32',
              },
              {
                name: 'Anbu',
                label: 'Very Good',
                color: '#4C9E29',
              },
              {
                name: 'Ram',
                label: 'Good',
                color: '#F2B824',
              },
              {
                name: 'Babu',
                label: 'Good',
                color: '#F2EB24',
              },
              {
                name: 'S',
                label: 'Bad',
                color: '#DE1010',
              },
            ],
            reporting_to: [
              {
                image: 'sample.jpg',
                label: 'Hariharan',
              },
              {
                image: 'sample.jpg',
                label: 'Ram',
              },
              {
                image: 'sample.jpg',
                label: 'Hariharan',
              },
              {
                image: 'sample.jpg',
                label: 'Babu',
              },
              {
                image: 'sample.jpg',
                label: 'Siva',
              },
            ],
            global_rating: 4,
            growth: {
              value: 2.5,
              variant: 'POSITIVE',
            },
            experience: '2023-03-15T18:43:21.055Z',
            custom: <BasicButtons>Button 1</BasicButtons>,
            alert_type: {
              label: 'Filter',
              color: '#7692cc',
              bgColor: '#e2eafa',
              icon: <FunnelIcon />,
            },
            response: {
              label: 'sent',
              icon: <FunnelIcon />,
            },
            password: '23456789087654dfds',
          },
          {
            id: 2,
            name: 'cake',
            calories: 5,
            fat: 7,
            carbs: 167,
            protein: 34.3,
            profile: {
              image: 'sample.jpg',
              label: 'Hari Ram',
            },
            overall_progress: '35',
            production: {
              label: 'Insufficient',
              color: '#AE7330',
              bgColor: '#FCEDDD',
            },
            status: false,
            performance: 'Need to improve a lot',
            signals: [
              {
                name: 'Hari',
                label: 'Excelent',
                color: '#007C32',
              },
              {
                name: 'Ram',
                label: 'Good',
                color: '#F2B824',
              },
              {
                name: 'Anbu',
                label: 'Very Good',
                color: '#4C9E29',
              },
              {
                name: 'S',
                label: 'Bad',
                color: '#DE1010',
              },
              {
                name: 'Babu',
                label: 'Good',
                color: '#F2EB24',
              },
            ],
            reporting_to: [
              {
                image: 'sample.jpg',
                label: 'Ram',
              },
              {
                image: 'sample.jpg',
                label: 'Hariharan',
              },
              {
                image: 'sample.jpg',
                label: 'Hariharan',
              },
              {
                image: 'sample.jpg',
                label: 'Siva',
              },
            ],
            global_rating: 3,
            growth: {
              value: 0.5,
              variant: 'NEGATIVE',
            },
            experience: '2023-03-05T18:43:21.055Z',
            custom: <BasicButtons>Button 2</BasicButtons>,
            alert_type: {
              label: 'Insufficient',
              color: '#AE7330',
              bgColor: '#FCEDDD',
              icon: <FunnelIcon />,
            },
            response: {
              label: 'sent',
              icon: <FunnelIcon />,
            },
            password: 'dsufasuyawe7632908r78',
          },
          {
            id: 3,
            name: 'T',
            calories: 5,
            fat: 7,
            carbs: 167,
            protein: 34.3,
            profile: {
              image: 'sample.jpg',
              label: 'Siva',
            },
            overall_progress: '67',
            production: {
              label: 'Sufficient',
              color: '#7692cc',
              bgColor: '#e2eafa',
            },
            status: true,
            performance: 'Impactful',
            signals: [
              {
                name: 'S',
                label: 'Bad',
                color: '#DE1010',
              },
              {
                name: 'Ram',
                label: 'Good',
                color: '#F2B824',
              },
              {
                name: 'Anbu',
                label: 'Very Good',
                color: '#4C9E29',
              },
              {
                name: 'Hari',
                label: 'Excelent',
                color: '#007C32',
              },
              {
                name: 'Babu',
                label: 'Good',
                color: '#F2EB24',
              },
            ],
            reporting_to: [
              {
                image: 'sample.jpg',
                label: 'Siva',
              },
              {
                image: 'sample.jpg',
                label: 'Ram',
              },
              {
                image: 'sample.jpg',
                label: 'Hariharan',
              },
            ],
            global_rating: 1,
            growth: {
              value: 0.1,
              variant: 'NEGATIVE',
            },
            experience: '2022-01-15T18:43:21.055Z',
            custom: <BasicButtons>Button 3</BasicButtons>,
            alert_type: {
              label: 'Delete',
              color: '#F44F5A',
              bgColor: '#FCCACD',
              icon: <DeleteIcon />,
            },
            response: {
              label: 'Not Delivered',
              icon: <DeleteIcon />,
            },
            password: '64528327asdjkfdsjads89087654dfds',
          },
          {
            id: 4,
            name: 'Pie',
            calories: 5,
            fat: 7,
            carbs: 167,
            protein: 34.3,
            profile: {
              image: 'sample.jpg',
              label: 'Kumar',
            },
            overall_progress: '98',
            production: {
              label: 'Insufficient',
              color: '#AE7330',
              bgColor: '#FCEDDD',
            },
            status: false,
            performance: 'Need to improve',
            signals: [
              {
                name: 'S',
                label: 'Bad',
                color: '#DE1010',
              },
              {
                name: 'Babu',
                label: 'Good',
                color: '#F2EB24',
              },
              {
                name: 'Anbu',
                label: 'Very Good',
                color: '#4C9E29',
              },
              {
                name: 'Hari',
                label: 'Excelent',
                color: '#007C32',
              },
              {
                name: 'Ram',
                label: 'Good',
                color: '#F2B824',
              },
            ],
            reporting_to: [
              {
                image: 'sample.jpg',
                label: 'Ram',
              },
              {
                image: 'sample.jpg',
                label: 'Hariharan',
              },
            ],
            global_rating: 3.5,
            growth: {
              value: 3.2,
              variant: 'POSITIVE',
            },
            experience: '2023-01-11T18:43:21.055Z',
            custom: <BasicButtons>Button 4</BasicButtons>,
            alert_type: {
              label: 'Edit',
              color: '#6f6f6f',
              bgColor: '#DEDEDE',
              icon: <EditIcon />,
            },
            response: {
              label: 'sent',
              icon: <FunnelIcon />,
            },
            password: 'KJGKJDGKYWT^&*^&',
          },
          {
            id: 5,
            name: 'Cupcake',
            calories: 305,
            fat: 3.7,
            carbs: 67,
            protein: 4.3,
            profile: {
              image: 'sample.jpg',
              label: 'Hariharan',
            },
            overall_progress: '45',
            production: {
              label: 'Sufficient',
              color: '#7692cc',
              bgColor: '#e2eafa',
            },
            status: true,
            performance: 'Good',
            signals: [
              {
                name: 'Hari',
                label: 'Excelent',
                color: '#007C32',
              },
              {
                name: 'Ram',
                label: 'Good',
                color: '#F2B824',
              },
              {
                name: 'Anbu',
                label: 'Very Good',
                color: '#4C9E29',
              },
              {
                name: 'S',
                label: 'Bad',
                color: '#DE1010',
              },
              {
                name: 'Babu',
                label: 'Good',
                color: '#F2EB24',
              },
            ],
            reporting_to: [
              {
                image: 'sample.jpg',
                label: 'Hariharan',
              },
            ],
            global_rating: 4.5,
            growth: {
              value: 1.2,
              variant: 'POSITIVE',
            },
            experience: '2023-02-25T18:43:21.055Z',
            custom: <BasicButtons>Button 5</BasicButtons>,
            alert_type: {
              label: 'Delete',
              color: '#F44F5A',
              bgColor: '#FCCACD',
              icon: <DeleteIcon />,
            },
            response: {
              label: 'sent',
              icon: <FunnelIcon />,
            },
            password: '23456789ey087654dfds',
          },
          {
            id: 6,
            name: 'cake',
            calories: 5,
            fat: 7,
            carbs: 167,
            protein: 34.3,
            profile: {
              image: 'sample.jpg',
              label: 'Hari Ram',
            },
            overall_progress: '35',
            production: {
              label: 'Insufficient',
              color: '#AE7330',
              bgColor: '#FCEDDD',
            },
            status: false,
            performance: 'Very Good',
            signals: [
              {
                name: 'Hari',
                label: 'Excelent',
                color: '#007C32',
              },
              {
                name: 'Anbu',
                label: 'Very Good',
                color: '#4C9E29',
              },
              {
                name: 'Ram',
                label: 'Good',
                color: '#F2B824',
              },
              {
                name: 'Babu',
                label: 'Good',
                color: '#F2EB24',
              },
              {
                name: 'S',
                label: 'Bad',
                color: '#DE1010',
              },
            ],
            reporting_to: [
              {
                image: 'sample.jpg',
                label: 'Hariharan',
              },
            ],
            global_rating: 4,
            growth: {
              value: 0.74,
              variant: 'NEGATIVE',
            },
            experience: '2022-12-15T18:43:21.055Z',
            custom: <BasicButtons>Button 6</BasicButtons>,
            alert_type: {
              label: 'Delete',
              color: '#F44F5A',
              bgColor: '#FCCACD',
              icon: <DeleteIcon />,
            },
            response: {
              label: 'sent',
              icon: <FunnelIcon />,
            },
            password: 'sadsdsadsadsasdsdd',
          },
          {
            id: 7,
            name: 'T',
            calories: 5,
            fat: 7,
            carbs: 167,
            protein: 34.3,
            profile: {
              image: 'sample.jpg',
              label: 'Siva',
            },
            overall_progress: '67',
            production: {
              label: 'Sufficient',
              color: '#7692cc',
              bgColor: '#e2eafa',
            },
            status: true,
            performance: 'Spectacular',
            signals: [
              {
                name: 'Hari',
                label: 'Excelent',
                color: '#007C32',
              },
              {
                name: 'Ram',
                label: 'Good',
                color: '#F2B824',
              },
              {
                name: 'Anbu',
                label: 'Very Good',
                color: '#4C9E29',
              },
              {
                name: 'S',
                label: 'Bad',
                color: '#DE1010',
              },
              {
                name: 'Babu',
                label: 'Good',
                color: '#F2EB24',
              },
            ],
            reporting_to: [
              {
                image: 'sample.jpg',
                label: 'Hari Ram',
              },
              {
                image: 'sample.jpg',
                label: 'Hariharan',
              },
            ],
            global_rating: 2,
            growth: {
              value: 0.63,
              variant: 'NEGATIVE',
            },
            experience: '2022-06-02T18:43:21.055Z',
            custom: <BasicButtons>Button 7</BasicButtons>,
            alert_type: {
              label: 'Delete',
              color: '#F44F5A',
              bgColor: '#FCCACD',
              icon: <DeleteIcon />,
            },
            response: {
              label: 'sent',
              icon: <FunnelIcon />,
            },
            password: 'asdfhaselkf98wer',
          },
        ]}
        tableData={[
          { type: ['INCREMENT'], name: 'id', width: 100 },
          { type: ['CHECKBOX'], name: 'checkbox' },
          { type: ['TEXT'], name: 'name', width: 30 },
          { type: ['TEXT'], name: 'calories' },
          { type: ['TEXT'], name: 'fat' },
          { type: ['TEXT'], name: 'carbs' },
          { type: ['TEXT'], name: 'protein' },
          { type: ['IMAGE_WITH_LABEL'], name: 'profile', variant: 'circular' },
          { type: ['PROGRESS'], name: 'overall_progress', width: 200 },
          { type: ['LABEL'], name: 'production' },
          {
            type: ['SWITCH'],
            name: 'status',
            switchText: [{ label_1: 'No', label_2: 'Yes' }],
          },
          { type: ['PERFORMANCE'], name: 'performance' },
          { type: ['AVATAR_NAME'], name: 'signals' },
          {
            type: ['IMAGE_WITH_PROFILES'],
            name: 'reporting_to',
            variant: 'circular',
          },
          { type: ['STAR_RATING'], name: 'global_rating' },
          { type: ['GROWTH'], name: 'growth' },
          { type: ['DATE'], name: 'experience', format: 'YYYY MMM DD' },
          {
            type: ['LINK'],
            name: 'link',
            label: 'view',
            viewHandel: (id: string | number, rowData: object, e: Event) => {
              console.log(id, rowData, e);
            },
          },
          { type: ['CUSTOM'], name: 'custom' },
          { type: ['ICON_WITH_LABEL'], name: 'alert_type' },
          { type: ['MASK_DATA'], name: 'password', maskText: '*', width: 150 },
          { type: ['ICON_WITH_TEXT'], name: 'response' },
          {
            type: ['ACTION'],
            name: 'action',
            variant: [
              {
                icon: <EditIcon />,
                method: (id: string | number, rowData: object, e: Event) => {
                  console.log(id, rowData, e);
                },
              },
              {
                icon: <DeleteIcon width={'16px'} height={'16px'} />,
                method: (id: string | number, rowData: object, e: Event) => {
                  console.log(id, rowData, e);
                },
              },
              {
                icon: <NotificationIcon />,
                method: (id: string | number, rowData: object, e: Event) => {
                  console.log(id, rowData, e);
                },
              },
            ],
          },
        ]}
        headerOptions={{
          fontSize: '16px',
          fontWeight: '500',
          color: '#818181',
          bgColor: '#EAEAEA',
          borderBottom: '0px solid #E6E6E6',
          padding: '12px',
        }}
        rowOptions={{
          rowOddBgColor: '#fff',
          rowEvenBgColor: '#F7F7F7',
        }}
        cellOptions={{
          fontSize: '16px',
          fontWeight: '500',
          color: '#353448',
          // bgColor: '#fff',
          borderBottom: '0px solid #E6E6E6',
          padding: '12px',
        }}
        paginationOption={{
          isEnable: true,
          rowPerPage: 5,
          rowsPerPageOptions: [5, 10, 25],
        }}
        tableBackground={'#ffffff'}
        selectedCheckbox={selectedCheckbox}
        switchList={switchList}
        checkboxHandleChange={checkboxHandleChange}
        setSelectedCheckbox={setSelectedCheckbox}
        SelectAll={SelectAll}
        isSelectedAll={isSelectedAll}
        handleSwitch={handleSwitch}
        tableMinWidth={'3350px'}
        tableMinHeight={'565px'}
        tableMaxHeight={'565px'}
        // tableMaxWidth={'500px'}
        tableName={'Team Member'}
        paddingAll={'0px'}
        padding={['1px', '1px', '1px', '1px']}
        marginAll={'0px'}
        margin={['0px', '1px', '0px', '1px']}
        tableBorderRadius={'12px'}
        dense={'medium'}
        isDataMask={isDataMask}
        noDataFound={{
          fontSize: '16px',
          fontWeight: '600',
          color: '#353448',
          bgColor: '#F7F7F7',
          text: 'No Data Found',
          component: null,
        }}
        stickyOptions={{
          stickyHeader: true,
          stickyLeft: ['id', 'checkbox'],
          stickyRight: ['action', 'response'],
        }}
        alertOptions={{
          isEnable: true,
          alertOpen: alertOpen,
          setAlertOpen: setAlertOpen,
          title: 'Are you sure, would you like to deactivate?',
          description: '',
          primaryText: 'Yes',
          secondaryText: 'No',
          icon: <AlertIcon />,
        }}
        HeaderComponent={{
          variant: 1,
          styles: {
            padding: '10px 0',
            margin: '0',
          },
          headerSelect: headerSelect,
          setHederSelect: setHederSelect,
          searchPlaceholder: 'Search',
          selectOption: [
            {
              label: 'Status',
              value: '',
            },
            {
              label: 'Active',
              value: 'active',
            },
            {
              label: 'Inactive',
              value: 'inactive',
            },
          ],
          setHederSearch: setHederSearch,
          deleteIcon: <DeleteIcon />,
          downloadIcon: <DownloadIcon />,
          funnelIcon: <FunnelIcon />,
          searchIcon: <SearchIcon />,
          fillerMethod: fillerMethod,
          downloadMethod: downloadMethod,
        }}
        // HeaderComponent={{
        //   variant: 2,
        // styles:{
        //   padding:"10px 0",
        //   margin:"0"
        // },
        //   searchPlaceholder:"Search by name, email",
        //   setHederSearch:setHederSearch,
        //   checkboxLabel:"Show only my reportees",
        //   primaryBtnText:"Add Member",
        //   secondaryBtnText:"Import",
        //   secondaryBtnIcon:<DocsIcon color={"#357968"}/>,
        //   funnelIcon:<FunnelIcon color={"#fff"}/>,
        //   searchIcon:<SearchIcon/>,
        //   fillerMethod:fillerMethod,
        //   primaryBtnMethod:primaryBtnMethod,
        //   secondaryBtnMethod:secondaryBtnMethod,
        //   headerCheckbox:headerCheckbox, setHederCheckbox:setHederCheckbox
        // }}
      /> */}

      <Profile
        isEditMode={isEdit}
        username={'Hariharan'}
        onSubmitBtn={onSubmitBtn}
        titleOptions={{
          title: 'My Profile',
          fontSize: '20px',
          fontWeight: '600',
          color: '#000',
        }}
        uploadOptions={{
          imgScr: profile,
          deleteProfile: deleteProfile,
          uploadProfile: uploadProfile,
        }}
        bgColor={'#00FAFA4F'}
        paddingAll={'20px 0'}
        userNameStyle={{}}
        renderForm={{
          formList: [
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
                value: state?.email,
                icon: <DocsIcon />,
                iconStyle: {},
                error: false,
                errorMessage: "dfdsfdsf",
                labelStyle:{mb:-1},
                onChange: (e: any) => {
                  updateState('email', e?.target?.value);
                },
              },
            },
            {
              type: 'date',
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
                label: 'DOB',
                labelVariant: 'standard',
                required: true,
                value: state?.dob,
                isError: true,
                errorMessage: "dfdsfdsf",
                onChange: (e: any) => {
                  updateState('DOB', e?.target?.value);
                },
              },
            },
            {
              type: 'mobileNumberInput',
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
                label: 'Mobile Number',
                labelVariant: 'standard',
                required: true,
                value: state?.mobileNumber,
                isError: false,
                onChange: (e: any) => {
                  updateState('mobileNumber', e?.target?.value);
                },
              },
            },
            {
              type: 'dropDown',
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
                label: 'Desgination',
                labelVariant: 'standard',
                required: true,
                value: state?.designation,
                isError: false,
                onChange: (e: any) => {
                  updateState('designation', e?.target?.value);
                },
                selectOption: [
                  { label: 'Developer', value: 'Developer' },
                  { label: 'Designer', value: 'Designer' },
                  { label: 'designation', value: 'designation' },
                ],
              },
            },
            {
              type: 'dropDown',
              containerStyle: {},
              gridStyle: {},
              breakPoint: {
                xs: 12,
                sm: 12,
                md: 6,
                lg: 6,
                lx: 6,
              },
              inputProps: {
                type: 'text',
                label: 'City',
                labelVariant: 'standard',
                required: true,
                value: state?.city,
                isError: false,
                onChange: (e: any) => {
                  updateState('city', e?.target?.value);
                },
                selectOption: [
                  { label: 'Chennai', value: 'Chennai' },
                  { label: 'two', value: 'two' },
                  { label: 'three', value: 'three' },
                ],
              },
            },
            {
              type: 'dropDown',
              containerStyle: {},
              gridStyle: {},
              breakPoint: {
                xs: 12,
                sm: 12,
                md: 6,
                lg: 6,
                lx: 6,
              },
              inputProps: {
                type: 'text',
                label: 'State',
                labelVariant: 'standard',
                required: true,
                value: state?.state,
                isError: false,
                onChange: (e: any) => {
                  updateState('state', e?.target?.value);
                },
                selectOption: [
                  { label: 'Tamil Nadu', value: 'Tamil Nadu' },
                  { label: 'California', value: 'California' },
                  { label: 'three', value: 'three' },
                ],
              },
            },
            {
              type: 'dropDown',
              containerStyle: {},
              gridStyle: {},
              breakPoint: {
                xs: 12,
                sm: 12,
                md: 6,
                lg: 6,
                lx: 6,
              },
              inputProps: {
                label: 'Country',
                labelVariant: 'standard',
                required: true,
                value: state?.country,
                isError: false,
                onChange: (e: any) => {
                  updateState('country', e?.target?.value);
                },
                selectOption: [
                  { label: 'IN', value: 'IN' },
                  { label: 'PKS', value: 'PKS' },
                  { label: 'SLN', value: 'SLN' },
                ],
              },
            },
            {
              type: 'dropDown',
              containerStyle: {},
              gridStyle: {},
              breakPoint: {
                xs: 12,
                sm: 12,
                md: 6,
                lg: 6,
                lx: 6,
              },
              inputProps: {
                label: 'Time Zone',
                labelVariant: 'standard',
                required: true,
                value: state?.timeZone,
                isError: false,
                onChange: (e: any) => {
                  updateState('timeZone', e?.target?.value);
                },
                selectOption: [
                  { label: '+5:30', value: 'one' },
                  { label: '+4:30', value: 'two' },
                  { label: '+2:30', value: 'three' },
                ],
              },
            },
          ],
        }}
      />
    </div>
  );
}

export default App;
