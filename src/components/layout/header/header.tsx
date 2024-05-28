import {
	Avatar,
	Badge,
	Box,
	Button,
	Container,
	IconButton,
	Menu,
	MenuItem,
	Typography,
} from '@mui/material'
import { MouseEvent, useState } from 'react'
import { BiBookmarks } from 'react-icons/bi'
import { useDispatch } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'
import { useGetUserInfoQuery } from '../../../store/auth/auth.api'
import { logout } from '../../../store/auth/auth.slice'
import { useGetFavBooksQuery } from '../../../store/book/book.api'
import Logo from '../../common/logo/logo'
import NightModeToggle from '../../mode-toggler/mode-toggler'

const Header = () => {
	const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null)
	const open = Boolean(anchorEl)

	const data = useGetUserInfoQuery({})
	const { data: favBooksData } = useGetFavBooksQuery(null)
	const dispatch = useDispatch()
	const navigate = useNavigate()

	const handleClick = (event: MouseEvent<HTMLButtonElement>) => {
		setAnchorEl(event.currentTarget)
	}
	const handleClose = () => {
		setAnchorEl(null)
	}

	const onLogout = () => {
		const isConfirm = confirm('Do you want logout?')
		if (isConfirm) {
			navigate('/authorization', { replace: true })

			dispatch(logout())
		}
	}

	return (
		<Box
			sx={{
				py: 2,
				borderBottom: 1,
				borderBottomColor: 'divider',
				bgcolor: 'background.paper',
				position: 'sticky',
				top: 0,
				zIndex: 50,
			}}
		>
			<Container>
				<Box
					sx={{
						display: 'flex',
						justifyContent: 'space-between',
						alignItems: 'center',
					}}
				>
					<Logo />

					<Box
						sx={{
							display: 'flex',
							alignItems: 'center',
							gap: 2,
						}}
					>
						<NightModeToggle />
						{data ? (
							<>
								<Link to={'/fav-books'}>
									<Badge
										badgeContent={favBooksData?.data?.length}
										color='primary'
									>
										<IconButton>
											<BiBookmarks />
										</IconButton>
									</Badge>
								</Link>
								<IconButton
									color='primary'
									id='basic-button'
									aria-controls={open ? 'basic-menu' : undefined}
									aria-haspopup='true'
									aria-expanded={open ? 'true' : undefined}
									onClick={handleClick}
								>
									<Avatar />
								</IconButton>
								<Menu
									id='basic-menu'
									anchorEl={anchorEl}
									open={open}
									onClose={handleClose}
									MenuListProps={{
										'aria-labelledby': 'basic-button',
									}}
								>
									<MenuItem onClick={onLogout}>Logout</MenuItem>
								</Menu>
							</>
						) : (
							<>
								<Link to={'/authorization'}>
									<Button
										variant='contained'
										color='primary'
										sx={{ color: 'white' }}
									>
										<Typography>Login</Typography>
									</Button>
								</Link>
							</>
						)}
					</Box>
				</Box>
			</Container>
		</Box>
	)
}

export default Header
