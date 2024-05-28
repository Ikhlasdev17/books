import { Box, Grid, Typography } from '@mui/material'
import { BookCardSkeleton } from '../..'
import useAppSelector from '../../../hooks/useAppSelector'
import {
	useGetFavBooksQuery,
	useSearchBooksQuery,
} from '../../../store/book/book.api'
import BookCard from '../../book-card/book-card'

const SearchResults = () => {
	const { search } = useAppSelector(state => state.books)
	const { data, isFetching } = useSearchBooksQuery({
		title: search || 'Alice',
	})
	const { data: favBooks } = useGetFavBooksQuery(null)

	return (
		<Box sx={{ minHeight: '35vh' }}>
			{isFetching ? (
				<Typography
					sx={{
						fontSize: '28px',
						fontWeight: 'bold',
						mb: 4,
						display: 'flex',
						gap: 1,
						alignItems: 'center',
					}}
				>
					Search...
				</Typography>
			) : (
				<Typography
					sx={{
						fontSize: '28px',
						fontWeight: 'bold',
						mb: 4,
						display: 'flex',
						gap: 1,
						alignItems: 'center',
					}}
				>
					{!isFetching && data?.data?.length === 0 ? (
						<>Books not found!</>
					) : (
						<>
							Results for:{' '}
							<Typography
								sx={{ fontSize: '28px', fontWeight: 'bold' }}
								color={'primary'}
							>
								{search}
							</Typography>
						</>
					)}
				</Typography>
			)}

			<Box
				display='grid'
				gridTemplateColumns={{ xs: `1fr`, sm: `1fr 1fr`, md: '1fr 1fr 1fr' }}
				rowGap={4}
				columnGap={2}
			>
				{isFetching
					? Array.from({ length: 15 }).map((_, index) => (
							<BookCardSkeleton key={index} />
					  ))
					: data?.data?.map(item => (
							<Grid item>
								<BookCard
									book={item}
									key={item.isbn}
									isFavorite={Boolean(
										favBooks?.data?.find(fav => fav.book.isbn === item.isbn)
									)}
								/>
							</Grid>
					  ))}
			</Box>
		</Box>
	)
}

export default SearchResults
