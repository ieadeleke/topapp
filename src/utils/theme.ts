import createTheme from '@mui/material/styles/createTheme';

export const theme = createTheme({
    palette: {
        primary: {
            main: '#000000',
        },
        text:{
            primary: '#fff',
            secondary: 'white'
        },
    },
    typography:{
        fontFamily: [`"DM Sans"`].join(","),
        allVariants:{
            color: 'white',
            padding: 0,
            margin: 0
        },
        body1: {
            fontSize: 15
        },
        caption: {
            color: '#C0C0C0',
            lineHeight: 1
        },
        h4:{
            fontSize: '24px',
            fontWeight: '500'
        },
        h5:{
            fontSize: '20px',
            fontWeight: '500'
        },
    },
    components:{
        MuiInput:{
            styleOverrides:{
                root:{
                    color:'white'
                }
            }
        },
        MuiSvgIcon:{
            styleOverrides:{
                colorPrimary: 'white',
                root:{
                    color: 'white'
                }
            }
        },
        MuiDivider:{
            styleOverrides:{
                root:{
                    backgroundColor: 'rgba(255, 255, 255, 0.1)'
                }
            }
        }
    }
});