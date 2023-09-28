import { useState } from 'react';

//MUI
import { Avatar, Button, Menu, MenuItem, ListItemIcon, Box } from '@mui/material'
import { styled } from "@mui/material/styles"
//ICONS
import SettingsIcon from '@mui/icons-material/Settings';

import Settings from '@mui/icons-material/Settings';
import Logout from '@mui/icons-material/Logout';
import PersonIcon from '@mui/icons-material/Person';


const ProfileButton = styled(Button)`
      background :${(props) => props.theme.palette.bg.light};
      color : ${props => props.theme.palette.primary.main};
      border-radius : 30px;
      display : flex;
      
      gap : 20px;
      :hover .MuiBox-root svg {
            fill : ${props => props.theme.palette.textP.main};
      }
      & .MuiBox-root {
        display: flex;
        align-items :center;
      }
`

const MenuCustom = styled(Menu)`
    
     & .MuiPaper-root{
            ${props => props.theme.breakpoints.up("md")} {
                width : 500px;
                padding : 20px;
            };
            border-radius : 20px;
            width : auto;
            background : ${props => props.theme.palette.bg.main};
            border : 1px solid ${props => props.theme.palette.mode === "dark" ? "white" : "black"}
        }
        & .MuiList-root{
            display : flex;
            flex-direction :column;
            gap:10px;
        }

`
const MenuItemCustom = styled(MenuItem)`

    min-height: 48px;
    
    padding : 20px ;
    border-radius : 10px;
    & svg {
        width : 20px;
        height : 20px;
    }
    color : ${props => props.theme.palette.textP.light};
    :hover {
        background : ${props => props.theme.palette.primary.light};
    }
    :hover svg {
        
        color : ${props => props.theme.palette.primary.main}
    }

`



const ProfileButtonBox = () => {
    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
    const open = Boolean(anchorEl);
    const handleClick = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };
    return (
        <>

            <ProfileButton onClick={handleClick}>
                <Avatar sx={{ width: "34px", height: "34px", }} />
                <Box>
                    <SettingsIcon />
                </Box>
            </ProfileButton>
            <MenuCustom
                anchorEl={anchorEl}
                id="account-menu"
                open={open}
                onClose={handleClose}
                onClick={handleClose}
                PaperProps={{
                    elevation: 0,

                }}
                transformOrigin={{ horizontal: 'right', vertical: 'top' }}
                anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
            >

              
                <MenuItemCustom onClick={handleClose}>
                    <ListItemIcon>
                        <Settings fontSize="small" />
                    </ListItemIcon>
                    Account Settings
                </MenuItemCustom>
                <MenuItemCustom onClick={handleClose}>
                    <ListItemIcon>
                        <PersonIcon fontSize="small" />
                    </ListItemIcon>
                    Social Prodfile
                </MenuItemCustom>
                <MenuItemCustom onClick={handleClose}>
                    <ListItemIcon>
                        <Logout fontSize="small" />
                    </ListItemIcon>
                    Logout
                </MenuItemCustom>
            </MenuCustom>
        </>
    )
}

export default ProfileButtonBox