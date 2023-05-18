export interface ViewerProps {
    rootStyle?: object;
    viewBody: {
        viewBodyStyle: object;
        gridStyle?: object;
        profileimage?: {
            breakpoints: object;
            profileImgStyle?: object;
            imgSrc: string | any;
            variant?: 'circular'
            | 'rounded'
            | 'square';
            profileimgContainer?:object;
            profileImgEditIcon?:React.ReactNode | any;
            customComp?:React.ReactNode | any;
            avatarconStyle?:object;
            profileImgEditStyle?:object;
            onClick?:Function | any;
        };
        form?: {
            breakpoints: object;
            title?: string;
            subTitle?: string;
            description?: string;
            titleStyle?: object;
            descriptionStyle?: object;
            subTitleStyle?: object;
            formContainer?:object;
            formListContainer?:object;
            formList: any;
        };
        btnList?:any;
    };
    headerOptions?: {
        title: string;
        fontSize?: string;
        fontWeight?: string;
        color?: string;
        titleBoxStyle?: object;
    };
}
