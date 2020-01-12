import React from 'react';
import { Link } from 'react-router-dom';

import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';

import './style.css';


class SimpleBottomNavigation extends React.Component {
    state = {
        value: 0,
    };

    handleChange = (value) => {
        this.setState({ value });
    };

    render() {

        return (
            <div className='cntr'>
                <div className='buttons'>
                    <Link style={{ textDecoration: 'none', color: 'primary' }} to={{ pathname: '/' }}>
                        <div className='btn'>
                            <ArrowBackIcon />
                            <div>Products</div>
                        </div>
                    </Link>

                    <Link style={{ textDecoration: 'none', color: 'primary' }} to={{ pathname: '/cart' }}>
                        <div className='btn'>
                            <ShoppingCartIcon />
                            <div>My Cart</div>
                        </div>
                    </Link>
                </div>
            </div>

        );
    }
}


export default SimpleBottomNavigation;