import axios from "axios";
import store from "../redux/store/Store.js";
import {setPropertyList} from "../redux/slice/PropertySlice.js";
import {hideLoader, showLoader} from "../redux/slice/LoaderSlice.js";

export const PropertyListRequest = async ()=>{
    try {
        let URL = `/api/PropertyList`
        let res = await axios.get(URL)
        if(res.status===200){
            store.dispatch(setPropertyList(res.data["data"]))
        }
        else {
            alert("Something went Wrong")
        }
    }
    catch (e) {
        alert("Something went Wrong")
    }
}
export const PropertyListByCategoryRequest = async (category)=>{
    try {
        // debugger
        store.dispatch(showLoader())
        let URL = `/api/PropertyListByCategory/${category}`
        let res = await axios.get(URL)
        store.dispatch(hideLoader())
        if(res.status===200){
            store.dispatch(setPropertyList(res.data["data"]))
        }
        else {
            alert("Something went Wrong")
        }
    }
    catch (e) {
        alert("Something went Wrong")
    }
}
export const PropertyListByFilterRequest = async (filters)=>{
    try {
        // debugger
        store.dispatch(showLoader())
        let URL = `/api/PropertyListByFilter`
        let res = await axios.post(URL,filters)
        store.dispatch(hideLoader())
        if(res.status===200){
            store.dispatch(setPropertyList(res.data["data"]))
            console.log(res.data)
        }
        else {
            alert("Something went Wrong")
        }
    }
    catch (e) {
        alert("Something went Wrong")
    }
}