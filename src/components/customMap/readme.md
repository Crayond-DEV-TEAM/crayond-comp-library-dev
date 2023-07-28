# Readme

# Component
<MapComponent 
googleMapApiKey=""
locations={},     
 center={{
        lat: 10.26637829425595,
        lng: 76.16959139623947
    }} ,
    zoom={12},
    isSearchRequired={false},
    setDefaultRoute={true},
    fullscreenControl,
    mapTypeControl={false},
    RadiusStyle={},
     mapStyles= {
    height= '100%',
    width= '100%',
  },
  radiusDistance=1200000,
   origin: { lat: 13.003387, lng: 80.255043 },
  destination: { lat: 12.95790649960084, lng: 80.26010930368109 },
   onMarkerMouseOver,
  onMarkerClustererClick ,
  onClearRoute ,
  onCalculateRoutes ,
  onMarkerClick ,
  onMarkerMouseOut,

/>
  

this above component show all props that are extracted. Now let's see the props in detailed which are listed
below:

package Used -  @react-google-maps/api 
googleMapApiKey : Google Api Key is must !!!
location = is array of object which you want to pinned in location
radiusDistance = radius of location u want to clusterer
mapStyles = want to increase or decrease the width and height of map
mapTypeControl = which has the map and satellite controls maps
isSearchRequired = customize search for routes 
setDefaultRoute = is this props has to acces the deafult pass route location 
 origin = Has lat and lag which has start point of route ,
  destination = Has lat and lag which has  endpoint of route ,
   onMarkerMouseOver : () => false = Marker Hover Property function
  onMarkerClustererClick : () => false = MarkerClusterer click function
  onClearRoute : () => false = onclear routes function
  onCalculateRoutes : () => false = calculate the route results function
  onMarkerClick : () => false, OnMaker Click function function
  onMarkerMouseOut : () => false, onMarkerMouse Out function function


