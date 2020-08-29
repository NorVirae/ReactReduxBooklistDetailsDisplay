import {combineReducers} from 'redux';
import { bookListReducer, signInReducer, bookDetailReducer } from '.';

const allReducers = combineReducers({
    books:bookListReducer,
    status:signInReducer,
    details:bookDetailReducer
})

export default allReducers;