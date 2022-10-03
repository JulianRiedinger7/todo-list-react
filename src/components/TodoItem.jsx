const TodoItem = ({ name, id, handleDelete }) => {
	return (
		<div className="flex justify-between text-xl border-2 border-teal-500 rounded-lg p-4">
			<h3>{name}</h3>
			<button onClick={() => handleDelete(id)}>❌</button>
		</div>
	);
};

export default TodoItem;
