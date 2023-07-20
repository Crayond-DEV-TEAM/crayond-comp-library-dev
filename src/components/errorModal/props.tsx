import type { SxProps, Theme } from '@mui/material'
import React from 'react'
export interface buttonInterface {
    label: string,
    onClick: () => void,
    style?: SxProps<Theme>
}

export interface errorWithIconProps {
    open:boolean,
    errorIconUrl:string,
    errorIconComponent?:JSX.Element,
    buttons: buttonInterface[],
    component:React.ReactNode,

    componentStyle?:SxProps,
    handleClose:() => void,
    onBackdropClick?:() => void,
    errorMessage:string,
    cardRootStyle?:SxProps,
    errorIconUrlStyle?:React.CSSProperties,
    errorIconStyle?:SxProps,
    errorMessageTextStyle?:SxProps,
    errorButtonBlockStyle?:SxProps,
    errorMessageBlockStyle?:SxProps,
}