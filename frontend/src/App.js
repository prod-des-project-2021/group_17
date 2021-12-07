//import Categories from './components/navbar/Categories';
import React from 'react';
import './App.css';
import { createStore, applyMiddleware, compose } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import allReducers from './stores/index';
import MainRouter from './router/router';

const store = createStore(
	allReducers,
	compose(
		applyMiddleware(thunk)
	)
);

function App() {
	return (
		<Provider store={store}>
			<MainRouter />
		</Provider>
	);
}

export default App;
