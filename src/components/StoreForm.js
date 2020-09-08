import React, { Component } from 'react';
import { Link } from "react-router-dom";
import TextField from '@material-ui/core/TextField';
import { styles } from '../constants/styles';
import Button from '@material-ui/core/Button';
import { createStore } from "../actions";
import { connect } from "react-redux";
import browserHistory from '../BrowserHistory';
import isValidLatLong from '../constants/parameterVerifier';

class StoreForm extends Component {

    constructor(props) {
        super(props);
        this.state = {
            store_name: '',
            store_image: '',
            lat: '',
            long: '',
        };
    }

    setFieldValue = (fieldName, event) => {
        let _state = this.state;
        if(fieldName === 'store_name'){
            _state.store_name = event.target.value;
        } else if(fieldName === 'store_image'){
            _state.store_image = event.target.value;
        } else if(fieldName === 'lat'){
            let isValid = isValidLatLong(event.target.value);
            if(isValid){
                _state.lat = event.target.value;
            }
        } else if(fieldName === 'long'){
            let isValid = isValidLatLong(event.target.value);
            if(isValid){
                _state.long = event.target.value;
            }
        }
        this.setState({ _state });
    }

    formSave = () => {
        let isValid = this.isValid();
        if(isValid){
            let stores = this.props.stores;
            let params = {};
            let id = stores !== null && stores !== undefined && stores.length > 0 ? stores.length + 1 : 1;
            params.id = id;
            params.store_name = this.state.store_name;
            params.store_image = this.state.store_image;
            params.lat = this.state.lat;
            params.long = this.state.long;
            this.props.createStore( params );
            browserHistory.push('/');
            alert('Store Created Successfully');
        } else {
            return false;
        }
    }

    isValid = () => {
        let isValid = true;
            if(this.state.store_name === ''){
                alert('Please enter store name');
                isValid = false; 
                return false;
            } else if (this.state.lat === ''){
                alert('Please enter latitude');
                isValid = false; 
                return false;
            } else if(this.state.long === ''){
                alert('Please enter longitude');
                isValid = false; 
                return false;
            }
        return isValid;
    }
    
    render() {

        return(
            <div div className="user-input-form " id="fadein">
                <div className='drawer-header'>
                    <span style={{ paddingLeft: '15px'}}>Create Store</span>
                    <span style={{ float: 'right'}} title={'Close'}><Link to="/">
                        <i className="material-icons" style={{ color: 'white' }}>close</i>
                    </Link></span>
                </div>
                <div>
                    <div className="col-sm-12" style={{ paddingTop: '20px' }} id={"days-after-field"} key={"days-after-field"}>
                        <TextField
                            key={"days-after-field"}
                            underlineFocusStyle={styles.textField.underlineFocus}
                            labelStyle={{ ...styles.textField.floatingLabel, top: '10px', left: '7px' }}
                            inputStyle={styles.textField.input}
                            label={'Store Name'}
                            underlineShow={false}
                            fullWidth={true}
                            name={'Store Name'}
                            value={this.state.store_name}
                            onChange={this.setFieldValue.bind(this, 'store_name')}
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
                            label={'Store Image'}
                            underlineShow={false}
                            fullWidth={true}
                            name={'Store Image'}
                            value={this.state.store_image}
                            onChange={this.setFieldValue.bind(this, 'store_image')}
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
                            label={'Latitude'}
                            underlineShow={false}
                            fullWidth={true}
                            name={'Latitude'}
                            value={this.state.lat}
                            onChange={this.setFieldValue.bind(this, 'lat')}
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
                            labelStyle={{ ...styles.textField.floatingLabel, top: '5px', left: '7px', paddingLeft: '8px' }}
                            inputStyle={styles.textField.input}
                            label={'Longitude'}
                            underlineShow={false}
                            fullWidth={true}
                            name={'Longitude'}
                            value={this.state.long}
                            onChange={this.setFieldValue.bind(this, 'long')}
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
                </div>
            </div>
        );
    }
}

let mapStateToProps = (state) => {
    return {
      stores: state.stores,
    };
  };

export default connect(mapStateToProps, { createStore })(StoreForm);
