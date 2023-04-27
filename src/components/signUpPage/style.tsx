export const signUp_style = {
    parentSx: {
        width: '100%',
        height: '100%'
    },
    labelSx: {
        fontSize: '12px',
        color: '#3B3B3B'
    },
    textFieldSx: {
        mt: 1,
    },
    childernSx: {
        my: 2.5
    },

    cardParentSx: {
        backgroundColor: '#EFEEFB',
        height: '100%',
        width: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        '@media (max-width:600px)': {
            backgroundColor: '#fff',
            height: '100%',
            width: '100%',
            margin: 0,
        },
    },
    loginSx: {
        '@media (max-width:600px)': {
            backgroundColor: '#fff',
            height: '100%',
            width: '100%',
        },
    },
    cardSx: {
        boxShadow: '0px 8px 20px #0000000A',
        border: 'none',
        borderRadius: '12px',
        width: '400px',
        margin: '100px',
        '@media (max-width:600px)': {
            backgroundColor: '#EFEEFB',
            borderRadius: '0px',
            width: '10p%',
            margin: '0px',
        },
    },
    loginBtnSx: {
        padding: 6,
        marginTop: '0px'
    },
    forgotSx: {
        textAlign: 'right',
        color: '#262626',
        fontSize: '14px',
        mt: 2,
        textDecoration: 'underline',
    },
    actionSx: {
        color: '#665CD7',
        fontWeight: 600,
        textDecoration: 'underline',
        cursor: 'pointer',
    },
    bottomTextSx: {
        marginTop: 2.7
    },
    socialButtonSx: {
        borderRadius: "4px",
        display: 'flex',
        alignItems: 'center',
        cursor: 'pointer',
        textAlign: 'center',
        backgroundColor: '#F8F8F8',
        mt: 2,
        justifyContent: 'center',
        transition: 'background-color 0.2s ease-in-out',
        '&:hover': {
            backgroundColor: '#ECECEC',
        }
    },
    dividerSx: {
        mt: 2,
        color: '#71707E'
    },
    fontSx: {
        fontSize: '12px',
    },
    logoSx: {
        marginBottom: '20px'
    },
    socialTextSx: {
        textAlign: 'center',
        width: '100%',
        color: '#3B3B3B',
        fontSize: '16px',
        fontWeight: 'medium',
    },
    nameSx: { display: 'flex', gap: 1 }
}