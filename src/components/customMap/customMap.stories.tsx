import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import pinned from '../../assets/pinned.svg';
import adayar from '../../assets/adayar.jpg';
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
    isSearchRequired={true}
    setDefaultRoute={false}
    fullscreenControl
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
  googleMapApiKey: '',
  zoom: 13,
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
  ],
  center: {
    lat: '',
    lng: '',
  },
  mapRadiusIcon: '',
  origin: { lat: 13.003387, lng: 80.255043 },
  destination: { lat: 12.95790649960084, lng: 80.26010930368109 },
  setDefaultRoute: false,
  isSearchRequired: true,
  fullscreenControl: true,
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
