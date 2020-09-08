import React, { Component } from 'react';
import { connect } from 'react-redux';

class OrdersList extends Component {

    ordersDetails = () => {
        let stores = this.props.stores;
        let orders = this.props.orders;
        let element = [];
        if(orders !== null && orders !== undefined && orders.length > 0) {
            orders.map((order, i) => {
                let store_details = stores.filter((f) => { return f.id === order.store_id});
                let store_name = '';
                if(store_details.length > 0){
                    store_name = store_details[0].store_name;
                }
                let ele = <div style={{ color: 'green' }}>
                    <span>{'Odrer-'+order.id+'.'}</span>
                    <span>{store_name}</span>
                    <span>{' has of RS. '+order.order_amount+' for '+order.order_number+' items.'}</span>
                </div>;
                element.push(ele);
            });
        } else {
            element = (<div> No Orders found </div>);
        }
        return element;
    }

    render(){

        return(
            <div className="display-view-area">
                <div style={{ textAlign: 'center', paddingTop: '20px' }}>
                    <div style={{ fontWeight: 'bold', fontSize: 20 }}> Orders Lists </div>
                    <hr />
                    <div>{this.ordersDetails()}</div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
      orders: state.orders,
      stores: state.stores,
    };
  };

export default connect(mapStateToProps) (OrdersList);