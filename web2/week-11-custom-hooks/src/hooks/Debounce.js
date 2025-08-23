import { useEffect, useRef } from "react";

const useDebounce = (value, delay) => {
    const [debouncedValue, setDebouncedValue] = userState(value);

    useEffect(()=>{
        const handler = setTimeout(()=>{
            setDebouncedValue(value);
        }, delay);

        return () => {
            clearTimeout(handler);
        };
        
    }, [value, delay]);

    return debouncedValue;
}


