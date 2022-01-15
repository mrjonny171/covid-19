import React from 'react'
import { useState, useEffect } from 'react';
import { Select, Typography, Row, Col, Avatar, Card} from 'antd';
import moment from 'moment';
import { newsOptions } from './axios/helper';
import axios from 'axios';

const {Title, Text} = Typography;

const News = () => {

    const [News, setNews] = useState([])

    useEffect(() => {
        axios.request(newsOptions('Covid-19 english news')).then( response => {
            setNews(response)
        });
      }, []);


    return (
        <Row gutter={[16,16]}>
            {News?.data?.value?.map((news,i)=>{
                return(
                <Col xs={24} sm={12} lg={8} key={i}>
                    <Card hoverable className='news-card'>
                        <a href={news.url} target="_blank" rel='noreferrer'>
                            <div className='news-image-container'>
                                <Title className='news-title' level={4}> {news.name.substring(0,60)} ... </Title>
                                <img style={{maxWidth: '200px', maxHeight: '100px' }} src={news?.image?.thumbnail?.contentUrl}></img>
                            </div>    
                                <p>
                                    {news.description.substring(0,100)} ...
                                </p>
                            <div className='provider-container'>
                                    <div>
                                        <Avatar src={news.provider[0]?.image?.thumbnail?.contentUrl} alt='news'></Avatar>
                                        <Text className='provider-name'> {news.provider[0]?.name} </Text>
                                    </div>
                                    <Text>{moment(news.datePublished).startOf('ss').fromNow()}</Text>
                            </div>
                        </a>    
                    </Card>
                </Col>
            )})}
        </Row>
    )
}

export default News
