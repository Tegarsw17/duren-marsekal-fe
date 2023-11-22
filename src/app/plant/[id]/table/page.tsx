'use client'

import Sidebar from '@/components/Sidebar'
import TableTreatment from '@/components/Table/table_treatment'
import { getDataTreatment } from '@/libs/apiLibs'
import { useSearchParams } from 'next/navigation'
import React, { useEffect, useState } from 'react'

type ApiResponse = {
  error: boolean;
  message: string;
  data: PlantTreatmentData
}

interface PlantTreatmentDatas {
  id: string
  type_treatment: string
  plant_id: string
  detail: string
  date_done: string
}

interface PlantTreatmentData {
  name: string
  treatment: PlantTreatmentDatas[]
}

const page = ({ params: { id } }: { params: { id: string } }) => {

  const [selectedOption, setSelectedOption] = useState<string>(" ");
  const [apiResponse, setApiResponse] = useState<ApiResponse | null>(null);

  const handleSelectChange = async (event: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedValue = event.target.value
    setSelectedOption(selectedValue)

  }

  useEffect(() => {
    const fetchData = async () => {
      if (selectedOption) {
        try {
          setApiResponse(await getDataTreatment(id, selectedOption))
        } catch (error) {
          console.log(error)
        }
      }
    }
    fetchData()
  }, [selectedOption])

  return (
    <>
      <div className="bg-gray-200 h-screen flex items-center justify-end">
        <Sidebar />
        <div className="w-[85%] h-[98%] rounded-tl-lg rounded-bl-lg float-right flex flex-col bg-white shadow">
          <div className='mx-auto w-[96%] py-4'>
            <select onChange={handleSelectChange} className='w-52 p-1 pl-4 font-medium rounded bg-green-100'>
              <option value=" ">All Treatment</option>
              <option value="Penyiraman">Penyiraman</option>
              <option value="Pemupukan">Pemupukan</option>
              <option value="Kocor">Kocor</option>
              <option value="Peruning">Peruning</option>
              <option value="Semprot">Semprot</option>
            </select>
          </div>
          <TableTreatment api={apiResponse} />
        </div>
      </div>
    </>
  )
}

export default page