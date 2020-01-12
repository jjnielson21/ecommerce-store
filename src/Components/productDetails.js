import React, { Component } from 'react';
import { connect } from 'react-redux';

import Info from './productDisplay';
import store from '../Store/store';



const mapStateToProps = (state) => {
    return { products: state.productsPage }
}


class ProductDetails extends Component {
    constructor(props) {
        super(props);
        this.id = Number(this.props.match.params.id);
        this.product = this.props.products.filter((obj) => {
            return obj.id === this.id;
        })[0];
    }
    addToCart = (id) => {
        store.dispatch({ type: 'ADD_TO_CART', item: id })
    }

    render() {
        return (
            <div>
                <Info product={this.product} addToCart={this.addToCart}/>
            </div>
        );
    }
}

export default connect(mapStateToProps)(ProductDetails);