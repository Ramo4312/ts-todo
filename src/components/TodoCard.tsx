import { FC, useState } from 'react'

import { CardProps, ITodo } from '../types/types'

import { useAppDispatch, useAppSelector } from '../store/hooks/hooks'
import { completeTodo, addTodoToTrash2, getOneTodo } from '../store/apiCalls'

import CardActions from '@mui/material/CardActions'
import CardContent from '@mui/material/CardContent'
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'

import '../styles/TodoCard.css'
import EditTodo from './EditTodo'

const TodoCard: FC<CardProps> = ({ todo, key, setUpdate, update }) => {
	const [edit, setEdit] = useState<boolean>(false)

	const { error } = useAppSelector(state => state.todos)
	const dispatch = useAppDispatch()

	function handleSwitch(todo: ITodo) {
		getOneTodo(dispatch, todo.id)
		if (!error) setEdit(true)
	}

	window.addEventListener('keydown', e => {
		if (e.key == 'Escape') setEdit(false)
	})

	function handleComplete(todo: ITodo) {
		let completedTodo = {
			...todo,
			type: 'completed',
		}

		completeTodo(dispatch, completedTodo)
	}

	return (
		<div className='todo-card' key={key}>
			<EditTodo setEdit={setEdit} edit={edit} update={update} />
			<CardContent>
				<Typography className='card-title'>{todo.title}</Typography>
			</CardContent>
			<CardActions
				sx={{
					borderRadius: '0 0 20px 20px',
					display: 'flex',
					justifyContent: 'center',
					gap: '15px',
				}}
			>
				<Button
					size='small'
					color='warning'
					variant='contained'
					onClick={() => {
						handleSwitch(todo)
						setUpdate('todos')
					}}
				>
					Update
				</Button>
				<Button
					size='small'
					color='error'
					variant='contained'
					onClick={() => addTodoToTrash2(dispatch, todo)}
				>
					Delete
				</Button>
				<Button
					size='small'
					variant='contained'
					onClick={() => handleComplete(todo)}
				>
					Complete
				</Button>
			</CardActions>
		</div>
	)
}

export default TodoCard
