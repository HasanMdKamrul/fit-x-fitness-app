import { faDumbbell } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import logo from '../../images/fitx.png';

const Navbar = () => {
    return (
        <div>
            <div className="navbar bg-base-100">
                <a href='/nav' className="btn btn-ghost normal-case text-xl" alt="">
                   <img src={logo} className="w-20" alt="" />
                   <FontAwesomeIcon icon={faDumbbell} />
                </a>
            </div>
        </div>
    );
};

export default Navbar;