import React from 'react';
import './Sidebar.css'
const Sidebar = () => {
    return (
        <div className='sidebar'>
            <h1 className='sidebar-title'>به داشبورد خود خوش آمدید</h1>
            <ul className="sibar-links">
                <li><a href="#">صفحه اصلی</a></li>
                <li><a href="#">محصولات</a></li>
                <li><a href="#">کامنت ها</a></li>
                <li><a href="#">سفارشات</a></li>
                <li><a href="#">تخفیف ها</a></li>
            </ul>
        </div>
    );
};

export default Sidebar;