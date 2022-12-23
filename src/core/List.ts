import { GridColumns } from "@mui/x-data-grid";

class List {
    headerTitle: any = {
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
        { field: 'REGISTER_ID',     headerName: 'REGISTER_ID',      width: 240, hide: true,     editable: false },
        { field: 'REGISTER_DATE',   headerName: 'REGISTER_DATE',    width: 240, hide: true,     editable: false },
        { field: 'UPDATER_ID',      headerName: 'UPDATER_ID',       width: 240, hide: true,     editable: false },
        { field: 'SHOW_YN',         headerName: 'SHOW_YN',          width: 240, hide: false,    editable: true  },
        { field: 'PARENTPHONE',     headerName: '부모님 연락처',    width: 120, hide: false,    editable: true  },
        { field: 'BIRTH',           headerName: '생년월일',         width: 120, hide: false,    editable: true  },
        { field: 'CURRYN',          headerName: '재직여부',         width: 60,  hide: false,    editable: true  }
    ]
}

export default new List();