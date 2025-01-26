 import {createApi,fetchBaseQuery} from '@reduxjs/toolkit/query/react'
const options = {
    method: 'GET',
    headers: {
      'x-rapidapi-key': '40b6a528d0msh0e5f4951eda82ffp1f5cc8jsn625683b4a47f',
      'x-rapidapi-host\n': 'spotify23.p.rapidapi.com'
    }
  };
  
  fetch('https://spotify23.p.rapidapi.com/browse_all/', options)
    .then(response => response.json())
    .then(response => console.log(response))
    .catch(err => console.error(err));
    
    export const spotifyCoreApi =createApi({
      reducerPath:'spotifyCoreApi',
      baseQuery:fetchBaseQuery({
        baseUrl:'https://spotify23.p.rapidapi.com',
        prepareHeaders:(headers)=>{
          headers.set('x-rapidapi-key','40b6a528d0msh0e5f4951eda82ffp1f5cc8jsn625683b4a47f');
          return headers;
        },
      }),
      endpoints:(builder)=>({
        getExplore:builder.query({query:()=>'/browse_all'})
      })

    });
    export const {
      useGetExploreQuery,
    }=spotifyCoreApi;