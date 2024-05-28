import { Card, Skeleton, Stack } from '@mui/material'

const ProductCardSkeleton = () => {
	return (
		<Card
			sx={{
				display: 'flex',
				bgcolor: 'background.paper',
				overflow: 'visible',
				position: 'relative',
			}}
		>
			<Skeleton
				animation='wave'
				variant='rectangular'
				width={'150px'}
				height={'250px'}
				sx={{
					borderRadius: '12px',
					objectFit: 'cover',
					transform: 'translate(10px, -10px)',
					width: '150px',
					background: 'gray',
					minWidth: '150px',
					maxWidth: '150px',
				}}
			/>

			<Stack sx={{ px: 4, py: 2, width: '100%' }}>
				<Skeleton animation='wave' height={40} />
				<Skeleton animation='wave' height={40} width={'60%'} />
				<Skeleton animation='wave' sx={{ mt: 1, width: '35%' }} />
				<Skeleton
					animation='wave'
					variant='rectangular'
					sx={{
						mt: 1,
						width: '40%',
						bottom: 24,
						position: 'absolute',
						height: '37px',
						borderRadius: '4px',
					}}
				/>
			</Stack>
		</Card>
	)
}

export default ProductCardSkeleton
