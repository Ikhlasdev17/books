import { SnackbarProvider } from 'notistack'
import ReactDOM from 'react-dom/client'
import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'
import App from './App.tsx'
import { ThemeContextProvider } from './config/theme/theme-context-provider.tsx'
import './index.scss'
import { store } from './store/index.ts'

ReactDOM.createRoot(document.getElementById('root')!).render(
	<Provider store={store}>
		<BrowserRouter>
			<SnackbarProvider>
				<ThemeContextProvider>
					<App />
				</ThemeContextProvider>
			</SnackbarProvider>
		</BrowserRouter>
	</Provider>
)
