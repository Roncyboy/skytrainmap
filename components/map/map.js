import 'leaflet/dist/leaflet.css'
import 'leaflet-defaulticon-compatibility'
import 'leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.css'
import style from '../../styles/Home.module.css'
import stationsData from './stations.json'

import { MapContainer, TileLayer, Marker, Popup, Polyline, } from 'react-leaflet'

export default function Map() {
    const stations = stationsData.stations
    const center = [49.220193228996386, -122.98845204229738]

    const stationPositions = []
    stations.forEach((station) => {
        stationPositions.push(station.position)
    })


    const purpleOption = { color: 'blue' };

    return (
        <MapContainer className={style.map} center={center} zoom={12} scrollWheelZoom={true}>
            <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />

            {stations.map((station) => (
                <Marker key={station.id} position={station.position}>
                    <Popup>
                        {station.name} <br /> station
                    </Popup>
                </Marker>
            ))}
            <Polyline pathOptions={purpleOption} positions={stationPositions}/>
        </MapContainer>
    )
}