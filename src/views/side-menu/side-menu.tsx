import  { FC, useState } from 'react'
import imageholder from '../../assets/download.png'
import DropdownLogOut from '../components/dropdown';

import { logout } from "../../features/auth/authSlice";
import { NavLink } from 'react-router-dom';

import {ArrowBackRounded, InventoryOutlined,
    DashboardOutlined, DriveEtaOutlined, PeopleAltOutlined, ShoppingBasketOutlined, 
    StorefrontOutlined } from '@mui/icons-material';
import { useAppDispatch } from '../../app/hooks';

    export const SidebarData = [
  {
    icon: DashboardOutlined,
    heading: "Overview",
    to: 'overview'
  },
  {
    icon: ShoppingBasketOutlined,
    heading: "Orders",
    to: 'orders'
  },
   {
    icon: StorefrontOutlined,
    heading: "Shops",
    to: 'shops'

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
    heading: 'Drivers',
    to: 'drivers'
  },
];




export const SideMenuComponent: FC = () =>{

    const [selected, setSelected] = useState(0);
    const dispatch = useAppDispatch()

    const onClickLogout= () => {
      dispatch(logout())
    }

    return(
        <div className='w-[200px] h-screen bg-backgroundGray flex-1'>
          <div className="side-menu-header bg-white h-[25vh] w-full 2xl:h-[20vh]">
             <div className='py-[24px] px-[16px]'>
                  <img 
                  src='https://admin-prod.duhqa.com/static/media/bwala_logo.030aa2d1.svg'  
                  alt='bwala-logo'/>
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