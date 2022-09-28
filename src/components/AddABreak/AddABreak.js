import React from 'react';

const AddABreak = () => {
    return (
        <div className='flex justify-center mt-5'>
           <div className='border px-8 py-6 shadow-xl rounded-2xl'>
                <h1 className='text-3xl mb-2'>Add A Break</h1>
                <div className="btn-group">
                    <button className="btn btn-lg">1</button>
                    <button className="btn btn-lg btn-active">2</button>
                    <button className="btn btn-lg">3</button>
                    <button className="btn btn-lg">4</button>
                </div>
            </div>
        </div>
    );
};

export default AddABreak;