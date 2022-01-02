import React from 'react';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import { Tooltip } from '@mui/material';
// import EventAvailableIcon from '@mui/icons-material/EventAvailable';
// import EventBusyIcon from '@mui/icons-material/EventBusy';


export default function SimplePaper() {

    var rows = [];
    const numslots = 30
    for (var i = 1; i <= numslots; i++) {
        // note: we are adding a key prop here to allow react to uniquely identify each
        // element in this array. see: https://reactjs.org/docs/lists-and-keys.html
        rows.push(

            <Tooltip title={'Slot '+i }>
                <Paper
                    sx={{
                        justifyContent: 'center',
                        backgroundColor: 'red',
                        '&:hover': {
                            backgroundColor: 'lightred',
                            opacity: [0.9, 0.8, 0.7],
                            
                        },
                    }
                    }
                    elevation={3} key={i} onClick ></Paper>
            </Tooltip>);
    }
    return (
        <div>
            <Typography variant="h4" gutterBottom component="div">
                Total Slots : {numslots}
            </Typography>
            <Box
                sx={{
                    display: 'flex',
                    flexWrap: 'wrap',
                    justifyContent: 'center',
                    '& > :not(style)': {
                        m: 1,
                        width: 100,
                        height: 100,
                    },


                }}
            >

                {rows}
            </Box>
        </div>
    );
}