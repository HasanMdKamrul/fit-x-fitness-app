import React from 'react';
import toast from 'react-hot-toast';

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
                        <div className="stat-value">{breakTime ? breakTime : 0}s</div>
                    </div>
                    
                </div>
                <button onClick={()=> toast.success('Activity Successfully Completed!')} className="btn mt-3 flex justify-center items-center w-full">Activity Completed</button>     
            </div>
        </div>
         
     </div>
    );
};

export default Details;