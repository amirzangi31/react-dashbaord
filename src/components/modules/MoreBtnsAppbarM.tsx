
import { Menu, MenuItem } from '@mui/material'
import { styled } from '@mui/material/styles'
import NotificationsIcon from '@mui/icons-material/Notifications';
import { AvatarCustom } from '../layout/Appbar';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { useState } from 'react';
import BtnMode from './BtnMode';
const MenuCustom = styled(Menu)`
    
     & .MuiPaper-root{
            
            border-radius : 20px;
            width : auto;
            padding : 0 10px;
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
    :hover {
        background : transparent;
    }
    cursor : default;
    color : ${props => props.theme.palette.textP.light};
   

`



const MoreBtnsAppbarM = () => {
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
            <AvatarCustom onClick={handleClick}>
                <MoreVertIcon />
            </AvatarCustom>
            <MenuCustom
                anchorEl={anchorEl}
                id="account-menu"
                open={open}
                onClose={handleClose}
                PaperProps={{
                    elevation: 0,

                }}
                transformOrigin={{ horizontal: 'right', vertical: 'top' }}
                anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
            >
                

                <MenuItemCustom >
                    <AvatarCustom>
                        <BtnMode />
                    </AvatarCustom>
                </MenuItemCustom>
                <MenuItemCustom >
                    <AvatarCustom>
                        <NotificationsIcon />
                    </AvatarCustom>
                </MenuItemCustom>

            </MenuCustom>
        </>
    )
}

export default MoreBtnsAppbarM