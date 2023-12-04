import RequestTreatment from "@/components/Form/RequestTreatment";
import Sidebar from "@/components/Sidebar";
import { MagnifyingGlass } from "@phosphor-icons/react/dist/ssr";
import Image from "next/image";

const page = async () => {

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
                            <div className="bg-blue-50 rounded-lg mt-4 mx-auto p-1 w-3/4 flex flex-row justify-center">
                                <div className="w-1/2 p-4">
                                    <RequestTreatment />
                                </div>
                                <div className="w-1/2">
                                    <Image src="/treatment-durian.png" className="rounded-r-xl" alt="/" height={500} width={500} />
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