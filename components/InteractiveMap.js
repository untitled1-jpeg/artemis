'use client';
import { MapContainer, TileLayer, Marker, useMap } from 'react-leaflet';
import L from 'leaflet';
import { useEffect } from 'react';

// Custom Marker Icon
const customIcon = new L.DivIcon({
    className: 'custom-artemis-marker',
    html: `
    <div style="width: 50px; height: 50px; transform: translate(-50%, -100%);">
      <svg viewBox="0 0 50 70" fill="none" xmlns="http://www.w3.org/2000/svg" style="width: 100%; height: 100%;">
        <path d="M25 0C11.19 0 0 11.19 0 25C0 43.75 25 70 25 70C25 70 50 43.75 50 25C50 11.19 38.81 0 25 0Z" fill="var(--color-teal)" />
        <circle cx="25" cy="25" r="10" fill="var(--color-gold)" />
      </svg>
    </div>
  `,
    iconSize: [50, 50],
    iconAnchor: [25, 50],
});

function MapEffects() {
    const map = useMap();
    useEffect(() => {
        // Force a resize fix for Leaflet in Next.js
        setTimeout(() => {
            map.invalidateSize();
        }, 250);
    }, [map]);
    return null;
}

export default function InteractiveMap() {
    const position = [32.79735, -96.80445]; // Precise coordinates for 2750 Fairmount St

    return (
        <div className="artemis-map-container" style={{ width: '100%', height: '100%', position: 'relative' }}>
            <MapContainer
                center={position}
                zoom={12}
                scrollWheelZoom={false}
                zoomControl={false}
                attributionControl={false}
                style={{ height: '100%', width: '100%', background: '#f5f5f5' }}
            >
                <TileLayer
                    url="https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png"
                    opacity={0.9}
                />
                <Marker position={position} icon={customIcon} />
                <MapEffects />
            </MapContainer>

            {/* Custom CSS for Snazzy style via filter */}
            <style jsx global>{`
            .leaflet-container {
                /* Ultra Light aesthetic: Very clean, high brightness, low contrast */
                filter: brightness(1.04) contrast(0.98) saturate(0.1);
                background-color: #f5f5f5 !important;
            }
            .leaflet-tile-container {
                opacity: 0.8 !important;
            }
            .custom-artemis-marker {
                background: none !important;
                border: none !important;
            }
            .leaflet-marker-icon {
                filter: none !important; /* Don't apply map filter to marker */
                z-index: 1000 !important;
            }
        `}</style>
        </div>
    );
}
