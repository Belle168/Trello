import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import TodoItemTrello from './ItemTrello'
import styled from 'styled-components'
import { createGlobalStyle } from "styled-components";

const TodoTrello = () => {
	const { colunmns, task, editShowTask } = useSelector(
		(state) => state.column,
	)
	useEffect(() => {
		localStorage.setItem('trello', JSON.stringify(colunmns))
	}, [colunmns])
	return (
		<Wrapper>
			<GlobalStyle />
			{colunmns.map((el) => (
				<TodoItemTrello
					showEditTask={editShowTask}
					task={task}
					key={el.id}
					id={el.id}
					title={el.title}
					todos={el.todos}
				/>
			))}
		</Wrapper>
	)
}
const Wrapper = styled.div`
	display: flex;
	margin-right: 20px;
`
const GlobalStyle = createGlobalStyle`
  body {
  background: rgba(45, 85, 255); ;
	}
`;

export default TodoTrello
