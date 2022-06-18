import React from 'react'
import { LineChart } from '../components/charts/mutlipleLineChart'

export default function OrderChartsPage() {
  return (
    <div className='bg-backgroundGray w-[84vw] h-full flex'>
        <div className='main-chart-view bg-bwalaPrimary w-[70%] h-full'>
            <LineChart/>
        </div>
        <div className='side-charts-view bg-error w-[30%] h-full flex flex-col'>
            <div className='view-one w-full h-[50%]'>

            </div>
            <div className='view-two w-full h-[50%] bg-borderGray'>

            </div>
        </div>
    </div>
  )
}
