import { renderFormProps } from "../renderForm/props";

export interface ViewerProps {
    profileContainerStyle?: object;
    profileDetails?: {
        profileDetailsStyle: object;
        gridStyle: object;
        profileimage?: {
            breakpoints: object;
            badge?: { anchorOrigin?: any; overlap?: any };
            deleteContainerStyle?: object;
        };
        form: { breakpoints: object };
    };
    isEditMode?: Boolean;
    onSubmitBtn?: Function;
    username?: string;
    uploadOptions?: {
        imgScr: string;
        deleteProfile: Function;
        uploadProfile: Function;
    };
    titleOptions?: {
        title: string;
        fontSize?: string;
        fontWeight?: string;
        color?: string;
        titleBoxStyle?: object;
    };
    userNameStyle?: object;
    bgColor?: string;
    paddingAll?: string;
    renderForm?: renderFormProps;
}