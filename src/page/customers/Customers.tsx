import Board from "../../comp/module/Board";
import InitPage from "../../comp/module/InitPage";
import SpeedDialog from "../../comp/module/SpeedDialog";

function Customers() {
    return (
        <InitPage>
            <Board/>
            <SpeedDialog/>
        </InitPage>
    )
}

export default Customers;