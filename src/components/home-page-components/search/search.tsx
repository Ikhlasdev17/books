import { Box } from '@mui/material'
import { useEffect } from 'react'
import { BiSearch } from 'react-icons/bi'
import { useDispatch } from 'react-redux'
import useDebounce from '../../../hooks/useDebouce'
import { changeBookSearchString } from '../../../store/book/book.slice'
import styles from './search.module.scss'

const Search = () => {
	const [title, value, setValue] = useDebounce('Alice', 500)
	const dispatch = useDispatch()

	useEffect(() => {
		dispatch(changeBookSearchString(title))
	}, [title])

	return (
		<Box
			sx={{
				width: {
					xs: '100%',
					md: '500px',
				},
				bgcolor: 'white',
				borderRadius: '32px',
			}}
		>
			<label className={styles.homeSearchLabel}>
				<i>
					<BiSearch />
				</i>
				<input
					onChange={e => setValue(e.target.value)}
					value={value}
					className={styles.homeSearchInput}
					placeholder='Search...'
				/>
			</label>
		</Box>
	)
}

export default Search
