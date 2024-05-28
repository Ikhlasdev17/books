import { CssBaseline, ThemeProvider } from '@mui/material'
import Routes from './config/routes/routes'
import { useThemeContext } from './config/theme/theme-context-provider'

const App = () => {
	const { theme } = useThemeContext()
	return (
		<ThemeProvider theme={theme}>
			<CssBaseline />
			<Routes />
		</ThemeProvider>
	)
}

export default App
