import React, { useState } from 'react';

const TodoForm = ({ addTodo }) => {
	const [userInput, setUserInput] = useState('');

	const handleChange = (evt) => {
		setUserInput(evt.target.value);
	};

	const handleSubmit = (evt) => {
		evt.preventDefault();
		addTodo(userInput);
		setUserInput('');
	};

	return (
		<form className="flex flex-col gap-2 text-lg" onSubmit={handleSubmit}>
			<label htmlFor="userInput">Ingrese una tarea</label>
			<div className="flex items-center">
				<input
					type="text"
					id="userInput"
					className="border-2 border-black rounded-lg p-2 text-black font-medium"
					placeholder="Tarea..."
					value={userInput}
					onChange={handleChange}
					autoComplete="off"
				/>
				<button
					type="submit"
					className="text-white font-medium uppercase tracking-widest bg-gradient-to-r to-teal-500 from-teal-600 px-4 py-2 rounded-lg shadow-md"
				>
					Agregar
				</button>
			</div>
		</form>
	);
};

export default TodoForm;
