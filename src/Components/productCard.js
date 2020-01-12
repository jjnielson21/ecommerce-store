import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';


import store from '../Store/store';


const styles = theme => ({
    card: {
        width: 400,
        margin: 10,
    },
    media: {
        height: 0,
        paddingTop: '77.25%', 
    },
    actions: {
        display: 'flex',
        justifyContent: 'space-between',
    },
    expand: {
        transform: 'rotate(0deg)',
        marginLeft: 'auto',
        transition: theme.transitions.create('transform', {
            duration: theme.transitions.duration.shortest,
        }),
    },
    expandOpen: {
        transform: 'rotate(180deg)',
    },
});

class ProductCard extends React.Component {
    state = { expanded: false };

    addToCart = (product) => {
        store.dispatch({ type: 'ADD_TO_CART', item: product })
    }

    handleExpandClick = () => {
        this.setState(state => ({ expanded: !state.expanded }));
    };

    render() {
        
        return (
            <Card key={this.props.key} className={this.props.classes.card} >
                <CardHeader
                    action={
                        <IconButton aria-label="Add to Cart"
                            onClick={() => this.addToCart(this.props.product)}
                        >
                            <ShoppingCartIcon />
                        </IconButton>
                    }
                    title={this.props.product.title}
                />
                <Link to={`/ProductDetails/${this.props.product.id}`}>
                    <CardMedia
                        className={this.props.classes.media}
                        image={this.props.product.img}
                    />
                </Link>
                <CardActions className={this.props.classes.actions}>
                <div className='apart'>
                    <div className='row'>
                        <h3>$</h3>
                        <h3>{this.props.product.price}</h3>
                    </div>
                </div>
              </CardActions>
                <Collapse in={this.state.expanded} timeout="auto" unmountOnExit>
                    <CardContent>
                        <Typography paragraph>
                            {this.props.product.description}
                        </Typography>
                    </CardContent>
                </Collapse>
            </Card>
        );
    }
}

ProductCard.propTypes = {
    classes: PropTypes.object.isRequired,
};


export default withStyles(styles)(ProductCard);