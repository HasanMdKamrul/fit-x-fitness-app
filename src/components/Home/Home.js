import React, { useEffect, useState } from 'react';
import Activity from '../Activity/Activity';
import ActivityMonitor from '../ActivityMonitor/ActivityMonitor';

const Home = () => {

    const [activities,setActivities] = useState([]);


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
    },[])



    return (
        <div>
            <div className='lg:grid lg:grid-cols-12 grid grid-cols-1 mx-5'>
                <div className='lg:col-start-1 lg:col-end-8 col-start-1 col-end-12'>
                    <div className='lg:grid lg:grid-cols-3 lg:gap-2 grid grid-cols-1 lg:mx-12 lg:p-0 px-5'>
                        {
                            activities.map(activity => <Activity key={activity._id} activity={activity}/>)
                        }
                    </div>
                </div>
                <div className='lg:col-start-8 lg:col-end-12 col-start-1 col-end-12 mt-5'>
                    <ActivityMonitor/>
                </div>
            </div>
        </div>
     
    );
};

export default Home;