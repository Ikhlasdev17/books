import Auth from '../views/auth/auth'
import FavBooks from '../views/fav-books/fav-books'
import Home from '../views/home/home'

export const routes = {
	auth: [
		{
			path: '',
			element: Auth,
		},
	],
	app: [
		{
			path: '/',
			element: Home,
		},
		{
			path: '/fav-books',
			element: FavBooks,
		},
	],
}
