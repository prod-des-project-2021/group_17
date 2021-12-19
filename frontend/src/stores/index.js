import { combineReducers } from 'redux';
import { auth, product,error } from './reducers';

const allReducers = combineReducers({
	auth,
	product,
	error
});

export default allReducers;
