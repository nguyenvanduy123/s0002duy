import React from 'react';
import './mainlayout.module.scss';
function MainLayout(props)
{
    
    return (
        <div className="MainLayout">
            {props.children}
        </div>
    )
}
export default MainLayout;