import React from 'react'
import { Switch, Route } from 'react-router-dom'

import ProductsPage from './productsPage'
import CartPage from './cartPage'
import ProductDetails from './productDetails';
import CheckOut from './checkout';


const Router = () => (
    <Switch>
        <Route exact path='/' component={ProductsPage} />
        <Route path='/productdetails/:id' component={ProductDetails} />
        <Route path='/cart' component={CartPage} />
        <Route path='/checkOut' component={CheckOut} />
        <Route component={ProductsPage} />
    </Switch>
)

export default Router