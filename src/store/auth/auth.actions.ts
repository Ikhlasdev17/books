import { createAsyncThunk } from '@reduxjs/toolkit'
import { v4 } from 'uuid'
import axios from '../../config/api/api.interceptor'
import { IAuthResponse, IUserSignUpData } from './auth.types'

export const userAuth = createAsyncThunk<IAuthResponse, IUserSignUpData>(
	'auth/sign',
	async ({ email, name }, { rejectWithValue }) => {
		try {
			const unniqueKey = v4()
			const uniqueSecret = v4()

			const { data } = await axios.post<IAuthResponse>('signup', {
				email,
				name,
				key: unniqueKey,
				secret: uniqueSecret,
			})

			return data
		} catch (error: any) {
			if (error?.response && error?.response.data.message) {
				return rejectWithValue(error.response.data.message)
			} else {
				return rejectWithValue(error?.message)
			}
		}
	}
)
