import React, { Component } from 'react';
import { Link } from "react-router-dom";
import TextField from '@material-ui/core/TextField';
import { styles } from '../constants/styles';
import Button from '@material-ui/core/Button';
import { createOrder } from '../actions';
import { connect } from 'react-redux';
import Select from 'react-select';
import browserHistory from '../BrowserHistory';

class OrderForm extends Component {

    constructor(props) {
        super(props);
        this.state = {
            store_id: '',
            order_number: '',
            order_amount: '',
            selected_store: '',
        };
    }

    setFieldValue = (fieldName, event) => {
        let _state = this.state;
        if(fieldName === 'store_name'){
            _state.store_id = event.value;
            _state.selected_store = event;
        } else if(fieldName === 'order_number'){
            _state.order_number = event.target.value;
        } else if(fieldName === 'order_amount'){
            _state.order_amount = event.target.value;
        }
        this.setState({ _state });
    }

    formSave = () => {
        let orders = this.props.orders;
        let params = {};
        let id = orders !== null && orders !== undefined && orders.length > 0 ? orders.length + 1 : 1;
        params.id = id;
        params.store_id = this.state.store_id;
        params.order_number = this.state.order_number;
        params.order_amount = this.state.order_amount;
        this.props.createOrder( params );
        browserHistory.push('/');
        alert('Order Created Successfully');
    }
    
    render() {
        let stores = this.props.stores;
        let isStore = (stores !== null && stores !== undefined && stores.length > 0) ? true : false;
        let storeList = [];
        if(isStore){
            stores.map((store, i) => {
                let obj = {};
                obj.value = store.id;
                obj.label = store.store_name;
                obj.title = store.store_name;
                storeList.push(obj);
            })
        }
        return(
            <div div className="user-input-form " id="fadein">
                <div className='drawer-header'>
                    <span style={{ paddingLeft: '15px'}}>Create Order</span>
                    <span style={{ float: 'right'}} title={'Close'}><Link to="/">
                        <i className="material-icons" style={{ color: 'white' }}>close</i>
                    </Link></span>
                </div>
                {isStore && 
                <div>
                    <div className="col-sm-12" style={{ paddingTop: '20px', paddingBottom: '10px' }} id={"days-after-field"} key={"days-after-field"}>
                        <Select 
                            simpleValue 
                            value={this.state.selected_store} 
                            style={{ border: '1px solid #f75723' }} 
                            placeholder={'Select Store'} 
                            clearable={false} 
                            options={storeList} 
                            onChange={this.setFieldValue.bind(this, 'store_name')} 
                        />
                    </div>
                    <div className="col-sm-12" style={{ paddingTop: '20px' }} id={"days-after-field"} key={"days-after-field"}>
                        <TextField
                            key={"days-after-field"}
                            underlineFocusStyle={styles.textField.underlineFocus}
                            labelStyle={{ ...styles.textField.floatingLabel, top: '10px', left: '7px' }}
                            inputStyle={styles.textField.input}
                            label={'Quantity'}
                            underlineShow={false}
                            fullWidth={true}
                            name={'Quantity'}
                            value={this.state.order_number}
                            onChange={this.setFieldValue.bind(this, 'order_number')}
                            style={styles.formFieldContainer}
                            className="srchico"
                            floatingLabelFocusStyle={{ transform: 'scale(0.70) translate(0, -13px)' }}
                            floatingLabelShrinkStyle={{ transform: 'scale(0.70) translate(0, -13px)' }}
                        />
                    </div>
                    <div className="col-sm-12" style={{ paddingTop: '20px' }} id={"days-after-field"} key={"days-after-field"}>
                        <TextField
                            key={"days-after-field"}
                            underlineFocusStyle={styles.textField.underlineFocus}
                            labelStyle={{ ...styles.textField.floatingLabel, top: '10px', left: '7px' }}
                            inputStyle={styles.textField.input}
                            label={'Amount'}
                            underlineShow={false}
                            fullWidth={true}
                            name={'Amount'}
                            value={this.state.order_amount}
                            onChange={this.setFieldValue.bind(this, 'order_amount')}
                            style={styles.formFieldContainer}
                            className="srchico"
                            floatingLabelFocusStyle={{ transform: 'scale(0.70) translate(0, -13px)' }}
                            floatingLabelShrinkStyle={{ transform: 'scale(0.70) translate(0, -13px)' }}
                        />
                    </div>
                    <div  className="col-sm-12" style={{ paddingTop: '20px' }} id={"days-after-field"} key={"days-after-field"}>
                        <Button
                            key='save'
                            variant="contained" 
                            color="primary"
                            onClick={this.formSave}
                            label={'SAVE'}
                        >
                            SAVE
                        </Button>
                    </div>
                </div>}
                {!isStore && 
                <div>
                    <div className="col-sm-12" style={{ paddingTop: '20px' }} id={"days-after-field"} key={"days-after-field"}>
                        {'There have no store to take order'}
                    </div>    
                </div>}
            </div>
        );
    }
}

let mapStateToProps = (state) => {
    return {
      orders: state.orders,
      stores: state.stores,
    };
  };

export default connect(mapStateToProps, { createOrder })(OrderForm);