import React, { useState } from 'react';
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import logo from '../../assets/logo.png';
import Home from '../../views/Home/Home';
import MenuItem from './MenuItem';
import * as Icon from 'react-feather';

export const sidebarItems = [
    {
        name: 'Home',
        to: '/',
        exact: true,
        component: Home,
        icon: <Icon.Home size={20} />
    },
    {
        name: 'Orders',
        to: '/orders',
        component: () => (<p>Orders</p>),
        icon: <Icon.FileText size={20} />
    },
    {
        name: 'Notification',
        to: '/notifications',
        component: () => (<p>Notifications</p>),
        icon: <Icon.Mail size={20} />
    },
    {
        name: 'Help & Support',
        to: '/support',
        component: () => (<p>Support</p>),
        icon: <Icon.HelpCircle size={20} />
    },
    {
        name: 'Settings',
        to: '/settings',
        component: () => (<p>Settings</p>),
        icon: <Icon.Settings size={20} />
    }
];

const Sidebar = () => {
    const location = useLocation();
    const [activeTab, setActiveTab] = useState('/');

    useEffect(() => {
        const { pathname } = location;
        if (pathname.includes('/orders')) {
            setActiveTab('/orders');
        } else if (pathname.includes('/notifications')) {
            setActiveTab('/notifications');
        } else if (pathname.includes('/support')) {
            setActiveTab('/support');
        } else if (pathname.includes('/settings')) {
            setActiveTab('/settings');
        } else {
            setActiveTab('/')
        }
    }, [location, setActiveTab]);

    return (
        <div className="side-bar">
            <div className="top-section">
                <div className="logo">
                    <img src={logo} alt="app-logo" />
                </div>
                <div className="app-name">
                    Pomo & co
                </div>
            </div>

            <div className="menu-items">
                <ul style={{ paddingLeft: 0 }}>
                    {sidebarItems.map((menuItem) => (
                        <MenuItem
                            key={menuItem.name}
                            name={menuItem.name}
                            to={menuItem.to}
                            isActive={activeTab === menuItem.to}
                            icon={menuItem.icon}
                        />
                    ))}
                </ul>
            </div>

            <div className="side-bar-footer">
                <div className="user-info">
                    <h5>Mark Clarke</h5>
                    <p>markclarke@gmail.com</p>
                </div>
            </div>
        </div>
    );
};

export default Sidebar;
