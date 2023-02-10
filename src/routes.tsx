import { Routes, Route } from 'react-router-dom'
import Basket from './pages/Basket'
import MainPage from './pages/MainPage'

export const MainRoutes = () => {
	interface IRoutes {
		path: string
		element: Function
		id: number
	}
	const routes = [
		{ path: '/', element: <MainPage />, id: 1 },
		{ path: 'basket', element: <Basket />, id: 1 },
	]

	return (
		<Routes>
			{routes.map(item => (
				<Route path={item.path} element={item.element} key={item.id} />
			))}
		</Routes>
	)
}
