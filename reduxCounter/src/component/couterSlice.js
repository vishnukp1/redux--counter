import {createSlice} from "@reduxjs/toolkit"


export const counterSlice = createSlice({
    name:"counter",
    initialState : 0,
    reducers:{
    increament: (state,action)=>{
            return state = state+1 
        },
        decreament: (state,action)=>{
            return state = state -1
        }
    }
})

export const {decreament,increament} = counterSlice.actions
export default counterSlice.reducer