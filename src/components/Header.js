import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import browserHistory from '../BrowserHistory';

class Header extends Component {

    render(){
        return (
            <div>
            <nav className="header navbar navbar-dark bg-dark">
                <Link className="navbar-brand mb-0" to="/">
                    <img alt="logo" src="https://img.icons8.com/color/50/000000/home-page.png" className="mr-2 mb-2" style={{ height: "1rem" }} />
                    Store
                </Link>
                
                <div>
                    <span className='menu-item' title={'Create Store'} style={{ color: 'whitesmoke', paddingRight: 10, paddingLeft: 10 }} 
                        onClick={() => { browserHistory.push('/storesForm') }}>Create Store</span>
                    <span className='menu-item' title={'Create Order'} style={{ color: 'whitesmoke', paddingRight: 10, paddingLeft: 10 }} 
                        onClick={() => { browserHistory.push('/ordersForm') }}>Create Order</span>
                    <span className='menu-item' title={'Store List'} style={{ color: 'whitesmoke', paddingRight: 10, paddingLeft: 10 }} 
                        onClick={() => { browserHistory.push('/storesList') }}>Store List</span>
                    <span className='menu-item' title={'Order List'} style={{ color: 'whitesmoke', paddingRight: 10, paddingLeft: 10 }} 
                        onClick={() => { browserHistory.push('/ordersList') }}>Order List</span>
                </div>
            </nav>
            </div>
        );
    }
}

export default Header;
