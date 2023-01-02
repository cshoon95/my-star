import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { StoreStateType } from '../../type/Type';
import Title from './Title';
import ons from '../../core/Ons';
import utils from '../../core/Utils';
import { useNavigate } from "react-router-dom";

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
  SEX: string;
  BIRTH: string;
  PHONE: string;
  DDAY: string;
  PARENTPHONE: string;
  CURRYN: string;
}

const Board = () => {
  const navigate = useNavigate();
  const [rows, setRows] = useState([]);

  const { pageName } = useSelector((state: StoreStateType) => {
      return {
          pageName: state.view.pageName
      }
  });

  const onClick = () => {
    navigate('/customers');
    ons.route('customers')
  }

  useEffect(() => {
    ons.setCustomerList((response: any) => {
      setRows(response.data);
    });
  }, [])

  return (
    <>
      <Table size="small" onClick={onClick}>
        <TableHead>
          <TableRow>
            <TableCell>No</TableCell>
            <TableCell>이름</TableCell>
            <TableCell>성별</TableCell>
            <TableCell>휴대폰</TableCell>
            <TableCell>생년월일</TableCell>
            <TableCell>등록일</TableCell>
            <TableCell>D+DAY</TableCell>
            <TableCell>학교</TableCell>
            <TableCell>회비</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {
            rows.map((row: customersType, idx: number) => (
              <TableRow key={row.ID + '-' + idx}>
                <TableCell>{idx+1}</TableCell>
                <TableCell>{row.NAME}</TableCell>
                <TableCell>{row.SEX}</TableCell>
                <TableCell>{row.TEL}</TableCell>
                <TableCell>{row.BIRTH}</TableCell>
                <TableCell>{row.DATE}</TableCell>
                <TableCell align="right">{row.DDAY}</TableCell>
                <TableCell>{row.SCHOOL}</TableCell>
                <TableCell align="right">{row.FEE}</TableCell>
              </TableRow>
            ))
          }
        </TableBody>
      </Table>
      {pageName === 'Dashboard' ? 
        <Link color="primary" onClick={onClick} sx={{ mt: 3, textAlign: 'right' }}>
          더보기
        </Link> 
        : 
        ''}     
    </>
  );
}

export default Board;