import { FC, useEffect, useState, } from 'react'
import { Chart } from 'react-google-charts';
import { UndeliveredObject } from '../../features/undelivered/model/undeliveredModel';
import axios from 'axios';
import { DatePickerProps, Form } from 'antd';
import { DatePicker, Space } from 'antd';
import moment from 'moment';
import { Cancel, CancelOutlined} from '@mui/icons-material';
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
   
    heading: "last 30days",
    func: 30
  
  },
  {
    
    heading: 'last 90days',
    func: 90
    
  },
];




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

  const dateFormat = "YYYY-MM-DD"

  // function convertDate(inputFormat: Date| string) {
  //   function pad(s: string | number) { return (s < 10) ? '0' + s : s; }
  //   var d = new Date(inputFormat)
  //   return [d.getFullYear(), pad(d.getDate()), pad(d.getMonth() + 1),].join('-')
  // }

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
      .get(`https://glacial-shelf-82148.herokuapp.com/http://a332dda24be9448e89f1d52130700411-481831987.us-east-2.elb.amazonaws.com/SummarySalesUndelivered/${startDate}/${endDate}`).then((res) => {
        setDataList(res.data)
        setIsLoading(false)
        setStatus(res.status)
        setError(false)
        console.log(res);
      
      }).catch((res) => {
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
  function zoneName(dataList: UndeliveredObject[]) {
    const zoneList: Array<string> = []
    dataList.map((el: UndeliveredObject) => {
      zoneList.push(el.zoneName)
    })
    return [...new Set(zoneList)];;
  }
  //console.log(zoneName(dataList));
  // function to get zone against totalOrders

  function filterData(dataList: UndeliveredObject[]) {
    const zoneNameList = zoneName(dataList)
    const dt = dataList
    const arr: Array<object> = [];
    for (let index = 0; index < zoneNameList.length; index++) {
      const element = zoneNameList[index];
      const local_arr: Array<string> = []
      local_arr.push(element)
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
    return arr

  }
  const datar = [
    ["Zone", "Orders Value",],
    ...filterData(dataList),
    
  ];
  console.log(datar)

  
  



  return (

    <div className='bg-backgroundGray w-[84vw] h-[100vh] flex justify-center'>
      

      <div className="flex flex-col">
        <div className='main-card h-[60vh] bg-white w-[80vw] items-center '>
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

              <DatePicker placeholder='Start date' size='small' onChange={(startDate) => {setStartDate(startDate?.format("YYYY-MM-DD"))}}  />
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

            <Chart chartType="Bar" width="98%" height="300px" data={datar} />  
            
          </div>
        </div>
        <div className="bottom-cards flex h-[40vh] w-[80vw] pt-3 justify-between">
          <div className='h-[38vh] bg-white w-[39vw]'>
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
                  height={"98%"}
                />}
                
            
            
          </div>
          <div className='h-[38vh] bg-white w-[39vw]'></div>
        </div>
      </div>
    </div>
  )
};