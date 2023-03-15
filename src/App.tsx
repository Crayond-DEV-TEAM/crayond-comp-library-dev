// import './App.css';
import { Switch, CommonTable } from '@components';
import { useState } from 'react';
import { CustomCheckbox } from './components/checkbox';

function App() {
  const [selectedCheckbox, setSelectedCheckbox ] = useState([1,2,]);
  

  return (
    <div className="App" style={{ width: '100vw', height: '100vh' }}>
      <CommonTable
        Header={[
          {
            id: 'no',
            align: "left",
            disablePadding: false,
            label: 'Sl no',
          },
          {
            id: 'select',
            align: "left",
            disablePadding: false,
            label: 'Select',
            varient:"Checkbox"
          },
          {
            id: 'name',
            align: "left",
            disablePadding: false,
            label: 'Dessert',
          },
          {
            id: 'calories',
            align: "left",
            disablePadding: false,
            label: 'Calories',
          },
          {
            id: 'fat',
            align: "left",
            disablePadding: false,
            label: 'Fat (g)',
          },
          {
            id: 'carbs',
            align: "left",
            disablePadding: false,
            label: 'Carbs (g)',
          },
          {
            id: 'protein',
            align: "left",
            disablePadding: false,
            label: 'Protein (g)',
          },
          {
            id: 'profile',
            align: "center",
            disablePadding: false,
            label: 'Profile',
          },
          {
            id: 'overall_progress',
            align: "left",
            disablePadding: false,
            label: 'Overall Progress',
          },
          {
            id: 'production',
            align: "left",
            disablePadding: false,
            label: 'Production',
          },
          {
            id: 'status',
            align: "left",
            disablePadding: false,
            label: 'Status',
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
            profile:{
              image: "sample.jpg",
              label:"Hariharan"
            },
            overall_progress:"45",
            production:"Sufficient",
            status:true,
          },
          {
            id: 2,
            name: 'cake',
            calories: 5,
            fat: 7,
            carbs: 167,
            protein: 34.3,
            profile:{
              image:"sample.jpg",
              label:"Hari Ram"
            },
            overall_progress:"35",
            production:"Insufficient",
            status:false,
          },
          {
            id: 3,
            name: 'T',
            calories: 5,
            fat: 7,
            carbs: 167,
            protein: 34.3,
            profile:{
              image:"sample.jpg",
              label:"Siva"
            },
            overall_progress:"67",
            production:"Sufficient",
            status:true,
          },
          {
            id: 4,
            name: 'Pie',
            calories: 5,
            fat: 7,
            carbs: 167,
            protein: 34.3,
            profile:{
              image:"sample.jpg",
              label:"Kumar"
            },
            overall_progress:"98",
            production:"Insufficient",
            status:false,
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
          { type: ['IMAGE_WITH_LABLE'], name: 'profile', variant:"circular"},
          { type: ['PROGRESS'], name: 'overall_progress' },
          { type: ['LABLE'], name: 'production' },
          { type: ['SWITCH'], name: 'status', switchText:[{lable_1: "no", lable_2: "yes"}] },
        ]}
        // SelectFun={SelectFun}
        setSelectedCheckbox={setSelectedCheckbox}
        selectedCheckbox={selectedCheckbox}
      />
    </div>
  );
}

export default App;
