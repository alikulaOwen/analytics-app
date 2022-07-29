import React, { FC, useEffect, useState } from 'react'
import { Routes, Route} from 'react-router-dom';

import { SideMenuComponent } from './side-menu/side-menu';
import { OverviewComponent } from './pages/overview';
import Shops from './pages/shops';
import ProductsChartPage from './pages/products';
import DriversChartPage from './pages/drivers';
import { ScaleLoader } from 'react-spinners';
// import { Orders } from './pages/orders';

interface IMainApp {}

export const MainApp: FC<IMainApp> = () =>{
   
  const [isLoading, setLoading]= useState(true);

      useEffect(() => {
  
    // Wait for 3 seconds
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, []);
  
  
    return(
      
        isLoading? 
        <div className='flex justify-center items-center w-screen h-screen'><ScaleLoader color='#11b196' loading={isLoading} /> </div> :
        <React.Fragment>
          <div className='w-screen h-full overflow-x-hidden'>
            <SideMenuComponent/>
         <div className=' ml-[195px] py-0 px-[10px] bg-backgroundGray flex justify-center items-center'>
        
             <Routes>
                    {/* <Route path="orders" element={<Orders/>} /> */}
                    <Route path="shops" element={<Shops/>} />
                    <Route path="products" element={<ProductsChartPage/>} />
                    <Route path="drivers" element={<DriversChartPage/>} />
                    <Route path="customers" element={<ProductsChartPage/>} />
                    <Route path="" element={<OverviewComponent/>} />
            </Routes>
           
        </div>
        
        
        </div>
        </React.Fragment>
    )
};