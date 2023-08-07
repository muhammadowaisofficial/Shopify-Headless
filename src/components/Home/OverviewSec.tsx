import Image from 'next/image'
import React from 'react'

function OverviewSec() {
  return (
    <div className='main-banner h-screen flex justify-center items-center'>
        <div className='image-sec w-[50%]'>
            <Image src={'/images/CompanyOverview1.webp'} width={1105} height={900} alt='Banner Left Image' className='h-screen' />
        </div>
        <div className="text-sec w-[50%] flex items-center h-screen bg-transparent bg-[url('/images/CompanyOverview-bg.webp')] bg-cover">
            <div className='main-text px-12'>
            <h1 className='text-[28px] leading-[35px] font-bold text-white'>Company Overview</h1>
            <p className='text-white text-base pt-4 pb-6'>With over 15 years of experience, BestBuy Agro is one of the leading Agricultural machinery supplier in Nigeria and other West African countries. BestBuy Agro is one of the most reputable Farming Machinery supplier in Nigeria and around the globe. We at BestBuy Agro offer original machinery that are best in price and high standard quality. BestBuy Agro deals in original brand new Massey Ferguson Tractors (50 HP to 120 HP 2wd and 4wd) with agricultural implements. We also deal in Tricycles, Poultry Equipment, Oil Expellers and Feed Mills. Customers are always our first preference and we do our utmost to satisfy them by importing Original Tractors and Machinery.</p>
            </div>
        </div>
    </div>
  )
}

export default OverviewSec