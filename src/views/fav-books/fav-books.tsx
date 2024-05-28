import { Box, Container, Grid, Typography } from '@mui/material'
import { BookCardSkeleton } from '../../components'
import BookCard from '../../components/book-card/book-card'
import { useGetFavBooksQuery } from '../../store/book/book.api'

const FavBooks = () => {
	const { data, isLoading } = useGetFavBooksQuery(null)
	return (
		<Container maxWidth='xl' sx={{ py: 4, minHeight: '75vh' }}>
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
				{data?.data?.length === 0 ? (
					<>You have no favorite books yet.</>
				) : (
					<>Your favorited books.</>
				)}
			</Typography>

			<Box
				display='grid'
				gridTemplateColumns={{ xs: `1fr`, sm: `1fr 1fr`, md: '1fr 1fr 1fr' }}
				rowGap={4}
				columnGap={2}
			>
				{isLoading
					? Array.from({ length: 15 }).map((_, index) => (
							<BookCardSkeleton key={index} />
					  ))
					: data?.data?.map(item => (
							<Grid item>
								<BookCard
									book={item.book}
									key={item.book.isbn}
									page='favorites'
									status={item.status}
								/>
							</Grid>
					  ))}
			</Box>
		</Container>
	)
}

export default FavBooks
