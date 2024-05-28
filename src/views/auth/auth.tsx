import { Box } from '@mui/material'
import { bgphoto } from '../../assets'
import { AuthForm } from '../../components'
import Logo from '../../components/common/logo/logo'
import NightModeToggle from '../../components/mode-toggler/mode-toggler'

const Auth = () => {
	return (
		<Box
			sx={{
				height: '100vh',
				backgroundImage: `url(${bgphoto})`,
				display: 'flex',
				alignItems: 'center',
				justifyContent: 'flex-end',
			}}
		>
			<Box
				sx={{
					height: '100vh',
					width: {
						xs: '100%',
						md: '500px',
					},
					bgcolor: 'background.default',
					boxShadow: 1,
					display: 'flex',
					p: 2,
					alignItems: 'flex-start',
					flexDirection: 'column',
				}}
			>
				<Box
					sx={{
						display: 'flex',
						alignItems: 'center',
						justifyContent: 'space-between',
						width: '100%',
						mb: 24,
					}}
				>
					<Logo isAuth />
					<NightModeToggle />
				</Box>
				<AuthForm />
			</Box>
		</Box>
	)
}

export default Auth
