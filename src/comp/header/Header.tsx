import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { hideAlert, showAlert, showLoading, hideLoading, movePage } from "../../store/View";
import { StoreStateType } from '../../type/Type';
import ons from '../../core/Ons';

// start -- MUI 
import MuiAppBar, { AppBarProps as MuiAppBarProps } from '@mui/material/AppBar';
import { styled } from '@mui/material/styles';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Typography from '@mui/material/Typography';
import Badge from '@mui/material/Badge';
import NotificationsIcon from '@mui/icons-material/Notifications';
// end -- MUI

interface AppBarProps extends MuiAppBarProps {
    open?: boolean;
}
const StyledAppBar = styled(MuiAppBar, {
    shouldForwardProp: (prop) => prop !== 'open',
})<AppBarProps>(({ theme, open }) => ({
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(['width', 'margin'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
    }),
    ...(open && {
    marginLeft: 240,
    width: `calc(100% - ${240}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen,
    }),
}),
}));

const Header = (open: any) => {
    const [isOpen, setOpen] = useState(open);
    const { headerTitle } = useSelector((state: StoreStateType) => {
        return {
            headerTitle: state.view.headerTitle
        }
    });
    return(
        <StyledAppBar position="absolute" open={true}>
             <Toolbar
                sx={{
                pr: '24px', // keep right padding when drawer closed
                }} 
            >
                <IconButton
                    edge="start"
                    color="inherit"
                    aria-label="open drawer"
                    onClick={() => {
                        setOpen(!isOpen);
                    }}
                    sx={{
                        marginRight: '36px',
                        ...(isOpen && { display: 'none' }),
                    }}
                >
                    <MenuIcon />
                </IconButton>
                <Typography
                    component="h1"
                    variant="h6"
                    color="inherit"
                    noWrap
                    sx={{ flexGrow: 1 }}
                    >
                    {headerTitle}
                </Typography>
                <IconButton color="inherit">
                    <Badge badgeContent={4} color="secondary">
                        <NotificationsIcon />
                    </Badge>
                </IconButton>
            </Toolbar>
        </StyledAppBar>
    )
}

export default Header;