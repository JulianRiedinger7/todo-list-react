import React from 'react';
import TodoItem from './TodoItem';

const TodoList = ({ todos, handleDelete, handleComplete }) => {
	return (
		<div>
			{todos.map((todo) => (
				<TodoItem
					key={todo.id}
					{...todo}
					handleDelete={handleDelete}
					handleComplete={handleComplete}
				/>
			))}
		</div>
	);
};

export default TodoList;
