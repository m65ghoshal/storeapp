import { combineReducers } from 'redux';
import storeReducer from './storesReducer';
import orderReducer from './ordersReducer';

export default combineReducers({
    stores: storeReducer,
    orders: orderReducer,
});