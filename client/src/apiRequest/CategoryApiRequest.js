import axios from "axios";
import store from "../redux/store/Store.js";
import {setCategoryList, setCategoryValue} from "../redux/slice/CategorySlice.js";
import {hideLoader, showLoader} from "../redux/slice/LoaderSlice.js";

export const CategoryListRequest = async ()=>{
    try {
        store.dispatch(showLoader())
        let URL = `/api/CategoryList`
        let res = await axios.get(URL)
        store.dispatch(hideLoader())
        if(res.status===200){
            store.dispatch(setCategoryList(res.data["data"]))

            if (!sessionStorage.getItem("cat")) {
                sessionStorage.setItem("cat", res.data["data"][0]["title"]);
                store.dispatch(setCategoryValue(res.data["data"][0]["title"]))
            }
        }
        else {
            alert("Something went Wrong")
        }
    }
    catch (e) {
        alert("Something went Wrong")
    }
}