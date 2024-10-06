import {createSlice} from "@reduxjs/toolkit";

export const CategorySlice = createSlice({
    name: "category",
    initialState: {
        categoryList: [],
        categoryValue: sessionStorage.getItem("cat"),
        filterToggle:false,
        mapValue:{}
    },
    reducers: {
        setCategoryList: (state, action) => {
            state.categoryList = action.payload
        }        ,
        setCategoryValue: (state, action) => {
            state.categoryValue = action.payload
        },
        setFilterToggle: (state, action) => {
            state.filterToggle = action.payload
        },
        setMapValue: (state, action) => {
            state.mapValue = action.payload
        }
    }
})
export const {setCategoryList,setCategoryValue,setFilterToggle,setMapValue} = CategorySlice.actions
export default CategorySlice.reducer