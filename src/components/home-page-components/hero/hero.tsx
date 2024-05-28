import { Box, Typography } from '@mui/material'
import { bgphoto } from '../../../assets'
import { Search } from '../../../components'
const hHero = () => {
	return (
		<Box
			sx={{
				backgroundImage: `url(${bgphoto})`,
				minHeight: '300px',
				my: 4,
				borderRadius: '12px',
				display: 'flex',
				flexDirection: 'column',
				alignItems: 'center',
				justifyContent: 'center',
				px: '24px',
			}}
		>
			<Typography
				sx={{
					fontSize: {
						xs: '32px',
						md: '40px',
					},
					textAlign: 'center',
					color: 'white',
					mb: 3,
					fontWeight: 'bold',
				}}
			>
				“In a Good Book, the Best is Between the Lines.”
			</Typography>
			<Search />
		</Box>
	)
}

export default hHero
