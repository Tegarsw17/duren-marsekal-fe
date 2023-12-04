'use client'
import { generateDate } from "@/libs/GenereateDate";
import { getAllTreatmentNotDone } from "@/libs/apiLibs";
import Link from "next/link";
import { useEffect, useState } from "react";

interface AllData {
    api: ApiResponse | null;
}
interface ApiResponse {
    error: boolean;
    message: string;
    data: PlantTreatment[]
}
interface PlantTreatment {
    id: string
    name: string
    type_treatment: string
    due_date: string
    detail: string
}

const TableTreatmentRequest = () => {
    const [api, setApi] = useState<ApiResponse | null>(null);
    useEffect(() => {
        const fetchData = async () => {
            try {

                setApi(await getAllTreatmentNotDone())
            } catch (error) {
                console.log(error)
            }
        }
        fetchData()
    }, [])
    return (
        <div className="overflow-y-auto">
            <div className='mx-auto w-[96%] pt-2'>
                <table className="table table-xs table-zebra">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>No</th>
                            <th>Nama Tumbuhan</th>
                            <th>Treatment</th>
                            <th>Keterangan</th>
                            <th>Tanggal Selesai</th>
                            <th>Detail</th>
                        </tr>
                    </thead>
                    <tbody>
                        {api?.data ? (api?.data.map((treat, index) => (
                            <tr key={index}>
                                <th>{index + 1}</th>
                                <td>{treat.name}</td>
                                <td>{treat.type_treatment}</td>
                                <td>{treat.detail}</td>
                                <td>{treat.due_date ? generateDate(treat.due_date) : "-"}</td>
                                <td>
                                    <Link href={`/plant/${treat.id}`}>
                                        <button className='w-14 bg-gray-800 p-1 text-white rounded'>Detail</button>
                                    </Link>
                                </td>
                            </tr>
                        ))) : (
                            <tr>
                                <td colSpan={6} className='text-center text-lg font-bold'>Data Not Found</td>
                            </tr>
                        )

                        }
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default TableTreatmentRequest