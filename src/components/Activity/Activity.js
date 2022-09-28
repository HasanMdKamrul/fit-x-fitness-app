import React, { useState } from 'react';

const Activity = ({handleAddToList,activity,activity:{name,time,picture}}) => {
    
    const [toggle,setToggle] = useState(false);

    return (
        <div>
            <div className="card card-compact bg-base-100 shadow-2xl w-full h-full">
                <figure><img className='w-full h-fit' src={picture} alt="" /></figure>
                <div className="card-body w-fit h-fit">
                    <h2 className="card-title text-cyan-400">{name}</h2>
                    <p>Activity Duration: {time} s</p>
                    <div className="card-actions justify-end">
                        <button onClick={()=>{
                            handleAddToList(activity);
                            setToggle(true);
                        }} className={toggle?"btn btn-secondary w-full":"btn btn-primary w-full"}>{toggle ? "Added" :"Add To List"}</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Activity;