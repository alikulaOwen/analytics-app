
import React, { useEffect, useState } from 'react'
import 
  {DatePicker}
from "@material-ui/pickers";
import axios from 'axios';
import { CustomObj, ITurnAround } from '../../features/turnaround/models/models';


export default function ShopChartsPage() {

   const [startDate, setStartDate] = useState<Date | null>(new Date());
   const [endDate, setEndDate] = useState<Date | null>(new Date());
   const [dataList, setDataList] = useState<ITurnAround[]>([])

   function dateToString(dateObj: any){
      let month = dateObj.getUTCMonth() + 1; //months from 1-12
      let day = dateObj.getUTCDate();
      let year = dateObj.getUTCFullYear();

      const newdate: string = year + "-" + month + "-" + day;
      return newdate
   }
   //creates object of shopNames  and total Ordervalue


   //const shop_name

  // function createShopOrdervalueObject(list: ITurnAround[]) {
  //   function removeDuplicates(arr: any[]) {
  //       var unique = arr.reduce(function (acc: any[], curr: any) {
  //           if (!acc.includes(curr))
  //               acc.push(curr);
  //           return acc;
  //       }, []);
  //       return unique;
  //   }

  //   // create a list of objects [{shopName: '', orderValue: '' }]
  //   let shop_order_list: CustomObj[] = []

  //   list.forEach((el)=>{
  //     shop_order_list.push({shopName: el['shopName'], orderValue: parseInt(el['orderValue'])})
  //   })
    

  //   //create a list of non-duplicate shopNames
  //   let shopNameList: string[] = []
  //   shop_order_list.forEach(el=>{
  //      shopNameList.push(el.shopName)


  //   })
  //   // clean data 
  //   // combine duplicate name value
  //   let unique: CustomObj = {shopName: '', orderValue: 0 } ;
  //   let result: CustomObj[] = [];

  //   let uniqueName = removeDuplicates(shopNameList)
  
  //   uniqueName.forEach(name=>{
      
  //     shop_order_list.forEach(el =>{
        
  //       if(name === el.shopName){
  //         result.push({shopName: name, orderValue: unique.orderValue += el.orderValue})
  //       }
  //     })
  //   })
  //   // console.log(result)
  //   console.log(result)
    
    
  // }

  // createShopOrdervalueObject(dataList)


   
  
   useEffect(()=>{
      const fetchData = async ()=> {
          
          await axios
          .get(`https://glacial-shelf-82148.herokuapp.com/http://a332dda24be9448e89f1d52130700411-481831987.us-east-2.elb.amazonaws.com/SummarySalesTarget/${dateToString(startDate)}/${dateToString(endDate)}`)
          .then(res=> setDataList(res.data))
          
        }
        fetchData()
     
   },[endDate, startDate])
  
  return (
  
  <div className='bg-backgroundGray w-[84vw] h-full flex  justify-center items-center'>
     <div className='h-[96%] w-[98%]'>
       <div className='top h-[10%] w-full justify-start  flex items-center p-5'>
         <span className='mx-5'>Select date range </span>

       <DatePicker value={startDate} onChange={date => setStartDate(date)} autoOk
        orientation="landscape"
        variant="inline"
        inputVariant="filled"
        label="Start-date"
        format="yyyy-MM-dd"
        
        />
        <span className='mx-5' >To</span>
        <DatePicker 
         value={endDate} 
  
        onChange={(date)=> setEndDate(date)} 
        autoOk
        orientation="landscape"
        variant="inline"
        inputVariant="filled"
        label="End-date"
        format="yyyy-MM-dd"
        // openTo="date"
        
        />
       </div>
       <div className='bottom h-[90%] flex items-center justify-evenly'>
         <div className=' h-[96%] w-[75%]'>
         </div>
         <div className='h-[96%] w-[22%]'>

         </div>
       </div>

     </div>
     
    </div>
  )
}
