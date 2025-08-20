import React, { useState } from 'react'

const Navbar = () => {

    const [count, setCount] = useState(0);

    function onClickHandler(){
        setCount(count + 1);
    }

    return (
        <div>
            <button onClick={onClickHandler}></button>
        </div>
    )
}

export default Navbar
