import axios from "axios";
import { SaleSummary } from "../models/summary";

class getSaleSummary{
   async getAllSaleSummary(){
       const res = await axios.get('https://glacial-shelf-82148.herokuapp.com/http://a332dda24be9448e89f1d52130700411-481831987.us-east-2.elb.amazonaws.com/SummarySales/2022-01-01/2022-02-20')
       const data: Array<SaleSummary> = res.data
       console.log(data)
       return data
       

   }
}
export default new getSaleSummary();