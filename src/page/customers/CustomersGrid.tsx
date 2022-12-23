import { useState, useCallback } from "react";
import ons from "../../core/Ons";
import utils from "../../core/Utils";
import { StoreStateType } from '../../type/Type';
import { useSelector } from 'react-redux';
import List from "../../core/List";
import { DataGrid, GridCellModesModel, GridCellModes, GridCellParams, GridRowsProp } from '@mui/x-data-grid';

const Grid = () => {
    const { customers } = useSelector((state: StoreStateType) => {
        return {
            customers: state.data.customers
        };
    });
    const rows: GridRowsProp = Object.values(customers);
    return (
        <>
         <DataGrid
                sx={{height: 1040}}
                rows={rows}
                columns={List.customersColumns}
                checkboxSelection
                experimentalFeatures={{ newEditingApi: true }}
                onCellEditStop={(e) => {
                    const data = customers.filter((item: any) => { return (item.id) === e.id; })[0];

                    console.log(data['TEL']);
                    if (data[e.field] === e.value) {
                        ons.log(e.field, '의 바뀐 데이터가 일치합니다.');
                        ons.log(e.value);
                        return;
                    } 

                    ons.server.put({
                        url: '/customers/update',
                        data: {
                            key: e.field,
                            value: e.value,
                            id: e.id
                        },
                        callbackFunc: (res: any) => {
                            ons.log('post: ', res);
                            ons.server.get({
                                url: 'customers/list',
                                callbackFunc: (response: any) => {
                                ons.setState('customers', response.data);
                            }});
                        }
                    })
                }}
            />
        </>
    );
}

export default Grid;
