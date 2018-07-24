import React, {PropTypes} from 'react';
import { Link, IndexLink } from 'react-router';
import styles from './style.css';

const Sidebar = () => {
    return (
        <nav>
            <div>
                <ul>
                    <li>
                        <IndexLink to="/" activeClassName="active">Home</IndexLink>
                    </li>
                    <li>
                        <Link to="/courses" activeClassName="active">Courses</Link>
                    </li>
                    <li>
                        <Link to="/about" activeClassName="active">About</Link>
                    </li>
                </ul>
            </div>
        </nav>
    );
};

export default Sidebar;