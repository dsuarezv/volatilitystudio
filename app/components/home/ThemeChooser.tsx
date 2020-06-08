import React from 'react';
import Brightness4Icon from '@material-ui/icons/Brightness4';
import { observable, action } from 'mobx';
import red from '@material-ui/core/colors/red';
import { createMuiTheme } from "@material-ui/core/styles";
import IconButton from '@material-ui/core/IconButton';


const DefaultTheme = 'dark';

const lightTheme = createMuiTheme({
    palette: {
        type: "light",
        secondary: red
    },
    overrides: {
        MuiLink: {
            root: {
                fontWeight: '500'
            }
        }
    }
});

const darkTheme = createMuiTheme({
    palette: {
        type: "dark",
        primary: {
            main: '#5c6bc0'
        }, 
        secondary: red
    },
    overrides: {
        MuiLink: {
            root: {
                color: '#9aa9ff',
                fontWeight: '500'
            }
        }
    }
});

const storeTheme = localStorage.getItem('selectedTheme');

export let themeX = observable({selected: storeTheme || DefaultTheme, target: (storeTheme === 'light') ? lightTheme : darkTheme});


const ThemeChooser = () => {

    const handleToggleTheme = action(() => {
        if (themeX.selected === 'light') {
            themeX.selected = 'dark';
            themeX.target = darkTheme;
        }
        else {
            themeX.selected = 'light';
            themeX.target = lightTheme;
        }

        localStorage.setItem('selectedTheme', themeX.selected);
    });

    return (
        <IconButton 
            color='inherit' 
            title='Toggle light/dark theme'
            onClick={handleToggleTheme}
        >
            <Brightness4Icon />
        </IconButton>
    )
}

export default ThemeChooser;