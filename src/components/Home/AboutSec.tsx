import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

function AboutSec() {
  return (
    <div className='main-banner h-screen flex justify-center items-center'>
        <div className="text-sec w-[50%] flex items-center h-screen bg-transparent bg-[url('/images/banner-bg2.webp')] bg-cover">
            <div className='main-text px-12'>
            <h1 className='text-[28px] leading-[35px] font-bold text-white'>About Us</h1>
            <p className='text-white text-base pt-4 pb-6'>Best Buy Agro Farm, which was founded in 2007 as an agricultural enterprise, has grown to become one of the most reputable suppliers of Massey Ferguson tractors in Pakistan and around the world. Agriculture equipment, farm machinery, and world-class tricycle passenger vehicles are all produced by Best Buy Agro. We have happy clients searching for the ideal balance of cost, efficiency, and high standards. Best Buy Agro Farm Industries rises to the top as the most affordable and dependable business in the agriculture industry.</p>
            <Link className='text-white text-[18px] underline' href={'/about-us'} aria-label='Get Quote Link' target='_blank'> Learn More </Link>
            </div>
        </div>
        <div className='image-sec w-[50%]'>
            <Image src={'/images/about-img.webp'} width={960} height={758} alt='Banner Left Image' className='h-screen' />
        </div>
    </div>
  )
}

export default AboutSec