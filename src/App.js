import React, { Component } from "react";
import { Route, Router, Switch } from "react-router-dom";
import { getStores, getOrders } from './actions';
import { connect } from "react-redux";
import browserHistory from './BrowserHistory';
import MapContainer from './components/MapContainer';
import StoreForm from "./components/StoreForm";
import OrderForm from "./components/OrderForm";
import Header from './components/Header';
import StoresList from './components/StoresList';
import OrdersList from './components/OrdersList';

class App extends Component {
  constructor(props) {
    super(props);
    props.getStores();
    props.getOrders();
  }

  render() {
    return (
      <Router history={browserHistory}>
        <Header />
        <div className="contents">
          <Switch>
            {/* <Route path="/" exact component={StoreHome} /> */}
            <Route path='/' exact render={() => (<React.Fragment>
                        <MapContainer />
                    </React.Fragment>)} />
            <Route path="/storesForm" exact render={() => (<React.Fragment>
                <MapContainer />
                <StoreForm />
            </React.Fragment>)} />
            <Route path="/ordersForm" exact render={() => (<React.Fragment>
                <MapContainer />
                <OrderForm />
            </React.Fragment>)} />
            <Route path="/storesList" exact render={() => (<React.Fragment>
                <StoresList />
            </React.Fragment>)} />
            <Route path="/ordersList" exact render={() => (<React.Fragment>
                <OrdersList />
            </React.Fragment>)} />
          </Switch>
        </div>
      </Router>
    );
  }
}

let mapStateToProps = (state) => ({
  stores: state.stores
});
export default connect(mapStateToProps, { getOrders, getStores })(App);
