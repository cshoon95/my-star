import Board from "../../comp/module/Board";
import InitPage from "../../comp/module/InitPage";
import SpeedDialog from "../../comp/module/SpeedDialog";
import CustomersGrid from "./CustomersGrid";

function Customers() {
    return (
        <InitPage>
            <CustomersGrid/>
            <SpeedDialog/>
        </InitPage>
    )
}

export default Customers;