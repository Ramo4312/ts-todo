import { ListProps } from '../types/types'

export default function CompleteTodoList<T>(props: ListProps<T>) {
	return (
		<div
			style={{
				height: '62vh',
				display: 'flex',
				flexDirection: 'column',
				rowGap: '18px',
				overflowY: 'scroll',
				padding: '20px 30px',
			}}
		>
			{props.items.length !== 0 ? (
				props.items.map(props.renderItem)
			) : (
				<h2 className='nothing-title'>There's nothing here</h2>
			)}
		</div>
	)
}
