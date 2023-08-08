import React from 'react'
import { Featured } from './Featured'

function BestProduct() {
  return (
    <div className='bg-gray-100 py-12'>
        <h1 className='text-[28px] leading-[35px] font-bold text-center text-black'>Best Products</h1>
        <div className='Product-slider'>
          <Featured collectionHandle="staff-picks" />
        </div>
    </div>
  )
}

export default BestProduct