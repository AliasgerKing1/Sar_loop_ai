import {createSlice} from "@reduxjs/toolkit"

let initialState = []

let AdminReducer = createSlice({
    name : "admin",
    initialState,
    reducers : {
        getAdmins(state,action) {
            return action.payload
        },
    }
})

export default AdminReducer.reducer
export const {getAdmins} = AdminReducer.actions