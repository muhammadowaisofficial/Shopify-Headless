import Link from 'next/link'
import React from 'react'


export const GetQuoteSec = () => {
  return (
    <div className="text-sec w-[100%] flex items-center h-[75vh] bg-transparent bg-[url('/images/quote-bg.webp')] bg-cover">
    <div className='main-text px-12 flex flex-col justify-center items-center w-full gap-9'>
    <h1 className='text-[40px] leading-[52px] font-bold text-white'>BESTBUY AGRO IMPLEMENTS TRACTORS</h1>
    <Link className='text-black bg-white py-3 px-7 text-[18px] font-semibold underline' href={'/about-us'} aria-label='Get Quote Link' target='_blank'> Learn More </Link>
    </div>
</div>
  )
}
