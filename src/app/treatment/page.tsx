'use client'

import ButtonList from "@/components/ButtonListPlant";
import DatePicker from "@/components/Form/DatePicker";
import Sidebar from "@/components/Sidebar";
import { MagnifyingGlass } from "@phosphor-icons/react/dist/ssr";
import Image from "next/image";
import { useState } from "react";

const page = () => {
  const [selectedDateTime, setSelectedDateTime] = useState<Date | null>(new Date());

  const handleDateTimeChange = (date: Date | null) => {
    setSelectedDateTime(date);
    console.log("Selected Date:", date?.toJSON());
  };

  return (
    <>
      <div className="bg-gray-200 h-screen flex items-center justify-end">
        <Sidebar />
        <div className="w-[85%] h-[98%] rounded-tl-lg rounded-bl-lg float-right bg-white shadow">
          <div className="flex flex-row items-center">
            <MagnifyingGlass size={26} className="absolute text-gray-500 pl-2" />
            <input type="text" placeholder="Search" className="input input-ghost w-full p-2 pl-10 bg-white" />
          </div>
          <div>
            <div className="w-full h-full mx-auto">
              <div className="bg-blue-300 mt-4 mx-auto p-1 w-3/4 flex flex-row justify-center">
                <div className="w-1/2 grid grid-flow-row">
                  <form>
                    <div>
                      <select className="select w-full max-w-xs">
                        <option disabled selected>Pick your favorite Simpson</option>
                        <option>Homer</option>
                        <option>Marge</option>
                        <option>Bart</option>
                        <option>Lisa</option>
                        <option>Maggie</option>
                      </select>
                    </div>
                    <div>
                      <select className="select w-full max-w-xs">
                        <option disabled selected>Pick your favorite Simpson</option>
                        <option>Homer</option>
                        <option>Marge</option>
                        <option>Bart</option>
                        <option>Lisa</option>
                        <option>Maggie</option>
                      </select>
                    </div>
                    <div>
                      <textarea className="textarea" placeholder="Bio"></textarea>
                    </div>
                    <div>
                      <DatePicker label="Select Date and Time" value={selectedDateTime} onChange={handleDateTimeChange} />
                    </div>
                  </form>
                </div>
                <div className="w-1/2">
                  <Image src="/treatment-durian.png" alt="/" height={500} width={500} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

    </>
  )
}

export default page