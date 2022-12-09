import Board from "../../comp/module/Board";

// start -- MUI 
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
// end -- MUI

function Customers() {
    return (
        <Box
            component="main"
            sx={{
            backgroundColor: (theme) =>
                theme.palette.mode === 'light'
                ? theme.palette.grey[100]
                : theme.palette.grey[900],
            flexGrow: 1,
            height: '100vh',
            overflow: 'auto',
            }}
        >
        <Toolbar />
        <p>위치파악용 문구</p>
        <Board/>
        </Box>  
    )
}

export default Customers;