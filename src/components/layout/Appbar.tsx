


//MUI
import { Grid, Toolbar, Avatar, Badge } from '@mui/material'
import { styled, } from '@mui/material/styles';
import MuiAppBar, { AppBarProps as MuiAppBarProps } from '@mui/material/AppBar';



//ICONS
import MenuIcon from '@mui/icons-material/Menu';
import Logo from '../../assets/Logo';
import TableRowsIcon from '@mui/icons-material/TableRows';
import ProfileButtonBox from '../modules/ProfileButtonBox';
import NotificationsIcon from '@mui/icons-material/Notifications';
import BtnMode from '../modules/BtnMode';
import useMediaScreen from '../../hooks/useMediaScreen';
import MoreBtnsAppbarM from '../modules/MoreBtnsAppbarM';
import SearchBox from '../modules/SearchBox';

type PropsType = {
  handler: Function,
  open: boolean
}
interface AppBarProps extends MuiAppBarProps {
  open?: boolean;
}

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== 'open',
})<AppBarProps>(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  padding: "16px",
  background: theme.palette.bg.main,
  transition: theme.transitions.create(['width', 'margin'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    maxWidth: "100%",
    width: `100%`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
  boxShadow: "none",
  "& .MuiToolbar-root ": {
    minHeight: "auto",
    padding: "0"
  }
}));


export const AvatarCustom = styled(Avatar)`
  background :${(props) => props.theme.palette.bg.light};
  color : ${props => props.theme.palette.primary.main};
  border-radius : 10px;
  cursor : pointer ;
  width : 34px;
  height : 34px;
  
  :hover {
    background :${(props) => props.theme.palette.primary.main};
    color : ${props => props.theme.palette.textP.main};
  }

  & svg {
    width : 20px;
    height : 20px;
  }

`



const Appbar = (props: PropsType) => {
  const { handler, open } = props
  const mobilePoint = useMediaScreen("sm")
  const tabletPoint = useMediaScreen("md")


  return (
    <AppBar position="fixed" open={open}>
      <Toolbar >
        <Grid container gap={2}>

          <Grid item md={2} sx={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
            {tabletPoint && <Logo />}
            <AvatarCustom
              onClick={() => handler()}
              variant='rounded'
            >
              <MenuIcon />
            </AvatarCustom>
          </Grid>

          <Grid item md={4} lg={3}>
            {tabletPoint &&

              <SearchBox />
            }
          </Grid>


          <Grid item sx={{ marginLeft: "auto", gap: mobilePoint ? 4 : 1, display: "flex", justifyContent: "flex-end", alignItems: "center" }}>
            {
              mobilePoint && (
                <>

                  <BtnMode />
                  <Badge badgeContent={1} color="primary" >
                    <AvatarCustom sx={{ p: '10px' }} >
                      <NotificationsIcon />
                    </AvatarCustom>
                  </Badge>
                </>
              )
            }

            <ProfileButtonBox />
            {!mobilePoint && <MoreBtnsAppbarM />}
          </Grid>

        </Grid>
      </Toolbar>
    </AppBar>
  )
}

export default Appbar