import { createSlice } from '@reduxjs/toolkit'

export const bookSlice = createSlice({
	name: 'books',
	initialState: {
		search: '',
	},
	reducers: {
		changeBookSearchString: (state, action) => {
			state.search = action.payload
		},
	},
})

export const { changeBookSearchString } = bookSlice.actions
export const bookReducer = bookSlice.reducer
