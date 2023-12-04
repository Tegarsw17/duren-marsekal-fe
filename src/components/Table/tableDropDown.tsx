'use client'

import React, { useState } from 'react'

type ApiResponse = {
  error: boolean;
  message: string;
  data: PlantTreatmentData
}

interface PlantTreatmentDatas {
  id: string
  type_treatment: string
  detail: string
  date_done: string
}

interface PlantTreatmentData {
  name: string
  treatment: PlantTreatmentDatas[]
}

const TableDropDown = () => {
  const [selectedOption, setSelectedOption] = useState<string>('');
  const [apiResponse, setApiResponse] = useState<ApiResponse | null>(null);

  const handleSelectChange = async (event: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedValue = event.target.value
    setSelectedOption(selectedValue)
    console.log(selectedOption)

    // setApiResponse(await getDataTreatment(id,selectedOption))
  }
  return (
    <div className='mx-auto w-[96%] py-4'>
      <select onChange={handleSelectChange} className='w-52 p-1 pl-4 font-medium rounded bg-green-100'>
        {/* <option disabled className='text-gray-400'>Pilih treatment</option> */}
        <option value="Penyiraman">Penyiraman</option>
        <option value="Pemupukan">Pemupukan</option>
        <option value="Kocor">Kocor</option>
        <option value="Peruning">Peruning</option>
        <option value="Semprot">Semprot</option>
      </select>
    </div>
  )
}

export default TableDropDown