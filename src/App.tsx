import '@fontsource/poppins/400.css';
import '@fontsource/poppins/500.css';
import '@fontsource/poppins/600.css';
import '@fontsource/poppins/700.css';
import { TreeView } from './components/treeView';
import { ReactElement, useState } from 'react';


function App() {


  const dataRow = [
    {
      title: "onBoarding",
      permission: {
        create: true,
        update: true,
        read: true,
        delete: true
      }
    },
    {
      title: "Dashboard",
      permission: {
        create: false,
        update: true,
        read: false,
        delete: false

      }
    }
  ]

  const [rowArray, setRowArray] = useState([...dataRow])

  const handleCheckBox = (event: any, val: string, parentIndex: number) => {
    debugger
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
        // checkboxBgColor={'red'}
        // checkboxIcon={<AcUnitIcon />}
        // uncheckedIcon={<AddIcon />}
        checkboxWidth={16}
        checkboxHeight={16}
        heading='Basic View'
        leftSec={{
          breakpoints: {
            xs: 4,
            sm: 4,
            md: 6,
            lg: 8
          }
        }}
        rightSec={{
          breakpoints: {
            xs: 8,
            sm: 8,
            md: 6,
            lg: 4
          }
        }}
        // checkboxIcon={undefined}
        // uncheckedIcon={undefined}
        checkboxBorderRadius={''}
        checkboxBgColor={''}
      />

    </div>
  );
}

export default App;
