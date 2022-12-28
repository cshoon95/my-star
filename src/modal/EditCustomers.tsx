import React, { useState, useRef, useEffect } from 'react';
import ons from '../core/Ons';
import { StoreStateType } from '../type/Type';
import { useSelector } from 'react-redux';
import list from "../core/List";

// start -- MUI
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import Typography from '@mui/material/Typography';
import TextField, { TextFieldProps } from '@mui/material/TextField';
import Box from '@mui/material/Box';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import Autocomplete from '@mui/material/Autocomplete';
import Input from '@mui/material/Input';
import MenuItem from '@mui/material/MenuItem';
import InputAdornment from '@mui/material/InputAdornment';
import AccountCircle from '@mui/icons-material/AccountCircle';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import { motion } from "framer-motion";
// end -- MUI

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
'& .MuiDialogContent-root': {
    padding: theme.spacing(2),
},
'& .MuiDialogActions-root': {
    padding: theme.spacing(1),
},
}));

export interface DialogTitleProps {
    children?: React.ReactNode;
}

const BootstrapDialogTitle = (props: DialogTitleProps) => {
    const { children, ...other } = props;

    return (
        <DialogTitle sx={{ m: 0, p: 2, pb: 1 }} {...other}>
            {children}
            <IconButton
                aria-label="close"
                onClick={() => { ons.hidePopup(); }}
                sx={{
                    position: 'absolute',
                    right: 8,
                    top: 10,
                    color: (theme) => theme.palette.grey[500],
                }}
            >
                <CloseIcon />
            </IconButton>
        </DialogTitle>
    );
}

const EditCustomers = () => {
    const { popupOption } = useSelector((state: StoreStateType) => {
        return {
            popupOption: state.view.popupOption
        };
    });
    const inputRef = useRef<TextFieldProps[]>([]);
    const [isEnter, setIsEnter] = useState(false);
    const [age, setAge] = useState('');
    const handleChange = (event: SelectChangeEvent) => {
        setAge(event.target.value);
    };

    return (
        <BootstrapDialog open={true}>
            <BootstrapDialogTitle>회원 추가</BootstrapDialogTitle>
            <DialogContent dividers>
                <Box sx={{ display: 'flex', alignItems: 'flex-end', m: 3, ml: 2 }}>
                    <AccountCircle sx={{ color: 'action.active', mr: 1, my: 2  }} />
                    <TextField
                        autoFocus={true}
                        label="이름"
                        type="text"
                        inputRef={el => (inputRef.current[0] = el)}
                        maxRows={1}
                        sx={{m: 0, ml: 0}}
                        onKeyUp={(e: any) => {
                            if (e.key === 'Enter' && inputRef.current[0]?.value !== '') setIsEnter(true);
                        }}
                    />
                </Box>
                <Box>
                    { isEnter ? 
                        <motion.div
                            className="box"
                            initial={{ opacity: 0, scale: 0.5 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{
                                duration: 0.8,
                                delay: 0.5,
                                ease: [0, 0.71, 0.2, 1.01]
                            }}
                        >   
                            {list.customersInput.map((item: any, idx: number) => {
                                return <TextField
                                    label={item.label}
                                    type={item.type}
                                    maxRows={item.maxRows}
                                    sx={item.sx}
                                    defaultValue={item.defaultValue}
                                    inputRef={(el: TextFieldProps) => (inputRef.current[idx+1] = el)}
                                    multiline={item.multiline || false}
                                    InputLabelProps={{shrink: true}}
                                    key={idx + '-' + item.label}
                                    autoFocus={item.autoFocus || false}
                                />
                            })}
                            <Select
                                labelId="demo-select-small"
                                id="demo-select-small"
                                value={age}
                                label="수강 여부"
                                onChange={handleChange}
                                // ref={currYnRef}
                                sx={{m: 1, ml: 6, mt: 2, width: 195}}
                            >
                                <MenuItem value="">
                                <em>None</em>
                                </MenuItem>
                                <MenuItem value={10}>Ten</MenuItem>
                                <MenuItem value={20}>Twenty</MenuItem>
                                <MenuItem value={30}>Thirty</MenuItem>
                            </Select>
                    </motion.div>
                    : ''}
                </Box>
                
            </DialogContent>
            <DialogActions>
                <Button  
                    onClick={() => {
                        if (inputRef.current[0]?.value !== '') {
                            setIsEnter(true);
                        } else {
                            ons.hidePopup();
                            if (popupOption.callbackFunc) popupOption.callbackFunc();
                        }
                    }}>
                    {popupOption.confirm}
                </Button>
            </DialogActions>
        </BootstrapDialog>
    );
}

export default EditCustomers;