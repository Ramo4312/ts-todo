import axios from 'axios'

import {
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
	updateTodoFailure,
	updateTodoSuccess,
	updateTodoStart2,
	updateTodoSuccess2,
	updateTodoFailure2,
	restoreStart,
	restoreSuccess,
	restoreFailure,
	restoreSuccess2,
	clear,
} from './todoSlice'

import { ITodo } from '../types/types'

const BASE_URL = 'http://localhost:8000/'

export const publicReq = axios.create({
	baseURL: BASE_URL,
})

export const getTodos = async (dispatch: Function) => {
	dispatch(getStart())
	try {
		const res = await publicReq(`todos/`)
		console.log(res.status)
		dispatch(getSuccess(res.data))
	} catch (err) {
		dispatch(getFailure())
	}
}

export const addTodo = async (
	dispatch: Function,
	todo: any,
	setModal: Function
) => {
	dispatch(addStart())
	try {
		const res = await publicReq.post(`todos`, todo)
		dispatch(addSuccess(todo))
		setModal(false)
		console.log(res.status)
	} catch (err) {
		dispatch(addFailure())
	}
}

export const deleteTodo = async (dispatch: Function, id: number) => {
	dispatch(deleteStart())
	try {
		dispatch(deleteSuccess(id))
	} catch (err: any) {
		console.log(err.message)
		dispatch(deleteFailure())
	}
}

export const getOneTodo = async (dispatch: Function, id: number) => {
	dispatch(getOneStart())
	try {
		const res = await publicReq(`todos/${id}`)
		dispatch(getOneSuccess(res.data))
		console.log(res.status)
	} catch (err) {
		dispatch(getOneFailure())
	}
}

export const getOneTodo2 = async (dispatch: Function, todo: ITodo) => {
	dispatch(getOneStart())
	try {
		dispatch(getOneSuccess(todo))
	} catch (err) {
		dispatch(getOneFailure())
	}
}

export const updateTodo = async (dispatch: Function, todo: ITodo) => {
	dispatch(updateTodoStart())
	try {
		const res = await publicReq.patch(`todos/${todo.id}`, todo)
		dispatch(updateTodoSuccess(todo))
		console.log('update', res.status)
	} catch (err) {
		dispatch(updateTodoFailure())
	}
}

export const updateTodo2 = async (dispatch: Function, todo: ITodo) => {
	dispatch(updateTodoStart2())
	try {
		dispatch(updateTodoSuccess2(todo))
		console.log('update', 200)
	} catch (err) {
		dispatch(updateTodoFailure2())
	}
}

export const completeTodo = async (dispatch: Function, todo: ITodo) => {
	dispatch(completeStart())
	try {
		const res = await publicReq.delete(`todos/${todo.id}/`)
		dispatch(completeSuccess(todo))
		console.log('todo completed', '200 OK')
	} catch (err) {
		console.log(err)
		dispatch(completeFailure())
	}
}

export const addTodoToTrash = async (dispatch: Function, todo: ITodo) => {
	dispatch(addToTrashStart())
	console.log(todo)
	try {
		dispatch(addToTrashSuccess(todo))
		console.log('todo in trash')
	} catch (err) {
		console.log(err)
		dispatch(addToTrashFailure())
	}
}

export const addTodoToTrash2 = async (dispatch: Function, todo: ITodo) => {
	dispatch(addToTrashStart2())
	console.log(todo)
	try {
		const res = await publicReq.delete(`todos/${todo.id}/`)
		dispatch(addToTrashSuccess2(todo))
		console.log('todo in trash', res.status)
	} catch (err) {
		console.log(err)
		dispatch(addToTrashFailure2())
	}
}

export const restoreTodo = async (dispatch: Function, todo: ITodo) => {
	dispatch(restoreStart())
	console.log(todo)
	try {
		if (todo.type == 'not completed') {
			const res = await publicReq.post(`todos/`, todo)
			dispatch(restoreSuccess(res.data))
			console.log('todo restored', res.status)
		} else {
			dispatch(restoreSuccess2(todo))
			console.log('todo restored', 200)
		}
	} catch (err) {
		console.log(err)
		dispatch(restoreFailure())
	}
}

export const clearTrash = async (dispatch: Function) => {
	dispatch(clear())
}
