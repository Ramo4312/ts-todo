import { ITodo } from '../types/types'
import { createSlice, PayloadAction } from '@reduxjs/toolkit'

const userSlice = createSlice({
	name: 'user',
	initialState: {
		todos: <any>[],
		completeTodos: <any>[],
		oneTodo: <ITodo | null>null,
		trash: <any>[],
		isFetching: false,
		error: false,
	},
	reducers: {
		addStart: state => {
			state.isFetching = true
			state.error = false
		},

		addSuccess: (state, action: PayloadAction<ITodo>) => {
			state.isFetching = false
			state.todos.push(action.payload)
			state.error = false
		},

		addFailure: state => {
			state.isFetching = false
			state.error = true
		},

		completeStart: state => {
			state.isFetching = true
			state.error = false
		},

		completeSuccess: (state, action: PayloadAction<ITodo>) => {
			state.isFetching = false
			state.todos.splice(
				state.todos.findIndex((item: ITodo) => item.id === action.payload.id),
				1
			)
			state.completeTodos.push(action.payload)
			state.error = false
		},

		completeFailure: state => {
			state.isFetching = false
			state.error = true
		},

		deleteStart: state => {
			state.isFetching = true
			state.error = false
		},

		deleteSuccess: (state, action: PayloadAction<number>) => {
			state.isFetching = false
			state.trash.splice(
				state.trash.findIndex((item: ITodo) => item.id === action.payload),
				1
			)
			state.error = false
		},

		deleteFailure: state => {
			state.isFetching = false
			state.error = true
		},

		getOneStart: state => {
			state.isFetching = true
			state.error = false
		},

		getOneSuccess: (state, action: PayloadAction<ITodo>) => {
			state.isFetching = false
			state.oneTodo = action.payload
			state.error = false
		},

		getOneFailure: state => {
			state.isFetching = false
			state.error = true
		},

		getStart: state => {
			state.isFetching = true
			state.error = false
		},

		getSuccess: (state, action: PayloadAction<ITodo>) => {
			state.isFetching = false
			state.todos = action.payload
			state.error = false
		},

		getFailure: state => {
			state.isFetching = false
			state.error = true
		},

		updateTodoStart: state => {
			state.isFetching = true
			state.error = false
		},
		updateTodoSuccess: (state, action: PayloadAction<ITodo>) => {
			state.isFetching = false
			state.todos[
				state.todos.findIndex((item: ITodo) => item.id === action.payload.id)
			] = action.payload
			state.oneTodo = null
			state.error = false
		},
		updateTodoFailure: state => {
			state.isFetching = false
			state.error = true
		},
		updateTodoStart2: state => {
			state.isFetching = true
			state.error = false
		},
		updateTodoSuccess2: (state, action: PayloadAction<ITodo>) => {
			state.isFetching = false
			state.completeTodos[
				state.completeTodos.findIndex(
					(item: ITodo) => item.id === action.payload.id
				)
			] = action.payload
			state.oneTodo = null
			state.error = false
		},
		updateTodoFailure2: state => {
			state.isFetching = false
			state.error = true
		},

		addToTrashStart: state => {
			state.isFetching = true
			state.error = false
		},

		addToTrashSuccess: (state, action: PayloadAction<ITodo>) => {
			state.isFetching = false
			state.completeTodos.splice(
				state.completeTodos.findIndex(
					(item: ITodo) => item.id === action.payload.id
				),
				1
			)
			state.trash.push(action.payload)
			state.error = false
		},

		addToTrashFailure: state => {
			state.isFetching = false
			state.error = true
		},

		addToTrashStart2: state => {
			state.isFetching = true
			state.error = false
		},

		addToTrashSuccess2: (state, action: PayloadAction<ITodo>) => {
			state.isFetching = false
			state.todos.splice(
				state.todos.findIndex((item: ITodo) => item.id === action.payload.id),
				1
			)
			state.trash.push(action.payload)
			state.error = false
		},

		addToTrashFailure2: state => {
			state.isFetching = false
			state.error = true
		},

		restoreStart: state => {
			state.isFetching = true
			state.error = false
		},

		restoreSuccess: (state, action: PayloadAction<ITodo>) => {
			state.isFetching = false
			state.trash.splice(
				state.trash.findIndex((item: ITodo) => item.id === action.payload.id),
				1
			)
			state.todos.push(action.payload)
			state.error = false
		},

		restoreSuccess2: (state, action: PayloadAction<ITodo>) => {
			state.isFetching = false
			state.trash.splice(
				state.trash.findIndex((item: ITodo) => item.id === action.payload.id),
				1
			)
			state.completeTodos.push(action.payload)
			state.error = false
		},

		restoreFailure: state => {
			state.isFetching = false
			state.error = true
		},

		clear: state => {
			state.trash = []
		},
	},
})

export const {
	addStart,
	addSuccess,
	addFailure,
	deleteStart,
	deleteSuccess,
	deleteFailure,
	getOneStart,
	getOneSuccess,
	getOneFailure,
	getStart,
	getSuccess,
	getFailure,
	completeStart,
	completeSuccess,
	completeFailure,
	addToTrashStart,
	addToTrashSuccess,
	addToTrashFailure,
	addToTrashStart2,
	addToTrashSuccess2,
	addToTrashFailure2,
	updateTodoStart,
	updateTodoSuccess,
	updateTodoFailure,
	updateTodoStart2,
	updateTodoSuccess2,
	updateTodoFailure2,
	restoreStart,
	restoreSuccess,
	restoreFailure,
	restoreSuccess2,
	clear,
} = userSlice.actions

export default userSlice.reducer
