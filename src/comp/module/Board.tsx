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
}

const Board = () => {
  const navigate = useNavigate();
  const [rows, setRows] = useState([]);

  const { pageName } = useSelector((state: StoreStateType) => {
      return {
          pageName: state.view.pageName
      }
  });

  useEffect(() => {
    ons.server.get({
      url: 'customers/list',
      callbackFunc: (response: any) => {
        setRows(response.data);
    }});
  }, [])

  return (
    <>
    {pageName === 'Dashboard' ? <Title>회원 정보</Title>
    : ''
    }
      <Table size="small">
        <TableHead>
          <TableRow>
            <TableCell>No</TableCell>
            <TableCell>이름</TableCell>
            <TableCell>학교</TableCell>
            <TableCell>휴대폰 번호</TableCell>
            <TableCell>등록 날짜</TableCell>
            <TableCell>다닌지</TableCell>
            <TableCell>회비</TableCell>
            <TableCell>비고</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {
            rows.map((row: customersType, idx: number) => (
              <TableRow key={row.ID + '-' + idx}>
                <TableCell>{idx+1}</TableCell>
                <TableCell>{row.NAME}</TableCell>
                <TableCell>{row.SCHOOL}</TableCell>
                <TableCell>{utils.replaceHypenFormat(row.TEL, 'phone')}</TableCell>
                <TableCell>{utils.replaceHypenFormat(row.DATE, 'date')}</TableCell>
                <TableCell>{`D+` + utils.daysBetween(row.DATE)}</TableCell>
                <TableCell align="right">{utils.replaceUnitMoney(row.FEE)}</TableCell>
                <TableCell>{row.NOTE}</TableCell>
              </TableRow>
            ))
          }
        </TableBody>
      </Table>
      {pageName === 'Dashboard' ? 
        <Link color="primary" onClick={() => {
          navigate('/customers');
          ons.route('customers')
        }} sx={{ mt: 3 }}>
          더보기
        </Link> 
        : 
        ''}     
    </>
  );
}

export default Board;