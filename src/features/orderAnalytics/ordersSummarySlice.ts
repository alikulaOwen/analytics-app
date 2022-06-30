import { createAsyncThunk, createSlice,} from "@reduxjs/toolkit";
import {  RootState } from "../../app/store";
import { OrderSummary } from "./models/summary";
import getOrderSummary from './service/ordersSummary'

interface ordersSummaryState {
    ordersList: Array<OrderSummary>,
    isLoading: boolean,
    error: boolean,
}


const initialState ={
    ordersList: [],
    isLoading: false,
    error: false
} as ordersSummaryState;


const ordersSlice = createSlice({
    name: 'orders',
    initialState,
    reducers: 
         {

    },
    extraReducers: (builder)=>{
        builder
        
        .addCase(getordersData.pending,(state)=>{
            state.isLoading = true
            state.error = false

        }).addCase(getordersData.fulfilled,(state, action)=>{
            state.ordersList = action.payload
            state.error =false
            state.isLoading = false
    }).addCase(getordersData.rejected,(state)=>{
        state.error =true
        state.isLoading =false
        state.ordersList =[]
    });
  
}})

export const getordersData =createAsyncThunk('get/orders', async (_, thunkAPI)=>{
   try {
       const response = await getOrderSummary.getAllOrderSummary()
       return response
       
   } catch (error) {
  return thunkAPI.rejectWithValue('Unable to Fetch data')
       
   }
})


export const ordersSelector = (state: RootState) => state.orders

const {reducer} = ordersSlice

export default reducer;


