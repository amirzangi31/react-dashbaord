import { Grid } from "@mui/material"


const DashboardPage = () => {
    return (
        <Grid container>
            <Grid item xs={4}>asdf</Grid>
            <Grid item xs={4}>adsf</Grid>
            <Grid container xs={4}>
                <Grid item xs={12}>asdf</Grid>
                <Grid item xs={12}>adsf</Grid>
            </Grid>
        </Grid>
    )
}

export default DashboardPage