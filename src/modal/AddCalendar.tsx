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
import OutlinedInput from '@mui/material/OutlinedInput';
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

export interface ChildrenNodeProps {
    children?: React.ReactNode;
}

const BootstrapDialogTitle = (props: ChildrenNodeProps) => {
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


const AddCalendar = () => {
    const { popupOption } = useSelector((state: StoreStateType) => {
        return {
            popupOption: state.view.popupOption
        };
    });
    const inputRef = useRef<TextFieldProps[]>([]);

    const StartTimePicker = () => {
        return (
            <FormControl sx={{ m: 2, ml: 6, mt: 2, minWidth: 300, maxWidth: 300 }}>
                <TextField
                    id="time"
                    label="시작시간"
                    type="time"
                    defaultValue="07:30"
                    InputLabelProps={{
                    shrink: true,
                    }}
                    inputProps={{
                    step: 300, // 5 min
                    }}
                    sx={{ width: 150 }}
                />
            </FormControl>
        )
    }

    const FormInputs = () => {
        return (list.calendarInput.map((item: any, idx: number) => {
            return <FormControl sx={item.sx}>
                    <TextField
                        label={item.label}
                        type={item.type}
                        maxRows={item.maxRows}
                        defaultValue={item.defaultValue}
                        inputRef={(el: TextFieldProps) => (inputRef.current[idx+2] = el)}
                        multiline={item.multiline || false}
                        InputLabelProps={{shrink: true}}
                        key={idx+2 + '-' + item.label}
                        autoFocus={item.autoFocus || false}
                        inputProps={{maxLength: item.maxLength}}
                    />
                </FormControl>
            })
        )
    }

    return (
        <BootstrapDialog open={true}>
            <BootstrapDialogTitle>일정</BootstrapDialogTitle>
            <DialogContent dividers>
                <FormInputs/>
            </DialogContent>
            <DialogActions>
                <Button  
                    onClick={() => {
                        if (!inputRef.current[0]?.value) {
                            ons.alert('내용을 입력해주세요.');
                            return;
                        }

                        let values: any = [];

                        inputRef.current.forEach((el) => {
                            if (el.type === 'date') {
                                const result = String(el.value).replace(/[^0-9]/g, "");
                                values.push(result);
                                return;
                            }
                            values.push(el.value);
                        })
                        ons.server.post({
                            url: '/customers/insert',
                            data: values,
                            hideLoading: true,
                            callbackFunc: ((res: any) => {
                                ons.setCustomerList();
                                ons.hidePopup();
                            })
                        })
                    }}>
                    {popupOption.confirm}
                </Button>
            </DialogActions>
        </BootstrapDialog>
    );
}

export default AddCalendar;