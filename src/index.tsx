import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { Provider } from 'react-redux';
import { store } from './store/Store';
import ons from './core/Ons';
import Alert from './manager/Alert';
import Loading from './manager/Loading';
import AppBar from './comp/header/AppBar';
import Drawer from './comp/navigation/Drawer';
import Dashboard from './page/dashboard/Dashboard';
import Customers from './page/customers/Customers';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";


// start -- MUI 
import { createTheme, ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
// end -- MUI

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

const mdTheme = createTheme();

ons.init(store);

root.render(
    <Provider store = {store}>
        <ThemeProvider theme={mdTheme}>
            <React.StrictMode>
                <Router>
                    <div>
                        <Alert/>
                        <Loading/>
                    </div>
                    <Box sx={{ display: 'flex' }}>
                    <CssBaseline />
                    <AppBar open={true}/>
                    <Drawer open={true}/>
                    <Routes>
                        <Route path="/" element={ <Dashboard /> } />
                        <Route path="/customers" element={ <Customers /> } />
                    </Routes>
                    </Box>
                </Router>        
            </React.StrictMode>
        </ThemeProvider>
    </Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
