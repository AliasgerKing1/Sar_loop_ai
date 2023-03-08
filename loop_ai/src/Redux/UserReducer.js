import {createSlice} from "@reduxjs/toolkit"

let initialState = []

let userReducer = createSlice({
    name : "user",
    initialState,
    reducers : {
        getUser(state,action) {
            return action.payload
        },
    }
})

export default userReducer.reducer
export const {getUser} = userReducer.actions