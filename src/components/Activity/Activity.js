import React from 'react';

const Activity = ({activity,activity:{name,time,picture}}) => {
    console.log(activity)
    return (
        <div>
            <div className="card card-compact bg-base-100 shadow-2xl w-full h-full">
                <figure><img className='w-full h-fit' src={picture} alt="" /></figure>
                <div className="card-body w-fit h-fit">
                    <h2 className="card-title text-cyan-400">{name}</h2>
                    <p>Activity Duration: {time} s</p>
                    <div className="card-actions justify-end">
                    <button className="btn btn-primary">Buy Now</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Activity;