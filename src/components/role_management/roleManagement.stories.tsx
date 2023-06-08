import { ComponentMeta, ComponentStory } from '@storybook/react';
import RoleManagement from './roleManagement';

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
        sm: 4.5,
        md: 3.5,
        lg: 2.5
      }
    },
    rolesView: {
      breakpoints: {
        xs: 12,
        sm: 9.5,
        md: 8.5,
        lg: 9.5
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
    }
  }

} as ComponentMeta<typeof RoleManagement>;

const Template: ComponentStory<typeof RoleManagement> = (args) => (
  <RoleManagement {...args} />
);


export const Primary = Template.bind({});

Primary.args = {};

