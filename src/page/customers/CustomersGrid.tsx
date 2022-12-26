import { useState, useCallback } from "react";
import ons from "../../core/Ons";
import utils from "../../core/Utils";
import { StoreStateType } from '../../type/Type';
import { useSelector } from 'react-redux';
import List from "../../core/List";
import { DataGrid, GridCellModesModel, GridCellModes, GridCellParams, GridRowsProp } from '@mui/x-data-grid';

interface TitleProps {
    children?: any
}
const Grid = (props: TitleProps) => {
    const { customers } = useSelector((state: StoreStateType) => {
        return { customers: state.data.customers };
    });
    const rows: GridRowsProp = Object.values(customers);

    const handleDeleteRow = () => {
        // setRows((prevRows) => {
        // const rowToDeleteIndex = randomInt(0, prevRows.length - 1);
        // return [
        //     ...rows.slice(0, rowToDeleteIndex),
        //     ...rows.slice(rowToDeleteIndex + 1),
        // ];
        // });
    };
    
    return (
        <>
         <DataGrid 
            // autoHeight={true}
            autoPageSize={true}
            sx={{height: 740}}
            rows={rows}
            columns={List.customersColumns}
            experimentalFeatures={{ newEditingApi: true }}
            checkboxSelection
            onCellEditStop={(prev: any, curr: any) => {
                const data = customers.filter((item: any) => { return (item.id) === prev.id; })[0];

                if (!curr.target) {
                    ons.alert('값을 입력해 주세요', {
                        callbackFunc: () => {
                            ons.log(prev.id + '의' + prev.field + '값 체크');
                        }
                    })
                }
                if (data[prev.field] === curr.target.value) {
                    ons.log(prev.field, '의 바뀐 데이터가 일치합니다.');
                    ons.log(prev.value);
                    return;
                } 

                ons.server.put({
                    url: '/customers/update',
                    data: {
                        key: prev.field,
                        value: curr.target.value,
                        id: prev.id
                    },
                    hideLoading: true,
                    callbackFunc: (res: any) => {
                        ons.log('post: ', res);
                        ons.server.get({
                            url: 'customers/list',
                            hideLoading: true,
                            callbackFunc: (response: any) => {
                                const setCustomers = response.data.map((item: any) => {
                                    item.TEL = (item.TEL && utils.replaceHypenFormat(item.TEL, 'phone')) || '';
                                    item.DDAY = (item.DATE && utils.daysBetween(item.DATE)) + '일' || '0일';
                                    item.DATE = (item.DATE && utils.replaceHypenFormat(item.DATE, 'date')) || '';
                                    item.FEE = (item.FEE && utils.replaceUnitMoney(item.FEE)) || '';
                                    item.FARENTPHONE = (item.FARENTPHONE && utils.replaceHypenFormat(item.FARENTPHONE, 'phone')) || '';
                                    item.BIRTH = (item.BIRTH && utils.replaceHypenFormat(item.BIRTH, 'date')) || '';
                            
                                    return item;
                                })
                                ons.setState('customers', setCustomers);
                        }});
                    }
                })
            }}
        />
        </>
    );
}

export default Grid;
