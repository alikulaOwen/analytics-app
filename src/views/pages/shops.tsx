import axios from 'axios'
import React, { useEffect, useState } from 'react'



export const Shops = () => {
  const [dataList, setDataList] = useState([])

  const body = {
    
  }

  useEffect(()=>{
    async function fetchData(){
      await axios.post('https://apiv2.duhqa.com/api/v1.0/Shops/Query', ).then((res)=>{
        setDataList(res.data)
      })
      
    }
  })
  return (
    <div>Shops</div>
  )
}
