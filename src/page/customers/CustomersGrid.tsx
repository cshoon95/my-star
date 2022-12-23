import { useCallback } from "react";
import ons from "../../core/Ons";
import { StoreStateType } from '../../type/Type';
import { useSelector } from 'react-redux';
import List from "../../core/List";
import { DataGrid, GridCellModesModel } from '@mui/x-data-grid';

const Grid = () => {
    const { customers } = useSelector((state: StoreStateType) => {
        return {
            customers: state.data.customers
        };
    });

    return (
        <>
        {customers.length > 0 ?
            <DataGrid
                sx={{height: 1040}}
                rows={Object.values(customers)}
                columns={List.customersColumns}
                loading={customers.length === 0}
                pageSize={5}
                rowsPerPageOptions={[5]}
                checkboxSelection
                disableSelectionOnClick
                experimentalFeatures={{ newEditingApi: true }}
                onCellEditStop={(e: any) => {
                    const data = customers.filter((item: any) => { return (item.id) === e.id; })[0];

                    if (data[e.field] === e.value) {
                        ons.log(e.field, '의 바뀐 데이터가 일치합니다.');
                        ons.log(e.value);
                        return;
                    }

                    ons.server.post({
                        url: '/customers/update',
                        data: {
                            key: e.field,
                            value: e.value,
                            id: e.id
                        },
                        callbackFunc: (res: any) => {
                            ons.log('post: ', res)
                        }
                    })
                }}
            />
        : ''
        }
        </>
    );
}

export default Grid;
