export const styles = {
    widthItem: {
        width: '95%',
        margin: '16px auto'
    },
    child: {
        fontSize: '14px',
        color: '#29302B',
        textTransform: 'captialize',
        fontWeight:'600'
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
        padding: '8px 16px 8px 40px'
    },
    headItems: {
        color: '#29302B',
        width: '40px',
        fontSize: '12px',
        textTransform: 'capitalize',
        display: 'flex',
        justifyContent: 'end'
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
        width: '40px',
        padding: '12px 0',
        cursor: 'pointer',
        '& span': {
            color: '#818181 !important',
        }
    },
}