export interface SignupScreenProps {
    option: 'emailWithPasswordSignup' | "mobileNumberSignup" | 'socialMediaSignup';
    rootStyle?: object;
    cardWraperStyle?: object;
    sectionOne: {
        breakpoints: { xs?: number; md?: number; sm?: number; lg?: number };
        image?: { src: string; height: string; width: string, style?: object | undefined; };
        backgroundWrapStyle?: object;
        component?: React.ReactNode;
    };
    sectionTwo: {
        breakpoints: { xs?: number; md?: number; sm?: number; lg?: number };
        WraperStyle?: object;
        cardParentStyle?: object;
        cardData: {
            title?: string | any;
            description?: string | any;
            logo?: {
                logoSrc: string;
                logoHeight?: string;
                logoWidth?: string;
                alt?: string;
                logoStyle?: object;
            };
            childrenStyle?: object;
            mobileNumberSignup: {
                labelText: string;
                labelStyle?: object;
                mobileFieldstyle?: object | any;
                dropDownStyle?: object;
            };
            socialMedia: {
                socialMediaList: {
                    label?: string;
                    icon?: any;
                    onSocialmediaLogin: () => void;
                    style?: object;
                    SocialMediaButtonStyle?: object;
                }[];
            };
            emailWithPassword: {
                nameStyle: object;
                firstName: {
                    FnameFieldStyle?: object;
                    labelStyle?: object;
                    label: string;
                };
                lastName: {
                    LnameFieldStyle?: object;
                    labelStyle?: object;
                    label: string;
                };
                email: {
                    fieldstyle?: object;
                    labelStyle?: object;
                    label: string;
                };
                password: {
                    label: string;
                    labelStyle?: object;
                    fieldstyle?: object;
                    visbleIcon?: any;
                    invisibleIcon?: any;
                };
                confirmPassword: {
                    label: string;
                    labelStyle?: object;
                    fieldstyle?: object;
                    visbleIcon?: any;
                    invisibleIcon?: any;
                };
            };
            bottomText?: string;
            buttonText: string;
            titleStyle?: object;
            cardStyle?: object;
            btnStyle?: object;
            signupActionText?: string;
            actionstyle?: object;
            bottomTextStyle?: object;
            onLoginClick?: () => void;
        };
    };
    onSubmit: (detail: object) => void;
}
