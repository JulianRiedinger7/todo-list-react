import React, { useState } from 'react';
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';

export default function App() {
	const [todos, setTodos] = useState([]);
	const [error, setError] = useState(null);
	const addTodo = (userInput) => {
		console.log(userInput);
		if (userInput === '') {
			setError('Es necesario agregar una tarea');
		} else if (
			todos.some((todo) => todo.task.toLowerCase() === userInput.toLowerCase())
		) {
			setError('Esa tarea ya existe en la lista');
		} else {
			setTodos([
				...todos,
				{
					task: userInput,
					id: Date.now(),
					completed: false,
				},
			]);
			setError(null);
		}
	};

	const handleDelete = (id, evt) => {
		evt.stopPropagation();
		setTodos(todos.filter((todo) => todo.id !== id));
	};

	const handleComplete = (id) => {
		setTodos(
			todos.map((todo) => {
				return todo.id === id
					? {
							...todo,
							completed: !todo.completed,
					  }
					: todo;
			})
		);
	};

	return (
		<main className="bg-slate-800 text-white flex flex-col gap-5 items-center justify-center min-h-screen">
			<h1 className="text-3xl">TodoList App</h1>
			<TodoForm addTodo={addTodo} />
			{error && <h2 className="text-red-500">{error}</h2>}
			{todos.length > 0 ? (
				<TodoList
					todos={todos}
					handleDelete={handleDelete}
					handleComplete={handleComplete}
				/>
			) : (
				<h2>Aqui se mostraran tus tareas...</h2>
			)}
		</main>
	);
}
