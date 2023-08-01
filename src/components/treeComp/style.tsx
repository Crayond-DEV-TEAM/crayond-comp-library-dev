export const styles = {
    widthItem: {
        width: {
            xs: '100%',
            sm: '98%',
            md: '95%',
            lg: '95%'
        },
        margin: '16px auto'
    },
    child: {
        fontSize: '14px',
        color: '#29302B',
        textTransform: 'captialize',
        fontWeight: '600'
    },
    nestedChild: {
        fontSize: '14px',
        color: '#818181',
        textTransform: 'captialize',
    },
    mild: {
        borderBottom: '1px solid #cccccc',
        position: 'relative',
        left: '80px',
        top: '-104px',
        // width: '730px',
    },
    entireContainerSx: {
        alignItems: 'center',
        padding: {
            lg: '8px 16px 8px 40px',
            md: '8px 8px 8px 30px',
            sm: '8px 3px 8px 20px'
        }
    },
    headItems: {
        color: '#29302B',
        width: '80px',
        fontSize: '12px',
        textTransform: 'capitalize',
        display: 'flex',
        justifyContent: 'center',
        padding: {
            lg: '0',
            md: '0',
            // sm: '10px',
            // xs: '10px'
        }
    },
    headTitle: {
        color: '#353448',
        fontSize: {
            md: '20px',
            sm: '18px',
            xs: '16px'
        },
        fontWeight: '600',
    },
    formControl: {
        width: '82px',
        padding: '12px 0',
        cursor: 'pointer',
        '& span': {
            color: '#818181 !important',
            paddingLeft: '0',
            paddingRight: '0'

        }
    },
    labelTextGridSx: {
        width: 'auto'
    },
    checkboxGridSx: {
        width:"500px"
        // width: {
        //     lg: '34%',
        //     md: '51%',
        //     sm: '68%'
        // }
    },
    stackItem: {
        alignItems: 'center',
        justifyContent: 'space-between',
        overflow: 'auto',
        "&::-webkit-scrollbar": {
            display: "none",
        },

    },
    treeItem: {
        height: 220,
        flexGrow: 1,
        m: {
            sm: 1,
            md: 2,
            lg: 2
        }
    }
}