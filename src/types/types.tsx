export interface ITodo {
	id: number
	title: string
	type: string
}

export interface ListProps<T> {
	items: T[]
	renderItem: (item: T) => React.ReactNode
}

export interface CardProps {
	todo: ITodo
	key: number
	setUpdate: Function
	update: string
}
