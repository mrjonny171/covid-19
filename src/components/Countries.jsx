import React, {useState, useEffect} from 'react';
import { Link } from 'react-router-dom';
import {Card, Row, Col, Input} from 'antd';
import axios from 'axios';
import Flag from 'react-world-flags'

import { countriesOptions as options } from './axios/helper';
import { countryDetails } from './data';


const Countries = () => {
    const [countries, setCountries] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');
    const [originalData, setOriginalData] = useState([]);

        useEffect(() => { //Axios initial dat request
            axios.request(options).then( response => {
                setCountries(response?.data?.response);
                setOriginalData(response?.data?.response)
            });
          }, []);

          useEffect(() => { //Axios initial dat request
            const filteredData = originalData.filter((country) => country.country.toLowerCase().includes(searchTerm.toLowerCase()));
            
            console.log(filteredData);
            setCountries(filteredData);
          }, [searchTerm]);

    let counter = 0;
    return (
        <>
            <div className="search-crypto">
                <Input placeholder='Search Country' onChange={(e)=> setSearchTerm(e.target.value)}/>
            </div>
            <Row gutter={[32,32]} className='container'>
                {countries?.map((country)=>{
                    let name = country.country;
                    let title = '';
                    
                    if(name=='Africa' || name == 'Europe' || name == 'Asia' || name == 'Oceania' || name == 'All' || name == 'South-America' || name=='North-America'){
                        return;
                    }

                    let code = countryDetails.find(element=>element.name===name);
                    
                    let digitcode =  (code === undefined ? "" : code.code);


                    country.continent != null ? title = `${country.country} in ${country.continent}` : title = name;

                    return(
                    <Col key={counter++} xs={24} sm={6} lg={6} className='crypto-card'>
                        <Link to={`/countries/${country.country}`}>
                            <Card title={title} extra={<Flag className='crypto-image' code={digitcode} />} hoverable>
                                <p>Daily Cases: {country.cases.new == null ? 0 : country.cases.new}</p>
                                <p>Recovered: {country.cases.recovered == null ? 0 : country.cases.recovered}</p>
                                <p>Deaths: {country.deaths.new == null ? 0 : country.deaths.new}</p>
                                <p>Last Update: {country.time.toString().substring(0,10)}</p>
                            </Card>
                        </Link>
                    </Col>
                )})}
            </Row>    
        </>
    )
}

export default Countries
