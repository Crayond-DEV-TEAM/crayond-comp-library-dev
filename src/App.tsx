import React, { useState } from 'react';
import '@fontsource/poppins/500.css';
import '@fontsource/poppins/600.css';
import { CommonTable } from '@components';
import DeleteIcon from './assets/deleteIcon';
import FunnelIcon from './assets/funnelIcon';
import SearchIcon from './assets/searchIcon';
import DownloadIcon from './assets/downloadIcon';
import DocsIcon from './assets/docsIcon';
// import './App.css';

function App() {
  const [isSelectedAll, setIsSelectedAll] = React.useState(false)
  const [selectedCheckbox, setSelectedCheckbox] = React.useState([1, 2]);
  const [switchList, setSwitchList] = React.useState([1, 4]);
  const [headerSelect, setHederSelect] = React.useState('status');
  const [headerSearch, setHederSearch] = React.useState('');
  const [headerCheckbox, setHederCheckbox] = React.useState(true);
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

  const SelectAll = (data: any, isRestSet: boolean) => {
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
  const downloadMethod =()=>{
    console.log("Download Method working!");
  }
  const fillerMethod =()=>{
    console.log("Filter Method working!");
  }
  const primaryBtnMethod =()=>{
    console.log("primary Btn Method working!");
  }
  const secondaryBtnMethod =()=>{
    console.log("secondary Btn Method working!");
  }
  return (
    <div className="App" style={{ width: '99vw', height: '100vh' }}>
      <CommonTable
        Header={[
          {
            id: 'no',
            align: 'left',
            disablePadding: false,
            label: 'Sl no',
          },
          {
            id: 'select',
            align: 'left',
            disablePadding: false,
            label: 'Select',
            varient: 'CHECKBOX',
          },
          {
            id: 'name',
            align: 'left',
            disablePadding: false,
            label: 'Dessert',
          },
          {
            id: 'calories',
            align: 'left',
            disablePadding: false,
            label: 'Calories',
          },
          {
            id: 'fat',
            align: 'left',
            disablePadding: false,
            label: 'Fat (g)',
          },
          {
            id: 'carbs',
            align: 'left',
            disablePadding: false,
            label: 'Carbs (g)',
          },
          {
            id: 'protein',
            align: 'left',
            disablePadding: false,
            label: 'Protein (g)',
          },
          {
            id: 'profile',
            align: 'center',
            disablePadding: false,
            label: 'Profile',
          },
          {
            id: 'overall_progress',
            align: 'left',
            disablePadding: false,
            label: 'Overall Progress',
          },
          {
            id: 'production',
            align: 'left',
            disablePadding: false,
            label: 'Production',
          },
          {
            id: 'status',
            align: 'left',
            disablePadding: false,
            label: 'Status',
          },
          {
            id: 'performance',
            align: 'center',
            disablePadding: false,
            label: 'Performance',
          },
          {
            id: 'signals',
            align: 'center',
            disablePadding: false,
            label: 'Signals',
          },
          {
            id: 'reporting_to',
            align: 'center',
            disablePadding: false,
            label: 'Reporting to',
          },
          {
            id: 'globle_rating',
            align: 'center',
            disablePadding: false,
            label: 'Globle Rating',
          },
          {
            id: 'growth',
            align: 'center',
            disablePadding: false,
            label: 'Growth',
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
            globle_rating: 4,
            growth: {
              value: 2.5,
              variant: 'POSITIVE',
            },
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
            globle_rating: 3,
            growth: {
              value: 0.5,
              variant: 'NEGATIVE',
            },
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
            globle_rating: 1,
            growth: {
              value: 0.1,
              variant: 'NEGATIVE',
            },
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
            globle_rating: 3.5,
            growth: {
              value: 3.2,
              variant: 'POSITIVE',
            },
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
            globle_rating: 4.5,
            growth: {
              value: 1.2,
              variant: 'POSITIVE',
            },
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
            globle_rating: 4,
            growth: {
              value: 0.74,
              variant: 'NEGATIVE',
            },
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
            globle_rating: 2,
            growth: {
              value: 0.63,
              variant: 'NEGATIVE',
            },
          },
        ]}
        // tableData={{ slno: 'INCREMENT', checkbox: 'CHECKBOX',  name: 'TEXT', calories: 'TEXT',  fat: 'TEXT', carbs: 'TEXT',  protein: 'TEXT', profile: {profile: 'IMAGE_WITH_LABEL', variant: 'circular'},  overall_progress: 'PROGRESS' }}
        tableData={[
          { type: ['INCREMENT'], name: 'sl_no' },
          { type: ['CHECKBOX'], name: 'checkbox' },
          { type: ['TEXT'], name: 'name' },
          { type: ['TEXT'], name: 'calories' },
          { type: ['TEXT'], name: 'fat' },
          { type: ['TEXT'], name: 'carbs' },
          { type: ['TEXT'], name: 'protein' },
          { type: ['IMAGE_WITH_LABEL'], name: 'profile', variant: 'circular' },
          { type: ['PROGRESS'], name: 'overall_progress' },
          { type: ['LABEL'], name: 'production' },
          {
            type: ['SWITCH'],
            name: 'status',
            switchText: [{ lable_1: 'No', lable_2: 'Yes' }],
          },
          { type: ['PERFORMANCE'], name: 'performance' },
          { type: ['AVATAR_NAME'], name: 'signals' },
          {
            type: ['IMAGE_WITH_PROFILES'],
            name: 'reporting_to',
            variant: 'circular',
          },
          { type: ['STAR_RATING'], name: 'globle_rating' },
          { type: ['GROWTH'], name: 'growth' },
          // { type: ['DATE'], name: 'experience'},
        ]}
        selectedCheckbox={selectedCheckbox}
        switchList={switchList}
        checkboxHandleChange={checkboxHandleChange}
        setSelectedCheckbox={setSelectedCheckbox}
        SelectAll={SelectAll}
        isSelectedAll={isSelectedAll}
        handleSwitch={handleSwitch}
        tableMinWidth={'2550px'}
        tableMinHeight={'465px'}
        tableName={'Team Member'}
        paddingAll={'0px'}
        padding={['12px', '12px', '12px', '12px']}
        marginAll={'12px'}
        margin={['0px', '12px', '0px', '12px']}
        HeaderComponent={{
          variant: 1,
          headerSelect: headerSelect,
          setHederSelect: setHederSelect,
          searchPlaceholder:"Search",
          selectOption: [
            {
              label: 'Status',
              value: 'status',
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
          headerSearch:headerSearch,
          setHederSearch:setHederSearch,
          deleteIcon:<DeleteIcon/>,
          downloadIcon:<DownloadIcon/>,
          funnelIcon:<FunnelIcon/>,
          searchIcon:<SearchIcon/>,
          fillerMethod:fillerMethod,
          downloadMethod:downloadMethod,
        }}
        // HeaderComponent={{
        //   variant: 2,         
        //   searchPlaceholder:"Search by name, email",          
        //   headerSearch:headerSearch,
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
      />
    </div>
  );
}

export default App;
