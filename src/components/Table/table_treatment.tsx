// 'use client'

import { generateDate } from '@/libs/GenereateDate';
import React, { useState } from 'react'
import ModalTreatment from '../Modal/treatment';
import { getDetailDataTreatment } from '@/libs/apiLibs';

interface TableTreatmentProps {
    api: ApiData | null;
}

interface ApiData {
    error: boolean;
    message: string;
    data: PlantTreatmentData;
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

const TableTreatment: React.FC<TableTreatmentProps> = ({ api }) => {

    const [showModal, setShowModal] = useState<boolean>(false);
    const [id, setId] = useState<string | null>(null);
    const [idTreatment, setIdTreatment] = useState<string | null>(null);

    const openModal = (id: string, id_treatment: string): void => {
        setId(id)
        setIdTreatment(id_treatment)
        setShowModal(true);
    }

    const closeModal = (): void => setShowModal(false);

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
                        {api?.data.treatment.map((treat, index) => (
                            <tr key={index}>
                                <th>{index + 1}</th>
                                <td>{api.data.name}</td>
                                <td>{treat.type_treatment}</td>
                                <td>{treat.detail}</td>
                                <td>{treat.date_done ? generateDate(treat.date_done) : "-"}</td>
                                {/* <td><button className="btn btn-sm btn-neutral">Detail</button></td> */}
                                <td><button className='w-14 bg-gray-800 p-1 text-white rounded' onClick={() => openModal(treat.plant_id, treat.id)}>Detail</button></td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
            <ModalTreatment show={showModal} onClose={closeModal} id={id} id_treatment={idTreatment} />
        </div>
    )
}

export default TableTreatment