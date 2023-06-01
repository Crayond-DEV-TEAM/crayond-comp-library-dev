import '@fontsource/poppins/400.css';
import '@fontsource/poppins/500.css';
import '@fontsource/poppins/600.css';
import '@fontsource/poppins/700.css';
import { TreeView } from './components/treeView';
import { useState } from 'react';
import AcUnitIcon from '@mui/icons-material/AcUnit';
import AddIcon from '@mui/icons-material/Add';


function App() {

  const dataRow = [
    {
      title: "onBoarding",
      permission: {
        create: true,
        update: true,
        read: true,
        delete: true,
        status: false
      }
    },
    {
      title: "Dashboard",
      permission: {
        create: false,
        update: true,
        read: false,
        delete: false,
        status: true

      }
    }
  ]

  const [rowArray, setRowArray] = useState([...dataRow])

  const handleCheckBox = (event: any, val: string, parentIndex: number) => {
    const tempArr = [...rowArray]

    tempArr[parentIndex] = {
      ...tempArr[parentIndex],
      title: tempArr[parentIndex].title,
      permission: {
        ...tempArr[parentIndex].permission, [val]: event?.target?.checked,
      }
    }
    setRowArray([...tempArr]);
  }

  const onSubmit = () => {
    console.log(rowArray)
  }


  return (
    <div className="App" style={{ width: '100vw', background: '#fff', height: '100vh' }}>
      <TreeView
        handleChange={handleCheckBox}
        dataRow={rowArray}
        onSubmit={onSubmit}
        submitBtnText={'Submit'}
        submitBtnOptions={{
          variant: 'contained',
          bgColor: 'purple',
          textColor: '#ffff'
        }}
        checkboxBgColor={'red'}
        checkboxIcon={<AcUnitIcon />}
        uncheckedIcon={<AddIcon />}
        checkboxWidth={30}
        checkboxHeight={30}

      />

    </div>
  );
}

export default App;
