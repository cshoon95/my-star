import InitPage from "../../comp/module/InitPage";
import { useEffect } from "react";
import ons from "../../core/Ons";
import axios from "axios";

const Attendance = () => {
    ons.server.post({
        url: 'environment/update',
        callbackFunc: ((res: any) => {
            console.log("detail =>", res.data);
        })
    })
    
    return (
        <InitPage>
            <p>sdfds</p>
        </InitPage>
    )
}

export default Attendance