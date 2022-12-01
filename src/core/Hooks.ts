import { useRef, useEffect } from 'react';
import { useNavigate } from "react-router-dom";

export const useClick = (onClick: Function) => {
    const element = useRef() as React.MutableRefObject<HTMLDivElement>;
    const { current } = element;

    useEffect(() => {
        current && current.addEventListener("click", onClick());
    
        return () => {
            current && current.removeEventListener("click", onClick());
        }
    }, []);

    return element;
}

export const useClickRouter = (page: string) => {
    const navigate = useNavigate();
   
    const navigateToPurchase = () => {
      navigate("/" + page);
    };

    return navigateToPurchase;
}
