
import { Chart } from "react-google-charts";



export default function ShopChartsPage() {
  const data = [
  ["Year", "Sales", "Expenses", "Profit"],
  ["2014", 1000, 400, 200],
  ["2015", 1170, 460, 250],
  ["2016", 660, 1120, 300],
  ["2017", 1030, 540, 350],
];

const options = {
  chart: {
    title: "Company Performance",
    subtitle: "Sales, Expenses, and Profit: 2014-2017",
  },
};


  return (
  
  <div className='bg-backgroundGray w-[84vw] h-full flex  justify-center items-center'>
     {/* <div className='h-[96%] w-[98%]'>
       <div className='top h-[10%] w-full justify-start  flex items-center p-5'>
       </div>
       <div className='bottom h-[90%] flex items-center justify-evenly'>
         <div className=' h-[96%] w-[75%]'>
         </div>
         <div className='h-[96%] w-[22%]'>

         </div>
       </div>

     </div> */}



  
    <Chart
      chartType="Bar"
      width="100%"
      height="400px"
      data={data}
      options={options}
    />
     
    </div>
  )
}
