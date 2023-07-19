import React, { useEffect, useState } from 'react';
import {
  GoogleMap,
  LoadScript,
  Marker,
  MarkerClusterer,
} from '@react-google-maps/api';

import mapCircle from '../../assets/mapCircle.png';
import pinned from '../../assets/pinned.svg'


const MapComponent = (props:any) => {
  const {RadiusStyle={},markerLabelStyle={}}=props
  const mapStyles = {
    height: '100%',
    width: '100%',
  };

  const [currentLocation, setCurrentLocation] = useState<any>(null);
  const [filteredLocations, setFilteredLocations] = useState<any>([]);
  const [hoveredMarker, setHoveredMarker] = useState<any>(null);

  useEffect(() => {
    // Get the user's current location
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setCurrentLocation({
            lat: position.coords.latitude,
            lng: position.coords.longitude,
          });
        },
        (error) => {
          console.log('Error getting current location:', error);
        }
      );
    } else {
      console.log('Geolocation is not supported by this browser.');
    }
  }, []);

  useEffect(() => {
    if (currentLocation) {
      const filtered = locations.filter(
        (location) => getDistance(currentLocation, location.location) <= 6000
      );
      setFilteredLocations(filtered);
    }
  }, [currentLocation]);

  const getDistance = (location1: number, location2: number) => {
    const rad = (x: number) => (x * Math.PI) / 180;
    const R = 6371; // Earth's radius in kilometers
    const dLat = rad(location2.lat - location1.lat);
    const dLng = rad(location2.lng - location1.lng);
    const a =
      Math.sin(dLat / 2) * Math.sin(dLat / 2) +
      Math.cos(rad(location1.lat)) *
        Math.cos(rad(location2.lat)) *
        Math.sin(dLng / 2) *
        Math.sin(dLng / 2);
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    const distance = R * c; // Distance in kilometers
    return distance * 1000; // Convert to meters
  };

  const locations = [
    {
      name: 'Adayar',
      location: {
        lat: 13.003387,
        lng: 80.255043,
      },
    },
    {
      name: 'Neelankarai',
      location: {
        lat: 12.949282,
        lng: 80.255013,
      },
    },
    {
      name: 'Bay Breeze Suites',
      location: {
        lat: 12.95790649960084,
        lng: 80.26010930368109,
      },
    },
    {
      name: 'May Flower',
      location: {
        lat: 12.957880360534151,
        lng: 80.26093542406015,
      },
    },
    {
      name: 'Junior Kuppanna, ECR',
      location: {
        lat: 12.956786921292327,
        lng: 80.25718652012615,
      },
    },
    // Add more locations here...
  ];


  const onMarkerClustererClick = (e: any) => {
    console.log(e, 'eeeee>>>>>>');
  };

  const onMarkerClick = (e: any) => {
    console.log(e, 'onMarkerClick>>>>>>');
  };

  const onMarkerMouseOver = (marker: any) => {
    console.log(marker, 'marker!!!!!');
    debugger;
    setHoveredMarker(marker);
  };

  const onMarkerMouseOut = () => {
    setHoveredMarker(null);
  };

  return (
    <LoadScript googleMapsApiKey="">
      <GoogleMap
        mapContainerStyle={mapStyles}
        zoom={13}
        center={currentLocation}
      >
        {currentLocation && <Marker position={currentLocation} />}
        {filteredLocations.length > 0 && (
          <MarkerClusterer
            onClick={onMarkerClustererClick}
            options={{
              maxZoom: 15,
              styles: [
                {
                  textColor: '#fff',
                  url: mapCircle,
                  height: 30,
                  width: 30,
                  ...RadiusStyle
                },
              ],
            }}
          >
            
            {(clusterer) =>
              filteredLocations.map((item: any, index: any) => (
                <Marker
                  key={index}
                  position={item.location}
                  options={{
                    icon: {
                      url: pinned, 
                      scaledSize: new window.google.maps.Size(40, 40), 
                    },
                    label: {
                      text: item.name,
                      color: '#fff',
                      fontSize: '12px',
                      fontWeight: '500',
                      ...markerLabelStyle
                    },
                  }}
                  // icon={icon}
                  onClick={onMarkerClick}
                  onMouseOver={() => onMarkerMouseOver(item)}
                  onMouseOut={() => onMarkerMouseOut()}
                  clusterer={clusterer}
                >
          
                </Marker>
              ))
            }
          </MarkerClusterer>
        )}
        {hoveredMarker && (
          <div
            style={{
              position: 'absolute',
              top: '10px',
              left: '10px',
              backgroundColor: 'white',
              padding: '10px',
              borderRadius: '10px',
              color: '#000',
            }}
          >
            <h3>{hoveredMarker.name}</h3>
            <p>Latitude: {hoveredMarker.location.lat}</p>
            <p>Longitude: {hoveredMarker.location.lng}</p>
          </div>
        )}
      </GoogleMap>
    </LoadScript>
  );
};

export default MapComponent;
