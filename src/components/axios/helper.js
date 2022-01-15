export const countriesOptions = {
    method: 'GET',
    url: 'https://covid-193.p.rapidapi.com/statistics',
    headers: {
        'x-rapidapi-host': 'covid-193.p.rapidapi.com',
        'x-rapidapi-key': 'a98bbe003amsh799eb4f60a9b04fp19df9djsnb70154be0920'
    }
};

export const newsOptions = (field) => {
    const opts = {
    method: 'GET',
    url: 'https://bing-news-search1.p.rapidapi.com/news/search',
    params: {q: field, freshness: 'Day', textFormat: 'Raw', safeSearch: 'Off'},
    headers: {
      'x-bingapis-sdk': 'true',
      'x-rapidapi-host': 'bing-news-search1.p.rapidapi.com',
      'x-rapidapi-key': 'a98bbe003amsh799eb4f60a9b04fp19df9djsnb70154be0920'
        }
    }
    return opts;
  };

  export const HistoricOptions = (country,day)=>{
    const opts = {
    method: 'GET',
    url: 'https://covid-193.p.rapidapi.com/history',
    params: {country: country, day: day},
    headers: {
      'x-rapidapi-host': 'covid-193.p.rapidapi.com',
      'x-rapidapi-key': 'a98bbe003amsh799eb4f60a9b04fp19df9djsnb70154be0920'
    }
  }
  return opts;
};
