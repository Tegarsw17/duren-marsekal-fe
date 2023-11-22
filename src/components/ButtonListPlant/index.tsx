import React from 'react';
import Link from "next/link";

interface ButtonListProps {
    api: ApiData;
}

interface PlantData {
    id: string;
    name: string;
}

interface ApiData {
    error: boolean;
    message: string;
    data: PlantData[];
}

const ButtonList: React.FC<ButtonListProps> = ({ api }) => {
    return (
        <div className="w-full h-full mx-auto">
            <div className="p-4 grid lg:grid-cols-5 md:grid-cols-4 grid-cols-1 gap-2 place-items-center">
                {api?.data.map((plant, index) => (
                    <Link href={`/plant/${plant.id}`} key={index}>
                        {/* <button className={`btn ${index % 2 === 0 ? 'bg-gray-800 text-white' : 'bg-green-300 text-black'}`}>{plant.name}</button> */}
                        <button className={`lg:w-56 md:w-48 w-60 ${index % 2 === 0 ? 'bg-gray-700 text-white' : 'bg-green-300 text-black'} rounded p-2 flex justify-center`}>{plant.name}</button>
                    </Link>
                ))}
            </div>
        </div>
    )
}

export default ButtonList