import {
  createApi,
  fetchBaseQuery
} from "@reduxjs/toolkit/query/react";

export const UndeliveredApi = createApi({
  reducerPath: "undeliveredApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://glacial-shelf-82148.herokuapp.com/http://a332dda24be9448e89f1d52130700411-481831987.us-east-2.elb.amazonaws.com/"
  }),
  // dates are dynamic /2022-01-01/2022-06-20
  //`/${startDate}/${endDate}`
  endpoints: (builder) => ({
    getUndeliveredByDates: builder.query<any,{startDate: string; endDate: string}>({
    query: (arg) => {
        const{startDate, endDate} = arg;
        console.log('arg: ', arg)
        return {
            url: 'SummarySalesUndelivered/',
            params:{startDate, endDate}
        }

    }
  }),
  })
});


export const {
  useGetUndeliveredByDatesQuery,
} = UndeliveredApi;