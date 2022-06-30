import { createAsyncThunk, createSlice,} from "@reduxjs/toolkit";
import axios from "axios";
import {  RootState } from "../../app/store";
import { SaleSummary } from "./models/summary";
import salesSummary from "./service/salesSummary";
import getSaleSummary from './service/salesSummary'

interface salesSummaryState {
    salesList: Array<SaleSummary>,
    isLoading: boolean,
    error: boolean,
}


const initialState ={
    salesList: [],
    isLoading: false,
    error: false
} as salesSummaryState;


const salesSlice = createSlice({
    name: 'sales',
    initialState,
    reducers: 
         {

    },
    extraReducers: (builder)=>{
        builder
        
        .addCase(getSalesData.pending,(state)=>{
            state.isLoading = true
            state.error = false

        }).addCase(getSalesData.fulfilled,(state, action)=>{
            state.salesList = action.payload
            state.error =false
            state.isLoading = false
    }).addCase(getSalesData.rejected,(state)=>{
        state.error =true
        state.isLoading =false
        state.salesList =[]
    });
  
}})

export const getSalesData =createAsyncThunk('/', async (_, thunkAPI)=>{
   try {
       const response = await getSaleSummary.getAllSaleSummary()
       return response
       
   } catch (error) {
  return thunkAPI.rejectWithValue('Unable to Fetch data')
       
   }
})


export const salesSelector = (state: RootState) => state.sales

const {reducer} = salesSlice

export default reducer;


