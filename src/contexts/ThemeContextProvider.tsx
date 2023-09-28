

import { createContext, useState, useMemo, ReactNode } from 'react';

import { ThemeProvider } from "@mui/material/styles"
import { ThemeVariantsProps, theme } from '../theme';
import { CssBaseline, useMediaQuery } from '@mui/material';

export const ThemeContext = createContext({ toggleColorMode: () => { } })


const ThemeContextProvider = ({ children }: { children: ReactNode }) => {

    const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)');


    // const [mode, setMode] = useState<ThemeVariantsProps>(ThemeVariantsProps.light);
    const [mode, setMode] = useState<ThemeVariantsProps>(prefersDarkMode ? ThemeVariantsProps.dark : ThemeVariantsProps.light);
    const activeTheme = useMemo(() => theme(mode), [mode]);
    const colorMode = useMemo(
        () =>( {
            toggleColorMode: ()  : void=> {
                setMode(prev => (prev === ThemeVariantsProps.light ? ThemeVariantsProps.dark : ThemeVariantsProps.light));
            },
        }),
        [mode]
    );

  
    return (
        <ThemeContext.Provider value={colorMode}>
            <ThemeProvider theme={activeTheme}>
                <CssBaseline /> 
                {children}
            </ThemeProvider>
        </ThemeContext.Provider>
    )
}

export default ThemeContextProvider