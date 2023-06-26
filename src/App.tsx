import '@fontsource/poppins/400.css';
import '@fontsource/poppins/500.css';
import '@fontsource/poppins/600.css';
import '@fontsource/poppins/700.css';
import { useState } from 'react';
import { SelectBoxComponent } from './components/selectBox';

function App() {

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

  const handleCheckedItem = (event: object, newValue: object[]) => {
    const convertedValue = newValue as never[];
    setChecked(convertedValue)

  }

  const handleDefaultChange = (val: any, newValue: object[]) => {
    const convertedValue = newValue as never[];
    setDefaultData(convertedValue)
  }
  const handleGroupChange = (event: any, val: object[]) => {
    const convertedValue = val as never[];
    setGroupedData(convertedValue)
  }

  const handleChipChange = (val: any, newValue: object[]) => {
    const convertedValue = newValue as never[];
    setChipData(convertedValue)
  }

  console.log(checked, 'checked');


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
        chipProps={{
          isCloseIcon: true,
          isSearch: true,
          handleChipChange: handleChipChange,
          chipData: chipData,
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
        checkboxProps={{
          isCloseIcon: true,
          isSearch: true,
          defaultValue: [],
          handleCheckedItem: handleCheckedItem,
          CheckableData: checked,
          arrData: checkedArr,
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
        multi={true}
        selectType={'chip'} multiple={false}
      />
    </div>
  )
}

export default App;
