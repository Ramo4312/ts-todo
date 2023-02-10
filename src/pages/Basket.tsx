import { FC } from 'react'
import { useAppDispatch, useAppSelector } from '../store/hooks/hooks'
import { ITodo } from '../types/types'

import CardActions from '@mui/material/CardActions'
import CardContent from '@mui/material/CardContent'
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'

import '../styles/Basket.css'
import { clearTrash, deleteTodo, restoreTodo } from '../store/apiCalls'

const Basket: FC = () => {
	const { trash } = useAppSelector(state => state.todos)
	const dispatch = useAppDispatch()

	return (
		<div className='basket-contaoiner'>
			<div className='basket-block'>
				<h2>Trash</h2>
				<div className='basket-card-block'>
					{trash ? (
						trash.map((item: ITodo) => (
							<div className='todo-card' key={item.id}>
								<CardContent>
									<Typography className='card-title'>{item.title}</Typography>
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
										color='success'
										variant='contained'
										onClick={() => restoreTodo(dispatch, item)}
									>
										Restore
									</Button>
									<Button
										size='small'
										color='error'
										variant='contained'
										onClick={() => deleteTodo(dispatch, item.id)}
									>
										Delete
									</Button>
								</CardActions>
							</div>
						))
					) : (
						<h2>There's nothing here</h2>
					)}
				</div>
				<div style={{ width: '100%', display: 'flex', justifyContent: 'end' }}>
					<Button
						variant='contained'
						color='error'
						onClick={() => clearTrash(dispatch)}
					>
						Clear the trash
					</Button>
				</div>
			</div>
		</div>
	)
}

export default Basket
