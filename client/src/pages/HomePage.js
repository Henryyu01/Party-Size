import { Grid } from "@mui/material";
import Search from "../components/Search";


const HomePage = () => {

    return (
        <Grid container spacing={2}>
            <Grid item>
                <Search/>
            </Grid>
        </Grid>
    );
}

export default HomePage