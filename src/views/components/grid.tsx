import { FC, MouseEventHandler } from 'react'

interface IGrid{
    list: any[][],
    hidden: boolean,
    stateHandler: MouseEventHandler<HTMLDivElement>,
    
}

export const GridBwala: FC<IGrid> = ({list,hidden,stateHandler}) => {
  return (
   
          <div className={hidden ? 'hidden ' : 'w-full min-h-[400px] bg-searchInputBgColor flex justify-start flex-wrap p-2 rounded-md'}>
              {

                  list.map((el: any, i: number) => {

                      return <div onClick={()=>{
                         
                      }} key={i} className={`pointer container w-[24%] h-[200px] hover:bg-bwalaLight  m-1 rounded-md shadow-md drop-shadow-md`}>
                          <div className="w-full h-full flex flex-col justify-center items-center ">
                              <h1 className="text-lg font-bold ">{el[0]}</h1>
                          </div>

                      </div>
                  })
              }
          </div>
    
  )
}
