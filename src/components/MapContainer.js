import React, { Component } from 'react';
import {Map, Marker, GoogleApiWrapper} from 'google-maps-react';
import { connect } from 'react-redux';
 
export class MapContainer extends Component {

  getMarker = () => {
    let markerEle = [];
    let stores = this.props.stores;
    let iconMarker = this.getMapIcon();
    if(stores !== null && stores !== undefined && stores.length > 0){
      stores.map((store, i) => {
        let orderCount = this.getOrderCounter(store.id);
        let title = '';
        if(orderCount === 0){
          title = store.store_name+' has no order';
        } else {
          title = store.store_name+' got '+orderCount+' order(s)';
        }
        let ele = <Marker
            icon={iconMarker}
            key={store.id}
            position={{ lat: store.lat, lng: store.long }}
            label={`${orderCount}`}
            title={title}
            onClick={() => { alert(title); }}
          ></Marker>
          markerEle.push(ele);
      });
    }
    return markerEle;
  }

  getMapIcon = () => {
    let iconMarker = new window.google.maps.MarkerImage(
      'https://img.icons8.com/color/48/000000/place-marker.png', null, null, null, new window.google.maps.Size(60, 60)
    );
    return iconMarker;
  }

  getOrderCounter = (storeId) => {
    let orders = this.props.orders;
    let orderCount = 0;
    if(orders !== null && orders !== undefined && orders.length > 0) {
      let selectedOrder = orders.filter((f) => { return f.store_id === storeId});
      if(selectedOrder.length > 0){
        orderCount = selectedOrder.length;
      }
    }
      
    return orderCount;
  }

  render() {
    return (
        <div className="display-area">
          <Map 
            google={this.props.google}
            zoom={2}
            initialCenter={{
                lat: 22,
                lng: 88
              }}
            style={containerStyle}
            >
              {this.getMarker()}
          </Map>
        </div>
    );
  }
}
 
const containerStyle = {
    // position: 'relative',  
    width: '100%',
    height: '100%'
}

const mapStateToProps = (state) => ({
  stores: state.stores,
  orders: state.orders,
});

export default GoogleApiWrapper({
  apiKey: ('AIzaSyAwFcq-M96kUY67q56-zp-nRx1XW7srX8Q')
})(connect(mapStateToProps) (MapContainer))