//import Categories from './components/navbar/Categories';
import React from 'react';
import './App.css';
import { createStore, applyMiddleware, compose } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import allReducers from './stores/index';
import MainRouter from './router/router';
import AlertDialog from './pages/PopoverError';

const store = createStore(
	allReducers,
	compose(
		applyMiddleware(thunk),
		//window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
	)
);

function App() {
	return (
		<Provider store={store}>
			<MainRouter />
			<AlertDialog/>
		</Provider>
	);
}

export default App;
