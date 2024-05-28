import { PaletteMode } from '@mui/material'
import { amber, deepOrange, grey } from '@mui/material/colors'

const theme = {
	palette: {
		primary: amber,
	},
}

export const getDesignTokens = (mode: PaletteMode) => ({
	palette: {
		mode,
		...(mode === 'light'
			? {
					primary: amber,
					divider: grey[200],
					text: {
						primary: grey[900],
						secondary: grey[800],
					},
					background: {
						default: '#fff',
						paper: grey[100],
					},
			  }
			: {
					primary: deepOrange,
					divider: grey[700],
					background: {
						default: '#222831',
						paper: '#31363F',
					},
					text: {
						primary: '#fff',
						secondary: grey[500],
					},
			  }),
	},
})

export default theme
