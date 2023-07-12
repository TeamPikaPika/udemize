import { Navigate, Outlet } from 'react-router-dom';
import { useContext } from 'react'
import { UserContext } from './context/UserContext'


// const { user } = useContext(UserContext)

const useAuth = () => {
  const { user } = useContext(UserContext)
  const newUser = { loggedIn: false };
  newUser.loggedIn = user.loggedIn
 
	return newUser && newUser.loggedIn;
};

const ProtectedRoutes = () => {
	const isAuth = useAuth();
	return isAuth ? <Outlet /> : <Navigate to="/" />;
};

export default ProtectedRoutes;
