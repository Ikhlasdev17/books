import { Box, Typography } from '@mui/material'
import { FC } from 'react'
import { BiBook } from 'react-icons/bi'
import { Link } from 'react-router-dom'

interface Props {
	isAuth?: boolean
}

const Logo: FC<Props> = ({ isAuth }) => {
	const Wrapper = isAuth ? Box : Link
	return (
		<Wrapper to={'/'}>
			<Box sx={{ display: 'flex', alignItems: 'center', gap: '3px' }}>
				<Typography
					sx={{
						display: 'flex',
						alignItems: 'center',
						fontSize: '32px',
						color: 'primary',
					}}
				>
					<BiBook />
				</Typography>
				<Typography
					fontSize={'28px'}
					sx={{ display: 'flex', alignItems: 'center', gap: '3px' }}
				>
					Book
					<Typography variant='inherit' color={'primary'} fontSize={'28px'}>
						ly
					</Typography>
				</Typography>
			</Box>
		</Wrapper>
	)
}

export default Logo
