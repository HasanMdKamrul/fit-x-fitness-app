import React, { useEffect, useState } from 'react';
import AddABreak from '../AddABreak/AddABreak';
import Details from '../Details/Details';
import PersonalInfo from '../PersonalInfo/PersonalInfo';

const ActivityMonitor = ({duration}) => {

    const [breakTime,setBreakTime] = useState(0);


    const breakTimes = [10,20,30,40];

    const handleBreak = (time)=>{
        
        setBreakTime(time);

        // ** set the break time to ls
        localStorage.setItem('breaktime',JSON.stringify(time));
    };

    useEffect(()=>{
        // ** get data from ls
        const getTime = JSON.parse(localStorage.getItem('breaktime'));
        setBreakTime(getTime)
    },[breakTime])

    
    return (
        <div className='flex justify-center items-center flex-col w-full'>
            {/* Personal info */}
            <PersonalInfo/>
            {/* Add A break */}
            <AddABreak breakTimes={breakTimes} handleBreak={handleBreak}/>
            {/* Excercise details */}
            <Details breakTime={breakTime} duration={duration}/>
            {/* ** Activity completed button */}
        </div>
    );
};

export default ActivityMonitor;