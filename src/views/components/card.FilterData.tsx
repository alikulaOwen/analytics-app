import { ArrowBack } from '@mui/icons-material';
import { IconButton } from '@mui/material';
import { Table } from 'antd';
import axios from 'axios';
import React, { FC, useEffect, useState } from 'react'
import { useAppSelector } from '../../app/hooks';
import { Order, OrdersItem } from '../../features/orderAnalytics/models/orders';
interface ICard {
    neighborhood: string
}



export const Card: FC<ICard> = ({neighborhood}) => {
    const [data, setData] = useState<Order>()
    const [back, setBack] = useState<boolean>(false)

    const { isSuccess, isAuthenticated, isError, isLoading, message, jwt } = useAppSelector(
        (state) => state.auth
    );
    useEffect(() => {
        const headers = {
            'Authorization': `Bearer ${jwt}`,
            'content-type': 'application/json'
        };
        const body = { "text": null, "sort": "-preferredDeliveryTimeUtc", "status": null, "shopDeliverable": true, "shopVerified": true, "preferredDeliveryTimeUtcFrom": "2022-07-20 00:00:00", "preferredDeliveryTimeUtcTo": "2022-07-20 23:59:59", "page": 0, "pageSize": 100 }

        async function fetchData() {
            await axios.put('https://apiv2.duhqa.com/api/v1.0/Orders/Query', body, { headers }).then(res => {
                setData(res.data)
            })

        }
        fetchData();
    }, [jwt]);
    let dataList: OrdersItem[] = [];
    if(data !== undefined){
        dataList = [...data['items']]
    }
    console.log(dataList);
    function getNeighborhoodData(){
        let list = []
        for(let i = 0; i < dataList.length; i++){
            const item: OrdersItem = dataList[i]
            if(item.shop.neighbourhood.name === neighborhood){
                list.push(dataList[i]);
            }
        }
        return list;
    }
    let dataItems = getNeighborhoodData()
    const onChange = (pagination: any, filters: any, sorter: any, extra: any) => {
        console.log('params', pagination, filters, sorter, extra);
    };
    const columns: Array<{}> = [
        {
            title: 'Order Id',
            dataIndex: 'orderNumber',
            filters: [
                {
                    text: 'Joe',
                    value: 'Joe',
                },
                {
                    text: 'Jim',
                    value: 'Jim',
                },
                {
                    text: 'Submenu',
                    value: 'Submenu',
                    children: [
                        {
                            text: 'Green',
                            value: 'Green',
                        },
                        {
                            text: 'Black',
                            value: 'Black',
                        },
                    ],
                },
            ],
            // specify the condition of filtering result
            // here is that finding the name started with `value`
            onFilter: (value: any, record: any) => record.name.indexOf(value) === 0,
            sorter: (a: any, b: any) => a.name.length - b.name.length,
            sortDirections: ['descend'],
        },
        {
            title: 'Delivery Time',
            dataIndex: 'age',
            defaultSortOrder: 'descend',
            sorter: (a: any, b: any) => a.age - b.age,
        },
        {
            title: 'Address',
            dataIndex: 'address',
            filters: [
                {
                    text: 'London',
                    value: 'London',
                },
                {
                    text: 'New York',
                    value: 'New York',
                },
            ],
            onFilter: (value: any, record: any) => record.address.indexOf(value) === 0,
        },
    ];

    const dataTmp: Array<{}> = [
 ...dataItems
];
  return (
      

        <div className='w-[96%] min-h-[400px] bg-searchInputBgColor flex flex-col items-center p-2'>
            <div className="flex justify-between items-center w-full h-20 mx-4">
                <IconButton onClick={() => setBack(true)} className="h-12 w-12 my-3 ">
                    <ArrowBack className="hover:bg-bwalaLight h-11 w-11 rounded-full" />
                </IconButton>
                <h3 className='font-bold text-lg m-4 underline'> {neighborhood}
                </h3>
            </div>
            <div className="h-full w-full">

                <Table columns={columns} dataSource={dataTmp} onChange={onChange} />
            </div>

        </div>
     
  )
}
