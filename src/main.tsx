import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { StoreStateType } from './type/Type';
import Alert from './manager/Alert';
import Loading from './manager/Loading';
import Popup from './manager/Popup';
import Header from './comp/header/Header';
import Drawer from './comp/navigation/Drawer';
import Dashboard from './page/dashboard/Dashboard';
import Customers from './page/customers/Customers';
import Attendance from './page/attendance/Attendance';
import Setting from './page/setting/Setting';
import Reports from './page/reports/Reports';
import Calendar from './page/calendar/Calendar';

// start -- MUI 
import { createTheme, ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import ons from './core/Ons';
// end -- MUI

const Main = () => {
    const { viewMode, isShowDrawer } = useSelector((state: StoreStateType) => {
        return {
            viewMode: state.view.viewMode,
            isShowDrawer: state.view.isShowDrawer
        }
    });
    
    useEffect(() => {
        ons.server.get({
            url: 'environment/list',
            callbackFunc: (response: any) => {
                const mode = response.data[0].MODE;
                ons.changeMode(mode);
            }
        })
    }, [])

    const lightTheme = createTheme();
    const darkTheme = createTheme({
        palette: {
            mode: 'dark',
        },
    });
    
    return (
        <ThemeProvider theme={viewMode === 'dark' ? darkTheme : lightTheme}>
            <React.StrictMode>
                <div>
                    <Loading />
                    <Alert />
                    <Popup />
                </div>
                <Router>
                    <Box sx={{ display: 'flex' }}>
                        <CssBaseline />
                        <Header open={isShowDrawer}/>
                        <Drawer />
                        <Routes>
                            <Route path="/" element={ <Dashboard /> } />
                            <Route path="/attendance" element={ <Attendance /> } />
                            <Route path="/calendar" element={ <Calendar /> } />
                            <Route path="/customers" element={ <Customers /> } />
                            <Route path="/reports" element={ <Reports /> } />
                            <Route path="/setting" element={ <Setting /> } />
                        </Routes>
                    </Box>
                </Router>        
            </React.StrictMode>
        </ThemeProvider>
    )
}

export default Main;