import { SvgIcon } from '@mui/material';

export function InfoIcon(props: any) {
    const { rootStyle, ...rest } = props;

    const rootSx = {
        width: '20px',
        height: '19px',
        marginTop: '12px',
        // color: '#29302b',
        ...rootStyle,
    };
    return (
        <SvgIcon xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" viewBox="0 0 24 24" {...rest} sx={rootSx}>
            <path
                id="icons8-info-50"
                d="M10.729,4a6.729,6.729,0,1,0,6.729,6.729A6.737,6.737,0,0,0,10.729,4Zm0,1.009a5.72,5.72,0,1,1-5.72,5.72A5.712,5.712,0,0,1,10.729,5.009Zm0,2.355a.673.673,0,1,0,.673.673A.673.673,0,0,0,10.729,7.365Zm-.008,2.348a.5.5,0,0,0-.5.512v3.7a.5.5,0,1,0,1.009,0v-3.7a.5.5,0,0,0-.513-.512Z"
                transform="translate(-4 -4)"
            />
        </SvgIcon>
    );
}

export function ExpandIcon(props: any) {
    const { rootStyle, ...rest } = props;

    const rootSx = {
        width: '24',
        height: '24',
        // color: '#29302b',
        ...rootStyle,
    };
    return (
        <SvgIcon xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" {...rest} sx={rootSx}>
            <g id="Group_106711" data-name="Group 106711" transform="translate(-1322 -20)">
                <rect
                    id="Rectangle_43748"
                    data-name="Rectangle 43748"
                    width="24"
                    height="24"
                    transform="translate(1322 20)"
                    fill="none"
                />
                <g id="Group_90920" data-name="Group 90920" transform="translate(4 -5)">
                    <rect
                        id="Rectangle_46698"
                        data-name="Rectangle 46698"
                        width="16"
                        height="16"
                        transform="translate(1322 29)"
                        fill="none"
                    />
                    <path
                        id="icons8-expand-arrow"
                        d="M14.025,12.168,9,17.192,3.976,12.168a.571.571,0,0,0-.808.808L8.6,18.4a.571.571,0,0,0,.808,0l5.429-5.429a.571.571,0,0,0-.808-.808Z"
                        transform="translate(1321 21.952)"
                        fill="#29302b"
                    />
                </g>
            </g>
        </SvgIcon>
    );
}
export function CollapseIcon(props: any) {
    const { rootStyle, ...rest } = props;

    const rootSx = {
        width: '24',
        height: '24',
        // color: '#29302b',
        ...rootStyle,
    };
    return (
        <SvgIcon xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" {...rest}
            sx={rootSx}>
            <g id="Group_106714" data-name="Group 106714" transform="translate(-1322 -20)">
                <rect
                    id="Rectangle_43748"
                    data-name="Rectangle 43748"
                    width="24"
                    height="24"
                    transform="translate(1322 20)"
                    fill="none"
                />
                <g id="Group_90920" data-name="Group 90920" transform="translate(1297 1362) rotate(-90)">
                    <rect
                        id="Rectangle_46698"
                        data-name="Rectangle 46698"
                        width="16"
                        height="16"
                        transform="translate(1322 29)"
                        fill="none"
                    />
                    <path
                        id="icons8-expand-arrow"
                        d="M14.025,12.168,9,17.192,3.976,12.168a.571.571,0,0,0-.808.808L8.6,18.4a.571.571,0,0,0,.808,0l5.429-5.429a.571.571,0,0,0-.808-.808Z"
                        transform="translate(1321 21.952)"
                        fill="#29302b"
                    />
                </g>
            </g>
        </SvgIcon>
    );
}

export function SettingIcon(props: any) {
    const { rootStyle, ...rest } = props;

    const rootSx = {
        width: '20px',
        height: '19px',
        marginTop: '12px',
        // color: '#29302b',
        ...rootStyle,
    };
    return (
        <SvgIcon xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" viewBox="0 0 24 24" {...rest}
            sx={rootSx}>
            <path
                id="icons8-automation"
                d="M12.7,13.733l-.164-.093A1.07,1.07,0,0,1,12,12.7v-.678a1.07,1.07,0,0,1,.535-.959l.139-.078A.713.713,0,0,0,12.959,10L12.6,9.375a.713.713,0,0,0-.974-.26l-.114.068a1.07,1.07,0,0,1-1.134-.05,3.67,3.67,0,0,0-.563-.325,1.07,1.07,0,0,1-.6-.97V7.706A.713.713,0,0,0,8.5,6.993H7.792a.713.713,0,0,0-.713.713v.132a1.07,1.07,0,0,1-.6.959,3.67,3.67,0,0,0-.563.325,1.07,1.07,0,0,1-1.134.043L4.671,9.1a.713.713,0,0,0-.977.257l-.357.621a.713.713,0,0,0,.26.974l.164.093A1.07,1.07,0,0,1,4.3,12v.678a1.07,1.07,0,0,1-.535.959l-.139.078a.713.713,0,0,0-.285.988l.357.621a.713.713,0,0,0,.974.26l.114-.068a1.07,1.07,0,0,1,1.134.043,3.67,3.67,0,0,0,.563.325,1.07,1.07,0,0,1,.6.959v.132a.713.713,0,0,0,.713.713H8.5a.713.713,0,0,0,.713-.713v-.132a1.07,1.07,0,0,1,.6-.959,3.67,3.67,0,0,0,.563-.335,1.07,1.07,0,0,1,1.134-.043l.111.064a.713.713,0,0,0,.977-.257l.357-.621A.713.713,0,0,0,12.7,13.733Zm-4.551.392a1.783,1.783,0,1,1,1.783-1.783A1.783,1.783,0,0,1,8.148,14.125Zm9.6-9.087L17.816,5a.713.713,0,0,0,.26-.977L17.9,3.719a.713.713,0,0,0-.974-.264l-.046.029a.713.713,0,0,1-.738,0l-.118-.068a.713.713,0,0,1-.385-.649V2.713A.713.713,0,0,0,14.924,2h-.357a.713.713,0,0,0-.713.713v.053a.713.713,0,0,1-.385.631l-.118.068a.713.713,0,0,1-.738,0l-.046-.029a.713.713,0,0,0-.974.264l-.178.307a.713.713,0,0,0,.26.977l.064.036a.713.713,0,0,1,.357.621v.171a.713.713,0,0,1-.357.621l-.064.036a.713.713,0,0,0-.26.977l.178.307a.713.713,0,0,0,.974.264l.046-.029a.713.713,0,0,1,.738.018l.118.068a.713.713,0,0,1,.385.649v.053a.713.713,0,0,0,.713.713h.357a.713.713,0,0,0,.713-.713V8.722a.713.713,0,0,1,.385-.631l.118-.068a.713.713,0,0,1,.738-.018l.046.029A.713.713,0,0,0,17.9,7.77l.178-.307a.713.713,0,0,0-.26-.977l-.064-.036A.713.713,0,0,1,17.4,5.83V5.659A.713.713,0,0,1,17.752,5.038Zm-3.006,1.6a.892.892,0,1,1,.892-.892A.892.892,0,0,1,14.746,6.636Z"
                transform="translate(-3.242 -2)"
                fill="#219377"
            />
        </SvgIcon>
    );
}