import React, { FC } from 'react'
import {ArrowUpOutlined, ArrowDownOutlined } from '@ant-design/icons';
import { LineChart } from '../components/charts/mutlipleLineChart';
import { BarChart } from '../components/charts/barchart';

interface IOverView {}

export const OverviewComponent: FC<IOverView> = () =>{
    return(
        <div className='bg-backgroundGray w-[84vw] h-full'>
           <div className="m-2 grid grid-cols-4 grid-rows-5 gap-2 h-[96vh] w-[82vw]">
  <div className="bg-white p-2 rounded-md  ">
      <div className=" h-full w-full flex justify-center">
          <div className="percent-indicator w-[70%]  h-[96%] flex justify-center items-center">
              <p className='text-[56px] mt-12 '>65%</p>
          </div>
          <div className="right flex flex-col justify-evenly items-center h-[96%] w-[30%]">
                  <div className="arrow-indicator flex justify-evenly items-center   h-[45%] w-[96%]">
                    <ArrowUpOutlined className='font-bold text-[24px]'/>
                    <ArrowDownOutlined className='font-bold text-[24px]'/>
                  </div>
                  <div className="time-indicator  h-[45%] w-[96%] flex items-center">
                     <span className='text-base'>Last .24h</span>
                  </div>
              </div>

      </div>
  </div>
  <div className="bg-white p-2 rounded-md  ">
      <div className=" h-full w-full flex justify-center">
          <div className="percent-indicator w-[70%]  h-[96%] flex justify-center items-center">
              <p className='text-[56px] mt-12 '>65%</p>
          </div>
          <div className="right flex flex-col justify-evenly items-center h-[96%] w-[30%]">
                  <div className="arrow-indicator flex justify-evenly items-center   h-[45%] w-[96%]">
                    <ArrowUpOutlined className='font-bold text-[24px]'/>
                    <ArrowDownOutlined className='font-bold text-[24px]'/>
                  </div>
                  <div className="time-indicator  h-[45%] w-[96%] flex items-center">
                     <span className='text-base'>Last .24h</span>
                  </div>
              </div>

      </div>
  </div>
  <div className="bg-white rounded-md flex justify-center row-span-5 col-span-2 ">
      <BarChart/>
  </div>
  <div className="col-span-2 row-span-4 bg-white rounded-md flex items-center justify-center">
      <div className="m-2 h-[80%] w-[96%]">
          <LineChart/>
      </div>
  </div>
  </div>
        </div>
    )
};