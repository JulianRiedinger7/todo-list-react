import { useState } from 'react';

const TodoForm = ({ addTodo }) => {
	const [product, setProduct] = useState('');
	const [error, setError] = useState('');

	const handleSubmit = (evt) => {
		evt.preventDefault();
		if (product === '') {
			setError('Es necesario que ingreses un producto');
		} else {
			addTodo(product);
			setProduct('');
		}
	};

	const handleChange = (evt) => {
		setProduct(evt.target.value);
		setError('');
	};

	return (
		<form className="flex flex-col mb-10 text-lg" onSubmit={handleSubmit}>
			<label htmlFor="producto">Ingresa un Producto</label>
			<div className="flex items-center">
				<input
					type="text"
					className="h-10 p-2 border border-slate-800 rounded-lg shadow-md text-black"
					id="producto"
					placeholder="producto..."
					value={product}
					onChange={handleChange}
					autoComplete="off"
				/>
				{error && <small className="text-red-500">{error}</small>}
				<button
					type="submit"
					className="uppercase tracking-wider bg-teal-500 py-2 px-4 rounded-lg shadow-lg h-10 "
				>
					Agregar
				</button>
			</div>
		</form>
	);
};

export default TodoForm;
