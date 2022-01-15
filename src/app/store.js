import { configureStore, getDefaultMiddleware} from "@reduxjs/toolkit";
import { covidApi, covidApi2 } from "../services/covidApi";

export default configureStore({
    reducer: {
        [covidApi.reducerPath]: covidApi.reducer,
        [covidApi2.reducerPath]: covidApi2.reducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(covidApi.middleware).concat(covidApi2.middleware),
        
});