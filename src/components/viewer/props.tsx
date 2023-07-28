export interface ViewerProps {
    rootStyle?: object;
    viewBody: {
        viewBodyStyle: object;
        gridStyle?: object;
        profileimage?: {
            breakpoints: {
<<<<<<< HEAD
                xs: number;
                md: number;
                sm: number;
                lg: number;
=======
                xs?: number;
                md?: number;
                sm?: number;
                lg?: number;
                lx?: number;
>>>>>>> 75aae9bd07687c8303a262ff4a1eb5e4b00586d6
              };
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
            breakpoints: {
                xs?: number;
                md?: number;
                sm?: number;
                lg?: number;
                lx?: number;
              };
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
