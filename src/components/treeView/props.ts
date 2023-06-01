import { SxProps, Theme } from '@mui/material';
import { ReactElement } from 'react';

export interface TreeViewProps {
    sx?: SxProps<Theme>;
    rootStyle: object;
    formControlPropsSx: object;
    onSubmit: () => void;
    heading: ReactElement | string,
    permissionHeadingSx: object;
    checkboxTitleSx: object;
    submitBtnText: ReactElement | string;
    submitBtnOptions: {
        variant: string,
        bgColor: string,
        textColor: string
    };
    handleChange: (e: any, val: string, parentIndex: number) => void;
    checkboxIcon: ReactElement;
    uncheckedIcon: ReactElement;
    checkboxWidth: number;
    checkboxBorderRadius: string | number;
    checkboxHeight: number;
    checkboxBgColor: string;
    dataRow: [
        {
            title: ReactElement | string,
            permission: {
                create: boolean,
                update: boolean,
                read: boolean,
                delete: boolean,
            }
        },
    ];

}
