import React from 'react';
import AddABreak from '../AddABreak/AddABreak';
import PersonalInfo from '../PersonalInfo/PersonalInfo';

const ActivityMonitor = () => {
    return (
        <div className='h-screen'>
            {/* Personal info */}
            <PersonalInfo/>
            {/* Add A break */}
            <AddABreak/>
            {/* Excercise details */}
            {/* ** Activity completed button */}
        </div>
    );
};

export default ActivityMonitor;