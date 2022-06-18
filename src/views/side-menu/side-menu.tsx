import React, { FC } from 'react'
import imageholder from '../../assets/download.png'
import DropdownLogOut from '../components/dropdown';

import { AddBoxOutlined, ArrowBackRounded, 
    Dashboard, DriveEtaOutlined, PeopleAltOutlined, ShoppingBasketOutlined, 
    StorefrontOutlined } from '@material-ui/icons';

interface IOverView {}

export const SideMenuComponent: FC<IOverView> = () =>{
    return(
        <div className='w-[16vw] h-full bg-backgroundGray flex-1'>
          <div className="side-menu-header bg-white h-[32vh] w-full">
             <div className='py-[24px] px-[16px]'>
                  <img src='https://admin-prod.duhqa.com/static/media/bwala_logo.030aa2d1.svg' alt='bwala-logo'/>
             </div>
             <div className="duhqa-user-info w-full h-[10vh] flex justify-between ">
                 <div className="user-bio-wrapper h-[8vh] w-[10vw] flex py-[24px] px-[16px]
                 justify-evenly items-center">
                     <div className="image-wrapper h-[5vh] w-[5vw] rounded-full mb-3 " >
                         <img className='rounded-full h-12'src={imageholder} alt='holder'/>
                     </div>
                     <div className='flex flex-col ml-1 mt-2
                     h-[4vh] w-[4vw] items-center justify-center'>
                        <span className='text-xs mb-1'>Duhqa</span>
                        <span className='text-xs'>User</span>
                     </div>
                 </div>
                <div className="user-logout-dropdown  h-[1vh] w-[1vw] mr-5 mt-3">
                    <DropdownLogOut/>
                </div>
             </div>

          </div>
          <div className="h-[0.4vh]"></div>
          <div className="side-menu-nav h-[67vh] flex flex-col justify-evenly bg-white">
              <nav className="nav-items h[57vh] flex flex-col justify-center mx-4">
                  <div className="flex hover:bg-bwalaLight rounded-md
                   hover:border hover:border-borderGray h-10 w-44 pl-4 py-2
                  ">
                      <Dashboard className='text-[24px] mr-4' />
                      <span className='text-[16px] font-bold'>Overview</span>
                      
                  </div>
                  <div className="flex hover:bg-bwalaLight rounded-md
                   hover:border hover:border-borderGray h-10 w-44 pl-4 py-2
                  ">
                      <ShoppingBasketOutlined className='text-[24px] mr-4' />
                      <span className='text-[16px] font-bold'>Orders</span>
                      
                  </div>
                  <div className="flex hover:bg-bwalaLight rounded-md
                   hover:border hover:border-borderGray h-10 w-44 pl-4 py-2
                  ">
                      <DriveEtaOutlined className='text-[24px] mr-4' />
                      <span className='text-[16px] font-bold'>Drivers</span>
                      
                  </div>
                  <div className="flex hover:bg-bwalaLight rounded-md
                   hover:border hover:border-borderGray h-10 w-44 pl-4 py-2
                  ">
                      <PeopleAltOutlined className='text-[24px] mr-4' />
                      <span className='text-[16px] font-bold'>Customers</span>
                      
                  </div>
                  <div className="flex hover:bg-bwalaLight rounded-md
                   hover:border hover:border-borderGray h-10 w-44 pl-4 py-2
                  ">
                      <AddBoxOutlined className='text-[24px] mr-4' />
                      <span className='text-[16px] font-bold'>Products</span>
                      
                  </div>
                  <div className="flex hover:bg-bwalaLight rounded-md
                   hover:border hover:border-borderGray h-10 w-44 pl-4 py-2
                  ">
                      <StorefrontOutlined className='text-[24px] mr-4' />
                      <span className='text-[16px] font-bold'>Shops</span>
                      
                  </div>
              </nav>
              <div className="bottom-card flex h-[12vh] items-center justify-center ">
                  <div className="wrapper bg-bwalaPrimary hover:border-bwalaPrimary hover:border-2
                  h-[6vh] w-[12vw] rounded-md flex justify-center items-center bg">
                      <a href='https://admin-prod.duhqa.com/' className='flex justify-center items-center hover:text-bwalaPrimary'>
                        <p className='text-white text-base font-bold mt-4'>Back to Admin</p>
                      <ArrowBackRounded className='ml-2 text-white '/></a>
                  </div>
              </div>
          </div>
        </div>
    )
};