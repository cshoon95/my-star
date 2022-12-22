import * as React from 'react';
import ons from "../../core/Ons";
import { StoreStateType } from '../../type/Type';
import { useSelector } from 'react-redux';
import Box from '@mui/material/Box';
import { DataGridPro } from '@mui/x-data-grid-pro';
import { DataGrid, GridColDef, GridValueGetterParams } from '@mui/x-data-grid';

const Grid = () => {
    const { customers } = useSelector((state: StoreStateType) => {
        return {
            customers: state.data.customers
        };
    });

    ons.log('Grid: ', customers);

    const data = {
        columns: [
            { field: 'id', headerName: 'id', width: 50, hide: true },
            { field: 'NAME', headerName: '이름', width: 70, editable: true },
            { field: 'SCHOOL', headerName: '학교', width: 70, editable: true },
            { field: 'TEL', headerName: '연락처', width: 120, editable: true },
            { field: 'DATE', headerName: '등록일', width: 120, editable: true },
            { field: 'DDAY', headerName: 'D+DAY', width: 70 },
            { field: 'NOTE', headerName: '비고', width: 180, editable: true },
            { field: 'FEE', headerName: '회비', width: 100, editable: true },
            { field: 'REGISTER_ID', headerName: 'REGISTER_ID', width: 240, hide: true },
            { field: 'REGISTER_DATE', headerName: 'REGISTER_DATE', width: 240, hide: true },
            { field: 'UPDATER_ID', headerName: 'UPDATER_ID', width: 240, hide: true },
            { field: 'SHOW_YN', headerName: 'SHOW_YN', width: 240, editable: true },
            { field: 'PARENTPHONE', headerName: '부모님 연락처', width: 120, editable: true },
            { field: 'BIRTH', headerName: '생년월일', width: 120, editable: true },
            { field: 'CURRYN', headerName: '재직여부', width: 60, editable: true },
        ],
        rows: Object.values(customers)
    }
    return (
        <Box sx={{ height: 520, width: '100%' }}>
            <DataGrid
                rows={data.rows}
                columns={data.columns}
                pageSize={10}
                checkboxSelection
                onCellEditStop={(e: any) => {
                    const field = e.field;
                    const value = e.value;
                    const data = customers.filter((item: any) => { return (item.id) === e.id; })[0];

                    if (data[field] === value) {
                        ons.log(field, '의 바뀐 데이터가 일치합니다.');
                        return;
                    }
                }}
            />
        </Box>
    );
}

export default Grid;
