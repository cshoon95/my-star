// start -- MUI 
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
// end -- MUI

interface CompProps {
    children?: React.ReactNode;
}

const InitPage = (props: CompProps) => {
    return(
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
            {props.children}
        </Box>  
    )
}

export default InitPage;