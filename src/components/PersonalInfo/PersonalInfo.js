import React from 'react';
import avatarImage from '../../images/photo1.jpeg';

const PersonalInfo = () => {
    return (
        <div className='w-full'>
            <div className="avatar flex justify-center items-center">
                <div className="w-14 rounded-full my-2">
                    <img src={avatarImage} alt="" /> 
                </div>
                <h1 className='font-semibold text-gray-300 ml-2'>Md Kamrul Hasan</h1>
            </div>
            <div className='flex justify-center mt-2 items-center'>
                <div className="stats stats-vertical shadow ">
                    <div className="stat">
                        <div className="stat-title">Favourite Activity</div>
                        <div className="stat-value">Cycling</div>
                        <div className="stat-desc">Jan 1st - Feb 1st</div>
                    </div>
                    
                    <div className="stat">
                        <div className="stat-title">Activity Duration</div>
                        <div className="stat-value">4,200 hr</div>
                        <div className="stat-desc">↗︎ 400 (22%)</div>
                    </div>
                    
                    <div className="stat">
                        <div className="stat-title">Age</div>
                        <div className="stat-value">29 Yrs</div>
                        <div className="stat-desc">↘︎ 90 (14%)</div>
                    </div>
                    
                    <div className="stat">
                        <div className="stat-title">Height</div>
                        <div className="stat-value">6feet</div>
                        <div className="stat-desc">↘︎ 90 (14%)</div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PersonalInfo;