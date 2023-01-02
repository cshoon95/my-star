import BoardTransfer from "../../comp/module/BoardTransfer";
import InitPage from "../../comp/module/InitPage";
import Title from '../../comp/module/Title';
import Switch from "./SwitchButton";

const Setting = () => {
    return(
        <InitPage>
            <div>
                <Title>화면 모드</Title>
                <Switch/>
            </div>
        </InitPage>
    )
}

export default Setting;