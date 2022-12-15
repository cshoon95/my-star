import InitPage from "../../comp/module/InitPage";
import { useEffect } from "react";
import ons from "../../core/Ons";
import axios from "axios";

const Attendance = () => {

    axios
        .post("http://localhost:3001/api/environment/update", 
        { 
            num: 'ligth' 
        }) // e: 이벤트 객체, id={article.BOARD_NUM} // id를 num에 담아 /detail에게 post 방식으로 객체로 전달
        .then((res) => {
            // res를 비구조화 할당 방식을 data에 담음,데이터는 딱 하나 들어있음
            const { data } = res;
            console.log("detail =>", data);
            
        })
        .catch((e) => {
            console.error(e);
        });
    
    return (
        <InitPage>
            <p>sdfds</p>
        </InitPage>
    )
}

export default Attendance