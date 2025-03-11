import React, { useEffect, useState } from 'react'

export default function ProgressBarAdapt({ xpInMoment, xpToGet, rangeBar, rangerBarRank, CountStartRow }) {
  const [barPercent, setBarPercent] = useState(0)
  useEffect(() => {
    const getXpForFullBar = () => {
      const calculumnForFullBar = (xpInMoment / xpToGet) * 100
      setBarPercent(calculumnForFullBar)
    }
    getXpForFullBar();
  }, [barPercent])

  return (
    <div className={`flex ${CountStartRow ? "flex-col-reverse " : "flex-col"} w-full  ${rangeBar ? "px-2" : "px-0"} font-jersey   items-center `}>
      {!rangerBarRank ? CountStartRow ?
        <div className='flex w-full justify-start items-center space-x-2  '>
          <div className=''>
            <p className={`text-white text-xs `}>{xpInMoment}</p>
          </div>
          <div className=''>
            <span className={`flex w-2 h-2 bg-gradient-to-l rounded-full from-orange-500 to-orange-600`}></span>
          </div>
          <div className=''>
            <p className={`text-white text-xs `}>{xpToGet}</p>
          </div>
          </div>
          :
          <p className={`text-white text-xs `}>{xpInMoment}/{xpToGet}</p>:null}
          

        
       
      <div className={`flex w-full ${rangeBar ? " w-full h-[4px]" : "w-full h-[10px]"} bg-white rounded-full`}>
        <span className={` transition-all delay-150 duration-500 flex h-full rounded-full w-0 bg-green-500`} style={{ width: `${barPercent + "%"}` }}></span>
      </div>
      {rangerBarRank ?
        <div className='flex w-full justify-end '>
          <p className='text-white text-base'>{xpInMoment}/{xpToGet}</p>
        </div>
        : null}
    </div>
  )
}
