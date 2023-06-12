import '@fontsource/poppins/400.css';
import '@fontsource/poppins/500.css';
import '@fontsource/poppins/600.css';
import '@fontsource/poppins/700.css';
import { TreeComponent, TreeView } from './components/treeView';
import { useState } from 'react';


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


  const treeData = [
    {
      "id": "22afc36b-4f7f-42ca-9fce-1a30cc05456d",
      "name": "Onboarding",
      "child": [
        {
          "id": "831728ec-55f1-4f56-9b94-dbd20a36a565",
          "name": "Sign up",
          "child": [
            {
              "id": "47d1a9fc-10fb-4d6e-90dc-93bff8277d39",
              "name": "basic info",
              "allowed": [
                "read",
                "create",
                "update"
              ],
              "permissions": [
                "read",
                "create",
                "delete",
                "update"
              ]
            },
            {
              "id": "e14bf7f2-c7af-4fe7-ae96-a56890e2d72b",
              "name": "Proffesional details",
              "allowed": [
                "read",
                "create",
                "update"
              ],
              "permissions": [
                "read",
                "create",
                "delete",
                "update"
              ]
            }
          ]
        },
        {
          "id": "2ac0afc4-0621-4f2a-befa-732d307bd480",
          "name": "Sign in",
          "child": [
            {
              "id": "3b7d6e21-d08b-493b-9884-f1c3a000faa2",
              "name": "Sign in with mobile number",
              "child": [
                {
                  "id": "6509fa5d-3b1d-4f62-897a-320d1c9db0db",
                  "name": "company",
                  "allowed": [
                    "read",
                    "create",
                    "update"
                  ],
                  "permissions": [
                    "read",
                    "create",
                    "delete",
                    "update"
                  ]
                }
              ],
              "allowed": [
                "read",
                "create",
                "update"
              ],
              "permissions": [
                "read",
                "create",
                "delete",
                "update"
              ]
            },
            {
              "id": "9a21dde5-222f-451c-a601-4d0c3ed63bcf",
              "name": "Sign in with email id",
              "allowed": [
                "read",
                "create",
                "update"
              ],
              "permissions": [
                "read",
                "create",
                "delete",
                "update"
              ]
            }
          ]
        },
        {
          "id": "610cb708-9440-49ad-b46c-08cb0c5da8b9",
          "name": "Forgot Password"
        }
      ]
    },
    {
      "id": "3a18ad99-04bf-4461-b55f-18c9384deed9",
      "name": "Dashboard",
      "child": [
        {
          "id": "4cdfbee6-6012-4a5f-94b7-c37009500c52",
          "name": "To-do",
          "child": [
            {
              "id": "8a95c3a7-9d15-4584-a3a6-7e136083709b",
              "name": "basic information",
              "allowed": [
                "update",
                "read",
                "create"
              ],
              "permissions": [
                "read",
                "create",
                "delete",
                "update"
              ]
            },
            {
              "id": "38ba5e2d-6595-4c6d-b561-f8654b4d9e01",
              "name": "Proffesional"
            }
          ]
        },
        {
          "id": "8be9607e-9293-4ad4-b0d7-cb76f4840cbc",
          "name": "Rename",
          "child": [
            {
              "id": "08a55c83-c44b-451f-a3db-1436fd6e6cac",
              "name": "Changed successfull",
              "allowed": [
                "update"
              ],
              "permissions": [
                "read",
                "create",
                "delete",
                "update"
              ]
            },
            {
              "id": "722710fe-460b-422b-a2c0-7f29dcd36745",
              "name": "Forgot number",
              "allowed": [
                "read"
              ],
              "permissions": [
                "read",
                "create",
                "delete",
                "update"
              ]
            }
          ]
        }
      ]
    }
  ]

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

      {/* <TreeComponent data={treeData} setEdit={true} /> */}

    </div>
  );
}

export default App;
