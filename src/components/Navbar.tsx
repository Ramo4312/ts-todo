import { useState } from 'react'
import AppBar from '@mui/material/AppBar'
import Box from '@mui/material/Box'
import Toolbar from '@mui/material/Toolbar'
import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button'
import DeleteIcon from '@mui/icons-material/Delete'
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew'
import PlaylistAddCircleIcon from '@mui/icons-material/PlaylistAddCircle'
import { useNavigate, useLocation } from 'react-router-dom'
import AddTodo from './AddTodo'

export default function ButtonAppBar() {
	const navigate = useNavigate()
	const [modal, setModal] = useState<boolean>(false)

	const { pathname } = useLocation()

	return (
		<>
			<AddTodo modal={modal} setModal={setModal} />
			<Box sx={{ flexGrow: 1 }}>
				<AppBar position='static' sx={{ background: 'rgb(0,0,0,0.7)' }}>
					<Toolbar>
						<Typography
							variant='h6'
							component='div'
							sx={{ flexGrow: 1 }}
							onClick={() => {
								navigate('/')
							}}
						>
							Todos
						</Typography>

						{pathname == '/basket' ? (
							<Button
								onClick={() => {
									navigate('/')
								}}
								variant='contained'
								color='info'
								startIcon={<ArrowBackIosNewIcon />}
							>
								Back
							</Button>
						) : (
							<>
								<Button
									sx={{ marginRight: '20px' }}
									endIcon={<PlaylistAddCircleIcon />}
									variant='contained'
									color='success'
									onClick={() => setModal(true)}
								>
									Add Todo
								</Button>

								<Button
									onClick={() => {
										navigate('basket')
									}}
									variant='contained'
									color='info'
									endIcon={<DeleteIcon />}
								>
									Basket
								</Button>
							</>
						)}
					</Toolbar>
				</AppBar>
			</Box>
		</>
	)
}
