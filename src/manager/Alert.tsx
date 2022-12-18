import { useEffect, useRef } from 'react';
import { useSelector } from 'react-redux';
import ons from '../core/Ons';
import { StoreStateType } from '../type/Type';

// start -- MUI
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
// end -- MUI

const boxStyle = {
    position: 'absolute',
    top: '30%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 200,
    height: 150,
    bgcolor: 'background.paper',
    border: '2px solid #90CAF7',
    boxShadow: 24,
    pt: 2,
    px: 4,
    pb: 3,
};

const btnStyle = {
    position: 'absolute',
    height: 80,
    left: '70%',
};

function Alert() {
    const refBtn = useRef<HTMLButtonElement>(null);
    const { alertMessage, alertOption } = useSelector(
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
                open={['','hide'].includes(alertMessage) ? false : true}
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
                            ons.alert('');
                            alertOption.callbackFunc && alertOption.callbackFunc();
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