import React from 'react';

const Details = () => {
    return (
     <div>
           <div className='flex justify-center mt-3'>
            <div>
                <h1 className='text-center font-semibold text-3xl'>Excercise Details</h1>
                <div className="stats shadow text-center mt-2">
                    <div className="stat">
                        <div className="stat-title">Excercise Time</div>
                        <div className="stat-value">89,400 s</div>
                    </div>
                    <div className="stat">
                        <div className="stat-title">Break Time</div>
                        <div className="stat-value">89,400 s</div>
                    </div>
                    
                </div>
                <button className="btn mt-3 flex justify-center items-center w-full">Activity Completed</button>     
            </div>
        </div>
         
     </div>
    );
};

export default Details;