'use client'

import React from 'react';
import { MapContainer, TileLayer, Marker, Popup, Circle, Tooltip } from 'react-leaflet';
import "leaflet/dist/leaflet.css"
import { getColorCondition } from '@/libs/RandomHex';

interface MapsProps {
    api: ApiData;
}

interface PlantData {
    id: string;
    name: string;
    longitude: number;
    latitude: number;
    condition: string;
}

interface ApiData {
    error: boolean;
    message: string;
    data: PlantData[];
}

const Maps: React.FC<MapsProps> = ({ api }) => {
    const dotPosition = api?.data.map((item, index) => (
        <Circle center={[item.longitude, item.latitude]} pathOptions={getColorCondition(item.condition)} radius={5} >
            <Tooltip sticky>{item.name}</Tooltip>
        </Circle>
    ))

    return (
        <MapContainer center={[-7.007610, 109.602398]} zoom={17} style={{ height: '100%', width: '100%' }}>
            <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            {dotPosition}
        </MapContainer>
    );
};

export default Maps;