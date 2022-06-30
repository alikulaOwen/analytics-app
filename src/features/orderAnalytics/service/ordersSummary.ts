import axios from "axios";
import { OrderSummary } from "../models/summary";

class getOrderSummary{
   async getAllOrderSummary(){
       const res = await axios.get('https://glacial-shelf-82148.herokuapp.com/http://analytics.duhqa.com/AnalyticsAPI/OrdersCount')
       const data: Array<OrderSummary> = res.data
       console.log(data)
       return data
   }
}
export default new getOrderSummary();