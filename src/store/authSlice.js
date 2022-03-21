
import { createSlice } from '@reduxjs/toolkit'


const info = [
	{
		id: '',
		email: '',
		password: '',
	},
]

const authSlice = createSlice({
	name: 'authentificated',
	initialState: {isAuth: false,},
	reducers: {
		authentificate(state, action) {
			for (const el of info) {
				if (el.email === action.payload.email && el.password === action.payload.password) {
					state.isAuth = true
				} 
			}
		},
		logout(state) {
			state.isAuth = false;
		}
	},
})
export const authActions = authSlice.actions
export default authSlice