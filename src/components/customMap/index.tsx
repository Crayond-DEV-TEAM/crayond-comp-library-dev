import React, { useEffect, useRef, useState } from 'react';
import {
  Autocomplete,
  DirectionsRenderer,
  GoogleMap,
  LoadScript,
  Marker,
  MarkerClusterer,
  MarkerF,
  OverlayView,
} from '@react-google-maps/api';
import { Box, Typography, IconButton, TextField } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import mapCircle from '../../assets/mapCircle.png';
import NearMeIcon from '@mui/icons-material/NearMe';
import pinned from '../../assets/pinned.svg';
import adayar from '../../assets/adayar.jpg';
import junior from '../../assets/junior.jpeg';
import { customMapStyle } from './style';

import { BasicButtons } from '../button';
import {
  MapMainComponent,
  MapObject,
  latLAng,
  locationsData,
} from './interface';

export const MapComponent = (props: MapMainComponent) => {
  const {
    RadiusStyle = {},
    markerLabelStyle = {},
    googleMapApiKey = '',
    zoom = 13,
    radiusDistance,
    mapStyles = { height: '100%', width: '100%' },
    locations,
    mapRadiusIcon = '',
    deatilsCardCustomizes = false,
    deatilsCardCustomize,
    customCardLocation,
    origin,
    center,
    destination,
    responsiveDetailsCustomize,
    searchBoxRootsx = {},
    calculatebtnStyle = {},
    mapTypeControl = false,
    isSearchRequired = true,
    fullscreenControl = false,
    zoomControl = false,
    streetViewControl = false,
    setDefaultRoute = false,
    onMarkerMouseOver = () => false,
    onMarkerClustererClick = () => false,
    onClearRoute = () => false,
    onCalculateRoutes = () => false,
    onMarkerClick = () => false,
    onMarkerMouseOut = () => false,
  } = props;

  const [hoveredMarker, setHoveredMarker] = useState<locationsData | null>(
    null
  );
  const [currentLocation, setCurrentLocation] = useState<latLAng | any>();
  const [filteredLocations, setFilteredLocations] = useState<
    locationsData | any
  >([]);
  const [map, setMap] = useState<MapObject | null>(null);
  const [showDirection, setShowDirection] = useState(false);
  const [directionsResponse, setDirectionsResponse] =
    useState<google.maps.DirectionsResult | null>(null);
  const [distance, setDistance] = useState<string>('');
  const [duration, setDuration] = useState<string>('');
  const originRef = useRef<any>();
  const destiantionRef = useRef<any>();
  const isSmallScreen = window.innerWidth <= 500;

  const getDistance = (location1: latLAng, location2: latLAng) => {
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

  const onMarkerClustererClicks = (e: unknown) => {
    onMarkerClustererClick(e);
  };

  const onMarkerClicks = (e: any) => {
    if (isSmallScreen) {
      setHoveredMarker(e);
    }
    onMarkerClick(e);
  };

  const onMarkerMouseOverFun = (marker: any) => {
    if (!deatilsCardCustomizes && !isSmallScreen) {
      setHoveredMarker(marker);
    }
    onMarkerMouseOver(marker);
  };

  const onMarkerMouseOuts = () => {
    if (!isSmallScreen) {
      setHoveredMarker(null);
    }
    onMarkerMouseOut();
  };

  const onCloseDetails = () => {
    setHoveredMarker(null);
  };

  // Search and Calculate the route --
  const calculateRoute = async () => {
    if (
      originRef.current?.value === '' ||
      destiantionRef.current?.value === ''
    ) {
      return;
    }
    const directionsService = new google.maps.DirectionsService();
    try {
      const results: any = await directionsService.route({
        origin: originRef.current?.value,
        destination: destiantionRef.current?.value,
        // eslint-disable-next-line no-undef
        travelMode: google.maps.TravelMode.DRIVING,
      });
      if (results?.status === 'OK') {
        setDirectionsResponse(results);
        setShowDirection(true);
        setDistance(results?.routes[0]?.legs[0]?.distance?.text ?? '');
        setDuration(results?.routes[0]?.legs[0]?.duration?.text ?? '');
        onCalculateRoutes(results);
      } else {
        alert(
          'No route found. Please check your origin and destination addresses.'
        );
      }
    } catch (error) {
      console.log(error, 'error');
      alert('Directions request returned no results');
    }
  };

  // Default set Route --
  const defaultRoute = async (origin: latLAng, destination: latLAng) => {
    if (!origin || !destination) {
      return;
    }

    const directionsService = new google.maps.DirectionsService();
    try {
      const results = await directionsService.route({
        origin,
        destination,
        travelMode: google.maps.TravelMode.DRIVING,
      });

      if (results) {
        setDirectionsResponse(results);
        setShowDirection(true);
        setDistance(results?.routes[0]?.legs[0]?.distance?.text ?? '');
        setDuration(results?.routes[0]?.legs[0]?.duration?.text ?? '');
      } else {
        // If no results are returned, show an alert
        alert(
          'No route found. Please check your origin and destination addresses.'
        );
      }
    } catch (error) {
      console.log(error, 'error');
      alert('Directions request returned no results');
    }
  };

  // clear Route --
  const clearRoute = () => {
    setDirectionsResponse(null);
    setDistance('');
    setDuration('');
    setShowDirection(false);
    originRef.current.value = '';
    destiantionRef.current.value = '';
    onClearRoute();
  };

  const initalRender = async () => {
    if (center) {
      setCurrentLocation(center);
    } else if (navigator.geolocation) {
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
    if (setDefaultRoute && origin && destination && filteredLocations) {
      await defaultRoute(origin, destination);
    }
  };

  // Initial Render current Location
  // useEffect(() => {

  // }, []);

  // Using Current Location to filter the Given Locations --
  useEffect(() => {
    if (currentLocation && locations) {
      const filtered = locations?.filter(
        (location: locationsData) =>
          getDistance(currentLocation, location.location) <= radiusDistance
      );
      setFilteredLocations(filtered);
    }
  }, [currentLocation, locations]);

  return (
    <LoadScript googleMapsApiKey={googleMapApiKey} libraries={['places']}>
      {isSearchRequired && (
        <Box
          sx={{
            ...customMapStyle.totalBoxSx,
            '@media (max-width: 806px) ': {
              top: mapTypeControl ? '50px' : '0px',
              left: mapTypeControl ? '11px' : '0px',
            },
          }}
        >
          <Box sx={{ ...customMapStyle.totalSearchBoxSx, ...searchBoxRootsx }}>
            <Box sx={{ ...customMapStyle.searchBox }}>
              <Box sx={{ ...customMapStyle.inputAutoSx }}>
                <Autocomplete>
                  <TextField
                    sx={{ ...customMapStyle.inputSx }}
                    type="text"
                    placeholder="Origin"
                    inputRef={originRef}
                  />
                </Autocomplete>
              </Box>
              <Box sx={{ ...customMapStyle.inputAutoSx }}>
                <Autocomplete>
                  <TextField
                    sx={{ ...customMapStyle.inputSx }}
                    type="text"
                    placeholder="destination"
                    inputRef={destiantionRef}
                  />
                </Autocomplete>
              </Box>
              <BasicButtons
                onClick={calculateRoute}
                inLineStyles={{
                  ...customMapStyle.CalculateSx,
                  ...calculatebtnStyle,
                }}
              >
                calculate
              </BasicButtons>
              <BasicButtons
                onClick={clearRoute}
                inLineStyles={{
                  ...customMapStyle.CalculateSx,
                  ...calculatebtnStyle,
                  marginRight: '0px',
                }}
              >
                clear
              </BasicButtons>
            </Box>
            {showDirection && (
              <Box sx={{ ...customMapStyle.distanceSx }}>
                <Typography sx={{ ...customMapStyle.distanceTypeSx }}>
                  Distance: {distance}
                </Typography>
                <Typography sx={{ ...customMapStyle.distanceTypeSx }}>
                  Duration: {duration}
                </Typography>
              </Box>
            )}
          </Box>
        </Box>
      )}
      <IconButton
        sx={{ ...customMapStyle.nearSx }}
        onClick={() => {
          map?.panTo(currentLocation);
          map?.setZoom(15);
        }}
      >
        <NearMeIcon />
      </IconButton>
      <GoogleMap
        mapContainerStyle={mapStyles}
        zoom={zoom}
        center={currentLocation || center}
        options={{
          zoomControl: zoomControl,
          streetViewControl: streetViewControl,
          mapTypeControl: mapTypeControl,
          fullscreenControl: fullscreenControl,
        }}
        onLoad={(mapInstance) => {
          setMap(mapInstance);
          if (filteredLocations) {
            initalRender();
          }
        }}
      >
        {currentLocation && <Marker position={currentLocation} />}
        {center && <MarkerF position={center} />}

        {filteredLocations.length > 0 && (
          <MarkerClusterer
            onClick={onMarkerClustererClicks}
            onMouseOut={() => onMarkerMouseOuts()}
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
              filteredLocations.map((item: locationsData, index: number) => (
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
                      color: '#4e4e4e',
                      fontSize: '12px',
                      fontWeight: '500',
                      ...markerLabelStyle,
                    },
                  }}
                  onClick={() => onMarkerClicks(item)}
                  onMouseOver={() => onMarkerMouseOverFun(item)}
                  onMouseOut={() => onMarkerMouseOuts()}
                  clusterer={clusterer}
                ></Marker>
              ))
            }
          </MarkerClusterer>
        )}
        {hoveredMarker ? (
          <OverlayView
            position={{
              lat: hoveredMarker.location.lat,
              lng: hoveredMarker.location.lng,
            }}
            mapPaneName={OverlayView.OVERLAY_MOUSE_TARGET}
            getPixelPositionOffset={(width, height) => ({
              x: -(width / 2),
              y: -(height / 2),
            })}
          >
            <Box sx={{ ...customMapStyle.hoverCardSx }}>
              {hoveredMarker.image && (
                <img
                  src={hoveredMarker?.image}
                  alt=""
                  style={{
                    width: '100%',
                    maxWidth: '125px',
                    height: '125px',
                    borderRadius: '8px',
                  }}
                />
              )}
              <Box sx={{ padding: '10px 12px' }}>
                <Typography sx={{ ...customMapStyle.CardHeaderSx }}>
                  {hoveredMarker?.name}
                </Typography>
                <Typography sx={{ color: '#98A0AC', fontSize: '12px' }}>
                  {hoveredMarker?.address}
                </Typography>
              </Box>
            </Box>
          </OverlayView>
        ) : (
          deatilsCardCustomizes && (
            <OverlayView
              position={{
                lat: customCardLocation?.location?.lat,
                lng: customCardLocation?.location.lng,
              }}
              mapPaneName={OverlayView.OVERLAY_MOUSE_TARGET}
              getPixelPositionOffset={(width, height) => ({
                x: -(width / 2),
                y: -(height / 2),
              })}
            >
              {deatilsCardCustomize}
            </OverlayView>
          )
        )}
        {hoveredMarker ? (
          <Box
            sx={{
              ...customMapStyle.OverlayQuerySx,
            }}
          >
            <Box sx={{ ...customMapStyle.hoverCardQuerySx }}>
              {hoveredMarker.image && (
                <img
                  src={hoveredMarker.image}
                  alt=""
                  style={{
                    width: '100%',
                    maxWidth: '108px',
                    height: '108px',
                    borderRadius: '8px',
                  }}
                />
              )}
              <Box sx={{ padding: '10px 12px' }}>
                <IconButton
                  onClick={onCloseDetails}
                  sx={{ ...customMapStyle.closeDetailSx }}
                >
                  <CloseIcon sx={{ fontSize: '14x' }} />
                </IconButton>
                <Typography
                  sx={{ ...customMapStyle.CardHeaderSx, textAlign: 'start' }}
                >
                  {hoveredMarker.name}
                </Typography>
                <Typography
                  sx={{
                    color: '#98A0AC',
                    fontSize: '12px',
                    textAlign: 'start',
                  }}
                >
                  {hoveredMarker.address}
                </Typography>
              </Box>
            </Box>
          </Box>
        ) : (
          deatilsCardCustomizes && <>{responsiveDetailsCustomize}</>
        )}
        {directionsResponse && (
          <DirectionsRenderer directions={directionsResponse} />
        )}
      </GoogleMap>
    </LoadScript>
  );
};

MapComponent.defaultProps = {
  RadiusStyle: {},
  markerLabelStyle: {},
  googleMapApiKey: '',
  zoom: 13,
  mapStyles: {
    height: '100%',
    width: '100%',
  },
  radiusDistance: 1200000000,
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
      name: 'Palavakam Beach',
      location: {
        lat: 12.965173638501662,
        lng: 80.26237489796081,
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
  origin: { lat: 13.003387, lng: 80.255043 },
  destination: { lat: 12.95790649960084, lng: 80.26010930368109 },
  setDefaultRoute: true,
  isSearchRequired: true,
  fullscreenControl: true,
  zoomControl: true,
  streetViewControl: true,
  mapTypeControl: true,
  onClearRoute: () => false,
  onCalculateRoutes: () => false,
};
