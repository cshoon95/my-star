import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { StoreStateType } from '../../type/Type';
import Title from './Title';
import ons from '../../core/Ons';

// start -- MUI 
import Link from '@mui/material/Link';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
// end -- MUI

type customersType = {
  ID: number;
  NAME: string;
  NOTE?: string;
  DATE: string;
  FEE: number;
  SCHOOL: string;
  TEL: string;
}

const Board = () => {
  const [rows, setRows] = useState([]);

  const { pageName } = useSelector((state: StoreStateType) => {
      return {
          pageName: state.view.pageName
      }
  });

  const preventDefault = (event: React.MouseEvent) => {
    event.preventDefault();
  }

  useEffect(() => {
    ons.server.run({
      method:'get', 
      url:'customers/list'
    }, (response: any) => {
      setRows(response);
    });
  }, [])

  return (
    <>
      <Title>타이틀</Title>
      <Table size="small">
        <TableHead>
          <TableRow>
            <TableCell>No</TableCell>
            <TableCell>이름</TableCell>
            <TableCell>학교</TableCell>
            <TableCell>휴대폰 번호</TableCell>
            <TableCell>등록 날짜</TableCell>
            <TableCell>회비</TableCell>
            <TableCell>비고</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {
            rows.map((row: customersType, idx: number) => (
              <TableRow key={row.ID + '-' + idx}>
                <TableCell>{idx}</TableCell>
                <TableCell>{row.NAME}</TableCell>
                <TableCell>{row.SCHOOL}</TableCell>
                <TableCell>{row.TEL}</TableCell>
                <TableCell>{row.DATE}</TableCell>
                <TableCell align="right">{row.FEE}</TableCell>
                <TableCell>{row.NOTE}</TableCell>
              </TableRow>
            ))
          }
        </TableBody>
      </Table>
      {pageName === 'Dashboard' ? <Link color="primary" href="#" onClick={preventDefault} sx={{ mt: 3 }}>
        더보기
      </Link> : ''}
      
    </>
  );
}

export default Board;