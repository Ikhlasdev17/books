import { Container } from '@mui/material'
import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { Hero } from '../../components'
import SearchResults from '../../components/home-page-components/search-results/search-results'
import { useGetUserInfoQuery } from '../../store/auth/auth.api'
const Home = () => {
	const { data, isFetching } = useGetUserInfoQuery({})
	const navigate = useNavigate()

	useEffect(() => {
		if (!isFetching && !(data || localStorage.getItem('userKey'))) {
			navigate('/authorization', { replace: true })
		}
	}, [])

	return (
		<Container maxWidth={'xl'}>
			<Hero />
			<SearchResults />
		</Container>
	)
}

export default Home
