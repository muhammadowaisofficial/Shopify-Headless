import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

function Banner() {
  return (
    <div className='main-banner h-screen flex justify-center items-center'>
        <div className='image-sec w-[60%]'>
            <Image src={'/images/banner-bg4.webp'} width={1105} height={900} alt='Banner Left Image' className='h-screen w-[100%]' />
        </div>
        <div className="text-sec w-[40%] flex items-center h-screen bg-transparent bg-[url('/images/banner-bg2.webp')] bg-cover">
            <div className='main-text px-12'>
            <h1 className='text-[28px] leading-[35px] font-bold text-white'>Powering progress, Pakistan's tractor reigns!</h1>
            <p className='text-white text-base pt-4 pb-6'>Welcome to Best Buy Agro where you will find Products, Machinery, Services and Support related to land and agriculture. We are one of the top notch agricultural implements and machinery manufacturing firm of Pakistan since 2007. We offer the best combination of pricing, economy and high standard products and services.</p>
            <Link className='text-white text-[18px] underline' href={'/contact-us'} aria-label='Get Quote Link' target='_blank'> Get a Quote </Link>
            </div>
        </div>
    </div>
  )
}

export default Banner