import React from 'react';

const AddABreak = ({handleBreak}) => {
    return (
        <div className='flex justify-center mt-5'>
           <div className='border px-8 py-6 shadow-xl rounded-2xl'>
                <h1 className='text-3xl mb-2'>Add A Break</h1>
                <div className="btn-group">
                    <button  onClick={()=>handleBreak(10)}  className="btn btn-lg">10s</button>
                    <button  onClick={()=>handleBreak(20)}  className="btn btn-lg btn-active">20s</button>
                    <button  onClick={()=>handleBreak(30)} className="btn btn-lg">30s</button>
                    <button  onClick={()=>handleBreak(40)}  className="btn btn-lg">40s</button>
                </div>
            </div>
        </div>
    );
};

export default AddABreak;