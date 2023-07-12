import { FC } from 'react';
import Container from './components/Container';
import ErrorPage from './components/ErrorPage';
import Signup from './components/Signup';
import Login from './components/Login';
import Dashboard from './components/Dashboard';
import ProtectedRoutes from './ProtectedRoutes';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import UserProvider from './context/UserContext';

/*
this is the suggested way to make a router, but wouldn't work with protected routes
*/

// const router = createBrowserRouter([
//   {
//     path: '/',
//     element: <Container />,
//     errorElement: <ErrorPage />,
//     children: [
//       {
//         path: 'signup',
//         element: <Signup />
//       },
//       {
//         index: true,
//         element: <Login />
//       },
//       {
//         element: <ProtectedRoutes />,
//         children: [
//           {
//             path: 'dashboard',
//             element: <Dashboard />
//           }

//         ]

//       }

//     ]
//   }
// ])

const App: FC = () => {
	return (
		<BrowserRouter>
			<UserProvider>
				<Routes>
					<Route path="/" element={<Container />}>
						<Route path="/" element={<Login />} />
						<Route path="signup" element={<Signup />} />
						<Route element={<ProtectedRoutes />}>
							<Route path="dashboard" element={<Dashboard />} />
						</Route>
					</Route>
				</Routes>
			</UserProvider>
		</BrowserRouter>
	);
};

export default App;
