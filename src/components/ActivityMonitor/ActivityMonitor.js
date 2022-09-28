import React, { useState } from 'react';
import AddABreak from '../AddABreak/AddABreak';
import Details from '../Details/Details';
import PersonalInfo from '../PersonalInfo/PersonalInfo';

const ActivityMonitor = ({duration}) => {

    const [breakTime,setBreakTime] = useState(0);

    const handleBreak = (time)=>{
        
        setBreakTime(time);

        // ** set the break time to ls
    }

    
    return (
        <div className='h-screen'>
            {/* Personal info */}
            <PersonalInfo/>
            {/* Add A break */}
            <AddABreak handleBreak={handleBreak}/>
            {/* Excercise details */}
            <Details breakTime={breakTime} duration={duration}/>
            {/* ** Activity completed button */}
        </div>
    );
};

export default ActivityMonitor;