import { GridColumns } from "@mui/x-data-grid";

interface HeaderTitleType {
    [key: string]: string
}
class List {
    headerTitle: HeaderTitleType = {
        Dashboard: 'Dashboard',
        Customers: '고객 정보',
        Attendance: '출석 정보',
        Reports: '보고서',
        Setting: '환경 설정'
    }
    customersColumns: GridColumns = [
        { field: 'id',              headerName: 'id',               width: 50,  hide: true,     editable: false },
        { field: 'NAME',            headerName: '이름',             width: 70,  hide: false,    editable: true  },
        { field: 'SCHOOL',          headerName: '학교',             width: 70,  hide: false,    editable: true  },
        { field: 'TEL',             headerName: '연락처',           width: 120, hide: false,    editable: true  },
        { field: 'DATE',            headerName: '등록일',           width: 120, hide: false,    editable: true  },
        { field: 'DDAY',            headerName: 'D+DAY',            width: 70,  hide: false,    editable: false },
        { field: 'NOTE',            headerName: '비고',             width: 180, hide: false,    editable: true  },
        { field: 'FEE',             headerName: '회비',             width: 100, hide: false,    editable: true  },
        { field: 'PARENTPHONE',     headerName: '부모님 연락처',    width: 120, hide: false,    editable: true  },
        { field: 'BIRTH',           headerName: '생년월일',         width: 120, hide: false,    editable: true  },
        { field: 'CURRYN',          headerName: '재직여부',         width: 60,  hide: false,    editable: true  }
    ]
    customersAdd: any = [

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