import React, {Component} from 'react';
import style from '../admin.css'

export default class Header extends Component {
    render(){
        return (
            <header className="main-header">
                <nav className="navbar navbar-static-top">
                    <a href="#" className="sidebar-toggle" data-toggle="push-menu" role="button">
                        <span className="sr-only">Toggle navigation</span>
                    </a>
                    <div className="navbar-custom-menu">
                        <ul className="nav navbar-nav">
                            <li className="dropdown messages-menu">
                                <a href="#" className="dropdown-toggle" data-toggle="dropdown">
                                    <i className="fa fa-envelope-o"></i>
                                    <span className="label label-success">4</span>
                                </a>
                             
                                  
                           
                            </li>
                        </ul>
                    </div>
                </nav>
            </header>
        )
    }
}