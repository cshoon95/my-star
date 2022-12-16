import InitPage from "../../comp/module/InitPage";
import { useEffect } from "react";
import ons from "../../core/Ons";
import axios from "axios";
import { useSelector } from 'react-redux';
import { StoreStateType } from '../../type/Type';


import Button from '@mui/material/Button';

const Attendance = () => {
    const { viewMode } = useSelector((state: StoreStateType) => {
        return {
            viewMode: state.view.viewMode
        }
    });

    return (
        <InitPage>
            <Button onClick={() => {
               
            }}>{viewMode} </Button>
            <p>{viewMode}</p>
        </InitPage>
    )
}

export default Attendance