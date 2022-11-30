import { useEffect, useRef, useState } from 'react';
import { useSelector } from 'react-redux';
import Ons from '../core/Ons';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Button from '@mui/material/Button';
import { StoreStateType } from '../type/Type';

// ㅇㅣ쁘게 디자인 하면 이뻐질듯
const boxStyle = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 200,
    height: 150,
    bgcolor: 'background.paper',
    border: '2px solid #0D6EFC',
    boxShadow: 24,
    pt: 2,
    px: 4,
    pb: 3,
};

const btnStyle = {
    position: 'absolute',
    left: '60%',
};

function Alert() {
    const refBtn = useRef<HTMLButtonElement>(null);
    let { alertMessage, alertOption } = useSelector(
        (state: StoreStateType) => {
            return {
                alertMessage: state.view.alertMessage,
                alertOption: state.view.alertOption,
            };
        },
    );

    useEffect(() => {
        setTimeout(() => {
            refBtn.current?.focus();
        }, 100);
    }, [alertMessage]);

    return (
        <div>
            <Modal
                open={alertMessage === '' ? false : true}
                aria-labelledby="parent-modal-title"
                aria-describedby="parent-modal-description"
                color={alertOption.color}
            >
                <Box sx={{ ...boxStyle, width: 300 }}>
                    <h2 id="parent-modal-title">
                        {alertOption?.title ? alertOption.title : ''}
                    </h2>
                    <p id="parent-modal-description">{alertMessage}</p>
                    <Button
                        sx={btnStyle}
                        ref={refBtn}
                        onClick={() => {
                            Ons.alert('hide');
                            if (alertOption?.callbackFunc)
                            alertOption.callbackFunc();
                        }}
                    >
                        {alertOption.confirm}
                    </Button>
                </Box>
            </Modal>
        </div>
    );
}

export default Alert;