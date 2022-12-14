import { useSelector } from 'react-redux';
import ons from '../core/Ons';
import { StoreStateType } from '../type/Type';
import EditCustomers from "../modal/EditCustomers"
import AddCalendar from "../modal/AddCalendar"

// start -- MUI
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
// end -- MUI

const boxStyle = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 200,
    height: 150,
    boxShadow: 24,
    pt: 2,
    px: 4,
    pb: 3,
};

const Popup = () => { 
    const { popupName } = useSelector((state: StoreStateType) => {
        return {
            popupName: state.view.popupName
        };
    });

    const loadPopup = () => { 
        switch (popupName) {
            case 'EditCustomers':   return <EditCustomers/>;
            case 'AddCalendar':     return <AddCalendar/>;
            default:                return;
        }
    }

    return (
        <div>
            <Modal
                open={['','hide'].includes(popupName) ? false : true}
                aria-labelledby="parent-modal-title"
                aria-describedby="parent-modal-description"
            >
                <Box sx={{ ...boxStyle, width: 300 }}>
                   {loadPopup()}
                </Box>
            </Modal>
        </div>
    );
}

export default Popup;