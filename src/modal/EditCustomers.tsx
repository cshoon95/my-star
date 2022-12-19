import * as React from 'react';
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
import ons from '../core/Ons';

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

const EditCustomers = (props: any) => {
    ons.log(props);

    return (
        <div>
            <BootstrapDialog
                aria-labelledby="customized-dialog-title"
                open={true}
            >
                <BootstrapDialogTitle id="customized-dialog-title">
                회원 수정
                </BootstrapDialogTitle>
                <DialogContent dividers>
                    <Typography gutterBottom>
                        <TextField sx={{ margin: 3, marginLeft: '11%'}}id="outlined-basic" label="Outlined" variant="outlined" />
                        <TextField sx={{ margin: 3, marginLeft: '11%'}}id="outlined-basic" label="Outlined" variant="outlined" />
                        <TextField sx={{ margin: 3, marginLeft: '11%'}}id="outlined-basic" label="Outlined" variant="outlined" />
                        <TextField sx={{ margin: 3, marginLeft: '11%'}}id="outlined-basic" label="Outlined" variant="outlined" />
                        <TextField sx={{ margin: 3, marginLeft: '11%'}}id="outlined-basic" label="Outlined" variant="outlined" />
                        <TextField sx={{ margin: 3, marginLeft: '11%'}}id="outlined-basic" label="Outlined" variant="outlined" />
                        <TextField sx={{ margin: 3, marginLeft: '11%'}}id="outlined-basic" label="Outlined" variant="outlined" />
                        <TextField sx={{ margin: 3, marginLeft: '11%'}}id="outlined-basic" label="Outlined" variant="outlined" />
                        <TextField
                            id="outlined-multiline-static"
                            label="Multiline"
                            multiline
                            rows={4}
                            defaultValue="Default Value"
                        />

                    </Typography>
                    <Typography gutterBottom>
                        Praesent commodo cursus magna, vel scelerisque nisl consectetur et.
                        Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor.
                    </Typography>
                    <Typography gutterBottom>
                        Aenean lacinia bibendum nulla sed consectetur. Praesent commodo cursus
                        magna, vel scelerisque nisl consectetur et. Donec sed odio dui. Donec
                        ullamcorper nulla non metus auctor fringilla.
                    </Typography>
                    </DialogContent>
                <DialogActions>
                <Button autoFocus>
                    확인
                </Button>
                </DialogActions>
            </BootstrapDialog>
        </div>
    );
}

export default EditCustomers;