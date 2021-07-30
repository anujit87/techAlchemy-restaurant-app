import React from "react";
import { Link } from "react-router-dom";

/**
 * @author
 * @function MenuItem
 **/

const MenuItem = (props) => {
    const { name, to, isActive, icon } = props;

    return (
        <li onClick={props.onClick}>
            <Link
                exact
                to={to}
                className={isActive ? `menu-item-active` : `menu-item`}
            >
                <div style={{ display: 'flex', alignItems: 'center' }}>
                    {icon}
                    <p style={{ marginLeft: '8px' }}>{name}</p>
                </div>
            </Link>
        </li>
    );
};

export default MenuItem;