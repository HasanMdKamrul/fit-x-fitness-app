import React, { useEffect, useState } from 'react';
import Activity from '../Activity/Activity';
import ActivityMonitor from '../ActivityMonitor/ActivityMonitor';

const Home = () => {

    const [activities,setActivities] = useState([]);
    const [duration,setDuration] = useState([]);


    // ** data loading

    useEffect(()=>{
        // ** data loader
        const loadActivity = async ()=>{
            try {
                const response = await fetch(`activity.json`);
                response.ok ? console.log('Successful') : console.log('failed');
                const data = await response.json();
                setActivities(data)
            } catch (error) {
                console.log(error)
            }
        };

        loadActivity()
    },[]);

    const handleAddToList = (activity)=>{
        
        const {time} = activity;

        const newDurations = [...duration,time];

        setDuration(newDurations);
    }



    return (
        <div>
            <div className='lg:grid lg:grid-cols-12 grid grid-cols-1 mx-5'>
                <div className='lg:col-start-1 lg:col-end-9 col-start-1 col-end-12 lg:border-r-4 p-5'>
                    <div className='lg:grid lg:grid-cols-3 lg:gap-2 grid grid-cols-1 lg:mx-12 lg:p-0 px-5 mt-12'>
                        {
                            activities.map(activity => <Activity handleAddToList={handleAddToList}  key={activity._id} activity={activity}/>)
                        }
                    </div>
                </div>
                <div className='lg:col-start-10 lg:col-end-12 col-start-1 col-end-12 mt-5 p-5'>
                    <ActivityMonitor duration={duration}></ActivityMonitor>
                </div>
            </div>
        </div>
     
    );
};

export default Home;