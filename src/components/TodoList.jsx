import TodoItem from './TodoItem';

const TodoList = ({ products, handleDelete }) => {
	return (
		<div className="flex flex-col gap-5 w-10/12">
			{products.map((product) => (
				<TodoItem key={product.id} handleDelete={handleDelete} {...product} />
			))}
		</div>
	);
};

export default TodoList;
