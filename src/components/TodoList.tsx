import { ListProps } from '../types/types'

export default function PersonList<T>(props: ListProps<T>) {
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
			{props.items.map(props.renderItem)}
		</div>
	)
}
