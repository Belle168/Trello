import React, { useEffect } from 'react'
import styled from 'styled-components'
import LogoTrello from '../UI/LogoTrello'
import useInput from '../hooks/useInput'
import Input from '../UI/input'
import Button from '../UI/Button'
import { useDispatch, useSelector } from 'react-redux'
import { authActions } from '../store/authSlice'
import { useNavigate } from 'react-router'


const Login = () => {
	const navigate = useNavigate()
	const { isAuth } = useSelector((state) => state.auth)
	const dispatch = useDispatch()
	const userEmail = useInput('Email')
	const userPassword = useInput('пароль')
	let formIsValid = false

	formIsValid = userEmail.valueIsValid && userPassword.valueIsValid

	const submitHandler = (e) => {
		e.preventDefault()

		dispatch(
			authActions.authentificate({
				email: userEmail.value,
				password: userPassword.value,
			}),
		)
		userEmail.onClear()
		userPassword.onClear()
	}

	useEffect(() => {
		if (isAuth) navigate('/trelloMain')
	}, [isAuth])


	return (
		<>
			<FormController>
				<LogoTrello />
				<form onSubmit={submitHandler}>

					<h3>Вход в Тrello</h3>
					<div className='form-control'>
						<Input
							value={userEmail.value}
							onChange={userEmail.onChange}
							type='email'
							isValidInput={userEmail.valueInputIsInValid}
							onBlur={userEmail.onBlur}
							placeholder='Укажите адрес электронной почты'
						/>

					</div>
					<div className='form-control'>
						<Input
							type='password'
							placeholder='Введите пароль'
							value={userPassword.value}
							onChange={userPassword.onChange}
							onBlur={userPassword.onBlur}
							isValidInput={userPassword.valueInputIsInValid}
						/>
					</div>
					<Button type='submit'>Войти</Button>

				</form>
			</FormController>
		</>
	)
}

const FormController = styled.div`
	width: 100%;
	height: 80vh;
	/* display: flex; */
	form {
  		box-shadow: 0px 3px 8px 2px  rgba(0, 0,  253, 0.3);
		width: 450px;
		height: 340px;
		padding: 2rem;
		background-color: #ffffff;
		border-radius: 4px;
		display: flex;
		flex-direction: column;
		justify-content: space-around;
		align-items: center;
		margin: 20px auto;
		.form-control {
			width: 90%;
			margin-bottom: 10px;
			input {
				width: 98%;
			}
			p {
				color: red;
				font-size: 12px;
			}
		}
		button {
			width: 90.5%;
			margin-bottom: 30px;
		}
		span {
			width: 70%;
			display: flex;
			align-items: center;
			justify-content: space-evenly;
			a {
				font-size: 12px;
				color: #598ede;
			}
		}
	}
	h3 {
		color: #5e6c84;
		/* margin-bottom: -30px; */
	}
`

export default Login
