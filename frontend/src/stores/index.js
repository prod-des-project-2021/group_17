import { combineReducers } from 'redux';
import { auth, product } from './reducers';

const allReducers = combineReducers({
	auth,
	product
});

export default allReducers;
