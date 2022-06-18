import React, { FC } from 'react'
import OrderChartsPage from './pages/Order';
import { OverviewComponent } from './pages/overview';
import { SideMenuComponent } from './side-menu/side-menu';

interface IMainApp {}

export const MainApp: FC<IMainApp> = () =>{
    return(
        <div className='w-screen h-screen flex items-center justify-center'>
        <SideMenuComponent/>
        <OverviewComponent/>
        </div>
    )
};