import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { TurnAround } from "./models/models";


interface turnAroundState {
    turnAroundList: Array<TurnAround>,
    isLoading: boolean,
    error: boolean,
}


const initialState = {
    turnAroundList: [],
    isLoading: false,
    error: false
} as turnAroundState

const turnAroundSlice = createSlice({
    name: 'turnAround',
    initialState,
    reducers: {

    }
})

export const getordersData =createAsyncThunk('get/turnaround', async (_, thunkAPI)=>{
   try {
       const response = await axios.get('http://a332dda24be9448e89f1d52130700411-481831987.us-east-2.elb.amazonaws.com/SummarySalesTarget/2022-01-01/2023-05-20')
       return response
       
   } catch (error) {
  return thunkAPI.rejectWithValue('Unable to Fetch data')
       
   }
})
