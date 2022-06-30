import axios from 'axios';
import React, { useEffect, useState } from 'react'
import Chart from 'react-google-charts'
import PropagateLoader from 'react-spinners/PropagateLoader';
// import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { OrderSummary } from '../../features/orderAnalytics/models/summary';
// import { getordersData } from '../../features/orderAnalytics/ordersSummarySlice';
// import ordersSummary from '../../features/orderAnalytics/service/ordersSummary';

function Orders() {
    // const dispatch = useAppDispatch();
    // const {isLoading, error, ordersList } = useAppSelector((state)=>state.orders)

    const [ordersList, setOrdersList] = useState([])
    
    


    useEffect(()=>{
     
       const fetchData = async ()=> {
          await axios
          .get('https://glacial-shelf-82148.herokuapp.com/http://analytics.duhqa.com/AnalyticsAPI/OrdersCount')
          .then(res=> setOrdersList(res.data))
          
        }
        fetchData()


    },[])
  console.log(ordersList)
  let myList: OrderSummary[] = ordersList
   
    const data = [
        ["Orders Status", "Total figures"],
        ["Total Order Delivered", ordersList.length === 1 ? myList[0].totalOrdersDelivered : 0],
        ["Total Orders Pending", ordersList.length === 1 ? myList[0].totalOrdersPending : 0],
        ["Total Orders Cancelled", ordersList.length === 1 ? myList[0].totalOrdersCancelled : 0],
    ];
    const dataTables = [
        ["Orders Status", "Total figures"],
        ["Total Orders", ordersList.length === 1 ? myList[0].totalOrders : 0],
        ["Total Order Delivered", ordersList.length === 1 ? myList[0].totalOrdersDelivered : 0],
        ["Total Orders Pending", ordersList.length === 1 ? myList[0].totalOrdersPending : 0],
        ["Total Orders Cancelled", ordersList.length === 1 ? myList[0].totalOrdersCancelled : 0]
        
    ];

    const options = {
        legend: "none",
        pieSliceText: "label",
        title: `Order Pie Chart, Current Total orders: ${ordersList.length === 1 ? myList[0].totalOrders : 0}`,
        pieStartAngle: 100,
    };

  const option = {
  allowHtml: true,
  showRowNumber: true,
};

 const formatters = [
  {
    type: "BarFormat" as const,
    column: 1,
    options: {
      width: 120,
    },
  }];

  return ordersList.length === 0? <div>
        <PropagateLoader color='#11b196'/>
      </div> :<div className="grid grid-cols-4 gap-2 grid-rows-2 h-[98%] w-[98%]">
      
        <div className="col-span-3 row-span-2 bg-white flex items-center justify-center rounded-md">
            <Chart
                chartType="PieChart"
                data={data}
                options={options}
                width={"98%"}
                height={"98%"}
            />
        </div>
        <div className="row-span-1 bg-white rounded flex justify-center items-center">
            <Chart
      chartType="BarChart"
      width="98%"
      height="98%"
      data={data}
      options={options}
    /></div>
        <div className="row-span-1 bg-white rounded flex justify-center items-center ">
            <Chart
      chartType="Table"
      width="98%"
      height="98%"
      data={dataTables}
      options={option}
      formatters={formatters}
    />
        </div>
    </div>
}

export default Orders

