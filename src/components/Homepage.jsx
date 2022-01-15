import React from 'react';
import millify from 'millify';
import { Typography, Row, Col, Statistic } from 'antd';
import { Link } from 'react-router-dom';

import Countries from './Countries';
import News from './News';

import { useGetCovidQuery } from '../services/covidApi';

const {Title} = Typography;

const Homepage = () => {
    const {data, isFetching} = useGetCovidQuery();

    if(isFetching)
        return "Loading...";

    const {confirmed, recovered, deaths, critical} = data[0]; 

    return (
        <>
            <Title level={2} className='heading'>Covid 19 World values</Title>
            <Row>
                <Col span={12}><Statistic title="Confirmed" value={millify(confirmed)}/></Col>
                <Col span={12}><Statistic title="Recovered" value={millify(recovered)}/></Col>
                <Col span={12}><Statistic title="Deaths" value={millify(deaths)}/></Col>
                <Col span={12}><Statistic title="Critical" value={millify(critical)}/></Col>
            </Row>
            <div className='home-heading-container'>
                <Title level={2} className='home-title'>Covid-19 Daily Numbers</Title>
                <Title level={3} className='show-more'><Link to="/countries">Show more</Link></Title>
            </div>
            <Countries/>
            <div className='home-heading-container'>
                <Title level={2} className='home-title'>Recent Covid-19 News</Title>
                <Title level={3} className='show-more'><Link to="/news">Show more</Link></Title>
            </div>
            <News/>

        </>
    )
}

export default Homepage
