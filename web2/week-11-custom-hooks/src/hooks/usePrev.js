import { useEffect, useRef } from "react";

export const usePrev = (value) => {

    const ref = useRef(); // used to create a reference to a value or DOM element that persists across renders but not trigger a re-render when the value changes. 

    console.log("re-render happened with new value: " + value);
    useEffect(() => {
        console.log("updated the ref to be: " + value);
        ref.current = value; // here, re-rendering won't occur. 
    }, [value]);
    console.log("returned: " + ref.current);
    return ref.current;
}
// It returns first, effect gets called later. 
