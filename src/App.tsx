// import './App.css';
import { Switch, CommonTable } from '@components';

function App() {
  return (
    <div className="App" style={{ width: '100vw', height: '100vh' }}>
      <CommonTable
        Header={[
          {
            id: 'no',
            align: "left",
            disablePadding: true,
            label: 'Sl no',
          },
          {
            id: 'name',
            align: "left",
            disablePadding: true,
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
        ]}
        dataList={[
          {
            name: 'Cupcake',
            calories: 305,
            fat: 3.7,
            carbs: 67,
            protein: 4.3,
          },
          {
            name: 'cake',
            calories: 5,
            fat: 7,
            carbs: 167,
            protein: 34.3,
          },
          {
            name: 'T',
            calories: 5,
            fat: 7,
            carbs: 167,
            protein: 34.3,
          },
          {
            name: 'Pie',
            calories: 5,
            fat: 7,
            carbs: 167,
            protein: 34.3,
          },
        ]}
        tableData={[
          { type: ['INCREMENT'], name: '' },
          { type: ['BUTTON'], name: '', text: "labe" },
          { type: ['TEXT'], name: 'name' },
          { type: ['TEXT'], name: 'calories' },
          { type: ['TEXT'], name: 'fat' },
          { type: ['TEXT'], name: 'carbs' },
          { type: ['TEXT'], name: 'protein' },
        ]}
      />
    </div>
  );
}

export default App;
