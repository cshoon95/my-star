import ons from "../core/Ons";
import Utils from "../core/Utils"

import { GridColumns } from "@mui/x-data-grid";
import { TextFieldProps } from '@mui/material/TextField';

interface HeaderTitleType {
    [key: string]: string
}
class List {
    headerTitle: HeaderTitleType = {
        Dashboard: 'Dashboard',
        Customers: '회원 정보',
        Calendar: '캘린더',
        Attendance: '출석 정보',
        Reports: '보고서',
        Setting: '환경 설정'
    }
    customersColumns: GridColumns = [
        { field: 'id',              headerName: 'No',            width: 50,  hide: true,     editable: false, type: 'number' },
        { field: 'NAME',            headerName: '이름',           width: 70,  hide: false,    editable: true,  type: 'text'},
        { field: 'SEX',             headerName: '성별',           width: 70,  hide: false,    editable: true, type: 'text'  },
        { field: 'TEL',             headerName: '연락처',         width: 120, hide: false,    editable: true, type: 'text'  },
        { field: 'BIRTH',           headerName: '생년월일',        width: 120, hide: false,    editable: true, type: 'text'  },
        { field: 'DATE',            headerName: '등록일',          width: 120, hide: false,    editable: true, type: 'text'  },
        { field: 'DDAY',            headerName: 'D+DAY',          width: 70,  hide: false,    editable: false, type: 'number' },
        { field: 'SCHOOL',          headerName: '학교',           width: 110,  hide: false,    editable: true, type: 'text'  },
        { field: 'FEE',             headerName: '회비',           width: 100, hide: false,    editable: true, type: 'number'  },
        { field: 'PARENTPHONE',     headerName: '부모님 연락처',    width: 120, hide: false,    editable: true, type: 'text'  },
        { field: 'CURRYN',          headerName: '재직여부',        width: 100,  hide: false,    editable: true, type: 'text'  },
        { field: 'NOTE',            headerName: '비고',           width: 180, hide: false,    editable: true, type: 'text'  }
    ]
    customersInput: any = [
        { label: '휴대폰',      type: 'tel',   maxRows: 1, sx: {m: 1, ml: 6, mt: 0}, defaultValue: '010', autoFocus: true, maxLength: 11 },
        { label: '생년월일',     type: 'date',  maxRows: 1, sx: {m: 1, ml: 6, mt: 0, width: 195},   defaultValue: '2015-05-03' },
        { label: "등록일",      type: 'date',   sx: {m: 1, ml: 6, mt: 2, width: 195}, defaultValue: Utils.sysdate(new Date(), '-') },
        { label: '학교',        type: 'text',   maxRows: 1, sx: {m: 1, mt: 2, ml: 6}, maxLength: 10   },
        { label: '회비',        type: 'text',   maxRows: 1, sx: {m: 1, mt: 2, ml: 6},   },
        { label: '부모님 연락처', type: 'text', maxRows: 1, sx: {m: 1, mt: 2, ml: 6},   defaultValue: '010', maxLength: 11 },
        { label: '비고',        type: 'text',   maxRows: 3, sx: {m: 1, ml: 6, mb: 3, mt: 2}, multiline: true },
    ]
    calendarInput: any = [
        { label: '시작일',     type: 'date',  maxRows: 1, sx: {m: 1, ml: 6, mt: 0, width: 195},   defaultValue: Utils.sysdate(new Date(), '-') },
        { label: "종료일",     type: 'date',   sx: {m: 1, ml: 3, mt: 2, width: 195}, defaultValue: Utils.sysdate(new Date(), '-') },
    ]
}

export default new List();


// <TextField
//     id="date"
//     label="등록일"
//     type="date"
//     inputRef={regDateRef}
//     sx={{m: 1, ml: 6, mt: 2, width: 195}}
//     InputLabelProps={{
//         shrink: true,
//     }}
// />