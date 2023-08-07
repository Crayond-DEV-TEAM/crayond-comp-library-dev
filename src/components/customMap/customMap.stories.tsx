import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { MapComponent } from './index';

export default {
  title: 'components/MapComponent',
  component: MapComponent,
} as ComponentMeta<typeof MapComponent>;

const Template: ComponentStory<typeof MapComponent> = (args) => (
  <MapComponent
    {...args}
    googleMapApiKey=""
    zoom={13}
    RadiusStyle={{ height: 40, width: 40 }}
    isSearchRequired={false}
    setDefaultRoute={false}
    fullscreenControl
    zoomControl={true}
    streetViewControl={true}
    mapTypeControl={true}
    totalSearchBox={{ top: '37px', right: '92px' }}
    nearBtnSx={{ top: '105px', right: '40px' }}

  />
);

export const Primary = Template.bind({});
Primary.args = {
  mapStyles: {
    height: '100%',
    width: '100%',
  },
  RadiusStyle: {},
  markerLabelStyle: {},
  calculatebtnStyle: {},
  googleMapApiKey: '',
  zoom: 13,
  mapRadiusIcon: '',
  radiusDistance: 1200000000,
  isSearchRequired: false,
  deatilsCardCustomize: 'Customize Card',
  locations: [
    {
      name: 'Adayar',
      location: {
        lat: 13.003387,
        lng: 80.255043,
      },
      address:
        'Adyar is a large neighbourhood in south Chennai, Tamil Nadu, India',
      image: '',
      pinnedIcon:
        'http://maps.google.com/mapfiles/kml/paddle/purple-circle.png',
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
      pinnedIcon:
        'http://maps.google.com/mapfiles/kml/paddle/purple-circle.png',
    },
    {
      name: 'May Flower',
      location: {
        lat: 12.957880360534151,
        lng: 80.26093542406015,
      },
      address: 'may Flower',
      image: '',
      pinnedIcon:
        'http://maps.google.com/mapfiles/kml/paddle/purple-circle.png',
    },
    {
      name: 'Junior Kuppanna, ECR',
      location: {
        lat: 12.956786921292327,
        lng: 80.25718652012615,
      },
      address: 'Junior Kuppanna, ECR',
      image: '',
      pinnedIcon:
        'http://maps.google.com/mapfiles/kml/paddle/purple-circle.png',
    },
  ],
  // isCenter: false,
  center: {
    lat: null,
    lng: null,
  },
  origin: { lat: 13.003387, lng: 80.255043 },
  destination: { lat: 12.95790649960084, lng: 80.26010930368109 },
  setDefaultRoute: false,
  fullscreenControl: true,
  searchBoxRootsx: {},
  zoomControl: true,
  streetViewControl: true,
  mapTypeControl: true,
  onClearRoute: () => false,
  onCalculateRoutes: () => false,
  onMarkerMouseOver: () => false,
  onMarkerClustererClick: () => false,
  onMarkerClick: () => false,
  onMarkerMouseOut: () => false,
};
