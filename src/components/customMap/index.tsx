import React, { useEffect, useRef, useState } from 'react';
import {
  Autocomplete,
  DirectionsRenderer,
  GoogleMap,
  LoadScript,
  Marker,
  MarkerClusterer,
  OverlayView,
} from '@react-google-maps/api';
import { Box, Typography, IconButton,TextField } from '@mui/material';
import mapCircle from '../../assets/mapCircle.png';
import NearMeIcon from '@mui/icons-material/NearMe';
import pinned from '../../assets/pinned.svg';
import adayar from '../../assets/adayar.jpg';
import junior from '../../assets/junior.jpeg';
import { customMapStyle } from './style';

import { BasicButtons } from '../button';

interface MapMainComponent {
  RadiusStyle: object;
  markerLabelStyle: object;
  googleMapApiKey: string;
  zoom: number;
  mapStyles: object;
  radiusDistance: number;
  locations: locations;
  mapRadiusIcon: string;
}

interface locations {
  filter(arg0: (location: locations) => boolean): unknown;
  name: string;
  location: latLAng;
  address: string;
  image: string;
  pinnedIcon: string;
}

interface latLAng {
  lat: number;
  lng: number;
}

export const MapComponent = (props: MapMainComponent) => {
  const {
    RadiusStyle = {},
    markerLabelStyle = {},
    googleMapApiKey = '',
    zoom = 13,
    radiusDistance,
    mapStyles = {
      height: '100%',
      width: '100%',
    },
    locations = [],
    mapRadiusIcon = '',
  } = props;

  const [currentLocation, setCurrentLocation] = useState<any>(null);

  const [filteredLocations, setFilteredLocations] = useState<any>([]);

  const [hoveredMarker, setHoveredMarker] = useState<any>(null);

  const [map, setMap] = useState<any>(null);
  const [directionsResponse, setDirectionsResponse] = useState(null);
  const [distance, setDistance] = useState('');
  const [duration, setDuration] = useState('');

  const getDistance = (location1: any, location2: any) => {
    const rad = (x: number) => (x * Math.PI) / 180;
    const R = 6371;
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

  const onMarkerClustererClick = (e: any) => {
    console.log(e, 'eeeee>>>>>>');
  };

  const onMarkerClick = (e: any) => {
    console.log(e, 'onMarkerClick>>>>>>');
  };

  const onMarkerMouseOver = (marker: any) => {
    setHoveredMarker(marker);
  };

  const onMarkerMouseOut = () => {
    setHoveredMarker(null);
  };

  const originRef = useRef<any>();

  const destiantionRef = useRef<any>();
  console.log(originRef.current);

  const calculateRoute = async () => {
    if (originRef.current.value === '' || destiantionRef.current.value === '') {
      return;
    }
    // eslint-disable-next-line no-undef
    const directionsService = new google.maps.DirectionsService();
    const results: any = await directionsService.route({
      origin: originRef.current.value,
      destination: destiantionRef.current.value,
      // eslint-disable-next-line no-undef
      travelMode: google.maps.TravelMode.DRIVING,
    });
    setDirectionsResponse(results);
    setDistance(results.routes[0].legs[0].distance.text);
    setDuration(results.routes[0].legs[0].duration.text);
  };

  useEffect(() => {
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
        (location: locations) =>
          getDistance(currentLocation, location.location) <= radiusDistance
      );
      setFilteredLocations(filtered);
    }
  }, [currentLocation]);

  return (
    <>
      <LoadScript googleMapsApiKey={googleMapApiKey} libraries={['places']}>
        <Box sx={{ ...customMapStyle.totalSearchBoxSx }}>
          <Box sx={{ ...customMapStyle.searchBox }}>
            <Autocomplete>
              <TextField sx={{...customMapStyle.inputSx}} type="text" placeholder="Origin" inputRef={originRef} />
            </Autocomplete>
            <Autocomplete >
              <TextField sx={{...customMapStyle.inputSx}}   type="text" placeholder="destination" inputRef={destiantionRef}/>
            </Autocomplete>
            <BasicButtons  onClick={calculateRoute}  inLineStyles={{...customMapStyle.CalculateSx }} >
              calculate
            </BasicButtons>
          </Box>
          <Box sx={{ ...customMapStyle.distanceSx }}>
            <Typography
              sx={{ fontSize: '14px', fontWeight: '600', color: '#000' }}
            >
              {' '}
              Distance: {distance}
            </Typography>
            <Typography
              sx={{ fontSize: '14px', fontWeight: '600', color: '#000' }}
            >
              Duration: {duration}
            </Typography>
            <IconButton
              sx={{ ...customMapStyle.nearSx }}
              onClick={() => {
                map.panTo(currentLocation);
                map.setZoom(15);
              }}
            >
              <NearMeIcon />
            </IconButton>
          </Box>
        </Box>
        <GoogleMap
          mapContainerStyle={mapStyles}
          zoom={zoom}
          center={currentLocation}
          options={{
            zoomControl: false,
            streetViewControl: false,
            mapTypeControl: false,
            fullscreenControl: false,
          }}
          onLoad={(map: any) => setMap(map)}
        >
          {currentLocation && <Marker position={currentLocation} />}
          {filteredLocations.length > 0 && (
            <MarkerClusterer
              onClick={onMarkerClustererClick}
              onMouseOut={() => onMarkerMouseOut()}
              options={{
                maxZoom: 15,
                styles: [
                  {
                    textColor: '#fff',
                    url: mapRadiusIcon,
                    height: 30,
                    width: 30,
                    ...RadiusStyle,
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
                        url: item?.pinnedIcon,
                        scaledSize: new window.google.maps.Size(40, 40),
                      },
                      label: {
                        text: item.name,
                        color: '#fff',
                        fontSize: '12px',
                        fontWeight: '500',
                        ...markerLabelStyle,
                      },
                    }}
                    onClick={onMarkerClick}
                    onMouseOver={() => onMarkerMouseOver(item)}
                    onMouseOut={() => onMarkerMouseOut()}
                    clusterer={clusterer}
                  ></Marker>
                ))
              }
            </MarkerClusterer>
          )}
          {hoveredMarker && (
            <OverlayView
              position={{
                lat: hoveredMarker.location.lat,
                lng: hoveredMarker.location.lng,
              }}
              mapPaneName={OverlayView.OVERLAY_MOUSE_TARGET}
              getPixelPositionOffset={(width, height) => ({
                x: -(100 / 0),
                y: -(height / 2),
              })}
            >
              <Box sx={{ ...customMapStyle.hoverCardSx }}>
                {hoveredMarker.image && (
                  <img
                    src={hoveredMarker.image}
                    alt=""
                    style={{ width: '100%', maxWidth: '350px' }}
                  />
                )}
                <Typography sx={{ ...customMapStyle.CardHeaderSx }}>
                  {hoveredMarker.name}
                </Typography>
                <Typography>{hoveredMarker.address}</Typography>
              </Box>
            </OverlayView>
          )}
          {hoveredMarker && (
            <Box sx={{ ...customMapStyle.OverlayQuerySx }}>
              <Box sx={{ ...customMapStyle.hoverCardQuerySx }}>
                {hoveredMarker.image && (
                  <img
                    src={hoveredMarker.image}
                    alt=""
                    style={{ width: '100%', margin: '0px auto' }}
                  />
                )}
                <Typography
                  sx={{ ...customMapStyle.CardHeaderSx, textAlign: 'start' }}
                >
                  {hoveredMarker.name}
                </Typography>
                <Typography sx={{ textAlign: 'start' }}>
                  {hoveredMarker.address}
                </Typography>
              </Box>
            </Box>
          )}
          {directionsResponse && (
            <DirectionsRenderer directions={directionsResponse} />
          )}
        </GoogleMap>
      </LoadScript>
    </>
  );
};

MapComponent.defaultProps = {
  RadiusStyle: {},
  markerLabelStyle: {},
  googleMapApiKey: 'AIzaSyC1djjqNS2RDzmsA5Ryf2wgoH6_dse-DjA',
  zoom: 13,
  mapStyles: {
    height: '100%',
    width: '100%',
  },
  radiusDistance: 6000,
  locations: [
    {
      name: 'Adayar',
      location: {
        lat: 13.003387,
        lng: 80.255043,
      },
      address:
        'Adyar is a large neighbourhood in south Chennai, Tamil Nadu, India',
      image: adayar,
      pinnedIcon: pinned,
    },
    {
      name: 'Neelankarai',
      location: {
        lat: 12.949282,
        lng: 80.255013,
      },
      address:
        'Neelangarai is a census town and is a locality in the south of Chennai.',
      image: '',
      pinnedIcon: pinned,
    },
    {
      name: 'Bay Breeze Suites',
      location: {
        lat: 12.95790649960084,
        lng: 80.26010930368109,
      },
      address:
        '4/222, Pushpa Ave, MGR Salai, Palavakkam, Chennai, Tamil Nadu 600041',
      image: '',
      pinnedIcon: pinned,
    },
    {
      name: 'May Flower',
      location: {
        lat: 12.957880360534151,
        lng: 80.26093542406015,
      },
      address: '28, MGR Salai, Palavakkam, Chennai, Tamil Nadu 600041',
      image: '',
      pinnedIcon: pinned,
    },
    {
      name: 'Junior Kuppanna, ECR',
      location: {
        lat: 12.956786921292327,
        lng: 80.25718652012615,
      },
      address:
        '2/546, LHC, East Coast Rd, illam, Neelankarai, Chennai, Tamil Nadu 600041',
      image: junior,
      pinnedIcon: pinned,
    },
  ],
  mapRadiusIcon: mapCircle,
};
