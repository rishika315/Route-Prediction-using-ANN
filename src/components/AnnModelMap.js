// src/components/AnnModelMap.js

import React from 'react';
import { MapContainer, TileLayer, Polyline, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';

// Fix marker icon issue (if any)
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
    iconRetinaUrl: require('leaflet/dist/images/marker-icon-2x.png'),
    iconUrl: require('leaflet/dist/images/marker-icon.png'),
    shadowUrl: require('leaflet/dist/images/marker-shadow.png'),
});

const AnnModelMap = () => {
    const routeCoordinates = [
        [18.988760097386265, 72.83588835342181], // Lalbaug Cha Raja Pandal
        [18.983297420713747, 72.82863861207903], // Sant Gadge Chowk
        [18.964930068923262, 72.8203964976025],  // Rusi Mehta Chowk
        [18.962415748250933, 72.81986382867343], // Laxmi Medical
        [18.961968708226415, 72.81751425342111], // Fernandes Computer Solution
        [18.95735453903219, 72.81664719574847],  // Shah Purvi Chandra Chowk
        [18.954030314409444, 72.81455764216322],  // Girgaon Chowpatty
    ];

    const locationNames = [
        "Lalbaug Cha Raja Pandal",
        "Sant Gadge Chowk",
        "Rusi Mehta Chowk",
        "Laxmi Medical",
        "Fernandes Computer Solution",
        "Shah Purvi Chandra Chowk",
        "Girgaon Chowpatty"
    ];

    return (
        <div>
            <MapContainer center={[18.988760097386265, 72.83588835342181]} zoom={14} style={{ height: '500px', width: '100%' }}>
                <TileLayer
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    maxZoom={19}
                />
                <Polyline positions={routeCoordinates} color="red" />
                {routeCoordinates.map((coords, index) => (
                    <Marker position={coords} key={index}>
                        <Popup>{locationNames[index]}</Popup>
                    </Marker>
                ))}
            </MapContainer>
            
            {/* Yappings section with additional information */}
            <div style={{ padding: '20px', background: '#f1f1f1', borderRadius: '8px', marginTop: '20px' }}>
                <h3 style={{ color: '#333', fontSize: '1.8rem', marginBottom: '15px' }}>Applications of Route Prediction with ANN</h3>
                <p style={{ color: '#555', fontSize: '1rem', lineHeight: '1.6' }}>
                    The use of predicting route points with an ANN in this project has several practical applications:
                </p>
                <ul style={{ color: '#555', fontSize: '1rem', lineHeight: '1.6', paddingLeft: '20px' }}>
                    <li><strong>Route Optimization:</strong> Helps in finding smoother and potentially faster paths, useful for navigation systems.</li>
                    <li><strong>Traffic Management:</strong> Assists city planners and traffic managers in optimizing road usage, reducing congestion, and improving traffic flow.</li>
                    <li><strong>Event Planning:</strong> Essential for planning crowd control and safety during large events, like festivals.</li>
                    <li><strong>Delivery Services:</strong> Enhances delivery route planning, ensuring efficient paths based on historical data.</li>
                    <li><strong>Urban Development:</strong> Informs city development by analyzing traffic patterns and aiding infrastructure design.</li>
                </ul>
                <p style={{ color: '#555', fontSize: '1rem', lineHeight: '1.6' }}>
                    In summary, using ANN for route prediction enhances efficiency, improves planning, and provides insights for better decision-making in various real-world scenarios.
                </p>
            </div>
        </div>
    );
};

export default AnnModelMap;
