// import * as React from 'react';
// import { Avatar, Button, FormControl, InputLabel, MenuItem, Select, Stack, Typography } from '@mui/material';
// import WestIcon from '@mui/icons-material/West';
// import { useNavigate } from 'react-router-dom';
// // import Img from '../../public/images/back.png';

// const BackButton = () => {
//     const navigate = useNavigate();
//     return (
//         <div style={{ marginLeft: 60 }}>
//             <Avatar sx={{ alignSelf: 'self-start' }}>
//                 <Button endIcon={<WestIcon />} onClick={() => { navigate("/") }}></Button>
//             </Avatar>

//         </div>)

// }
// export default BackButton;
import { IconButton } from "@mui/material";
import {IoArrowBackCircle} from "react-icons/io5"
import { useNavigate } from "react-router-dom"
const BackButton=()=>
{
    const navi=useNavigate();
return(
    <IconButton onClick={()=>{navi("/")}}>
        <IoArrowBackCircle size={100}  className="color-Button" />
        
    </IconButton>
)
}
export default BackButton;