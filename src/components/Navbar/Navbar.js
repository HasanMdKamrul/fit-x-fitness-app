import { faDumbbell } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

const Navbar = () => {
    return (
        <div>
            <div className="navbar bg-base-100">
                <a href='/nav' className="btn btn-ghost normal-case text-xl" alt="">
                   {/* <img src={logo} className="w-20" alt="" /> */}
                   <h1>FitX-Fitness</h1>
                   <FontAwesomeIcon icon={faDumbbell} />
                </a>
            </div>
        </div>
    );
};

export default Navbar;