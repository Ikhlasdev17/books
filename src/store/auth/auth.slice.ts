import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import CryptoJS from 'crypto-js'
import { saveLocalStorage } from '../../utils/saveLocalStorage'
import { userAuth } from './auth.actions'
import { IAuthResponse, IAuthResponseData } from './auth.types'
interface IAuthInitialState {
	isLoading: boolean
	user: IAuthResponseData | null
}

export const authSliceInitialState: IAuthInitialState = {
	isLoading: false,
	user: null,
}

export const authSlice = createSlice({
	name: 'auth',
	initialState: authSliceInitialState,
	reducers: {
		logout: state => {
			localStorage.removeItem('userKey')
			localStorage.removeItem('userSecret')
			state.user = null
		},
	},
	extraReducers: build => {
		build
			.addCase(userAuth.pending, state => {
				state.isLoading = true
			})
			.addCase(
				userAuth.fulfilled,
				(state, action: PayloadAction<IAuthResponse>) => {
					saveLocalStorage(
						'userSecret',
						CryptoJS.AES.encrypt(
							JSON.stringify(action.payload.data.secret),
							import.meta.env.VITE_SECRETKEY
						).toString()
					)
					saveLocalStorage('userKey', action.payload.data.key)

					state.isLoading = false
					state.user = action.payload.data
				}
			)
			.addCase(userAuth.rejected, state => {
				state.isLoading = false
				state.user = null
			})
	},
})

export const { logout } = authSlice.actions
export const authReducer = authSlice.reducer
