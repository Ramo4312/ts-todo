import { useEffect, useState } from 'react'
import { addTodo, getTodos } from '../store/apiCalls'
import { useAppDispatch, useAppSelector } from '../store/hooks/hooks'
import TodoCard from '../components/TodoCard'
import TodoList from '../components/TodoList'
import { ITodo } from '../types/types'
import '../styles/TodoList.css'
import CompleteTodoList from '../components/CompleteTodoList'
import CompleteTodoCard from '../components/CompleteTodoCard'

const MainPage = () => {
	const [update, setUpdate] = useState<string>('')
	const dispatch = useAppDispatch()

	const { todos, completeTodos } = useAppSelector(state => state.todos)

	useEffect(() => {
		getTodos(dispatch)
	}, [])

	return (
		<div
			style={{
				height: '91.9vh',
				position: 'fixed',
				width: '100%',
				padding: '50px 100px',
				display: 'flex',
				justifyContent: 'space-evenly',
			}}
		>
			<div className='todos-list'>
				<h2>Todos</h2>
				<TodoList
					items={todos}
					renderItem={(todo: ITodo) => (
						<TodoCard
							todo={todo}
							key={todo.id}
							setUpdate={setUpdate}
							update={update}
						/>
					)}
				/>
			</div>
			<div className='todos-list' style={{ textAlign: 'center', width: '40%' }}>
				<h2>Completed todos</h2>
				<CompleteTodoList
					items={completeTodos}
					renderItem={(todo: ITodo) => (
						<CompleteTodoCard
							todo={todo}
							key={todo.id}
							setUpdate={setUpdate}
							update={update}
						/>
					)}
				/>
			</div>
		</div>
	)
}

export default MainPage
