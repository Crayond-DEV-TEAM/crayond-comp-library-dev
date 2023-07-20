import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { MapComponent } from './index';

export default {
  title: 'components/MapComponent',
  component: MapComponent,
} as ComponentMeta<typeof MapComponent>;

const locations:any = [
  {
    name: 'Adayar',
    location: {
      lat: 13.003387,
      lng: 80.255043,
    },
    address:
      'Adyar is a large neighbourhood in south Chennai, Tamil Nadu, India',
    image: 'adayar',
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
  },
  {
    name: 'May Flower',
    location: {
      lat: 12.957880360534151,
      lng: 80.26093542406015,
    },
    address: '28, MGR Salai, Palavakkam, Chennai, Tamil Nadu 600041',
    image: '', 
  },
  {
    name: 'Junior Kuppanna, ECR',
    location: {
      lat: 12.956786921292327,
      lng: 80.25718652012615,
    },
    address:
      '2/546, LHC, East Coast Rd, illam, Neelankarai, Chennai, Tamil Nadu 600041',
    image: 'junior', 
  },
];

const Template: ComponentStory<typeof MapComponent> = (args) => (
  <MapComponent {...args}   locations={locations}/>
);

export const Primary = Template.bind({});
Primary.args = {
  googleMapApiKey: '', 
  mapStyles: {
    height: '100%',
    width: '100%',
  },
};
