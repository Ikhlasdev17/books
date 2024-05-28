import { Routes as DefaultRoutes, Route } from 'react-router-dom'
import AppLayout from '../../components/layout/app-layout/app-layout'
import AuthLayout from '../../components/layout/auth-layout/auth-layout'
import { routes } from '../../data/routes.data'

const Routes = () => {
	return (
		<DefaultRoutes>
			<Route path='/authorization' element={<AuthLayout />}>
				{routes.auth.map(item => (
					<Route key={item.path} path={item.path} element={<item.element />} />
				))}
			</Route>
			<Route path='/' element={<AppLayout />}>
				{routes.app.map(item => (
					<Route key={item.path} path={item.path} element={<item.element />} />
				))}
			</Route>
		</DefaultRoutes>
	)
}

export default Routes
