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
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import Autocomplete from '@mui/material/Autocomplete';
import Input from '@mui/material/Input';
import MenuItem from '@mui/material/MenuItem';
import InputAdornment from '@mui/material/InputAdornment';
import AccountCircle from '@mui/icons-material/AccountCircle';
import Select, { SelectChangeEvent } from '@mui/material/Select';
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
    
    const customerRef = useRef({
        birth: '',
        date: '',
        fee: '',
        note: '',
        parentPhone: '',
        school: '',
        sex: '',
        showYn: '',
        tel: '',
        name: ''
    })
    const [ isClick, setIsClick ] = useState(false);
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
    const setRef = (customer: any) => {
        if (!customer) return;
debugger
        customerRef.current = {
            birth: customer.BIRTH,
            date: customer.DATE,
            fee: customer.FEE,
            note: customer.NOTE,
            parentPhone: customer.PARENTPHONE,
            school: customer.SCHOOL,
            sex: customer.SEX,
            showYn: customer.SHOWYN,
            tel: customer.TEL,
            name: customer.NAME
        }
        setIsClick(!isClick);
    }

    return (
        <BootstrapDialog
            aria-labelledby="customized-dialog-title"
            open={true}
        >
            <BootstrapDialogTitle id="customized-dialog-title">
                회원 수정
            </BootstrapDialogTitle>
            <DialogContent dividers>
                <Box sx={{ display: 'flex', alignItems: 'flex-end', m: 3, ml: 8 }}>
                    <AccountCircle sx={{ color: 'action.active', mr: 1, my: 2  }} />
                    <Autocomplete 
                        disablePortal
                        id="combo-box-demo"
                        options={customersName}
                        sx={{ width: 410 }}
                        renderInput={(params) => <TextField {...params} label="이름" />}
                        onKeyUp={(e: any) => {
                            if (e.key === 'Enter') {
                                const name = e.target.value;
                                ons.log(name, '의 정보 ▨▨▨▨▨▨▨▨▨▨▨▨▶', info(name))
                                setRef(info(name));
                            }
                        }}
                        onChange={(e: any) => {
                            const name = e.target.textContent;
                            ons.log(name, '의 정보 ▨▨▨▨▨▨▨▨▨▨▨▨▶', info(name))
                            setRef(info(name));

                            // const arr = [
                            //     {
                                    // id: "outlined-multiline-flexible",
                                    // label: "휴대폰",
                                    // multiline: true,
                                    // inputRef: customerRef,
                                    // disabled: true,
                                    // sx: {m: 3, ml: 7},
                                    // defaultValue: 
                            //     }
                            // ]
                        }}
                    />
                </Box>
                <Box>
                    <TextField 
                        id="outlined-multiline-flexible"
                        label="휴대폰"
                        
                        inputRef={customerRef}
                        maxRows={1}
                        sx={{m: 3, ml: 7}}
                        defaultValue={customerRef.current.tel || ''}
                        disabled={true}
                        
                    />
                    <TextField
                        id="outlined-multiline-flexible"
                        label="등록일"
                        multiline
                        maxRows={1}
                        inputRef={customerRef}
                        sx={{m: 3, ml: 5}}
                        defaultValue={customerRef.current.date || ''}
                        disabled={true}
                    />
                    <TextField
                        id="outlined-multiline-flexible"
                        label="학교"
                        multiline
                        maxRows={1}
                        inputRef={customerRef}
                        sx={{m: 3, ml: 7}}
                        defaultValue={customerRef.current.school || ''}
                    />
                    <TextField
                        id="outlined-multiline-flexible"
                        label="회비"
                        multiline
                        maxRows={1}
                        inputRef={customerRef}
                        sx={{m: 3, ml: 5}}
                        defaultValue={customerRef.current.fee || ''}
                    />
                    <TextField
                        id="outlined-multiline-flexible"
                        label="생년월일"
                        multiline
                        inputRef={customerRef}
                        maxRows={1}
                        sx={{m: 3, ml: 7}}
                        defaultValue={customerRef.current.birth || ''}
                    />
                    <TextField
                        id="outlined-multiline-flexible"
                        label="부모님 연락처"
                        multiline
                        inputRef={customerRef}
                        maxRows={1}
                        sx={{m: 3, ml: 5}}
                        defaultValue={customerRef.current.parentPhone || ''}
                    />
                    <TextField
                        id="outlined-textarea"
                        label="비고"
                        inputRef={customerRef}
                        multiline
                        maxRows={3}
                        sx={{m: 3, ml: 7}}
                        defaultValue={customerRef.current.note || ''}
                    />
                    <Select
                        labelId="demo-select-small"
                        id="demo-select-small"
                        value={age}
                        label="수강 여부"
                        onChange={handleChange}
                        sx={{m: 3, ml: 5}}
                    >
                        <MenuItem value="">
                        <em>None</em>
                        </MenuItem>
                        <MenuItem value={10}>Ten</MenuItem>
                        <MenuItem value={20}>Twenty</MenuItem>
                        <MenuItem value={30}>Thirty</MenuItem>
                    </Select>
                    <TextField
                        id="outlined-multiline-flexible"
                        label="수강 여부"
                        multiline
                        maxRows={1}
                        sx={{m: 3, ml: 5}}
                    />
                </Box>
                
                </DialogContent>
            <DialogActions>
            <Button  
                onClick={() => {
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