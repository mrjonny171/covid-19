import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react'

const covidApiHeaders = {
    'x-rapidapi-host': 'covid-19-data.p.rapidapi.com',
    'x-rapidapi-key': 'a98bbe003amsh799eb4f60a9b04fp19df9djsnb70154be0920'
}

const baseUrl = 'https://covid-19-data.p.rapidapi.com';


const covidApiHeaders2 = {
    'x-rapidapi-host': 'covid-193.p.rapidapi.com',
    'x-rapidapi-key': 'a98bbe003amsh799eb4f60a9b04fp19df9djsnb70154be0920'
}

const baseUrl2 = 'https://covid-193.p.rapidapi.com/statistics';


const createRequest = (url) => ({url, headers: covidApiHeaders });

const createRequest2 = () => ({ headers: covidApiHeaders2, method:'GET'});


export const covidApi = createApi({
    reducerPath: 'covidApi',
    baseQuery: fetchBaseQuery({ baseUrl }),
    endpoints: (builder)=> ({
        getCovid: builder.query({
            query: () => createRequest('/totals') 
        }),
    })
})

export const covidApi2 = createApi({
    reducerPath: 'covidApi2',
    baseQuery: fetchBaseQuery({ baseUrl2 }),
    endpoints: (builder)=> ({
        getStatistics: builder.query({
            query: () => createRequest2()
        })
    })
})

export const {
    useGetCovidQuery,
} = covidApi;

export const {
    useGetStatisticsQuery,
} = covidApi2;

