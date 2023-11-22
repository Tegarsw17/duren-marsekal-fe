import React from 'react'
import LineChart from '../Chart/lineChart';

interface TreatmenProps {
    title: string;
    black: boolean;
    data:number[];
    month:string[]
}

const TreatmentCard:React.FC<TreatmenProps> = ({title,black,data,month}) => {
  return (
    <div className={`card w-80 ${black==true ? 'bg-gray-800 text-white':''} shadow-xl`}>
        <div className="card-body">
        <h2 className="card-title flex justify-center p-1">{title}</h2>
        <p>Last Update: 21/07/2023</p>
        <LineChart datas={data} month={month}/>
        </div>
    </div>
  )
}

export default TreatmentCard