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

        <div className="w-full h-full mx-auto py-4 px-4">
            <div className="flex flex-row flex-wrap lg:justify-start md:justify-between justify-center gap-2">
                {api?.data.map((plant, index) => (
                    <Link href={`/plant/${plant.id}`} key={index}>
                        <button className={`lg:w-52 md:w-48 w-60 ${index % 2 === 0 ? 'bg-gray-700 text-white' : 'bg-green-300 text-black'} rounded p-2 flex justify-center`}>{plant.name}</button>
                    </Link>
                ))}
            </div>
        </div>
    )
}

export default ButtonList