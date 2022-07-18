import * as React from 'react';
import Box from '@mui/material/Box';
import SpeedDial from '@mui/material/SpeedDial';
import SpeedDialIcon from '@mui/material/SpeedDialIcon';
import SpeedDialAction from '@mui/material/SpeedDialAction';
import FileCopyIcon from '@mui/icons-material/FileCopyOutlined';
import SaveIcon from '@mui/icons-material/Save';
import PrintIcon from '@mui/icons-material/Print';
import ShareIcon from '@mui/icons-material/Share';
import { useNavigate } from 'react-router-dom';



export default function BasicSpeedDial() {
    const navigate = useNavigate();
    return (
        <>
            <br />
            <br />
            <Box sx={{ height: 325, }}>

                <SpeedDial
                    ariaLabel="SpeedDial basic example"
                    sx={{ position: 'absolute', bottom: 10, right: 0 }}
                    onClick={() => navigate("/songs/addSong")}
                    icon={<SpeedDialIcon />}
                >
                    {/* <IconButton onClick={() => { nav( }}></IconButton> */}

                </SpeedDial>
            </Box>
        </>
    );
}
