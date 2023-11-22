
import { generateDate } from '@/libs/GenereateDate';
import { getDetailDataTreatment } from '@/libs/apiLibs';
import Image from 'next/image';
import React, { useEffect, useState } from 'react';

interface ModalProps {
  show: boolean;
  onClose: () => void;
  id: string | null
  id_treatment: string | null
}

interface ApiResponse {
  error: boolean;
  message: string;
  data: DataItem[];
}

interface DataItem {
  id: string;
  type_treatment: string;
  detail: string;
  plant_id: string;
  is_done: boolean;
  date_done: string;
  due_date: string;
  image_url: string;
}

const ModalTreatment: React.FC<ModalProps> = ({ show, onClose, id, id_treatment }) => {
  const [modalData, setModalData] = useState<ApiResponse | null>(null);
  // const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      // setIsLoading(true);
      try {
        const data = await getDetailDataTreatment(id, id_treatment)
        setModalData(data)
      } catch (error) {
        console.log(error)
      }
      // setIsLoading(false);
    }

    if (show) {
      fetchData()
      // console.log(modalData)
    }

  }, [show, id, id_treatment])

  if (!show) return null;
  // if (isLoading) return <div>Loading...</div>;
  if (!modalData) return <div>No data available</div>;
  var date_done = modalData?.data[0].date_done
  var due_date = modalData?.data[0].due_date
  return (
    <div className="fixed inset-0 bg-gray-600 bg-opacity-50 overflow-y-auto h-full w-full" onClick={onClose}>
      <div className="relative top-20 mx-auto p-5 border w-1/2 shadow-lg rounded-md bg-white" onClick={e => e.stopPropagation()}>
        <div className="flex justify-end">
          <button onClick={onClose} className="text-black">
            <svg className="w-6 h-6" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
              <path d="M6 18L18 6M6 6l12 12"></path>
            </svg>
          </button>
        </div>
        <div className="mt-2 grid grid-cols-2 mx-2">
          <Image src={modalData?.data[0].image_url} width={250} height={250} alt={'/'} />
          <div className=''>
            <div className='grid grid-cols-3 text-lg gap-2'>
              <h3>Perawatan</h3>
              <h3 className='col-span-2'>: {modalData?.data[0].type_treatment}</h3>
              <h3>Deskripsi</h3>
              <h3 className='col-span-2'>: {modalData?.data[0].detail}</h3>
              <h3>Tanggal Selesai</h3>
              <h3 className='col-span-2'>: {due_date ? generateDate(due_date) : "-"}</h3>
              <h3>Deadline</h3>
              <h3 className='col-span-2'>: {date_done ? generateDate(date_done) : "-"}</h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ModalTreatment;
