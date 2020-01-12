import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import ArrowDown from '@material-ui/icons/ArrowDownward';
import ArrowUp from '@material-ui/icons/ArrowUpward';
import Delete from '@material-ui/icons/Delete';

import store from '../Store/store';

const styles = theme => ({
    root: {
        ...theme.mixins.gutters(),
        paddingTop: '10px',
        paddingBottom: '10px',
    },
});



class CartItem extends Component {
    increaseQuantity = () => {
        store.dispatch({ type: 'CHANGE_QUANTITY', item: this.props.product.item, direction: 'increase' })
    }
    decreaseQuantity = () => {
        store.dispatch({ type: 'CHANGE_QUANTITY', item: this.props.product.item, direction: 'decrease' })
    }
    removeItem = () => {
        store.dispatch({ type: 'REMOVE', item: this.props.product.item })
    }


    render() {
        const { item } = this.props.product
        const { count } = this.props.product
        return (
            <Paper elevation={1} className='line'>
                <div className='col'>
                    <img src={item.img} alt={item.title} style={{ width: 'auto', height: '100px' }} />
                    <div className='rowpad'>
                        <div>$</div>
                        {item.price}
                    </div>
                </div>
                <div className='txtgroup'>
                    <Typography variant="h6" component="h3">
                        <div className='carttitle'>
                            {item.title}
                        </div>
                        
                    </Typography>
                    <div className='subtxt'>
                        <p className='cnt'>Quantity</p>
                        <p className='cnt'>{count}</p>
                        <div className='arrows'>
                            <IconButton
                                aria-haspopup="true"
                                onClick={this.increaseQuantity}
                                color="primary"
                            >
                                <ArrowUp />
                            </IconButton>
                            <IconButton
                                disabled={count === 0}
                                aria-haspopup="true"
                                onClick={this.decreaseQuantity}
                                color="primary"
                            >
                                <ArrowDown />
                            </IconButton>
                        </div>
                        <IconButton
                            aria-haspopup="true"
                            onClick={this.removeItem}
                            color="primary"
                        >
                            <Delete />
                        </IconButton>
                    </div>
                </div>
            </Paper>
        );
    }
}

CartItem.propTypes = {
    classes: PropTypes.object.isRequired,
};


export default withStyles(styles)(CartItem);