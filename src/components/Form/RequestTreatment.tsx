'use client'

import DatePicker from "@/components/Form/DatePicker";
import { getPlantllist } from "@/libs/apiLibs";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

interface PlantData {
    id: string;
    name: string;
}

interface ApiData {
    error: boolean;
    message: string;
    data: PlantData[];
}

const RequestTreatment = () => {
    const router = useRouter()
    const [succes, setSucces] = useState(false)
    const [dataPlant, setDataPlant] = useState<ApiData | null>(null)
    const [selectedDateTime, setSelectedDateTime] = useState<Date | null>(new Date());
    const [formData, setFormData] = useState({
        name_plant: '',
        type_treatment: '',
        detail: '',
    });

    const handleDateTimeChange = (date: Date | null) => {
        setSelectedDateTime(date);
    };
    const submitReqTreat = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const formData = new FormData(event.currentTarget);
        const response = await fetch(`http://127.0.0.1:8080/plant/${formData.get("name_plant")}/treatment?req_treat=true`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                type_treatment: formData.get("type_treatment"),
                detail: formData.get("detail"),
                due_date: selectedDateTime?.toJSON(),
            })
        })
        if (response.ok) {
            setSucces(true);
            // (document.getElementById("requestTreatForm") as HTMLInputElement).reset();
        }

        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
    }
    useEffect(() => {
        const fetchData = async () => {
            setDataPlant(await getPlantllist())
        }
        fetchData()
    }, [])
    return (
        <div>
            <form onSubmit={submitReqTreat}>
                <div>
                    <select name="name_plant" defaultValue={''} className="select select-bordered w-full my-2">
                        <option value="" disabled>Nama Tanaman</option>
                        {dataPlant?.data.map((plant, index) => (
                            <option value={plant.id} key={index}>{plant.name}</option>
                        ))}

                    </select>
                </div>
                <div>
                    <select name="type_treatment" defaultValue={''} className="select select-bordered w-full my-2">
                        <option value="" disabled>Jenis Treatment</option>
                        <option value="Penyiraman">Penyiraman</option>
                        <option value="Pemupukan">Pemupukan</option>
                        <option value="Kocor">Kocor</option>
                        <option value="Peruning">Peruning</option>
                        <option value="Semprot">Semprot</option>
                    </select>
                </div>
                <div>
                    <input type="text" name="detail" placeholder="Masukkan Detail" className="input input-bordered w-full my-2" />
                </div>
                <div>
                    <DatePicker label="" value={selectedDateTime} onChange={handleDateTimeChange} />
                </div>
                <div>
                    <input type="submit" value="Submit" className="mt-2 btn btn-outline" />
                </div>
            </form>
            {succes ? (
                <div role="alert" className="alert alert-success mt-4">
                    <svg xmlns="http://www.w3.org/2000/svg" className="stroke-current shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                    <span>Request berhasil dibuat</span>
                    <div>
                        <button className="btn btn-sm" onClick={() => router.push('/treatment')}>back</button>
                    </div>
                </div>
            ) : ''}
        </div>
    )
}

export default RequestTreatment