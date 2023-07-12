import { Box } from "@mui/material"
import { Body } from "../components/Body"
import { Footer } from "../components/Footer"
import { Header } from "../components/Header"

export const Home = ()=>{
return(
    <>
        <Header></Header>
        <Box sx={{overflow:"auto", height:"80vh"}}>
            <Body></Body>
            
        </Box>
        <Footer></Footer>
    </>
)
}