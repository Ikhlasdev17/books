import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { baseUrl } from '../../config/api/api.interceptor'
import { getHashedHeaders } from '../../utils/getHashedHeaders'
import { IAuthResponse } from './auth.types'

export const authApi = createApi({
	reducerPath: 'api/auth',
	baseQuery: fetchBaseQuery({
		baseUrl,
	}),
	endpoints: build => ({
		getUserInfo: build.query<IAuthResponse, any>({
			query: () => {
				const headers = getHashedHeaders('GET', 'myself')

				return {
					url: `myself`,
					method: 'GET',
					headers,
				}
			},
		}),
	}),
})

export const { useGetUserInfoQuery } = authApi
