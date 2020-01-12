import React, { Component } from 'react';
import { connect } from 'react-redux';

import Cards from './productList';
import store from '../Store/store';



function mapStateToProps(state) {
    return {
        productsPage: state.productsPage,
        searchString: state.searchString,
    };
}

class ProductsPage extends Component {


    componentDidMount() {
        fetch("https://my-json-server.typicode.com/tdmichaelis/typicode/products")
            .then(res => res.json())
            .then(result => {
                store.dispatch({ type: 'SET_LIST', payload: result })
            })
    }


    render() {
       
        let filteredList = this.props.productsPage.filter(item => {
            return item.title.toLowerCase().indexOf(this.props.searchString) !== -1 || item.description.toLowerCase().indexOf(this.props.searchString) !== -1
        })
        return (
            <div>
                <Cards products={filteredList} />
            </div>
        );
    }

}


export default connect(mapStateToProps)(ProductsPage)

