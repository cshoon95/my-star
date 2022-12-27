import React, { useState, useRef, useEffect } from 'react';
import ons from '../core/Ons';
import { StoreStateType } from '../type/Type';
import { useSelector } from 'react-redux';

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
    id: string;
    children?: React.ReactNode;
    onClose?: () => void;
}

const BootstrapDialogTitle = (props: DialogTitleProps) => {
    const { children, onClose, ...other } = props;

    return (
        <DialogTitle sx={{ m: 0, p: 2 }} {...other}>
            {children}
            {onClose ? (
                <IconButton
                aria-label="close"
                onClick={onClose}
                sx={{
                    position: 'absolute',
                    right: 8,
                    top: 8,
                    color: (theme) => theme.palette.grey[500],
                }}
                >
                <CloseIcon />
                </IconButton>
            ) : null}
        </DialogTitle>
    );
}

const EditCustomers = () => {
    const { popupOption } = useSelector((state: StoreStateType) => {
        return {
            popupOption: state.view.popupOption
        };
    });

    const inputRef = useRef<null[] | TextFieldProps[]>([]);
    const nameRef = useRef<TextFieldProps>(null);
    const phoneRef = useRef<TextFieldProps>(null);
    const birthRef = useRef<TextFieldProps>(null);
    const regDateRef = useRef<TextFieldProps>(null);
    const schoolRef = useRef<TextFieldProps>(null);
    const feeRef = useRef<TextFieldProps>(null);
    const parentPhoneRef = useRef<TextFieldProps>(null);
    const noteRef = useRef<TextFieldProps>(null);
    const currYnRef = useRef<TextFieldProps>(null);

    const [ isClick, setIsClick ] = useState(false);
    const [ isEnter, setIsEnter ] = useState(false);
    const [age, setAge] = React.useState('');
    const handleChange = (event: SelectChangeEvent) => {
        setAge(event.target.value);
    };
    
    const customers = ons.getState('customers');
    const customersName = customers.map((el: any) => {
        return el.NAME;
    })

    const info = (name: string) => {
        const infoArr = customers.filter((item: any) => { return item.NAME === name })    
        return infoArr[0];
    }

    return (
        <BootstrapDialog
            aria-labelledby="customized-dialog-title"
            open={true}
        >
            <BootstrapDialogTitle id="customized-dialog-title">
                회원 추가
            </BootstrapDialogTitle>
            <DialogContent dividers>
                <Box sx={{ display: 'flex', alignItems: 'flex-end', m: 3, ml: 2 }}>
                    <AccountCircle sx={{ color: 'action.active', mr: 1, my: 2  }} />
                    <TextField 
                        id="outlined-multiline-flexible"
                        label="이름"
                        type="text"
                        inputRef={el => (inputRef.current[0] = el)}
                        maxRows={1}
                        sx={{m: 0, ml: 0}}
                        onKeyUp={(e: any) => {
                            console.log(inputRef.current[0]?.value || '');
                            if (e.key === 'Enter') setIsEnter(true);
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
                            <TextField 
                                id="outlined-multiline-flexible"
                                label="휴대폰"
                                inputRef={phoneRef}
                                maxRows={1}
                                sx={{m: 1, ml: 6, mt: 0}}
                                defaultValue="010"
                            />
                            <TextField
                                id="date"
                                label="생년월일"
                                type="date"
                                inputRef={birthRef}
                                sx={{m: 1, ml: 6, mt: 0, width: 195}}
                                InputLabelProps={{
                                    shrink: true,
                                }}
                            />
                            <TextField
                                id="date"
                                label="등록일"
                                type="date"
                                inputRef={regDateRef}
                                sx={{m: 1, ml: 6, mt: 2, width: 195}}
                                InputLabelProps={{
                                    shrink: true,
                                }}
                            />
                            <TextField
                                id="outlined-multiline-flexible"
                                label="학교"
                                multiline
                                maxRows={1}
                                inputRef={schoolRef}
                                sx={{m: 1, mt: 2, ml: 6}}
                            />
                            <TextField
                                id="outlined-multiline-flexible"
                                label="회비"
                                multiline
                                maxRows={1}
                                inputRef={feeRef}
                                sx={{m: 1, mt: 2, ml: 6}}
                            />
                            <TextField
                                id="outlined-multiline-flexible"
                                label="부모님 연락처"
                                multiline
                                inputRef={parentPhoneRef}
                                maxRows={1}
                                sx={{m: 1, mt: 2, ml: 6}}
                                defaultValue="010"
                            />
                            <TextField
                                id="outlined-textarea"
                                label="비고"
                                inputRef={noteRef}
                                multiline
                                maxRows={3}
                                sx={{m: 1, ml: 6, mb: 3, mt: 2}}
                            />
                            <Select
                                labelId="demo-select-small"
                                id="demo-select-small"
                                value={age}
                                label="수강 여부"
                                onChange={handleChange}
                                ref={currYnRef}
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
                    debugger
                    ons.hidePopup();
                    if (popupOption.callbackFunc) popupOption.callbackFunc();
                }}>
                {popupOption.confirm}
            </Button>
            </DialogActions>
        </BootstrapDialog>
    );
}

export default EditCustomers;