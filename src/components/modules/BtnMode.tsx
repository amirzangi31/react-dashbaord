import { useContext } from "react";
import { useTheme } from "@mui/material/styles"
import { AvatarCustom } from "../layout/Appbar"
import WbSunnyIcon from '@mui/icons-material/WbSunny';
import ModeNightIcon from '@mui/icons-material/ModeNight';
import { ThemeContext } from "../../contexts/ThemeContextProvider";

const BtnMode = () => {
    const { palette } = useTheme()
    const {toggleColorMode} = useContext(ThemeContext)

    return (
        <AvatarCustom onClick={() => toggleColorMode()}>

            {palette.mode === "dark" ?
                <WbSunnyIcon  sx={{color : palette.warning.main}} />
                :
                <ModeNightIcon sx={{color : palette.textP.light}} />    
            }

        </AvatarCustom>
    )
}

export default BtnMode