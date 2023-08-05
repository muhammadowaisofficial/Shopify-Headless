import React from 'react'
import {Facebook ,Instagram, Mail, Phone, Youtube } from 'lucide-react'
import Link from 'next/link'

function TopBar() {
  return (
    <div className='grid grid-cols-3 bg-[#1f1a53] py-2 px-4 justify-between'>
        <div className='Social-icon'>
            <ul className='flex gap-5 justify-start'>
                <li><Facebook className='w-6 h-6 text-white hover:text-red-600' /></li>
                <li><Instagram className='w-6 h-6 text-white hover:text-red-600' /></li>
                <li><Youtube className='w-6 h-6 text-white hover:text-red-600'/></li>
            </ul>
        </div>
        <div className='Text text-center'>
          <h5 className='text-white font-normal text-[14px]'>Welcome to My HeadLess Shopify Store</h5>
        </div>
        <div className='Info flex gap-5 justify-end'>
            <div className='flex gap-3'>
                <Mail className='w-6 h-6 text-white hover:text-red-600' />
                <Link className='text-white hover:text-red-600' href={'mailto:info@bestbuyagro.com'} aria-label='Phone-Number'>info@bestbuyagro.com</Link>
              </div>
              <div className='flex gap-3'>
                <Phone className='w-6 h-6 text-white hover:text-red-600' />
                <Link className='text-white hover:text-red-600' href={'tel:+923415306669'} aria-label='Phone-Number'>+92 341 5306 669</Link>
              </div>
        </div>
    </div>
  )
}

export default TopBar