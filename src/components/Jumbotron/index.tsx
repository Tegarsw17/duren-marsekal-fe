import { CaretLeft, CaretRight } from '@phosphor-icons/react/dist/ssr'
import Image from 'next/image';
import React from 'react'

type JumbotronProps = {
    data: string;
    srcImage:string;
  };

const Jumbotron:React.FC<JumbotronProps> = ({data,srcImage}) => {
  const cls: string =`mx-auto p-2 w-[50%] h-96 bg-[#${data}] rounded-lg shadow flex justify-between items-center relative float-right`
  return (
    <div className={cls}>
      <div className="relative w-full h-full">
        <Image src={srcImage} alt='/' width={800} height={800} className='w-full h-full rounded-lg object-cover'/>
        <div className='absolute inset-0 flex justify-between items-center z-10'>
          <CaretLeft size={40} weight="bold" className='text-gray-300 hover:cursor-pointer hover:text-blue-400'/>
          <CaretRight size={40} weight="bold" className='text-gray-300 hover:cursor-pointer hover:text-blue-400'/>
        </div>
      </div>
    </div>
  )
}

export default Jumbotron