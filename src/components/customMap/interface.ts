import { ReactNode } from "react";
import { SxProps } from "@mui/material/styles";

export interface MapMainComponent {
    googleMapApiKey: string;
    zoom?: number;
    radiusDistance: number;
    locations?: locationsData[];
    mapRadiusIcon?: string;
    RadiusStyle?: object;
    markerLabelStyle?: object;
    mapStyles?: object;
    deatilsCardCustomize?: ReactNode;
    responsiveDetailsCustomize?:ReactNode;
    deatilsCardCustomizes?: boolean;
    customCardLocation?: any;
    origin?: latLAng;
    destination?: latLAng;
    isSearchRequired?: boolean;
    fullscreenControl?: boolean;
    zoomControl?: boolean;
    center?: latLAng | any;
    streetViewControl?: boolean;
    mapTypeControl?: boolean;
    setDefaultRoute?: boolean;
    searchBoxRootsx?:SxProps;
    calculatebtnStyle?:SxProps;
    onMarkerMouseOver?: (marker: any) => void;
    onMarkerClustererClick?: (e: unknown) => void;
    onClearRoute ?:()=> void;
    onCalculateRoutes?:(data:any)=>void;
    onMarkerClick?:(data:any)=>void;
    onMarkerMouseOut?:()=>void;
  }
  
  export interface locationsData {
    // filter(arg0: (location: locationsData) => boolean): any;
   
    name: string;
    location: {
        lat:number,
        lng:number
    };
    address: string;
    image: string;
    pinnedIcon: string;
    [key:string | number] : any
  }
  
  export interface latLAng {
    lat: number;
    lng: number;
  }

 export interface MapObject {
    panTo: (location: any) => void;
    setZoom: (zoom: number) => void;
  }


  export interface resultData{
    status:string;
    routes:any;
    [key:string | number] : any


  }