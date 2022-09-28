import React from 'react';
import BreakButtons from '../BreakButtons/BreakButtons';

const AddABreak = ({breakTimes,handleBreak}) => {
    return (
        <div className='flex justify-center mt-5'>
           <div className='border px-8 py-6 shadow-xl rounded-2xl'>
                <h1 className='text-3xl mb-2'>Add A Break</h1>
                <div className="btn-group">
                    {
                        breakTimes.map((time,index)=> <BreakButtons key={index} handleBreak={handleBreak} time={time}/>)
                    }
                </div>
            </div>
        </div>
    );
};

export default AddABreak;