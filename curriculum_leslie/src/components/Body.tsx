import { Grid } from "@mui/material";

export const Body =(
    {apellido,persona}:{apellido:string;persona:string}
)=>{
    
    return(
    <Grid width={"100%"} height={"100vh"} bgcolor={"blueviolet"}>
       {persona + " "+ apellido}
    </Grid>
    )
}