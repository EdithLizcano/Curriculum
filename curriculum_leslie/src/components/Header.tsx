import { Grid } from "@mui/material";
import { variable } from "../stored/infoCV";

export function Header(){
    return(
    <Grid width={"100vw"} height={"10vh"} bgcolor={"lightgreen"}>
        <h1>{variable.apellidoPaterno}</h1>
    </Grid>
    )
}