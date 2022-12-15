import BoardTransfer from "../../comp/module/BoardTransfer";
import InitPage from "../../comp/module/InitPage";
import Title from '../../comp/module/Title';

const Setting = () => {
    return(
        <InitPage>
            <div>
                <Title>목록 선택</Title>
                <BoardTransfer/>
            </div>
            <div>
                <Title>화면 모드</Title>
            </div>
        </InitPage>
    )
}

export default Setting;