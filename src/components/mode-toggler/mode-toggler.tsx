import { IconButton } from '@mui/material'
import { BiMoon, BiSun } from 'react-icons/bi'
import { useThemeContext } from '../../config/theme/theme-context-provider'

const NightModeToggle = () => {
	const { mode, toggleColorMode } = useThemeContext()

	return (
		<IconButton sx={{ ml: 1 }} onClick={toggleColorMode} color='inherit'>
			{mode === 'dark' ? <BiSun /> : <BiMoon />}
		</IconButton>
	)
}

export default NightModeToggle
