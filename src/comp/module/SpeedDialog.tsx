import React from 'react';
import ons from "../../core/Ons";

// start -- MUI 
import SpeedDial from '@mui/material/SpeedDial';
import SpeedDialIcon from '@mui/material/SpeedDialIcon';
import SpeedDialAction from '@mui/material/SpeedDialAction';
import ShareIcon from '@mui/icons-material/Share';
import AddAlt1Icon from '@mui/icons-material/PersonAddAlt1';
import AddIcon from '@mui/icons-material/Add';
import DeleteIcon from '@mui/icons-material/PersonOff';
// end -- MUI

const actions = [
    { icon: <AddAlt1Icon />, name: 'Add' },
    { icon: <DeleteIcon />, name: 'Delete' },
    { icon: <ShareIcon />, name: 'Share' },
];

const SpeedDialog = () => {
    return (
        <SpeedDial
            ariaLabel="SpeedDial openIcon"
            sx={{ position: 'absolute', bottom: -500, right: 32}}
            icon={<SpeedDialIcon openIcon={<AddIcon />} />}
        >
            {actions.map((action) => (
                <SpeedDialAction
                    key={action.name}
                    icon={action.icon}
                    tooltipTitle={action.name}
                    tooltipOpen
                    onClick={(e: any) => { 
                        const label = e.currentTarget.textContent;
                        
                        switch (label) {
                            case 'Add':
                                ons.showPopup('EditCustomers');
                                return
                            case 'Delete':
                                const selectedRows = ons.getState('selectedRows');

                                if (!selectedRows || (selectedRows && selectedRows.length === 0)) {
                                    ons.alert('선택된 데이터가 없습니다.');
                                    return;
                                }

                                let selectedIDs: any = [];
                                let selectedNames: any = [];
                                
                                for (const key in selectedRows) {
                                    selectedIDs.push(selectedRows[key].id);
                                    selectedNames.push(selectedRows[key].NAME);
                                }
                                
                                ons.log('선택된 Rows: ', selectedRows);
                                const msg = selectedNames.join(', ');

                                ons.alert(msg + '의 정보를 정말 삭제하시겠어요?', {
                                    callbackFunc: () => {
                                        selectedIDs.forEach((id: number) => {
                                            ons.server.delete({
                                                url: '/customers/delete',
                                                data: { id: id },
                                                hideLoading: true,
                                                callbackFunc: () => {
                                                    ons.setCustomerList();
                                                }
                                            })
                                        })
                                    }
                                })
                                return
                            case 'Share':
                                return
                        }
                    }}
                />
            ))}
        </SpeedDial>
    );
}

export default SpeedDialog;