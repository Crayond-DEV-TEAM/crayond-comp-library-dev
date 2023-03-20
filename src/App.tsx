import React from 'react';
import { CommonTable } from '@components';
// import './App.css';

function App() {
  const [selectedCheckbox, setSelectedCheckbox] = React.useState([1, 2]);
  const [switchList, setSwitchList] = React.useState([1, 4]);
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
    } else {
      setSelectedCheckbox([]);
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
  return (
    <div className="App" style={{ width: '100vw', height: '100vh' }}>
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
          },
        ]}
        tableData={[
          { type: ['INCREMENT'], name: '' },
          { type: ['CHECKBOX'], name: 'checkbox' },
          { type: ['TEXT'], name: 'name' },
          { type: ['TEXT'], name: 'calories' },
          { type: ['TEXT'], name: 'fat' },
          { type: ['TEXT'], name: 'carbs' },
          { type: ['TEXT'], name: 'protein' },
          { type: ['IMAGE_WITH_LABLE'], name: 'profile', variant: 'circular' },
          { type: ['PROGRESS'], name: 'overall_progress' },
          { type: ['LABLE'], name: 'production' },
          {
            type: ['SWITCH'],
            name: 'status',
            switchText: [{ lable_1: 'No', lable_2: 'Yes' }],
          },
          { type: ['PERFORMANCE'], name: 'performance' },
          { type: ['AVATER_TEXT'], name: 'signals' },
          { type: ['IMAGE_WITH_PROFILES'], name: 'reporting_to', variant: 'circular'},
        ]}
        selectedCheckbox={selectedCheckbox}
        switchList={switchList}
        checkboxHandleChange={checkboxHandleChange}
        setSelectedCheckbox={setSelectedCheckbox}
        SelectAll={SelectAll}
        handleSwitch={handleSwitch}
        tableMinWidth={'2050px'}
      />
    </div>
  );
}

export default App;
