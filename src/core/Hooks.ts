import { useRef, useEffect } from 'react';

export const useClick = (onClick: Function) => {
    const element = useRef() as React.MutableRefObject<HTMLDivElement>;

    useEffect(() => {
        if (element.current) {
            element.current.addEventListener("click", onClick());
        }
    
        return () => {
            if (element.current) {
                element.current.removeEventListener("click", onClick());
            }
        }
    }, []);

    return element;
}



