import Login from './components/Login'
import Container from './UI/Container'
import TrelloMain from './components/Main'
import Header from './components/Header'
import { BrowserRouter, Routes, Route } from 'react-router-dom'




function App() {
	return (
		<>
			<BrowserRouter>
				<Routes>
					<Route path='/' element={<Login />} />
					<Route
						path='/login'
						element={
							<Container className='formContainer'>
								<Login />
							</Container>
						}
					/>
					<Route
						path='/trelloMain'
						element={
							<>
								<Header />
								<Container className='trello__container'>
									<TrelloMain />
								</Container>
							</>
						}
					/>
				</Routes>
			</BrowserRouter>
		</>
	)
}


export default App
