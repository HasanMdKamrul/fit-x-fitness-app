import React from 'react';

const BreakButtons = ({handleBreak,time}) => {
    return (
        <div>
            <button  onClick={()=>handleBreak(time)}  className="btn btn-lg btn-active">{time}s</button>
        </div>
    );
};

export default BreakButtons;