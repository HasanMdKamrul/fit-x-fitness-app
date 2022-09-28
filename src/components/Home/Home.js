import { faDumbbell } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import logo from '../../images/fitx.png';

const Home = () => {
    return (
        <div>
            <div className='lg:grid lg:grid-cols-12 container mx-auto'>
               <div className='flex text-5xl items-center container mx-12 my-5'>
                    <img src={logo} alt="" />
                    <FontAwesomeIcon icon={faDumbbell} />
               </div>
                <div className='col-start-1 col-end-8'>
                    <h1>Activity</h1>
                </div>
                <div className='col-start-9 col-end-12'>
                    <h1>Personal Info</h1>
                </div>
            </div>
        </div>
     
    );
};

export default Home;