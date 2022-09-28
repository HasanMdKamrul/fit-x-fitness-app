import React from 'react';

const AddABreak = () => {
    return (
        <div className='flex justify-center mt-5'>
           <div className='border px-8 py-6 shadow-xl rounded-2xl'>
                <h1 className='text-3xl mb-2'>Add A Break</h1>
                <div className="btn-group">
                    <input type="radio" name="options" data-title="1" className="btn" />
                    <input type="radio" name="options" data-title="2" className="btn" checked />
                    <input type="radio" name="options" data-title="3" className="btn" />
                    <input type="radio" name="options" data-title="4" className="btn" />
                </div>
            </div>
        </div>
    );
};

export default AddABreak;