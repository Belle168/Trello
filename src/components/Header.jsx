import React from 'react'
import styled from 'styled-components'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router'
import { authActions } from '../store/authSlice'
import { columnActions } from '../store/cart-slice'

const Header = () => {
	const dispatch = useDispatch()
	const navigate = useNavigate()
	const logoutHandler = () => {
		dispatch(columnActions.logout())
		navigate('/')
		dispatch(authActions.logout())
	}

	return (
		<HeaderDiv>
			<div className='header'>
				<div className='header-flex'>
				   <div>
						<h1>TRELLO</h1>

					</div>
				</div>
				<div >
					<button onClick={logoutHandler}>Выйти</button>
				</div>
			</div>
		</HeaderDiv>
	)
}
const HeaderDiv = styled.div`
    position: fixed;
    width: 100%;
	height: 50px;
	margin: 0 auto;
	display: flex;
	justify-content: space-around;
	align-items: center;
	background:  rgba(35, 24, 159, 0.4);
	z-index: 3;
	& .header{
		width: 1200px;
		display:flex;
		align-items: center;
		
	}

	& .header-flex{

		display: flex;
		justify-content: space-around;
		align-items: center;
		width: 250px;
	
	}
		h1 {
			color: #ffffff;
			font-size: 25px;
			width: 120px;
		}
		
		img {
			width: 30px;
			height: 30px;
			margin-right: 20px;
		}
		button{
			margin-left: 60rem;
			border-radius: 15px;
			width: 100px;
			height: 35px;
			
		}
	
`

export default Header
