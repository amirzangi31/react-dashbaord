import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import { Box, CSSObject, ListItemIcon, Theme, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';
import MuiDrawer from '@mui/material/Drawer';
import { applicationData, dashboardData } from '../../data/SidebarData';
import { Link } from 'react-router-dom';
import Logo from '../../assets/Logo';
import useMediaScreen from '../../hooks/useMediaScreen';
import SearchBox from '../modules/SearchBox';


const drawerWidth = 260;
const openedMixin = (theme: Theme): CSSObject => ({
    width: drawerWidth,

    transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen,
    }),
    overflowX: 'hidden',
    [theme.breakpoints.down('md')]: {
        position: "fixed",
        width: "100%",
    },
});

const closedMixin = (theme: Theme): CSSObject => ({
    transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
    }),
    overflowX: 'hidden',
    width: `0`,
    [theme.breakpoints.down('md')]: {
        position: "fixed",
        width: "0"
    },
    [theme.breakpoints.up('md')]: {
        width: `calc(${theme.spacing(8)} + 1px)`,
    },
});



const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(
    ({ theme, open }) => ({
        width: "auto",
        flexShrink: 0,
        whiteSpace: 'nowrap',
        boxSizing: 'border-box',

        ...(open && {
            ...openedMixin(theme),
            '& .MuiDrawer-paper': openedMixin(theme),
        }),
        ...(!open && {
            ...closedMixin(theme),
            '& .MuiDrawer-paper': closedMixin(theme),
        }),
        "& .MuiPaper-elevation": {
            border: "none",
            background: theme.palette.bg.main
        }

    }),
);

const DrawerHeader = styled('div')(() => ({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: "16px",
    height: "83px"
    // necessary for content to be below app bar

}));

type OpenProps = {
    open: boolean
}

const ListItemButtonCustom = styled(ListItemButton)`
min-height: 46px;
justify-content: center;
 padding: 0 10px ;
border-radius : 10px;
margin : 2px 0 ;
color : ${props => props.theme.palette.textP.light};
& svg {
    width : 20px;
    height : 20px;
}
:hover {
    background : ${props => props.theme.palette.primary.light};
    color : ${props => props.theme.palette.primary.main};
    
}
`







const Sidebar = (props: OpenProps) => {
    const { open } = props
    const tabeltPoint = useMediaScreen("md")
    return (
        <Drawer variant="permanent" open={open} className='sidebar'  >
            <Box sx={{ padding: open ? "0 20px " : "0 5px" }}>
                <DrawerHeader>
                </DrawerHeader>
                {!tabeltPoint && (
                    <Box sx={{
                        padding  : "10px 0 ",
                        display : "flex",
                        justifyContent : "center",
                        alignItems : "center"
                    }}>
                        <Logo />
                    </Box>
                )}
                {!tabeltPoint && (
                    <Box sx={{
                        padding  : "10px 0 ",
                        display : "flex",
                        justifyContent : "center",
                        alignItems : "center"
                    }}>
                        <SearchBox />
                    </Box>
                )}
                {open ? <Typography component="span" fontSize={14} >Dashboard</Typography> : ""}
                <List>
                    {dashboardData.map((item, index) => (
                        <Link to={item.link} key={index} >
                            <ListItem disablePadding sx={{ display: 'block' }}>
                                <ListItemButtonCustom>
                                    <ListItemIcon
                                        sx={{
                                            minWidth: 0,
                                            mr: open ? 3 : 'auto',
                                            justifyContent: 'center',
                                        }}
                                    >
                                        {item.icon}
                                    </ListItemIcon>
                                    <ListItemText primary={item.name} sx={{ opacity: open ? 1 : 0 }} />
                                </ListItemButtonCustom>
                            </ListItem>
                        </Link>
                    ))}
                </List>
                <Divider />
                {open ? <Typography component="span" fontSize={14} >Application</Typography> : ""}
                <List>
                    {applicationData.map((item, index) => (
                        <Link to={item.link} key={index} >
                            <ListItem disablePadding sx={{ display: 'block' }}>
                                <ListItemButtonCustom>
                                    <ListItemIcon
                                        sx={{
                                            minWidth: 0,
                                            mr: open ? 3 : 'auto',
                                            justifyContent: 'center',
                                        }}
                                    >
                                        {item.icon}
                                    </ListItemIcon>
                                    <ListItemText primary={item.name} sx={{ opacity: open ? 1 : 0 }} />
                                </ListItemButtonCustom>
                            </ListItem>
                        </Link>
                    ))}
                </List>
            </Box>
        </Drawer>
    )
}

export default Sidebar