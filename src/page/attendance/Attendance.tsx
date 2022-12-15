import InitPage from "../../comp/module/InitPage";
import { useEffect } from "react";
import ons from "../../core/Ons";

const Attendance = () => {
    
    useEffect(() => {
        ons.server.get({
        url: 'environment/info/:id',
        data: {
            ID: 1
        }
        }, (response: any) => {
            ons.log(response);
        })
    })
    
    useEffect(() => {
        
    })

    return (
        <InitPage>
            <p>sdfds</p>
        </InitPage>
    )
}

export default Attendance