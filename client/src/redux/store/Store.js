import {configureStore} from "@reduxjs/toolkit";
import categoryReducer from "../slice/CategorySlice.js";
import propertyReducer from "../slice/PropertySlice.js";
import loaderReducer from "../slice/LoaderSlice.js";
export default configureStore({
    reducer: {
        category: categoryReducer,
        property: propertyReducer,
        loaderAnimation: loaderReducer
    }
})