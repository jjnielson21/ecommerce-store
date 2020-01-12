import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import Button from '@material-ui/core/Button';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';

import CartItem from './CartItem';
import store from '../Store/store';





const mapStateToProps = (state) => {
    return { cartPage: state.cart }
}



class CartPage extends Component {

    count = () => {
        if (this.props.cartPage.length) {
            return (this.props.cartPage.reduce((a, b) => ({ count: a.count + b.count })).count);
        }
    }
    total = () => {
        if (this.props.cartPage.length) {
            let total = 0;
            this.props.cartPage.forEach(element => {
                total += element.item.price * element.count
            });
            return total
        }
    }

    checkOut = () => {
        store.dispatch({ type: 'CHECKOUT' })
    }

    render() {
        
        const list = this.props.cartPage.map((prod) => (
            <List key={prod.item.id} component="nav">
                <CartItem product={prod} />
                <Divider />
            </List>
        ))
        if(this.props.cartPage.length){
            return (
    
                <div>
                    <div className='row marg'>
                        <div className='row'>
                            <div>Items</div>
                            <div className='padcart'>{this.count()}</div>
                        </div>
                        <div className='row'>
                            <div>Subtotal $</div>
                            <div className='padcart'>{this.total()}</div>
                        </div>
    
                        <Link to="/checkOut" style={{ textDecoration: 'none', color: 'inherit' }} >
                            <Button
                                onClick={this.checkOut}>
                                Continue to checkout
                            </Button>
                        </Link>
                    </div>
    
                    <div>
                        {list}
                    </div>
                </div>
            );
        } else {
            return (
                <div className='empty'>
                    <h3>Cart Empty</h3>
                </div>
            )
        }
    }
}



export default connect(mapStateToProps)(CartPage);
