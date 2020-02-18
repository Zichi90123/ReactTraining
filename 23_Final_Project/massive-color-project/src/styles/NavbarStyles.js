import sizes from './sizes'

export default {
    Navbar: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-start',
        height: '6vh',
    },

    logo: {
        marginRight: 15,
        padding: '0 13px',
        fontSize: 22,
        backgroundColor: '#eceff1',
        fontFamily: 'Roboto',
        height: '100%',
        display: 'flex',
        alignItems: 'center',
        "& a": {
            textDecoration: 'none',
            color: 'black'
        },
        [sizes.down("xs")]: {
            display: "none"
        }
    },
    slider: {
        width: 340,
        margin: '0 10px',
        display: 'inline-block',
        "& .rc-slider-track": {
            backgroundColor: 'transparent',
        },
        "& .rc-slider-rail": {
            height: 8,
        },
        "& .rc-slider-handle, .rc-slider-handle:active, .rc-slider-handle:focus, .rc-slider-handle:hover": {
            backgroundColor: 'green',
            outline: 'none',
            border: '2px solid green',
            boxShadow: 'none',
            width: 13,
            height: 13,
            marginLeft: '-7px',
            marginTop: '-3px',
        },
        [sizes.down("sm")]: {
            width: 150,
        }
    },
    selectContainer: {
        marginLeft: 'auto',
        marginRight: '1rem',
    }
}