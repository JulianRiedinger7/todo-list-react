import React from 'react';

const TodoItem = ({ task, id, completed, handleDelete, handleComplete }) => {
	return (
		<div
			className="flex justify-between border-2 p-4 border-slate-600 w-64 max-w-xs"
			onClick={() => handleComplete(id)}
		>
			<h3 className={`text-lg ${completed ? 'line-through' : ''}`}>{task}</h3>
			<button onClick={(evt) => handleDelete(id, evt)}>❌</button>
		</div>
	);
};

export default TodoItem;
