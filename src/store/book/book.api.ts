import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { baseUrl } from '../../config/api/api.interceptor'
import { getHashedHeaders } from '../../utils/getHashedHeaders'
import {
	IAddFavBookResponse,
	IFavroiteBooksResponse,
	ISearchResponse,
} from './book.types'

export const bookApi = createApi({
	reducerPath: 'api/book',
	baseQuery: fetchBaseQuery({ baseUrl: baseUrl }),
	tagTypes: ['FavBooks'],
	endpoints: build => ({
		searchBooks: build.query<ISearchResponse, { title: string }>({
			query: ({ title }) => {
				const headers = getHashedHeaders('GET', 'books/', title)

				return {
					url: `books/${title}`,
					method: 'GET',
					headers,
				}
			},
		}),
		getFavBooks: build.query<IFavroiteBooksResponse, null>({
			query: () => {
				const headers = getHashedHeaders('GET', 'books')

				return {
					url: `books`,
					method: 'GET',
					headers,
				}
			},
			providesTags: ['FavBooks'],
		}),
		addFavBook: build.mutation<IAddFavBookResponse, { isbn: string }>({
			query: ({ isbn }) => {
				const headers = getHashedHeaders(
					'POST',
					'books',
					JSON.stringify({ isbn })
				)

				return {
					url: `books`,
					method: 'POST',
					headers,
					body: {
						isbn,
					},
				}
			},
			invalidatesTags: ['FavBooks'],
		}),
		removeFavBook: build.mutation<IFavroiteBooksResponse, { id: number }>({
			query: ({ id }) => {
				const headers = getHashedHeaders('DELETE', `books/`, id.toString())

				return {
					url: `books/${id}`,
					method: 'DELETE',
					headers,
				}
			},
			invalidatesTags: ['FavBooks'],
		}),
		changeBookStatus: build.mutation<
			IFavroiteBooksResponse,
			{ id: number; status: number }
		>({
			query: ({ id, status }) => {
				const headers = getHashedHeaders(
					'PATCH',
					`books/`,
					id.toString() + JSON.stringify({ status })
				)

				return {
					url: `books/${id}`,
					method: 'PATCH',
					headers,
					body: {
						status,
					},
				}
			},
			invalidatesTags: ['FavBooks'],
		}),
	}),
})

export const {
	useGetFavBooksQuery,
	useSearchBooksQuery,
	useAddFavBookMutation,
	useRemoveFavBookMutation,
	useChangeBookStatusMutation,
} = bookApi
