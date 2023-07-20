import '@fontsource/poppins/400.css';
import '@fontsource/poppins/500.css';
import '@fontsource/poppins/600.css';
import '@fontsource/poppins/700.css';
import { RoleManagement } from './components/role_management';
import SearchIcon from '@mui/icons-material/Search';

function App() {

  return (
    <div className="App" style={{ width: '100vw', height: '100vh' }}>
      <RoleManagement
        roleTitleSx={{}}
        subRootPropsSx={{}}
        switchStyle={{}}
        roleBoxSx={{}}
        roleHeadBorderSx= {{}}
        titlePropsSx= {{}}
        addIconSx={{}}
        roleCardSx= {{}}
        checkIconPropsSx={{}}
        closeIconPropSx={{}} 
        roleUnselectedCardSx= {{}}
        roleNoProps={{}}
        editIconProps={{}}
        handleChangeCallback={(e) =>console.log(e, 'inputchangeCallBack')}
        handleSwitchCallback={(e) =>console.log(e, 'SwitchCallBack')}
        handleSaveCallback={(e) =>console.log(e, 'saveCallBack')}
        heading='Role Management'
          roles={[
          {
            roleNo: 'RL077',
            role: 'Role 1',
            isActive: false,
          },
          {
            roleNo: 'RL045',
            role: 'Role 2',
            isActive: false,
          },
          // {
          //   roleNo: 'RL084',
          //   role: 'Role 3',
          //   isActive: false,
          // },
          ]}
          rolesGrid={{
          breakpoints: {
            xs: 12,
            sm: 5,
            md: 4,
            lg: 4
          }
          }}
          rolesView={{
          breakpoints: {
            xs: 12,
            sm: 9,
            md: 8,
            lg: 9
          }
          }}
          inputStyle={{
          type: '',
          helperText: '',
          placeholder: '',
          errorMessage: '',
          isReadOnly: false,
          isError: false,
          multiline: false,
          fullWidth: true,
          value: '',
          startAdornment: <SearchIcon sx={{ ml: 1, fontSize: '16px', color: '#818181' }} />,
          header: '',
          textFieldStyle: {},
          disabled: false,
          variant: '',
          onChange: () => null,
          inputBackground: '',
          height: '',
          fontSize: '',
          padding: '',
          margin: '',
          border: '',
          borderRadius: '',
          borderBottom: ''
          }} 
        editIndex={undefined} 
        clickIndex={undefined} 
        title={''} 
        search={''}
      />
    </div>
  )
}

export default App;
