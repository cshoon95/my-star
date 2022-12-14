import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { Provider } from 'react-redux';
import { store } from './store/Store';
import ons from './core/Ons';
import Alert from './manager/Alert';
import Loading from './manager/Loading';
import Header from './comp/header/Header';
import Drawer from './comp/navigation/Drawer';
import Dashboard from './page/dashboard/Dashboard';
import Customers from './page/customers/Customers';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { RecoilRoot } from "recoil";
import Attendance from './page/attendance/Attendance';
import Setting from './page/setting/Setting';
import Reports from './page/reports/Reports';

// start -- MUI 
import { createTheme, ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
// end -- MUI

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

// const darkTheme = createTheme();
const mdTheme = createTheme({
    palette: {
      mode: 'dark',
    },
  });

ons.init(store);

root.render(
    <Provider store = {store}>
        <RecoilRoot>
            <ThemeProvider theme={mdTheme}>
                <React.StrictMode>
                    <div>
                        <Alert/>
                        <Loading/>
                    </div>
                    <Router>
                        <Box sx={{ display: 'flex' }}>
                        <CssBaseline />
                        <Header open={true}/>
                        <Drawer open={true}/>
                        <Routes>
                            <Route path="/" element={ <Dashboard /> } />
                            <Route path="/customers" element={ <Customers /> } />
                            <Route path="/attendance" element={ <Attendance /> } />
                            <Route path="/reports" element={ <Reports /> } />
                            <Route path="/setting" element={ <Setting /> } />
                        </Routes>
                        </Box>
                    </Router>        
                </React.StrictMode>
            </ThemeProvider>
        </RecoilRoot>
    </Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
