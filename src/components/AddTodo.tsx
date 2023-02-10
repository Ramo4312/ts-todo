import { useEffect, useState, FC } from 'react'
import { TextField, Button } from '@mui/material'
import { useAppDispatch, useAppSelector } from '../store/hooks/hooks'
import '../styles/AddTodo.css'
import { addTodo, getTodos } from '../store/apiCalls'

interface Modal {
	modal: boolean
	setModal: any
}

const AddTodo: FC<Modal> = ({ modal, setModal }) => {
	const [title, setTitle] = useState<string>('')
	const dispatch = useAppDispatch()

	const { error } = useAppSelector(state => state.todos)

	async function handleAdd() {
		if (!title.trim()) {
			alert('Some inputs are empty')
			return
		}

		const todo = {
			title: title,
			id: Date.now(),
			type: 'not completed',
		}

		addTodo(dispatch, todo, setModal)
		getTodos(dispatch)
		if (!error) setTitle('')
	}

	return (
		<div
			className='add-modal'
			style={
				modal
					? { opacity: 1, zIndex: 1, transitionDuration: '0.3s' }
					: { opacity: 0, zIndex: -1, transitionDuration: '0.2s' }
			}
			onClick={() => setModal(false)}
		>
			<form
				className='add-modal__form'
				onSubmit={e => e.preventDefault()}
				onClick={e => e.stopPropagation()}
			>
				<h2>Add todo</h2>
				<div className='inputbox'>
					<input
						required
						type='text'
						value={title}
						onChange={e => setTitle(e.target.value)}
					/>
					<span>Title</span>
					<i></i>
				</div>

				<Button
					className=''
					style={{ width: '130px' }}
					onClick={handleAdd}
					variant='contained'
					color='success'
				>
					Save
				</Button>
			</form>
		</div>
	)
}

export default AddTodo
