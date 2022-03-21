import React from 'react'
import Flex from '../UI/Flex'
import TodoTrello from './Trello'
import CardTasks from './CardTasks'

const TrelloMain = () => {
  return (
    <div>
      <Flex>
        <TodoTrello />
        <CardTasks />
      </Flex>
    </div>
  )
}

export default TrelloMain