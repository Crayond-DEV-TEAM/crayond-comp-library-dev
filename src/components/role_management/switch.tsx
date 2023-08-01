import Switch, { SwitchProps } from '@mui/material/Switch';
import { styled } from '@mui/material/styles';
import { switchStyle } from './props';

// interface StyledSwitchProps extends SwitchProps {
//     customProp: {
//         width: string,
//         height: string,
//         thumbColor: string
//         color: string
//     };
// }

export const SwitchBox = styled(Switch) <switchStyle>`
        '& .MuiSwitch': {
            width:  ${props => (props.customProp?.width ?? '20px !important')};
            height: ${props => (props.customProp?.height ?? '20px !important')};
            '& .MuiSwitch-switchBase': {
                padding: 0;
                margin: 2;
                transition-duration: 300ms;
                '&.Mui-checked': {
                    transform: translateX(16px);
                    color: #fff;
                    '& + .MuiSwitch-track': {
                        background-color: ${props => (props.customProp?.color ?? '#665CD7')};
                        opacity: 1;
                        border: 0;
                    },
                    '&.Mui-disabled + .MuiSwitch-track': {
                        opacity: 0.5;
                    },
                },
                '&.Mui-focusVisible .MuiSwitch-thumb': {
                    color: ${props => (props.customProp?.thumbColor ?? '#665CD7')};
                    border: '6px solid #fff';
                },
                '&.Mui-disabled .MuiSwitch-thumb': {
                    color:
                        theme.palette.mode === 'light'
                            ? theme.palette.grey[100]
                            : theme.palette.grey[600];
                },
                '&.Mui-disabled + .MuiSwitch-track': {
                    opacity: theme.palette.mode === 'light' ? 0.7 : 0.3;
                },
            },
            '&.MuiSwitch-thumb': {
                color: 'red';
                
            },
            '&.MuiSwitch-track': {
                border-radius: 26 / 2,
                background-color: theme.palette.mode === 'light' ? #E9E9EA : #39393D,
                opacity: 1,
                transition: theme.transitions.create(['background-color'], {
                    duration: 500,
                }),
            },
        }
    
  `;
