import { faDumbbell } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useEffect, useState } from 'react';
import logo from '../../images/fitx.png';
import Activity from '../Activity/Activity';

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
            <div className='lg:grid lg:grid-cols-12 container mx-auto'>
               <div className='flex text-5xl items-center container mx-12 my-5'>
                    <img src={logo} alt="" />
                    <FontAwesomeIcon icon={faDumbbell} />
               </div>
                <div className='col-start-1 col-end-8 container'>
                    <div className='lg:grid lg:grid-cols-3 lg:gap-5 grid grid-cols-1 lg:mx-12 lg:p-0 px-5'>
                        {
                            activities.map(activity => <Activity key={activity._id} activity={activity}/>)
                        }
                    </div>
                </div>
                <div className='col-start-9 col-end-12'>
                    <h1>Personal Info</h1>
                </div>
            </div>
        </div>
     
    );
};

export default Home;