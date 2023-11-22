'use client'

import Jumbotron from "@/components/Jumbotron";
import Sidebar from "@/components/Sidebar";
import TreatmentCard from "@/components/Treatment/TreatmentCard";
import { getDataTreatmentgraph, getPlantById, weatherApi, weatherApiCode } from "@/libs/apiLibs";
import { MagnifyingGlass, Sun } from "@phosphor-icons/react/dist/ssr";
import Image from "next/image";
import Link from "next/link";

const page = async ({ params: { id } }: { params: { id: string } }) => {
  
  const plant = await getPlantById(id)
  const wet = await weatherApi()
  const dataMon = await getDataTreatmentgraph(id)

  interface DataItem {
    month: string;
    count_pemupukan: number;
    count_penyiraman: number;
    count_kocor: number;
    count_peruning: number;
    count_semprot: number;
    count_bersih_gulma: number;
  }

  const count_pemupukan: number[] = dataMon.data?.map((item: DataItem) => item.count_pemupukan);
  const count_penyiraman: number[] = dataMon.data?.map((item: DataItem) => item.count_penyiraman);
  const count_kocor: number[] = dataMon.data?.map((item: DataItem) => item.count_kocor);
  const count_peruning: number[] = dataMon.data?.map((item: DataItem) => item.count_peruning);
  const count_semprot: number[] = dataMon.data?.map((item: DataItem) => item.count_semprot);
  const count_bersih_gulma: number[] = dataMon.data?.map((item: DataItem) => item.count_bersih_gulma);
  const months: string[] = dataMon.data?.map((item: DataItem) => item.month);
  
  const currentTime = new Date();
  const currentHour = currentTime.getHours();

  const dataWeather = await weatherApiCode()

  const lastTemp = wet.hourly.temperature_2m[currentHour]
  const lastWeather = wet.hourly.weather_code[currentHour]
  const resultWeather = dataWeather[lastWeather.toString()].day
  // const resultImageW = resultWeather.images
  // console.log(resultWeather.image)
  const namePlant = plant.data.name.toUpperCase().replace('-', ' ')
  
  return (
    <>
    <div className="bg-gray-200 h-screen flex items-center justify-end">
      <Sidebar />
      <div className="w-[85%] h-[98%] rounded-tl-lg rounded-bl-lg float-right flex flex-col bg-white shadow">
        <div className="flex flex-row items-center mx-auto w-[96%]">
          <MagnifyingGlass size={26} className="absolute text-gray-500 pl-2"/>
          <input type="text" placeholder="Search" className="input input-ghost w-full p-2 pl-10 bg-white" />
        </div>
        <div className="mx-auto w-[96%]">
          <div className="mx-auto p-2 w-[50%] h-96 rounded-lg shadow flex justify-between items-center relative float-left">
            {/* group */}
            <div className="relative w-full h-full rounded-lg text-black flex flex-col justify-center items-center bg-gradient-to-br from-green-500 to-emerald-500 hover:cursor-pointer" onClick={()=>alert("hallo")}>
              <div className="text-5xl font-bold text-white pb-10">
                <h3>{namePlant}</h3>
              </div>
              <h3 className="text-6xl font-bold text-white">{lastTemp} °C</h3>
              <div className="flex flex-row justify-center gap-2 py-2">
                {/* <Sun color="#ffff00" size={32}/> */}
                {/* <Image src={"http://openweathermap.org/img/wn/03d@2x.png"} width={10} height={10} alt="/"/> */}
                <h3 className="text-xl text-white">{resultWeather.description}</h3>
              </div>
            </div>
            {/* group */}
          </div>
          <Jumbotron data="47b54c" srcImage={plant.data.image_url}/>
        </div>
        <div className="p-2 overflow-y-auto">
          <div className="mx-auto w-[97%] h-full ">
              <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 place-items-center gap-4">
                  <Link href={`/plant/${id}/table`}>
                    <TreatmentCard title="Kocor" black={true} data={count_kocor} month={months}/>
                  </Link>
                  <Link href={`/plant/${id}/table`}>
                    <TreatmentCard title="Peruning" black={false} data={count_peruning} month={months}/>
                  </Link>
                  <Link href={`/plant/${id}/table`}>
                    <TreatmentCard title="Pemupukan" black={true} data={count_pemupukan} month={months}/>
                  </Link>
                  <Link href={`/plant/${id}/table`}>
                    <TreatmentCard title="Penyiraman"black={false} data={count_penyiraman} month={months}/>
                  </Link> 
                  <Link href={`/plant/${id}/table`}>
                    <TreatmentCard title="Semprot" black={true} data={count_semprot} month={months}/>
                  </Link> 
                  <Link href={`/plant/${id}/table`}>
                    <TreatmentCard title="Gulma" black={false} data={count_bersih_gulma} month={months}/>
                  </Link>              
              </div>
          </div>
        </div>
      </div>
    </div>
    </>
  )
}

export default page