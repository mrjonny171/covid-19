import React from 'react';
import { Menu, Typography, Avatar} from 'antd';
import { Link } from 'react-router-dom';
import { HomeOutlined} from '@ant-design/icons';
import icon from '../images/world.png';
import { FaRegFlag } from "react-icons/fa";
import { BsNewspaper } from "react-icons/bs";

import './Navbar.css'

const Navbar = () => {
    return (
        <div className='nav-container'>
            <div className='logo-container'>
                <Avatar src={icon} size={70}/>
                <Typography.Title level={1} className='logo'>
                    <Link to='/'>Covid-19</Link>
                </Typography.Title>
            </div>
            <div>
                <Menu theme='dark'>
                    <Menu.Item key={2} icon={<FaRegFlag/>}>
                        <Link to='/countries'>Countries</Link>
                    </Menu.Item>
                    <Menu.Item key={3} icon={<BsNewspaper/>}>
                        <Link to='/news'>Recent News</Link>
                    </Menu.Item>
                </Menu>
            </div>
        </div>
    )
}

export default Navbar