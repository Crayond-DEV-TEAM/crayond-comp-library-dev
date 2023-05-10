import { ComponentStory, ComponentMeta } from '@storybook/react';
import { MobileInput } from './index';

export default {
    title: 'components/MobileInput',
    component: MobileInput,
} as unknown  as ComponentMeta<typeof MobileInput>;

const Template: ComponentStory<typeof MobileInput> = (args) => (
  <MobileInput {...args} />
);

export const Primary = Template.bind({});
Primary.args = {
    placeholder: '',
    errorValidation: {},
    isRequired: undefined,
    label: '',
    handleChange: () => { },
    component: 'input',
    fullWidth: true,
    autoFocus: false,
    isReadonly: false,
    disabled: false,
    disabledNumber: 0,
    isReadonlyCC: '',
    enterKeyPress: {},
    handleChangeSelect: {},
    value: '',
    error: false,
    onError: false,
    onErrorOccured: () => { },
    helperText: '',
    id: '',
    selectValue: '',
    limits: {},
    isError: '',
    flag: '',
    className: {},
    maxLength: 10,
    mobileInputStyle: {},
    rootWapperstyle: {},
    code: '',
    phone: '',
    suggested: false,
    helperTextStyle: '',
    dropDownStyle:{},
};

