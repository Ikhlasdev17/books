import { configureStore } from '@reduxjs/toolkit'
import { setupListeners } from '@reduxjs/toolkit/query'
import { authApi } from './auth/auth.api'
import { authReducer } from './auth/auth.slice'
import { bookApi } from './book/book.api'
import { bookReducer } from './book/book.slice'

export const store = configureStore({
	reducer: {
		[bookApi.reducerPath]: bookApi.reducer,
		[authApi.reducerPath]: authApi.reducer,
		auth: authReducer,
		books: bookReducer,
	},
	middleware: getDefaultMiddleware =>
		getDefaultMiddleware().concat([bookApi.middleware, authApi.middleware]),
})

setupListeners(store.dispatch)
export type TypeRootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
