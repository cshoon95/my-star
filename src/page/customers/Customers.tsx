import Board from "../../comp/module/Board";
import InitPage from "../../comp/module/InitPage";
import SpeedDialog from "../../comp/module/SpeedDialog";
import Grid from "./Grid";

function Customers() {
    return (
        <InitPage>
            <Board/>
            <SpeedDialog/>
            <Grid/>
        </InitPage>
    )
}

export default Customers;