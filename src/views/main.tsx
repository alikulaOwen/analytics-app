import React, { FC, useEffect, useState } from 'react'
import Orders from './pages/orders';
import { Routes, Route} from 'react-router-dom';

import { SideMenuComponent } from './side-menu/side-menu';
import { OverviewComponent } from './pages/overview';
import ShopChartsPage from './pages/shops';
import ProductsChartPage from './pages/products';
import DriversChartPage from './pages/drivers';
import { ScaleLoader } from 'react-spinners';

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
        <ScaleLoader color='#11b196' loading={isLoading}/> :
        <React.Fragment>
         <div className='w-screen h-screen flex items-center justify-center'>
            <SideMenuComponent/>
        <div className='w-[84vw] h-full bg-backgroundGray flex justify-center items-center'>
        
             <Routes>
                    <Route path="orders" element={<Orders/>} />
                    <Route path="shops" element={<ShopChartsPage/>} />
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