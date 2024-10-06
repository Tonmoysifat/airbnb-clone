import {createSlice} from "@reduxjs/toolkit";

export const PropertySlice = createSlice({
    name: "property",
    initialState: {
        PropertyList: [],
    },
    reducers: {
        setPropertyList: (state, action) => {
            state.PropertyList = action.payload
        }
    }
})
export const {setPropertyList} = PropertySlice.actions
export default PropertySlice.reducer