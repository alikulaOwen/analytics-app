import React from 'react'
import PropagateLoader from 'react-spinners/PropagateLoader'

export default function CustomersChartPage() {
  return (
    <div className='bg-backgroundGray w-[84vw] h-full flex justify-center items-center'>
      <div>
        <h2 className='mb-10 text-2xl font-semibold'>Fetching data...</h2>
        <PropagateLoader color='#11b196'/>
      </div>
    </div>
  )
}
