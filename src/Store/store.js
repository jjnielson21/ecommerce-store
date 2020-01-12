import { createStore } from 'redux'
import reducer from '../Reducer/reducer'


const initialState = {
    userName: '',
    searchString: '',
    productsPage: [ ],
    cart: [ ],
}

const store = createStore(reducer, initialState);

export default store; 