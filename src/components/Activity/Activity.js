import React from 'react';

const Activity = ({activity,activity:{name,time,picture}}) => {
    console.log(activity)
    return (
        <div>
            <div className="card card-compact bg-base-100 shadow-xl w-full h-full">
                <figure><img className='w-full h-fit' src={picture} alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title">Shoes!</h2>
                    <p>If a dog chews shoes whose shoes does he choose?</p>
                    <div className="card-actions justify-end">
                    <button className="btn btn-primary">Buy Now</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Activity;