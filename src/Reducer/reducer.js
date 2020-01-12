import * as _ from 'lodash';


export default function reducer(state, action) {
    switch (action.type) {

        case 'SET_USER':
            return {
                ...state,
                userName: action.value
            }

        case 'SEARCH':
            return {
                ...state,
                searchString: action.value.toLowerCase()
            }
        
        case 'ADD_TO_CART':
            let updatedCart = [...state.cart]
            let foundIndex = _.findIndex(state.cart, (o) => o.item.id === action.item.id);

            if(foundIndex !== -1) {
                updatedCart[foundIndex] = {item: action.item, count: updatedCart[foundIndex].count+1}
            } else {
                updatedCart.push({item:action.item, count:1})
            }
            return Object.assign({}, state, {cart: updatedCart})
        
        case 'CHANGE_QUANTITY':
            return Object.assign({}, state, {
                cart: state.cart.map((item) => {
                    if (item.item === action.item) {
                        let newCount = item.count
                        if (action.direction === 'increase') {
                            newCount++
                        } else {
                            newCount--
                        }
                        return Object.assign({}, item, {
                            count: newCount
                        })
                    }
                    return item
                })
            })

        case 'SET_LIST':
            return {
                ...state,
                productsPage: action.payload
            }

        case 'REMOVE':
            let newCart = state.cart.filter(x => x.item !== action.item)
            return Object.assign({}, state, {
                cart: newCart
            })

        case 'CHECKOUT':
            return Object.assign({}, state, {
                cart: []
            })

        default:
            return state
    }
}