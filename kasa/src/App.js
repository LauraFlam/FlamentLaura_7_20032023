import Home from './pages/Home/Home';
import Error from './pages/Error/Error';
import About from './pages/About/About';
import Logements from './pages/Logements/Logements';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

const router = createBrowserRouter([
	{ path: "/", element: <Home /> },
	{ path: "/logements/:id", element: <Logements /> },
	{ path: '/about', element: <About /> },
	{ path: "*", element: <Error /> },
]);

function App() {
	return (
		<>
			<RouterProvider router={router} />
		</>
	);
}

export default App;
