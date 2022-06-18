 import axios from "axios";

const sale_summary_url = 'http://a332dda24be9448e89f1d52130700411-481831987.us-east-2.elb.amazonaws.com/SummarySales/2022-01-01/2022-02-20'


const getSaleSummary = async() : Promise<any>  =>{

    const response = axios.get(sale_summary_url);

    return response;

}
getSaleSummary()
