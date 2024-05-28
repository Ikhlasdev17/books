import { Box, Button, TextField, Typography } from '@mui/material'
import { useFormik } from 'formik'

import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import useAppDispatch from '../../../hooks/useAppDispatch'
import useAppSelector from '../../../hooks/useAppSelector'
import { userAuth } from '../../../store/auth/auth.actions'
import { validationSchema } from '../../../utils/validators/auth.validator'
import styles from './auth-form.module.scss'

const AuthForm = () => {
	const dispatch = useAppDispatch()
	const { isLoading, user } = useAppSelector(state => state.auth)
	const navigate = useNavigate()

	const formik = useFormik({
		initialValues: {
			email: '',
			name: '',
		},
		validationSchema: validationSchema,
		onSubmit: values => {
			dispatch(userAuth(values))
		},
	})

	useEffect(() => {
		if (localStorage.getItem('userKey') || user) {
			navigate('/', { replace: true })
		}
	}, [user])

	return (
		<Box sx={{ width: '100%', mt: 6 }}>
			<Typography variant='h4' sx={{ textAlign: 'center', fontWeight: 'bold' }}>
				Authorization
			</Typography>

			<form className={styles.authForm} onSubmit={formik.handleSubmit}>
				<TextField
					fullWidth
					id='email'
					name='email'
					label='Email'
					value={formik.values.email}
					onChange={formik.handleChange}
					onBlur={formik.handleBlur}
					error={formik.touched.email && Boolean(formik.errors.email)}
					helperText={formik.touched.email && formik.errors.email}
					className={styles.authFormInput}
				/>
				<TextField
					fullWidth
					id='name'
					name='name'
					label='Name'
					type='name'
					value={formik.values.name}
					onChange={formik.handleChange}
					onBlur={formik.handleBlur}
					error={formik.touched.name && Boolean(formik.errors.name)}
					helperText={formik.touched.name && formik.errors.name}
					className={styles.authFormInput}
				/>
				<Button
					color='primary'
					variant='contained'
					fullWidth
					type='submit'
					disabled={isLoading}
					className={styles.authFormBtn}
				>
					Submit
				</Button>
			</form>
		</Box>
	)
}

export default AuthForm
