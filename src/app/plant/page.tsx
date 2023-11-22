'use client'

import ButtonList from "@/components/ButtonListPlant";
import Sidebar from "@/components/Sidebar";
import { getPlantllist } from "@/libs/apiLibs";
import { MagnifyingGlass } from "@phosphor-icons/react/dist/ssr";
import { useEffect, useState } from "react";

const page = async () => {
  // const [data, setData] = useState<any | null>(null);

  const data = await getPlantllist()

  // useEffect(() => {
  //   const fetchData = async () => {
  //     const data = await getPlantllist()
  //     setData(data)
  //   }
  //   fetchData()
  // }, [])

  return (
    <>
      <div className="bg-gray-200 h-screen flex items-center justify-end">
        <Sidebar />
        <div className="w-[85%] h-[98%] rounded-tl-lg rounded-bl-lg float-right bg-white shadow">
          <div className="flex flex-row items-center">
            <MagnifyingGlass size={26} className="absolute text-gray-500 pl-2" />
            <input type="text" placeholder="Search" className="input input-ghost w-full p-2 pl-10 bg-white" />
          </div>
          <ButtonList api={data} />
        </div>
      </div>

    </>
  )
}

export default page