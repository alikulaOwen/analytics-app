/* eslint-disable eqeqeq */
import { Cancel } from '@mui/icons-material'
import { IconButton } from '@mui/material'
import { DatePicker } from 'antd'
import axios from 'axios'
import moment from 'moment'
import React, { useEffect, useState } from 'react'
import { Chart } from 'react-google-charts'
import PropagateLoader from 'react-spinners/PropagateLoader'
import { TurnAround } from '../../features/turnaround/models/models'
import zoneName, { ButtonsData } from './overview'


export default function DriversChartPage() {
  const [data, setData] = useState<TurnAround[]>([])
  const [startDate, setStartDate] = useState<any>("2022-01-01");
  const [endDate, setEndDate] = useState<any>("2023-05-20");


  const [dataList, setDataList] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);
  const [status, setStatus] = useState(0)
  const [selected, setSelected] = useState(0)
  const [customActive, setCustomActive] = useState(false)
  const [hidePicker, setHidePicker] = useState(false)

  

  //2022-01-01/2023-05-20

  useEffect(() => {
    const fetchData = async ()=>{
      await axios.get(`https://glacial-shelf-82148.herokuapp.com/http://a332dda24be9448e89f1d52130700411-481831987.us-east-2.elb.amazonaws.com/SummarySalesTarget/${startDate}/${endDate}`).then((res)=>{
        setData(res.data)
      })
    }
    fetchData()
  }, [endDate, startDate])
  console.log(data)
  // create zone name list
  const zoneNameList = zoneName(data)

  


  function processData(){
    let final_result = []
     for(let i = 0; i < zoneNameList.length; i++) {
           let name = zoneNameList[i];
           let list  = []
           let list_on_target = []
       for(let j = 0 ; j < data.length; j++){
          let el = data[j]
           
           if(name == el['zoneName']){
             if (el["timeTarget"] == "Off Target"){
             list.push(el['deliveredWithin'])}
             else{
               list_on_target.push(el['deliveredWithin'])
             }

           }

       }
      const  result: any = list.map(element => {
         let val = parseFloat(element)
         return val
         
       });
       const result2: any = list_on_target.map(element => {
         let val = parseFloat(element)
         return val

       });
       //const average = sum(result) / result.length
       const sum = result.reduce((accumulator: number, value: number) => {
         return accumulator + value;
       }, 0);
       const sum2 = result2.reduce((accumulator: number, value: number) => {
         return accumulator + value;
       }, 0);
       
       final_result.push([name, sum2/result2.length || 0  , sum/result.length || 0]);

  }
return final_result;
}
processData()

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

  const optionr = {
    chart: {
      title: "Duhqa TurnAround Time",
      subtitle: `Average Time for Deliveries made per zone between ${startDate} and ${endDate} `,
    },
  };
  const datar = [
    ["Zone", "On Target", "Off Target",],
    ...processData(),

  ];
  console.log(datar)
  return (
    <div className='bg-backgroundGray w-full h-auto flex justify-center m-5 '>
      <div className="turnaround-card h-[400px] w-[96%] bg-white rounded">
        <div className="buttons-wrapper w-[78vw] h-8  mt-1 my-2 item-center">
          <div className={`${!hidePicker ? 'h-7 w-full pl-5 flex justify-start items-center' : 'hidden'} `}>
            {
              ButtonsData.map((el, i) => {
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
            <button className={customActive ? "bg-bwalaLight  mx-1 text-bwalaPrimary h-5 text-xs w-20 rounded-sm border-r-bwalaPrimary border-r-2" : "bg-bwalaLight mx-1 text-bwalaPrimary h-5 text-xs w-20 rounded-sm hover:border-bwalaPrimary hover:border"}

              onClick={() => {
                setCustomActive(true)
                setSelected(6)
                setHidePicker(true)
              }}>Custom ...</button>
          </div>
          <div className={`${hidePicker ? 'h-7 w-full pl-5 flex justify-start items-center' : 'hidden'} `}>

            <DatePicker placeholder='Start date' size='small' onChange={(startDate) => { setStartDate(startDate?.format("YYYY-MM-DD")) }} />
            <span className='mx-5'>to</span>
            <DatePicker placeholder='End date' size='small' onChange={(endDate) => { setEndDate(endDate?.format("YYYY-MM-DD")) }} />
            <IconButton onClick={() => setHidePicker(false)}>
              <Cancel sx={{ fontSize: '13px', }} className='text-bwalaLight' />
            </IconButton>
            
          </div>

        </div>
        
        <div className="pl-5 w-[80vw] h-[58v]">
          <Chart chartType="Bar" width="98%" height="350px" data={datar} options={optionr} />  
        </div>
      </div>
      <div className="w-[100%] h-[400px] bg-backgroundGray">

      </div>
    </div>
  )
}
