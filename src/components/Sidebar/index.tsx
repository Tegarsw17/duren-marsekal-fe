'use client'

import { Tree } from '@phosphor-icons/react/dist/ssr'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React from 'react'

const Sidebar = () => {
    const pathname=usePathname();

    const isActive = (path:string)=>{
        let paths=pathname.split('/')
        const pathss = `/${paths[1]}`
        return pathss===path;
    }
    
  return (
    <div className='w-[15%] h-[98%] bg-gray-200 px-5'>
        <div className='w-full h-full rounded'>
            {/* Sidebar Content */}
            <Link href="/">
                <div className='flex flex-row items-center justify-center gap-2 text-gray-800'>
                    <Tree size={26}/>
                    <h3 className='text-xl py-2'>DUMAS</h3>
                </div>
            </Link>
            <div className='flex flex-col p-1 gap-1'>
                <Link href="/plant" className={`p-2 rounded ${isActive('/plant')?'bg-white shadow':''} hover:bg-gray-300`}>Plant</Link>
                <Link href="/treatment" className={`p-2 rounded ${isActive('/treatment')?'bg-white shadow':''} hover:bg-gray-300`}>Treatment</Link>
                {/* <Link href="" className='p-2 rounded'>uhuy</Link> */}
            </div>
        </div>
    </div>
  )
}

export default Sidebar