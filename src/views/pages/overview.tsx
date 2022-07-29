import { FC, useEffect, useState, } from 'react'
import { Chart } from 'react-google-charts';
import { UndeliveredObject } from '../../features/undelivered/model/undeliveredModel';
import axios from 'axios';
import { DatePicker } from 'antd';
import moment from 'moment';
import { Cancel} from '@mui/icons-material';
import { IconButton } from '@material-ui/core';
import { OrderSummary } from '../../features/orderAnalytics/models/summary';
import { PropagateLoader } from 'react-spinners';



export const ButtonsData = [
  {
    
    heading: "Today",
    func: 0
  },
  {
    
    heading: "Yesterday",
    func: 1

  },
  {

    heading: "last 7days",
    func: 7

  },
  {
   
    heading: "last 30days",
    func: 30
  
  },
  {
    
    heading: 'last 90days',
    func: 90
    
  },
];
export default function zoneName(dataList: any) {
  const zoneList: Array<string> = []
  dataList.map((el: UndeliveredObject) => {
    zoneList.push(el.zoneName)
  })
  return [...new Set(zoneList)];;
}



interface IOverView { }

export const OverviewComponent: FC<IOverView> = () => {

  // const { data, error, isFetching, isLoading, isSuccess }= useGetUndeliveredByDatesQuery({startDate: '2022-01-01', endDate: '2022-06-20'});

  const [dataList, setDataList] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);
  const [status, setStatus] = useState(0)
  const [selected, setSelected] = useState(0)
  const [customActive, setCustomActive] = useState(false)
  const [hidePicker, setHidePicker] = useState(false)
  const [startDate, setStartDate] = useState<any>('2022-06-22')
  const [endDate, setEndDate] = useState<any>('2022-07-22')

  const [ordersList, setOrdersList] = useState([])

  let myList: OrderSummary[] = ordersList

  const data = [
    ["Orders Status", "Total figures"],
    ["Total Order Delivered", ordersList.length === 1 ? myList[0].totalOrdersDelivered : 0],
    ["Total Orders Pending", ordersList.length === 1 ? myList[0].totalOrdersPending : 0],
    ["Total Orders Cancelled", ordersList.length === 1 ? myList[0].totalOrdersCancelled : 0],
  ];
  const options = {
    legend: "none",
    pieSliceText: "label",
    title: `Order Pie Chart, Current Total orders: ${ordersList.length === 1 ? myList[0].totalOrders : 0}`,
    pieStartAngle: 100,
  };
  const current_date = moment().format(
    "YYYY-MM-DD"
  );
  function getLast(lastDays: number) {
    let list: Array<string> = []
    let start = moment().subtract(lastDays, "days").format("YYYY-MM-DD");
    let end = current_date
    list.push(start, end)
    return list;
   
  }
 
  

  useEffect(() => {


    // dates are dynamic /2022-01-01/2022-06-20
    //`/${startDate}/${endDate}`

    // const default_date = new Date()

    // const start = convertDate(startDate !== null ? startDate.format('YYYY-MM-DD') : default_date)
    // const end = convertDate(endDate !== null ? endDate.format('YYYY-MM-DD') : default_date )



    const fetchData = async () => {
      setIsLoading(true)
      await axios
      .get(`https://glacial-shelf-82148.herokuapp.com/https://analytics.duhqa.com/SummarySales/${startDate}/${endDate}`).then((res) => {
        setDataList(res.data)
        setIsLoading(false)
        setStatus(res.status)
        setError(false)
      
      }).catch(() => {
          setStatus(404)
          setError(true)
          setIsLoading(true)
        });
    }
    const fetchOrders = async () => {
      
      await axios
        .get('https://glacial-shelf-82148.herokuapp.com/http://analytics.duhqa.com/AnalyticsAPI/OrdersCount')
        .then(res => {setOrdersList(res.data)
        })
            
    }
    fetchOrders()


    fetchData();

  }, [startDate, endDate]);
  //console.log(data, isLoading, error,status)
  // get zone name
 
  //console.log(zoneName(dataList));
  // function to get zone against totalOrders

  function filterData(dataList: UndeliveredObject[]) {
    const zoneNameList = zoneName(dataList)
    const dt = dataList
    const arr: Array<object> = [];
    const list: Array<object> = [];
    for (let index = 0; index < zoneNameList.length; index++) {
      const element = zoneNameList[index];
      const local_arr: Array<string> = []
      local_arr.push(element)
      
      const Zonelist = dataList.filter((checkZone)=>{
        if (checkZone.zoneName === element){
          return checkZone
        }

      })
      let ZoneOrderTally: Array<string| number> = [ element,Zonelist.length]

      list.push(ZoneOrderTally)

      for (let index = 0; index < dt.length; index++) {
        const dt_object = dt[index];
        
        
        if (element === dt_object.zoneName) {
          local_arr.push(dt_object.orderValue)
        
         
        }

      }
      const zone_name: (string | undefined) = local_arr.shift()
      var result = local_arr.map(function (x) {
        return parseFloat(x)
      });
      let sum = 0
      for (let i = 0; i < result.length; i++) {
        sum += result[i];
      }
      let analytic: Array<(string | number | undefined)> = [zone_name, sum]

      arr.push(analytic)
    }
    console.log(list)
    return arr

  }
   function zoneOrderTally(dataList: UndeliveredObject[]){
     const zoneNameList = zoneName(dataList)
     const list: Array<object> = [];
     for (let index = 0; index < zoneNameList.length; index++) {
       const element = zoneNameList[index];
       const local_arr: Array<string> = []
       local_arr.push(element)

       const Zonelist = dataList.filter((checkZone) => {
         if (checkZone.zoneName === element) {
           return checkZone
         }

       })
       let ZoneOrderTally: Array<string | number> = [element, Zonelist.length]

       list.push(ZoneOrderTally)
   }
   return list
  }


  const datar = [
    ["Zone", "Orders Value",],
    ...filterData(dataList),
    
  ];
  //console.log(datar)
  const optionr = {
    chart: {
      title: "Duhqa Delivered",
      subtitle: `"Delivered orders between ${startDate} and ${endDate} `,
    },
  };
  const optionZone = {
    chart: {
      title: "Duhqa Delivered Order count per zone",
      subtitle: `Delivered orders between ${startDate} and ${endDate} `,
    },
  };

  const zonalTally =[
    ["Zone Name", "Order Count"],
    ...zoneOrderTally(dataList),

  ]



  return (

    <div className='bg-backgroundGray w-full h-auto flex justify-center m-5 '>
      

      <div className="flex flex-col">
        <div className='main-card h-[400px] bg-white w-[] items-center '>
          <div className="buttons-wrapper w-[78vw] h-8  mt-1 my-2 item-center">
            <div className={`${!hidePicker ? 'h-7 w-full pl-5 flex justify-start items-center' : 'hidden'} `}>
              {
                ButtonsData.map((el, i)=>{
                  return <button key={i} className={selected === i ? "bg-bwalaLight mx-1 text-bwalaPrimary h-5 text-xs w-20 rounded-sm border-r-bwalaPrimary border-r-2" : "bg-bwalaLight mx-1 text-bwalaPrimary h-5 text-xs w-20 rounded-sm hover:border-bwalaPrimary hover:border"}
                    onClick={() => {
                    const [startDate, endDate] = getLast(el.func)
                    console.log(startDate, endDate)
                    setStartDate(startDate)
                    setEndDate(endDate)
                    setSelected(i)
                    setCustomActive(false)
                      setHidePicker(false)
                    }}>{el.heading}</button>
                })
              }
              <button className={customActive? "bg-bwalaLight  mx-1 text-bwalaPrimary h-5 text-xs w-20 rounded-sm border-r-bwalaPrimary border-r-2" : "bg-bwalaLight mx-1 text-bwalaPrimary h-5 text-xs w-20 rounded-sm hover:border-bwalaPrimary hover:border"}

                onClick={() => {setCustomActive(true)
                setSelected(6)
                setHidePicker(true)
                 }}>Custom ...</button>
            </div>
            <div className={`${hidePicker ? 'h-7 w-full pl-5 flex justify-start items-center' : 'hidden'} `}>

              <DatePicker  placeholder='Start date' size='small' onChange={(startDate) => {setStartDate(startDate?.format("YYYY-MM-DD"))}}  />
              <span className='mx-5'>to</span>
              <DatePicker placeholder='End date' size='small' onChange={(endDate) => { setEndDate(endDate?.format("YYYY-MM-DD"))}}  />
                <IconButton onClick={() => setHidePicker(false)}>
                  <Cancel sx={{ fontSize: '13px',}}  className='text-bwalaLight'/>
                </IconButton>
            
              </div>
            </div>
          <div className='pl-5 w-[80vw] h-[58vh]'>
            {/* {
              isLoading 
                ? <div className="flex justify-center items-center  w-[80vw] h-[58vh]">
                <PropagateLoader color='#11b196'/> 
              </div>
                : <Chart chartType="Bar" width="98%" height="300px" data={datar} />  
            } */}

            <Chart chartType="Bar" width="98%" height="300px" data={datar}  options={optionr}/>  
            
          </div>
        </div>
        <div className="flex h-[450px] bg-white mt-3 pl-5 pt-4">
          <Chart chartType="Bar" width="98%" height="300px" data={zonalTally} options={optionZone} /> 

        </div>
        <div className="bottom-cards flex h-[40vh] w-[80vw] pt-3 justify-between">
          <div className='h-[38vh] bg-white w-[39.5vw]'>
            {
              isLoading
                ? <div className="flex justify-center items-center w-[36vw] h-[32vh]">
                  <PropagateLoader color='#11b196' />
                </div>
                : <Chart
                  chartType="PieChart"
                  data={data}
                  options={options}
                  width={"98%"}
                  height="210px"
                />}
          </div>
          <div className='h-[38vh] bg-white w-[39.5vw] pl-2'>
            <div className="flex justify-center items-center w-[36vw] h-[32vh]">
              <PropagateLoader color='#11b196' />
            </div>
          </div>
        </div>
        {/* <div className="flex h-[450px] bg-white mt-3 pl-5 pt-4">
          

        </div> */}
      </div>
    </div>
  )
};