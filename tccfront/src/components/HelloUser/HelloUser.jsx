import React from 'react'
import RankingViewProgress from '../RankingViewProgress/RankingViewProgress'
import usePhotoMockData from '../../hooks/UserMockHook/UserMockHook'


export default function HelloUser({ IconBadgeRank }) {
    const {userPhoto} = usePhotoMockData()
    return (
        <div className='flex w-full transition-all delay-100 duration-200 ease-in-out rounded-lg font-poppins gap-y-3 md:gap-x-0 gap-x-32  md:justify-between justify-center flex-wrap items-center bg-black/80 py-4 px-6 '>
            <div className=' w-fit flex items-center flex-wrap justify-center gap-y-3 md:gap-y-0 gap-x-4'>
                <div className=' rounded-full'>
                    <span className='flex bg-slate-500 rounded-full'>
                        <img src={userPhoto.medium} alt="" className='w-[65px] h-[65px] rounded-full' />
                    </span>
                </div>
                <div className=''>
                    <p className='text-white font-bold'>Olá Caio!</p>
                    <p className='text-white text-xs'>Suas Moedas: 300 C</p>
                </div>
            </div>

            <div className=''>
                <RankingViewProgress IconBadgeRank={IconBadgeRank} NameRank={'Bronze'} />
            </div>
        </div>
    )
}
