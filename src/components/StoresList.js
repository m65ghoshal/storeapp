import React, { Component } from 'react';
import { connect } from 'react-redux';

class StoresList extends Component {

    storesDetails = () => {
        let stores = this.props.stores;
        let element = [];
        if(stores !== null && stores !== undefined && stores.length > 0) {
            stores.map((store, i) => {
                let ele = <div style={{ color: 'green' }}>
                    <span>{'Store-'+store.id+' - '}</span>
                    <span>{store.store_name}</span>
                </div>;
                element.push(ele);
            });
        } else {
            element = (<div> No Stores found </div>);
        }
        return element;
    }

    render(){

        return(
            <div className="display-view-area">
                <div style={{ textAlign: 'center', paddingTop: '20px' }}>
                    <div style={{ fontWeight: 'bold', fontSize: 20 }}> Stores Lists </div>
                    <hr />
                    <div>{this.storesDetails()}</div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
      stores: state.stores,
    };
  };

export default connect(mapStateToProps) (StoresList);