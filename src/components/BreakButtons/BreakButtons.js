import React, { useState } from 'react';

const BreakButtons = ({handleBreak,time}) => {

    const [toggle,setToggle] = useState(false)

    return (
        <div>
            <button  onClick={()=>{
                handleBreak(time);
                setToggle((previousValue)=> !previousValue);
            }}  className={toggle ? "btn btn-lg btn-active" : "btn btn-lg"}>{time}m</button>
        </div>
    );
};

export default BreakButtons;