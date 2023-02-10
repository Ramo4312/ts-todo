import { FC } from 'react'
import { ITodo } from '../types/types'
import { useEffect, useState } from 'react'
import { useAppDispatch, useAppSelector } from '../store/hooks/hooks'
import closeBtn from '../images/close-btn.svg'

import { Button } from '@mui/material'
import { updateTodo, updateTodo2 } from '../store/apiCalls'

interface OnePerson {
	setEdit: Function
	edit: boolean
	update: string
}

const EditTodo: FC<OnePerson> = ({ edit, setEdit, update }) => {
	const [title, setTitle] = useState<string>('')
	const [id, setId] = useState<number>(0)
	const [type, setType] = useState<string>('')

	const { error, oneTodo, completeTodos } = useAppSelector(state => state.todos)
	const dispatch = useAppDispatch()

	useEffect(() => {
		if (oneTodo) {
			setTitle(oneTodo.title)
			setId(oneTodo.id)
			setType(oneTodo.type)
		}
	}, [oneTodo])

	function handleEdit() {
		let newTodo = {
			title,
			id,
			type,
		}

		if (update == 'complete') {
			updateTodo2(dispatch, newTodo)
		} else if (update == 'todos') {
			updateTodo(dispatch, newTodo)
		}

		if (!error) setEdit(false)
	}

	return (
		<div
			className='edit-modal-parent-block'
			style={
				edit
					? {
							width: '450px',
							opacity: 1,
							zIndex: 1,
							transition: '0.4s',
							height: '250px',
					  }
					: {
							overflow: 'hidden',
							height: '80px',
							width: '100px',
							opacity: 0,
							zIndex: -1,
							transition: '0.4s',
					  }
			}
		>
			<form
				className='add-modal__form'
				style={{ width: '100%', height: '100%', paddingTop: '50px' }}
				onSubmit={e => e.preventDefault()}
			>
				<div className='close-btn-block' onClick={() => setEdit(false)}>
					<img src={closeBtn} width={30} alt='' className='close-btn' />
					<h3>Esc</h3>
				</div>
				<h2>Edit todo</h2>
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
					onClick={handleEdit}
					variant='contained'
					color='success'
				>
					Save
				</Button>
			</form>
		</div>
	)
}

export default EditTodo
