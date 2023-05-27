import type { SxProps, Theme } from '@mui/material'

export interface buttonInterface {
    label: string,
    onClick: () => void,
    style: SxProps<Theme>
}

export interface errorWithIconProps {
    open:boolean,
    errorIcon:JSX.Element,
    buttons: buttonInterface[],
    component:React.ReactNode,
    componentStyle?:object,
    handleClose:() => void,
    onBackdropClick:() => void,
    errorMessage:string,
    cardRootStyle:object,
    errorIconStyle:object,
    errorMessageTextStyle:object,
    errorButtonBlockStyle:object,
    errorMessageBlockStyle:object,
}