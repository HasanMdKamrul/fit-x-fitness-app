import React from 'react';
import AddABreak from '../AddABreak/AddABreak';
import Details from '../Details/Details';
import PersonalInfo from '../PersonalInfo/PersonalInfo';

const ActivityMonitor = ({duration}) => {
    return (
        <div className='h-screen'>
            {/* Personal info */}
            <PersonalInfo/>
            {/* Add A break */}
            <AddABreak/>
            {/* Excercise details */}
            <Details duration={duration}/>
            {/* ** Activity completed button */}
        </div>
    );
};

export default ActivityMonitor;