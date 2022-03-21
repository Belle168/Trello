import styled from 'styled-components'
import { MdOutlineClose } from 'react-icons/md'
import Input from '../UI/input'
import Button from '../UI/Button'
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import useInput from '../hooks/useInput'
import { columnActions } from '../store/cart-slice'
import Container from '../UI/Container'

const AddingCard = () => {
	const data = useSelector((state) => state.column.colunmns)
	const dispatch = useDispatch()
	const [show, setShow] = useState(false)
	const column = useInput()

	const showHandler = () => setShow(true)
	const hideHandler = () => setShow(false)

	const handleSubmit = (e) => {
		e.preventDefault()
		if (column.value.trim() === '') return
		dispatch(
			columnActions.createColumn({
				title: column.value,
				id: Math.random().toString(),
			}),
		)
		column.onClear()
	}
	return (
		<Container >
			<List show={show} onClick={showHandler}>+
				<span>
					{data.length === 0 ? 'Добавить списиок'
						: 'Добавить ещё одну колонку'}
				</span>
			</List>
			<AddList show={show}>
				<form onSubmit={handleSubmit}>
					<Input
						type='text'
						value={column.value}
						placeholder='Ввести заголовок списка'
						onChange={column.onChange}
						autoFocus />
					<div>
						<Button className='add__list'>Добавить списиок</Button>
						<button
							onClick={hideHandler}
							type='button'
							className='remove'>
							<MdOutlineClose color='#42526e' fontSize={'28px'} />
						</button>
					</div>
				</form>
			</AddList>
		</Container>
	)
}


const AddList = styled.div`
	width: 270px;
	height: ${(props) => (!props.show ? '0px' : '87px')};
	background-color: #ebecf0;
	padding: 0.25rem;
	box-shadow: 2px 2px 8px rgb(0, 0, 0, 0.1);
	border-radius: 3px;
	transition: 0.3s;
	display: ${(props) => (!props.show ? 'none' : 'block')};
	div {
		width: 100%;
		display: flex;
		align-items: center;
	}
	.remove {
		border: none;
		background-color: transparent;
		margin-left: 5px;
		cursor: pointer;
	}
	.add__list {
		background-color: #0079bf;
		font-weight: 400;
		font-size: 14px;
		font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto,
			Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
	}
	input {
		width: 85%;
		padding: 0.5rem 1rem;
		border-radius: 3px;
		font-size: 14px;
		margin-bottom: 0.25rem;
		font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto,
			Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
	}
	input::placeholder {
		color: #838ea0;
	}
`
const List = styled.div`
	width: 270px;
	height: 45px;
	padding: 0rem 0.5rem;
	background-color: #565958a8;
	color: white;
	display: flex;
	align-items: center;
	border-radius: 3px;
	box-shadow: 2px 2px 8px rgb(0, 0, 0, 0.1);
	cursor: pointer;
	position: absolute;
	transition: 0.2s;
	z-index: ${(props) => (props.show ? '-1' : '1')};
	opacity: ${(props) => (props.show ? '0' : '1')};
	font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen,
		Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
	&:hover {
		background-color: #6a7274;
	}
	span {
		margin-left: 5px;
		font-size: 14px;
		font-weight: 500;
	}
`

export default AddingCard
