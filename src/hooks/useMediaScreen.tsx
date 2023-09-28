import { Breakpoint, useMediaQuery } from "@mui/material"
import { useTheme } from "@mui/material/styles"
import { useEffect, useState } from "react"



const useMediaScreen = (val : Breakpoint) => {

    const theme = useTheme()

    const media = useMediaQuery(`${theme.breakpoints.up(val)}`)
    

    const [value, setValue] = useState(media)

    useEffect(() => {
        setValue(media)
    } , [media])


    return value
}

export default useMediaScreen