import React, {Component} from 'react';
import style from '../admin.css'

export default class SideBar extends Component {
    render(){
        return (
            <aside className="main-sidebar">
                <section className="sidebar">
                    <div className="user-panel">
                
                         
                    </div>
                    <form action="#" method="get" className="sidebar-form">
                        <div className="input-group">
                        <h1> Welcome</h1>
                        <span className="input-group-btn">
                            </span>
                        </div>
                    </form>
                    <ul className="sidebar-menu" data-widget="tree">
                        <li className="header">MAIN NAVIGATION</li>
                        <li className="treeview">
                            <a href="/medications">
                                <i className="fa fa-files-o"></i>
                                <span>Medicine data</span>
                            </a>
                        </li>
                        <li>
                        <a href="/appointments">
                            <i className="fa fa-th"></i> <span>Appointment</span>
                        </a>
                        </li>
                        <li className="treeview">
                        <a href="/medic-record"><span>Medic Record</span>
                    
                        </a>
                      
                        <a href="/patientList">
                            <i className="fa fa-calendar"></i> <span>Patient List</span>
                            </a>
                        </li>
                        <li>
                        <a href="/user management">
                            <i className="fa fa-envelope"></i> <span>user management</span>
                            
                        </a>
                        <a href="/">
                            <i className="fa fa-envelope"></i> <span>logout</span>
                            
                        </a>
                        </li>
                    </ul>
                </section>
            </aside> 
        )
    }
}