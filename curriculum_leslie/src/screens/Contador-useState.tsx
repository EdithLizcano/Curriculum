import { Button } from "@mui/material"
import { useState } from "react"
let cont = 0
export function Contador() {
    
    const [contHook,setContHook]=useState(0)

    const Aumentar = () => {
        cont = cont + 1
        // AumentarsetContHook(contHook+1)
        console.log(cont);
    }
    return (
        <div>
            <div>
                {"hook  "+ contHook}
            </div>
            <div>
                {"let  "+ cont}
            </div>
            <div>
                <Button variant="outlined" onClick={()=>{Aumentar()}}>Subir</Button>
            </div>
        </div>
    )
}