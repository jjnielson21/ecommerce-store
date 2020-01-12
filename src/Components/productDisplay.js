import React from 'react';
import PropTypes from 'prop-types';

import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import IconButton from '@material-ui/core/IconButton';

import './style.css';

const styles = theme => ({
    root: {
        ...theme.mixins.gutters(),
        paddingTop: '10px',
        paddingBottom: '10px',
        height: '19vh',
        display: 'flex',
        flexDirection: 'column',
        alignContent: 'center',
    },
    
});

function Info(props) {
    const { classes } = props;

    return (

        <div className='container'>
            <Paper className={classes.root} elevation={1}>
                <div className='row'>
                    <Typography variant="h5" component="h3">
                        {props.product.title}
                    </Typography>
                    <div>
                        <Typography component="h3">
                            ${props.product.price}
                        </Typography>
                        <IconButton aria-label="Add to Cart"
                            onClick={() => props.addToCart(props.product)}
                        >
                            <ShoppingCartIcon />
                        </IconButton>
                    </div>
                </div>
                <Typography component="p">
                    {props.product.description}
                </Typography>
                <div className='row'>
                    <div className='group' component="div">
                        <h5>Category:</h5>
                        <div className='right'>{props.product.category}</div>
                    </div>
                    <div className='group' component="div">
                        <h5>Rating:</h5>
                        <div className='right'>{props.product.rating}</div>
                    </div>
                </div>
                <div className='image' style={{ backgroundImage: "url(" + props.product.img + ")" }}>&nbsp;</div>
            </Paper>
        </div>
    );
}

Info.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Info);