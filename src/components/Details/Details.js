import React from 'react';

const Details = ({breakTime,duration}) => {
    
    const totalTime = duration.reduce((previousValue,currentValue)=> previousValue + currentValue,0)

    return (
     <div>
           <div className='flex justify-center mt-3'>
            <div>
                <h1 className='text-center font-semibold text-3xl'>Excercise Details</h1>
                <div className="stats shadow text-center mt-2">
                    <div className="stat">
                        <div className="stat-title">Excercise Time</div>
                        <div className="stat-value">{totalTime}s</div>
                    </div>
                    <div className="stat">
                        <div className="stat-title">Break Time</div>
                        <div className="stat-value">{breakTime}s</div>
                    </div>
                    
                </div>
                <button className="btn mt-3 flex justify-center items-center w-full">Activity Completed</button>     
            </div>
        </div>
         
     </div>
    );
};

export default Details;