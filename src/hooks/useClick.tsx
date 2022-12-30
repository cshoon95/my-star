import { useNavigate } from "react-router-dom";

const useRouter = () => {
    const navigate = useNavigate();
    
    const navigateToPurchase = () => {
        // navigate("/" + page);
    };

    return navigateToPurchase;
}

export default useRouter;