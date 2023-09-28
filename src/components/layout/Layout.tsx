import * as React from 'react';
import { styled, useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';

import { Outlet } from 'react-router-dom';
import Sidebar from './Sidebar';
import { useMediaQuery } from '@mui/material';
import Appbar from './Appbar';
import useMediaScreen from '../../hooks/useMediaScreen';

const DrawerHeader = styled('div')(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: "16px",
    height: "83px"
    // necessary for content to be below app bar

}));


const BoxContainer = styled(Box)`
background : ${props => props.theme.palette.bg.dark};

padding : 10px;
border-radius : 16px;
min-height : calc(100vh - 91px);
margin : 0 10px 8px 10px;
${props => props.theme.breakpoints.up("md")}{
    width : calc(100% - 20px);
    margin : 0 0 8px 0 ;
}

`




const Layout = () => {
    const theme = useTheme();
    const tabletPoint = useMediaScreen("md")

    const [open, setOpen] = React.useState(tabletPoint === true ? true : false);

    const handleDrawerOpen = () => {
        setOpen(prev => !prev);
    };


    return (

        <>



            <Appbar handler={handleDrawerOpen} open={open} />


            <Box sx={{ display: 'flex' }}>

                <Sidebar open={open} />

                <Box component="main" sx={{ flexGrow: 1 }}>
                    <DrawerHeader />
                    <BoxContainer>
                        <Outlet />
                    </BoxContainer>
                </Box>
            </Box>


        </>


    );
}


export default Layout