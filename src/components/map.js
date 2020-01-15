import React, { Component } from 'react';

import {
  View,
  StyleSheet
} from 'react-native';

import MapView from 'react-native-maps';
import { PermissionsAndroid } from 'react-native';



export default class MapScreen extends Component {


    constructor(props){
      super(props)

      this.state = {
        origin: { latitude: 42.3616132, longitude: -71.0672576 },
        destination: { latitude: 42.3730591, longitude: -71.033754 },
        originText: '',
        destinationText: '',
    
      };
      
    }
    
    
      async requestLocationPermission() {
        try {
    
            const granted = await PermissionsAndroid.request(
                PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
                {
                    'title': 'App Location Permission',
                    'message': 'Maps App needs access to your map ' +
                        'so you can be navigated.'
                }
            );
    
            if (granted === PermissionsAndroid.RESULTS.GRANTED) {
                console.log("You can use the location");
                return true;
    
            } else {
                console.log("location permission denied");
                return false;
            }
    
        } catch (err) {
            console.warn(err)
        }
    
      }
    
      getLocation = () => {
        navigator.geolocation.getCurrentPosition((position) => {
            let newOrigin = {
                latitude: position.coords.latitude,
                longitude: position.coords.longitude
            };
    
            console.log('new origin');
            console.log(newOrigin);
    
            this.setState({
                origin: newOrigin
            });

        }, (err) => {
            console.log('error');
            console.log(err)
    
        }, {enableHighAccuracy: true, timeout: 2000, maximumAge: 1000})
    
      };

      async componentDidMount() {
        let isGranted = await this.requestLocationPermission();

        if (isGranted) {
            this.getLocation();
        }

        this.getLocation();

      }

      

      handleGetGoogleMapDirections = () => {
        const data = {
            source: this.state.origin,
            destination: this.state.destination,
            params: [
                {
                  key: "travelmode",
                  value: "driving"
                }
            ]
            
        };
    
      };
    render() {
        return(
            <View>

                {(this.props.type != "addEvent") ? (
                    // Mapa renderizado para visualização de eventos cadastrados
                    <MapView
                      customMapStyle={require('./config-style-map')}
                      loadingBackgroundColor="#424242"
                      ref={map => this.mapView = map}
                      style={styles.map}
                      style={{height: this.props.height}}
                      region={{
                        latitude: this.props.initialLocation.latitude,
                        longitude: this.props.initialLocation.longitude,
                        latitudeDelta: Math.abs(this.state.origin.latitude) * .0002,
                        longitudeDelta: Math.abs(this.state.origin.longitude) * .0002,
                      }}
            
                      loadingEnabled={true}
                      toolbarEnabled={true}
                      zoomControlEnabled={true}
                      showsPointsOfInterest={false}
                      showsBuildings={false}
                  >
          
                  <MapView.Marker
                    image={require('../assets/iconsPack/user.png')}
                    title="You!"
                    coordinate={this.props.initialLocation}
                  >
                    
                  </MapView.Marker>
                  
                  {this.props.events.map(event => {
                      
                      if(event.isActive){
                        return (
                        <MapView.Marker
                            key={`${event.nome}`}
                            image={require('../assets/iconsPack/event-active.png')}
                            title={`${event.nome} | You!`}
                            description={`${event.descricao}`}
                            coordinate={event.location}
                        >
      
                        </MapView.Marker>)
                      }else{
                        return(
                          <MapView.Marker
                            key={`${event.nome} | ${event.userId}`}
                            image={require('../assets/iconsPack/event.png')}
                            title={`${event.nome} | ${event.userId}`}
                            description={`${event.descricao}`}
                            coordinate={event.location}
                          >
          
                          </MapView.Marker>
                          )
                      }

                  })}
                  
                
          
                  </MapView>
                ) : (
                  // Mapa renderizado para a adicão de novos eventos
                  <MapView
                    customMapStyle={require('./config-style-map')}
                    ref={map => this.mapView = map}
                    style={styles.map}
                    style={{height: this.props.height}}
                    region={{
                      latitude: this.props.initialLocation.latitude,
                      longitude: this.props.initialLocation.longitude,
                      latitudeDelta: Math.abs(this.state.origin.latitude) * .0002,
                      longitudeDelta: Math.abs(this.state.origin.longitude) * .0002,
                    }}
                    loadingEnabled={true}
                    toolbarEnabled={true}
                    zoomControlEnabled={true}
                    showsPointsOfInterest={false}
                    showsBuildings={false}
                  >
          
                  <MapView.Marker
                    coordinate={this.props.initialLocation}
                    image={require('../assets/iconsPack/event-active.png')}
                    draggable
                    onDragEnd={(e) => {this.props.insertPoint(e.nativeEvent)}}
                  >
                    
                  </MapView.Marker>

                  
                  </MapView>
                )}
          </View>

        );

    }

}

const styles = StyleSheet.create({

    map: {
      position: 'absolute',
      width: '100%',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
    },

});