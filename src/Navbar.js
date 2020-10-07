import React, {useState} from 'react'; 
import './Navbar.css';
import {Link} from 'react-router-dom';
import LandingPage from './LandingPage'; 
function Navbar() {
    return (<div>
           <h1> Simple Planner </h1>
            
            <ul>
                <Link to='/SchoolList'>
                    <li >
                        School Tasks
                    </li>
                </Link>
                <Link to='/WorkList'>
                    <li>
                        Work Tasks
                    </li>
                </Link>

                <Link to='/LifeList'>
                    <li>
                        Life Tasks
                    </li>
                </Link>

            </ul>
        </div>
    ); 
    
}
export default Navbar ; 