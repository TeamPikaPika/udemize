import { FC } from 'react';
import Dashboard from './Dashboard';
import Login from './Login';
import Signup from './Signup';
import { Outlet, Link } from 'react-router-dom';

const Container: FC = () => {
	return (
		<div className="container">
			'container'
			<Outlet />
			{/* <Dashboard /> */}
			{/* <Login /> */}
			{/* <Signup /> */}
		</div>
	);
};

export default Container;
