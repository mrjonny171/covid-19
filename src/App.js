import React from 'react';

import { Routes, Route, Link } from 'react-router-dom';
import { Layout, Typography, Space } from 'antd';

import { Navbar, Homepage, Countries, CountryDetails, News } from './components';
import './App.css';


const App = () => {
    return (
        <div className='app'>
            <div className='navbar'>
                <Navbar/>
            </div>
            <div className='main'>
                <Layout>
                    <div className='routes'>
                        <Routes>
                            <Route exact path='/' element={<Countries/>}/>

                            <Route exact path='/countries' element={<Countries/>}/>
                                    
                            <Route exact path='/countries/:countryid' element={<CountryDetails/>}/>
                                
                            <Route exact path='/news' element={<News/>}/>
                                

                        </Routes>
                    </div>
                </Layout>
            <div className='footer'>
                <Typography.Title level={5} style={{color: 'white', textAlign:'center'}}>
                    Covid-19 worldwide<br/>
                    All Rights Reserved
                </Typography.Title>
                <Space>
                    <Link to='/'>Home</Link>
                    <Link to='/countries'>Countries</Link>
                    <Link to='/news'>News</Link>
                </Space>
            </div>
            </div>
        </div>
    )
}

export default App
