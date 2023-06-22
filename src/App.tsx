import '@fontsource/poppins/400.css';
import '@fontsource/poppins/500.css';
import '@fontsource/poppins/600.css';
import '@fontsource/poppins/700.css';
import { useState } from 'react';
import SelectBox from './components/selectBox/selectBox';
import { SelectBoxComponent } from './components/selectBox';
// import SelectBox from './components/selectBox/selectBox';



function App() {


  const top100Films = [
    { title: 'Option 1', year: 1994 },
    { title: 'Option 1', year: 1972 },
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
  const [defaultData, setDefaultData] = useState([])
  const [groupedData, setGroupedData] = useState([])

  const [checkboxData, setCheckboxData] = useState([...CheckBoxData])


  const handleCheckBox = (val: object, parentIndex: number) => {
    debugger

    const tempArr = [...checked]
    if (val?.isChecked === false) {
      tempArr.push({
        ...val,
        isChecked: true
      })
    } else {
      // debugger
      tempArr.splice(val, parentIndex, 1)
    }
    setChecked([...tempArr]);

    const tempData = [...checkboxData]
    tempData[parentIndex] = {
      ...tempData[parentIndex],
      title: val?.title,
      isChecked: true
    }

    setCheckboxData([...tempData])
  }

  const handleCheckedItem = (val: object, parentIndex: number) => {
    handleCheckBox(val, parentIndex)
  }

  const handleDefaultSelectChange = (val: any, newValue: any | never) => {
    setDefaultData(newValue)
  }
  const handleChange = (key, event, val) => {
    if (key === 'grouped') {
      setGroupedData(val)
    } else if (key === 'default') {
      setDefaultData(val)
    }
  }

  console.log(checked, 'setChecked');
  console.log(checkboxData, 'checkboxData');



  return (
    <div className="App" style={{ width: '100vw', background: '#fff', height: '100vh' }}>
      <SelectBoxComponent
        data={top100Films}
        CheckableData={checked}
        checkBoxData={checkboxData}
        limitTags={2}
        groupingProps={{
          isCloseIcon: true,
          isSearch: true,
          handleChange: handleChange,
          groupedData: groupedData,
          arrData: top100Films,
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
        multi={true}
        handleChange={handleCheckBox}
        handleCheckedItem={handleCheckedItem}
        defaultData={defaultData}
        handleDefaultSelectChange={handleDefaultSelectChange}
        multiple={true}
      />
    </div>
  )
}

export default App;
