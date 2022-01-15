import React from 'react'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { Col, Row, Typography, Select} from 'antd'
import { HistoricOptions as options } from './axios/helper'
import moment from 'moment'
import axios from 'axios'
import { Line } from 'react-chartjs-2'
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
  } from 'chart.js';

  ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
  );

const {Title: Title2, Text} = Typography;
const {Option} = Select;


function getLatestDays(days){
    const daysAgo = []
    for(var i=1; i<=days; i++) {
        daysAgo[i] = moment().subtract(i, 'days').format("YYYY-MM-DD")
    }
    return daysAgo
}

const CountryDetails = () => {
    const [timeInterval, setTimeInterval] = useState(3)
    const [Dates, setDates] = useState([])
    const [covidValues, setCovidValues] = useState([])

    const {countryid} = useParams();
    
    

    useEffect(() => {
        const CovidValues = []
        const lastDays = getLatestDays(timeInterval);
        setDates(lastDays);
        lastDays?.map((date)=>(
            axios.request(options(countryid,date)).then(response => {
                CovidValues.push(response?.data?.response[0]?.cases?.new);
                }
            )
        )
    )
    setCovidValues(CovidValues)
}, [timeInterval]);

    const data = {
        labels: Dates.reverse(),
        datasets: [{
            label: 'Number of Cases',
            data: covidValues.reverse(),
            fill: false,
            backgroundColor: '#0071bd',
            borderColor: '0071bd'
        }]
    }

    const chartOptions = {
        scales: {
          y: 
            {
              ticks: {
                beginAtZero: true,
              },
            },
        },
      };

    return (
        <>
            <Row className='chart-header'>
                <Title2 level={2} className='chart-title'> {countryid} Covid Chart</Title2>
            </Row>
            <Select defaultValue={timeInterval} placeholder="Select Time Period" style={{ width: 80 }} onChange={(value)=> setTimeInterval(value)}>
                <Option value="3">3</Option>
                <Option value="5">5</Option>
                <Option value="7">7</Option>
                <Option value="10">10</Option>
            </Select>
            <Line data={data} options={chartOptions}/>

        </>
    )
}

export default CountryDetails
