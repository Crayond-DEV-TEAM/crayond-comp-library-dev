import '@fontsource/poppins/400.css';
import '@fontsource/poppins/500.css';
import '@fontsource/poppins/600.css';
import '@fontsource/poppins/700.css';
import { SelectBox } from './components/selectBox';
import { useState } from 'react';


function App() {


  const top100Films = [
    { title: 'Option 1', year: 1994 },
    { title: 'Option 1', year: 1972 },
    { title: 'Option 3', year: 1974 },
    { title: 'Option 4', year: 2008 },
    { title: 'Option 5', year: 1957 },
    { title: "Option 6", year: 1993 },
    { title: 'Option 7', year: 1994 },
    {
      title: 'The Lord of the Rings: The Return of the King',
      year: 2003,
    },
    { title: 'The Good, the Bad and the Ugly', year: 1966 },
    { title: 'Fight Club', year: 1999 },
    {
      title: 'The Lord of the Rings: The Fellowship of the Ring',
      year: 2001,
    },
    {
      title: 'Star Wars: Episode V - The Empire Strikes Back',
      year: 1980,
    },
    { title: 'Forrest Gump', year: 1994 },
    { title: 'Inception', year: 2010 },
    {
      title: 'The Lord of the Rings: The Two Towers',
      year: 2002,
    },
    { title: "One Flew Over the Cuckoo's Nest", year: 1975 },
    { title: 'Goodfellas', year: 1990 },
    { title: 'The Matrix', year: 1999 },
    { title: 'Seven Samurai', year: 1954 },
    {
      title: 'Star Wars: Episode IV - A New Hope',
      year: 1977,
    },

  ];

  const CheckableData = [
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
    {
      title: 'The Lord of the Rings: The Two Towers',
      isChecked: 2002,
    },
    { title: "One Flew Over the Cuckoo's Nest", isChecked: false },
    { title: 'Goodfellas', isChecked: false },
    { title: 'The Matrix', isChecked: false },
    { title: 'Seven Samurai', isChecked: false },
    {
      title: 'Star Wars: Episode IV - A New Hope',
      isChecked: false,
    },

  ];

  const [checked, setChecked] = useState([...CheckableData])
  const [defaultData, setDefaultData] = useState([])



  const handleCheckBox = (val: string, parentIndex: number) => {
    const tempArr = [...checked]

    tempArr[parentIndex] = {
      ...tempArr[parentIndex],
      title: tempArr[parentIndex]?.title,
      isChecked: !tempArr[parentIndex]?.isChecked
    }
    setChecked([...tempArr]);
  }

  const handleCheckedItem = (val: string, parentIndex: number) => {
    handleCheckBox(val, parentIndex)
  }

  const handleDefaultSelectChange = (val: object, parentIndex: number) => {
    debugger
    const tempArr = [...defaultData]

    if (val) {
      tempArr?.push(val)
    } else {
      tempArr?.splice(val, parentIndex, 1)
    }

    setDefaultData(tempArr)
  }

  console.log(defaultData, 'setChecked');


  return (
    <div className="App" style={{ width: '100vw', background: '#fff', height: '100vh' }}>
      <SelectBox
        data={top100Films}
        CheckableData={checked}
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
