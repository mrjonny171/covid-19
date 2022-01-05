import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react'

const covidApiHeaders = {
    'x-rapidapi-host': 'covid-19-data.p.rapidapi.com',
    'x-rapidapi-key': 'a98bbe003amsh799eb4f60a9b04fp19df9djsnb70154be0920'
}

const baseUrl = 'https://covid-19-data.p.rapidapi.com';

const createRequest = (url) => ({url, headers: covidApiHeaders});

export const covidApi = createApi({
    reducerPath: 'covidApi',
    baseQuery: fetchBaseQuery({ baseUrl }),
    endpoints: (builder)=> ({
        getCovid: builder.query({
            query: () => createRequest('/totals') 
        })
    })
})

export const {
    useGetCovidQuery,
} = covidApi;

