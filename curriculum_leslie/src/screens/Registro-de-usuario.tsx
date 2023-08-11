import { Box, Button, FormControl, FormLabel, Grid, Paper, TextField, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { ModalInfoUsuario } from "../components/ModalInfoUsuario";

export interface IUsuario{
    nombre:string;
    aPaterno:string;
    aMaterno:string;
    email:string;
    telefono:string;
}

export function Guardar() {

   const [usuario,setUsuario]=useState<IUsuario>(
    {
        nombre:'Leslie Edith',
        aPaterno:'Lucio',
        aMaterno:'Lizcano',
        email:'less_blue@gmail.com',
        telefono:'8125692627',
    }
   );
    
    const [cambio,setCambio]=useState(false)

    return (
       
        <Grid container sx={{ backgroundColor: '#c4dfe2', justifyContent: "center", alignItems: "flex-end",width:"100vw",height:"100vh",display:"flex" }} >
            {/* espacio con bgc blanco */}
            <Grid container item sx={{ backgroundColor: '#e7e2e2' }} height={"98%"} lg={6} md={8} xs={10} justifyContent={'center'} alignItems={"center"}>
                {/* items dentro de lo blanco */}
               
                <Grid item lg={10} >
                    <TextField value={usuario.nombre}  onChange={(event)=>{}} fullWidth label="Nombre" variant="outlined" />
                </Grid>

                <Grid item lg={10}>
                    <TextField value={usuario.aPaterno} onChange={(event)=>(setUsuario({...usuario,aPaterno:event.target.value}))} fullWidth label="Apellido Paterno" variant="outlined" />
                </Grid>

                <Grid item lg={10}>
                    <TextField value={usuario.aMaterno} fullWidth label="Apellido Materno" variant="outlined" />
                </Grid>

                <Grid item lg={10}>
                    <TextField value={usuario.email} fullWidth label="Correo electrónico" variant="outlined" />
                </Grid>
                {/* cnteiner de telefono y extencion */}
                <Grid container item lg={10} justifyContent={'space-between'}>
                    <Grid item lg={8}  >
                        <TextField fullWidth label="Teléfono" variant="outlined" />
                    </Grid>

                    <Grid item lg={3}  >
                        <TextField fullWidth label="Extensión" variant="outlined" />
                    </Grid>
                </Grid>

                {/* conteiner de la fecha de nacimiento */}
                <Grid container item lg={10} justifyContent={'space-between'} >
                        <Grid item lg={12}>
                        <Typography sx={{}}>Fecha de nacimiento:</Typography>
                        </Grid>
                        <Grid item xs={3.5}>

                            <TextField label="Día" variant="outlined"/>
                        </Grid>

                        <Grid item sm={3.5}>
                            <TextField label="Mes" variant="outlined" />
                        </Grid>

                        <Grid item md={3.5} >
                            <TextField label="Año" variant="outlined" />
                        </Grid>
                </Grid>
                <Grid container item lg={10} justifyContent={'space-between'} >
                        <Button onClick={()=>{setCambio(true)}}>Abrir</Button>
                </Grid>
            </Grid>
            {cambio ? <ModalInfoUsuario cerrar={setCambio} datosUsuario={usuario}/> :''}
            
        </Grid>
    )
}