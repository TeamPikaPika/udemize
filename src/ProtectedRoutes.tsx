import { Navigate, Outlet } from 'react-router-dom';
import { useContext } from 'react'
import { UserContext } from './context/UserContext'



/*
  This funciton checks if the user is logged in, and returns true or false
*/

const useAuth = () => {
  const { user } = useContext(UserContext)
  const newUser = { loggedIn: false };
  newUser.loggedIn = user.loggedIn
 
	return newUser && newUser.loggedIn;
};


/*
  This funciton is used to wrap routes, and checks if users are logged in
*/

const ProtectedRoutes = () => {
	const isAuth = useAuth();
	return isAuth ? <Outlet /> : <Navigate to="/" />;
};

export default ProtectedRoutes;
