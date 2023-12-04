// first think
import ButtonList from "@/components/ButtonListPlant";
import Maps from "@/components/Map/Maps";
import Sidebar from "@/components/Sidebar";
import { getPlantllist } from "@/libs/apiLibs";
import { MagnifyingGlass } from "@phosphor-icons/react/dist/ssr";


// const page = async () => {
//   const data = await getPlantllist()

//   return (
//     <>
//       <div className="bg-gray-200 h-screen flex items-center justify-end">
//         <Sidebar />
//         <div className="w-[85%] h-[98%] rounded-tl-lg rounded-bl-lg float-right bg-white shadow">
//           <div className="flex flex-row items-center">
//             <MagnifyingGlass size={26} className="absolute text-gray-500 pl-2" />
//             <input type="text" placeholder="Search" className="input input-ghost w-full p-2 pl-10 bg-white" />
//           </div>
//           <div className="mx-auto w-[95%] h-[50%]">
//             <Maps api={data} />
//           </div>
//           <ButtonList api={data} />
//         </div>
//       </div>
//     </>
//   )
// }

// export default page

// second think

const page = async () => {
  const data = await getPlantllist()
  return (
    <>
      <div className="bg-gray-200 h-screen flex items-center justify-end">
        <Sidebar />
        <div className="w-[85%] h-[98%] rounded-tl-lg rounded-bl-lg float-right bg-white shadow">
          <div className="flex flex-row items-center">
            <MagnifyingGlass size={26} className="absolute text-gray-500 pl-2" />
            <input type="text" placeholder="Search" className="input input-ghost w-full p-2 pl-10 bg-white" />
          </div>
          <div className="mx-auto w-full h-[95%] flex justify-center p-4">
            <div className="bg-blue-300 w-2/5 h-full rounded-lg">
              <Maps api={data} />
            </div>
            <div className="w-3/5 h-full overflow-y-auto">
              <ButtonList api={data} />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default page