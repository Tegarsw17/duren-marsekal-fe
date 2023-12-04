import Sidebar from "@/components/Sidebar"
import TableTreatmentRequest from "@/components/Table/treatment_request"
import { getAllTreatmentNotDone } from "@/libs/apiLibs";
import { MagnifyingGlass } from "@phosphor-icons/react/dist/ssr";


const page = async () => {
  return (
    <>
      <div className="bg-gray-200 h-screen flex items-center justify-end">
        <Sidebar />
        <div className="w-[85%] h-[98%] rounded-tl-lg rounded-bl-lg float-right flex flex-col bg-white shadow">
          <div className="flex flex-row items-center">
            <MagnifyingGlass size={26} className="absolute text-gray-500 pl-2" />
            <input type="text" placeholder="Search" className="input input-ghost w-full p-2 pl-10 bg-white" />
          </div>
          <TableTreatmentRequest />
        </div>
      </div>
    </>
  )
}

export default page