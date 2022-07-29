import  { FC, useEffect, useState } from 'react'
import imageholder from '../../assets/download.png'
import DropdownLogOut from '../components/dropdown';

import { logout } from "../../features/auth/authSlice";
import { NavLink } from 'react-router-dom';

import jwt_decode from 'jwt-decode';

import logo from '../../assets/analysis.png'

import {ArrowBackRounded, InventoryOutlined,
    DashboardOutlined, DriveEtaOutlined, PeopleAltOutlined, ShoppingBasketOutlined, 
    StorefrontOutlined } from '@mui/icons-material';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { Jwt } from '../../features/auth/Models/token';

    export const SidebarData = [
  {
    icon: DashboardOutlined,
    heading: "Overview",
    to: ''
  },
  {
    icon: StorefrontOutlined,
    heading: "Drivers",
    to: 'drivers'
  },
   {
     icon: ShoppingBasketOutlined,
    heading: "Orders",
    to: 'orders'

  },
  {
    icon: InventoryOutlined,
    heading: "Products",
    to: 'products'
  },
  {
    icon: PeopleAltOutlined,
    heading: 'Customers',
    to: 'customers'
  },
  {
    icon: DriveEtaOutlined,
    heading: 'Shops',
    to: 'Shops'
  },
];




export const SideMenuComponent: FC = () =>{

    const [selected, setSelected] = useState(0);
    const dispatch = useAppDispatch()
    
  const { isSuccess, isAuthenticated, jwt } = useAppSelector(
    (state) => state.auth
  );

   

    const onClickLogout= () => {
      dispatch(logout())
    }

    return(
        <div className='w-[210px] h-screen z-[1] overflow-hidden top-0 left-0 pt-1 bg-backgroundGray fixed'>
          <div className="side-menu-header bg-white h-[25vh] w-full 2xl:h-[20vh] flex flex-col justify-evenly">
             <div className='h-14 flex items-center'>
                  <img className='ml-[11px] mt-2 h-8 w-8'
              src={logo}
                  alt='bwala-logo'/>
                  <div className="w-full h-10 ">
                    <p className="mt-3 ml-2 text-lg font-normal">Duhqa Analytics</p>
                  </div>
             </div>
             <div className="duhqa-user-info w-full h-[10vh] flex justify-between ">
                 <div className="user-bio-wrapper h-[8vh] w-[10vw] flex py-[24px] px-[16px]
                 justify-evenly items-center">
                     <div className="image-wrapper h-[5vh] w-[5vw] rounded-full mb-3 " >
                         <img className='rounded-full h-12'src={imageholder} alt='holder'/>
                     </div>
                     <div className='flex flex-col ml-1 mt-2
                     h-[4vh] w-[4vw] items-center justify-center'>
                        <span className='text-xs mb-1'>Admin</span>
                        <span className='text-xs'>User</span>
                     </div>
                 </div>
                <div className="user-logout-dropdown  h-[1vh] w-[1vw] mr-5 mt-3">
                    <DropdownLogOut onClickHandler={onClickLogout}/>
                </div>
             </div>

          </div>
          <div className="h-[0.4vh]"></div>
          <div className="side-menu-nav h-[74vh] 2xl:h-[79vh] bg-white">
              <ul className="flex-col min-w-full flex list-none pt-1">
                  {SidebarData.map((item, index) => {
          return (
             <li onClick={() => setSelected(index)} key={index} className={selected === index ? " bg-bwalaLight h-10 w-full items-center flex item-center border-r-[3px] border-bwalaPrimary" : " h-10 w-full items-center flex item-center "}>
                                <NavLink
                                    to={item.to}
                                    className='text-black hover:text-black flex items-center pl-4'
                                   >
                                    <item.icon/>
                                    <p className='hover:text-bwalaPrimary font-light pl-6'>{item.heading}</p>
                                </NavLink>
                            </li>
                            
          );
        })}
              
</ul>
<div className="bottom-card flex h-[12vh] items-center justify-center ">
                  <div className="wrapper bg-bwalaPrimary hover:border-bwalaPrimary hover:border-2
                  h-[6vh] w-[15vw] rounded-md flex justify-center items-center bg">
                      <a href='https://admin-prod.duhqa.com/' className='flex justify-start items-center hover:text-bwalaPrimary'>
                        
                      <ArrowBackRounded className='text-white '/><span className='text-base text-white ml-1'>Back to Admin</span></a>
                  </div>
              </div>
          </div>
        </div>
    )
};