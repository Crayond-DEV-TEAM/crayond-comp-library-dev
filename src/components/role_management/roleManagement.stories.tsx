import { ComponentMeta, ComponentStory } from '@storybook/react';
import RoleManagement from './roleManagement';
import { useState } from 'react';


export default {
  title: 'components/roleManagement',
  component: RoleManagement,
  argTypes: {
    rootStyle: {
      description: 'entire container style contains bgcolor',
    },
    heading: {
      description: 'heading of the entire box',
    },
    roles: {
      description: 'array of the roles data',
    },
    rolesGrid: {
      description: 'left roles grid item breakpoint props'
    },
    rolesView: {
      description: 'right roles View grid item breakpoint props'
    },
    roleTitleSx: {
      description: 'role Management title props '
    },
    subRootPropsSx: {
      description: 'background color of the whole grid container'
    },
    roleBoxSx: {
      description: 'left role box styling props'
    },
    roleHeadBorderSx: {
      description: 'role heading border item props'
    },
    titlePropsSx: {
      description: 'role title props'
    },
    addIconSx: {
      description: 'add icon styling props'
    },
    roleCardSx: {
      description: 'role card props'
    },
    checkIconPropsSx: {
      description: 'check icon styling props'
    },
    closeIconPropSx: {
      description: 'close icon styling props'
    },
    roleUnselectedCardSx: {
      description: 'role card unselected state styling props'
    },
    roleNoProps: {
      description: 'role no styling props'
    },
    editIconProps: {
      description: 'edit Icon styling props'
    },
    inputStyle: {
      description: 'input styling as props'
    },
    switchStyle: {
      description: 'switch styling as props'
    }

  },
  args: {
    rootStyle: {},
    roles: [
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
      {
        roleNo: 'RL084',
        role: 'Role 3',
        isActive: false,
      },
    ],
    rolesGrid: {
      breakpoints: {
        xs: 12,
        sm: 6,
        md: 5,
        lg: 4
      }
    },
    rolesView: {
      breakpoints: {
        xs: 12,
        sm: 6,
        md: 7,
        lg: 8
      }
    },
    roleTitleSx: {},
    subRootPropsSx: {},
    roleBoxSx: {},
    roleHeadBorderSx: {},
    titlePropsSx: {},
    addIconSx: {},
    roleCardSx: {},
    checkIconPropsSx: {},
    closeIconPropSx: {},
    roleUnselectedCardSx: {},
    roleNoProps: {},
    editIconProps: {},
    inputStyle: {
      type: '',
      helperText: '',
      placeholder: '',
      errorMessage: '',
      isReadOnly: false,
      isError: false,
      multiline: false,
      fullWidth: true,
      value: '',
      // endAdornment: any,
      // startAdornment: any;
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
    },
    // switchStyle: {
    //   customProp: {
    //     width: '',
    //     height: '',
    //     color: '',
    //     backgroundColor: ''
    //   }
    // }

  }

} as ComponentMeta<typeof RoleManagement>;

const Template: ComponentStory<typeof RoleManagement> = (args) => {
  const initialState = {
    roleNo: '',
    role: '',
    isActive: false,
    error: {
      roleNo: '',
    }
  };

  type initialProps = {
    roleNo: string,
    role: string,
    isActive: boolean,
    error: {
      roleNo: string,
    }
  }

  type Role = {
    roleNo: string;
    role: string;
    isActive: boolean;
  };

  const roleData: Role[] = [
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
  ];
  type EditIndex = number | null | undefined;
  
  const [roles, setRoles] = useState<Role[]>(roleData);
  const [state, setState] = useState<initialProps>(initialState)

  const handleChange = (key: string, e: object, index: number) => {
    const tempArr = [...roles]

    tempArr[index] = {
      ...tempArr[index],
      roleNo: tempArr[index].roleNo, [key]: e,
      role: tempArr[index].role, [key]: e,
    }
    setRoles([...tempArr]);
  }

  const handleAddChange = (key: keyof initialProps['error'], value: string) => {
    const error = state?.error;
    error[key] = '';
    setState({ ...state, [key]: value, error })
  }

  const handleSave = (x: Role, index: number) => {
    const tempArr = [...roles]
    tempArr[index] = x;
    setRoles([...tempArr]);
    console.log(tempArr, 'tempArr========');
    
  }

  const validate = () => {
    let isValid = true;
    const error = state?.error
    if (state?.role?.length === 0) {
      isValid = false
      error.roleNo = "Role & RoleNo Required"
    }
    if (state?.roleNo?.length === 0) {
      isValid = false
      error.roleNo = "Role & RoleNo Required"
    }
    setState({ ...state, error })
    return isValid
  }

  const handleAddSave = (e: Role) => {
    const tempArr = [...roles]

    if (validate()) {
      tempArr.push(e)
      setRoles([...tempArr]);
      setState(initialState)
    }

    
    
  }

  const handleSwitch = (e: boolean, index: number) => {
    const tempArr = [...roles]

    tempArr[index] = {
      ...tempArr[index],
      isActive: e
    }
    setRoles([...tempArr]);
  }

 return (
  <RoleManagement
        heading={args?.heading}
        title={args?.title}
        rootStyle={args?.rootStyle}
        rolesGrid={args?.rolesGrid}
        rolesView= {args?.rolesView}
        roleTitleSx={args?.roleTitleSx}
        subRootPropsSx={args?.subRootPropsSx}
        search={args?.search}
        handleAddSave={(e) =>{
          console.log(e, 'e');
        }}
        handleAddChange={handleAddChange}
        handleChange={handleChange}
        handleSave={handleSave}
        handleSwitch={handleSwitch}
        add={args?.add}
        
        switchStyle={args?.switchStyle}
  {...args} />
)
};


export const Primary = Template.bind({});

Primary.args = {};

