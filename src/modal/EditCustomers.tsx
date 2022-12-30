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

const MotionSlide = (props: ChildrenNodeProps) => {
    const { children } = props;

    return (
        <motion.span
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
                duration: 0.8,
                delay: 0.5,
                ease: [0, 0.71, 0.2, 1.01]
            }}
        >
            {children}
        </motion.span>
    )
}

const EditCustomers = () => {
    const { popupOption } = useSelector((state: StoreStateType) => {
        return {
            popupOption: state.view.popupOption
        };
    });
    const inputRef = useRef<TextFieldProps[]>([]);
    const [isEnter, setIsEnter] = useState(false);

    const FormName = () => {
        return (
            <>
            <AccountCircle sx={{ color: 'action.active', ml: 0, m: 2, mr: 1, my: 4  }} />
            <FormControl sx={{ m: 2, ml: 0, mb: 0, minWidth: 195, maxWidth: 300 }}>
                <TextField
                    InputLabelProps={{shrink: true}}
                    label="이름"
                    type="text"
                    inputRef={el => (inputRef.current[0] = el)}
                    maxRows={1}
                    value={inputRef.current[0]?.value}
                    onKeyUp={(e: any) => {
                        if (e.key === 'Enter') setIsEnter(true);
                    }}
                    key={'0-name'}
                />
            </FormControl>
            </>
        )
    }

    const FormGender = () => {
        return (
            <FormControl sx={{ m: 2, ml: 6, mt: 2, minWidth: 195, maxWidth: 300 }}>
                <InputLabel shrink>성별</InputLabel>
                <Select
                    inputRef={(el: TextFieldProps) => {inputRef.current[1] = el}}
                    defaultValue="여자"
                    key={'1-gender'}
                > 
                    <MenuItem value="여자">여자</MenuItem>
                    <MenuItem value="남자">남자</MenuItem>
                </Select>
            </FormControl>
        )
    }

    const FormInputs = () => {
        return (list.customersInput.map((item: any, idx: number) => {
            return <FormControl sx={{ m: 2, ml: 6, mt: 1, minWidth: 195, maxWidth: 300 }}>
                    <TextField
                        label={item.label}
                        type={item.type}
                        maxRows={item.maxRows}
                        // sx={item.sx}
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

    const FormCurrYn = () => {
        return (
            <FormControl sx={{ m: 2, ml: 6, mt: 1, minWidth: 195, maxWidth: 300 }}>
                <InputLabel shrink sx={{mt: 0.2}}>재직여부</InputLabel>
                <Select
                    inputRef={(el: TextFieldProps) => {inputRef.current[10] = el}}
                    defaultValue="재직"
                    key={'10-curryn'}
                > 
                    <MenuItem value="재직">다니고 있어요</MenuItem>
                    <MenuItem value="사직">그만 뒀어요</MenuItem>
                    <MenuItem value="휴직">쉬고 있어요</MenuItem>
                </Select>
            </FormControl>
        )
    }

    return (
        <BootstrapDialog open={true}>
            <BootstrapDialogTitle>회원 추가</BootstrapDialogTitle>
            <DialogContent dividers>
                <FormName/>
            { isEnter ?
                <MotionSlide>
                    <FormGender/>
                    <FormInputs/>
                    <FormCurrYn/>
                </MotionSlide>
            : '' }
            </DialogContent>
            <DialogActions>
                <Button  
                    onClick={() => {
                        if (!inputRef.current[0]?.value) {
                            ons.alert('이름을 입력해주세요.');
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

export default EditCustomers;