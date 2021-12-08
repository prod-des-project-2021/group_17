import React, { useEffect } from 'react';
import '../App.css';
import Navbar from '../components/navbar/Navbar';
import { Routes, Route, BrowserRouter, Navigate } from 'react-router-dom';
import Homepage from '../pages/Homepage';
import Searchbar from '../pages/Searchbar';
import Login from '../pages/Login';
import Cart from '../pages/Cart';
import Userprofile from '../pages/Userprofile';
import Footer from '../components/navbar/Footer';
import Contactus from '../pages/ContactUs';
import LegalNotice from '../pages/LegalNotice';
import Feedback from '../elements/Feedback';
import CategoryClothes from '../pages/CategoryClothes';
import CategoryGames from '../pages/CategoryGames';
import CategoryHome from '../pages/CategoryHome';
import CategoryKitchen from '../pages/CategoryKitchen';
import CategorySport from '../pages/CategorySport';
import Startpage from '../pages/Startpage';
import { AuthActions } from '../stores/actions';
import { connect } from 'react-redux';
import Register from '../pages/Register';
import SellProduct from '../pages/SellProduct';
import ViewProduct from '../pages/ViewProducts';


function MainRouter(props) {
	const { auth, getCurrent, setUser } = props;

	useEffect(
		() => {
			if (!auth.token) {
				getCurrent();
			}
			else{
				setUser();
			}
		},
		// eslint-disable-next-line react-hooks/exhaustive-deps
		[ auth.token ]
	);

	return (
		<BrowserRouter>
			{auth.token ? (
				<React.Fragment>
					<Navbar />
					<Routes>
						<Route path="/welcome" element={<Startpage />} />
						<Route path="/home" element={<Homepage />}>
							<Route path="clothes" element={<CategoryClothes />} />
							<Route path="games" element={<CategoryGames />} />
							<Route path="home" element={<CategoryHome />} />
							<Route path="kitchen" element={<CategoryKitchen />} />
							<Route path="sport" element={<CategorySport />} />
						</Route>
						<Route path="/searchbar" element={<Searchbar />} />
						<Route path="/cart" element={<Cart />} />
						<Route path="/userprofile" element={<Userprofile />} />
						<Route path="/legalnotice" element={<LegalNotice />} />
						<Route path="/contactus" element={<Contactus />} />
						<Route path="/feedback" element={<Feedback />} />
						<Route path="/sellproduct" element={<SellProduct />} />
						<Route path="/viewproduct" element={<ViewProduct />} />
                        <Route path="*" element={<Navigate to='/welcome'/>} />
					</Routes>
					<Footer />
				</React.Fragment>
			) : (
				<Routes>
					<Route path="/login" exact element={<Login />} />
					<Route path="/register" element={<Register />} />
                    <Route path="*" element={<Navigate to='/login'/>} />

				</Routes>
			)}
		</BrowserRouter>
	);
}

const mapStateToProps = ({ auth }) => ({
	auth: auth
});

const mapDispatchToProps = {
	getCurrent: AuthActions.getCurrent,
	setUser: AuthActions.setUser
};

export default connect(mapStateToProps, mapDispatchToProps)(MainRouter);
