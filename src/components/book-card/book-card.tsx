import {
	Backdrop,
	Box,
	Button,
	Card,
	CircularProgress,
	IconButton,
	MenuItem,
	Select,
	Stack,
	Typography,
} from '@mui/material'
import { useSnackbar } from 'notistack'
import { FC, useState } from 'react'
import { BiTrash } from 'react-icons/bi'
import { BsBookmarkStar, BsFillBookmarkCheckFill } from 'react-icons/bs'
import { bookStatuses } from '../../data/book.data'
import {
	useAddFavBookMutation,
	useChangeBookStatusMutation,
	useRemoveFavBookMutation,
} from '../../store/book/book.api'
import { IFavBook } from '../../store/book/book.types'
import Image from '../common/image/image'

interface Props {
	book: IFavBook
	isFavorite?: boolean
	page?: 'books' | 'favorites'
	status?: number
}

const BookCard: FC<Props> = ({ book, isFavorite, page, status }) => {
	const [addToFav, { isLoading: isAddingToFavBook }] = useAddFavBookMutation()
	const [selectedStatus, setSelectedStatus] = useState(status || 0)
	const [removeFavBook, { isLoading: isRemovingToFavBook }] =
		useRemoveFavBookMutation()
	const [changeBookStatus, { isLoading: isStatusChanging }] =
		useChangeBookStatusMutation()

	const { enqueueSnackbar } = useSnackbar()

	const addToFavorite = () => {
		addToFav({ isbn: book.isbn }).then(() => {
			enqueueSnackbar('Book added to favorite!', { variant: 'success' })
		})
	}

	const removeFavoriteBook = () => {
		if (book.id) {
			removeFavBook({ id: book.id }).then(() => {
				enqueueSnackbar('Book removed from favorites!', { variant: 'success' })
			})
		}
	}

	const changeStatus = (status: number) => {
		if (book.id) {
			changeBookStatus({
				id: book.id,
				status,
			}).then(() => {
				enqueueSnackbar('Book status changed!', { variant: 'success' })
			})
		}
	}

	return (
		<Card
			sx={{
				display: 'flex',
				bgcolor: 'background.paper',
				overflow: 'visible',
				position: 'relative',
			}}
		>
			{status === 2 ? (
				<Box
					sx={{
						position: 'absolute',
						right: '15px',
						top: 0,
						color: 'green',
						fontSize: '32px',
					}}
				>
					<BsFillBookmarkCheckFill />
				</Box>
			) : null}
			<Backdrop
				sx={{
					color: '#fff',
					zIndex: theme => theme.zIndex.drawer + 1,
					position: 'absolute',
				}}
				open={isAddingToFavBook || isRemovingToFavBook || isStatusChanging}
			>
				<CircularProgress color='inherit' />
			</Backdrop>
			<Image
				height={'250px'}
				style={{
					objectFit: 'cover',
					margin: '-10px 0 0 10px',
					borderRadius: '12px',
					width: '150px',
					background: 'gray',
				}}
				image={book.cover}
			/>

			<Stack sx={{ p: 2 }}>
				<Typography sx={{ fontSize: '20px', fontWeight: '600', mb: 1 }}>
					{book.title}
				</Typography>
				<Typography>{book.author}</Typography>

				<Box
					sx={{
						display: 'flex',
						gap: 1,
						bottom: 24,
						position: 'absolute',
					}}
				>
					{page === 'favorites' ? (
						<>
							<Select
								labelId='Status'
								id='status'
								value={selectedStatus}
								label='Status'
								onChange={e => {
									const currStatus = +e.target.value
									changeStatus(currStatus)
									setSelectedStatus(currStatus)
								}}
							>
								{bookStatuses.map(item => (
									<MenuItem value={item.status}>{item.label}</MenuItem>
								))}
							</Select>
							<IconButton onClick={removeFavoriteBook} color='primary'>
								<BiTrash />
							</IconButton>
						</>
					) : (
						<>
							{
								<Button
									variant='contained'
									onClick={addToFavorite}
									disabled={isFavorite}
									sx={{ display: 'flex', gap: 1 }}
								>
									{!isFavorite ? (
										<>
											Save book
											<BsBookmarkStar />
										</>
									) : (
										<>
											Favorite book
											<BsBookmarkStar />
										</>
									)}
								</Button>
							}
						</>
					)}
				</Box>
			</Stack>
		</Card>
	)
}

export default BookCard
