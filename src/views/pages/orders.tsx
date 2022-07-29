// import { Search,ArrowBackSharp, ArrowRightSharp, ArrowLeftSharp } from '@mui/icons-material'
import axios from 'axios';
// import React, { FC, useEffect, useState } from 'react'
// import { Link, Route, Routes } from 'react-router-dom';
// import { useAppSelector } from '../../app/hooks';
// import { Order, OrdersItem } from '../../features/orderAnalytics/models/orders';



// import { Card } from '../components/card.FilterData';
// import { GridBwala } from '../components/grid';

// const dataNav = [
//   {
//     name: "Order Id",
//   },
// ]


// export const Orders: FC = () => {
//   const dataNav = [
//   {
//     name: "Order Id",
//   },
//   {
//     name: "Order Id",
//   },
//   {
//     name: "Order Id",
//   },
//   {
//     name: "Order Id",
//   },
//   {
//     name: "Order Id",
//   },
//   {
//     name: "Order Id",
//   },
//   {
//     name: "Order Id",
//   },
//     {
//       name: "Order Id",
//     },
//     {
//       name: "Order Id",
//     },
//     {
//       name: "Order Id",
//     },
// ]
//   const [data, setData] = useState<Order>();
//   const [hidden, setHidden] = useState(false)
//   const [selectedNeighborHood, setSelectedNeighborHood] = useState<string>("")

//   const { isSuccess, isAuthenticated, isError, isLoading, message, jwt} = useAppSelector(
//     (state) => state.auth
//   );
  
//   const active = true;

 
 

//   const menu =[
//     {
//       name: 'Unverified',
//       state: !active
//     },
//     {
//       name: 'Out Of Zone',
//       state: !active

//     }, 
//     {
//       name: 'List View',
//       state: !active
//     },
//     {
//       name: 'List View',
//       state: !active
//     },
//     {
//       name: 'List View',
//       state: !active
//     }
//     ,
//     {
//       name: 'Grid View',
//       state: active
//     }, {
//       name: 'List View',
//       state: !active
//     },
//     {
//       name: 'List View',
//       state: !active
//     },
//     {
//       name: 'List View',
//       state: !active
//     },
//     {
//       name: 'List View',
//       state: !active
//     }
//   ]
  

//   useEffect(()=>{
//     const headers = {
//       'Authorization': `Bearer ${jwt}`,
//       'content-type': 'application/json'
//     };
//     const body = { "text": null, "sort": "-preferredDeliveryTimeUtc", "status": null, "shopDeliverable": true, "shopVerified": true, "preferredDeliveryTimeUtcFrom": "2022-07-20 00:00:00", "preferredDeliveryTimeUtcTo": "2022-07-20 23:59:59", "page": 0, "pageSize": 100 }

//     async function fetchData() {
//       await axios.put('https://apiv2.duhqa.com/api/v1.0/Orders/Query', body, {headers}).then(res =>{
//         setData(res.data)
//       })
      
//     }
//     fetchData();
//   }, [jwt]);
  
//   let  dataList: OrdersItem[] = []
//   if (data !== undefined){
//     dataList = [...data['items']]
//   }
//   console.log(dataList)
//   let list: any[][] = []
//  function getNeighborHoods(){
//     let list = []
//     for(let i= 0 ; i< dataList.length; i++){
//       let item = dataList[i]
//       list.push(item.shop.neighbourhood.name)
//     }
//     return [...new Set(list)]
//   }
//   function countAndGroup(){
//     let current_zone: any;
    
//     let neighborhood_list = getNeighborHoods();
//     for(let i = 0; i < neighborhood_list.length; i++){
//       let neighborhood = neighborhood_list[i];
//       let total = 0;
//       let not_delivered_count = 0
//       let delivered_count = 0
//       current_zone = neighborhood
//       for (let i = 0; i < dataList.length; i++){
//       const item: OrdersItem = dataList[i];
      
//       if (neighborhood === item.shop.neighbourhood.name){
//          if (item.isDelivered){
//            total += 1
        
//         delivered_count = delivered_count + 1;
//       }else{
//            total += 1
//         not_delivered_count = not_delivered_count + 1;
//       }
//       }
//     }
//     list.push([current_zone, total, delivered_count, not_delivered_count])
//   }
//    return list
//   }

//   function onCardClickHandler(){
//     alert("Clicked Card Action")
//   }
//   countAndGroup()
//   console.log(list);

//   return (
//     <div className=' bg-backgroundGray w-full h-auto min-h-screen flex justify-start items-center p-4 relative' >
//       <div className="container">
//         <section className=" bg-white p-4 rounded-[4px] overflow-auto">

//           <div className="h-[80px] flex justify-between items-center">
//             <div className="">
//               <h1>CUSTOMER'S ORDERS</h1>

//             </div>
//             <div className="Tab-menu  w-[40%] h-full">
//               <ul className="flex relative justify-center items-center ">
//                <li className="h-[60px] bg-white w-24 border-b-[1px] border-borderGray" >
//                       <button className={active ? 'flex flex-col justify-center items-center h-[60px] w-[80px] border-b-2 border-b-bwalaPrimary' : 'flex flex-col justify-center items-center h-[60px] w-[90px]' }>Grid View</button>
//                     </li>
                 
//               </ul>
              
//             </div>
//           </div>
//           <div className="border-t-[1px] border-borderGray"></div>
    
//           <main className='flex flex-col justify-center items-center' >
//             <div className='w-full h-[60px] bg-white flex justify-between items-center mt-2'>
//               <div className='w-[25%] h-[48px] bg-searchInputBgColor pt-3 pl-2  rounded'>
//                 <Search className='text-breadcrumbMain'/>
//                 <input className="w-[84%] h-[64%] bg-searchInputBgColor border-none outline-none" placeholder='Search' />
//               </div>
//               <div className='filters w-[65%] flex justify-end '>
//                 <div className='w-[25%] h-[48px] bg-searchInputBgColor pt-3 pl-2 outline-none rounded'>
//                 </div>
//                 <div className='w-[25%] h-[48px] bg-searchInputBgColor pt-3 pl-2 outline-none rounded ml-5'>
//               </div>
//               </div>
//             </div>
//             <div className='min-h-[450px] w-full m-4 flex justify-center rounded-md'>
              
              
//               {
//                 hidden ? <Card neighborhood={selectedNeighborHood} /> : <div className={hidden ? 'hidden ' : 'w-full min-h-[400px] bg-searchInputBgColor flex justify-start flex-wrap p-2 rounded-md'}>
//                   {

//                     list.map((el: any, i: number) => {

//                       return <div onClick={() => {
//                         setHidden(true);
//                         setSelectedNeighborHood(el[])

//                       }} key={i} className={`pointer container w-[24%] h-[200px] hover:bg-bwalaLight  m-1 rounded-md shadow-md drop-shadow-md`}>
//                         <div className="w-full h-full flex flex-col justify-center items-center ">
//                           <h1 className="text-lg font-bold ">{el[0]}</h1>
//                         </div>

//                       </div>
//                     })
//                   }
//                 </div>

//               }
//             </div>
//           </main>

//         </section>
//       </div>

//     </div>
//   )
// }
