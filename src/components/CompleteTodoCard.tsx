import { FC, useEffect, useState } from 'react'

import { CardProps, ITodo } from '../types/types'

import { useAppDispatch, useAppSelector } from '../store/hooks/hooks'
import { addTodoToTrash, getOneTodo2 } from '../store/apiCalls'

import { CardActions, CardContent, Button, Typography } from '@mui/material'

import '../styles/TodoCard.css'
import EditTodo from './EditTodo'

const CompleteTodoCard: FC<CardProps> = ({ todo, setUpdate, update, key }) => {
	const [edit, setEdit] = useState<boolean>(false)

	const { error } = useAppSelector(state => state.todos)
	const dispatch = useAppDispatch()

	function handleSwitch(todo: ITodo) {
		getOneTodo2(dispatch, todo)
		if (!error) setEdit(true)
	}

	window.addEventListener('keydown', e => {
		if (e.key == 'Escape') setEdit(false)
	})

	return (
		<div className='todo-card complete-todo-card' key={key}>
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
					variant='contained'
					color='warning'
					onClick={() => {
						handleSwitch(todo)
						setUpdate('complete')
					}}
				>
					Update
				</Button>
				<Button
					size='small'
					color='error'
					variant='contained'
					onClick={() => addTodoToTrash(dispatch, todo)}
				>
					Delete
				</Button>
			</CardActions>
		</div>
	)
}

export default CompleteTodoCard
