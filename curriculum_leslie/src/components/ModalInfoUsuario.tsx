
import {Modal,Box,Typography, Button} from '@mui/material';
import { IUsuario } from '../screens/Registro-de-usuario';

export const ModalInfoUsuario=({cerrar,datosUsuario}:{cerrar:Function,datosUsuario:IUsuario})=>{
    return (
        <Modal 
        open={true}
      >
        <Box>


          <Typography id="modal-modal-title" variant="h6" component="h2">
            {datosUsuario.nombre}
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
          </Typography>
          <Button onClick={()=>{cerrar(false)}}>cerrar</Button>
        </Box>
      </Modal>
    )
}