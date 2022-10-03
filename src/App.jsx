import { useState } from 'react';
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';

function App() {
	const [products, setProducts] = useState([]);

	const handleDelete = (id) => {
		setProducts(products.filter((product) => product.id !== id));
	};

	const addTodo = (product) => {
		setProducts([...products, { name: product, id: Date.now() }]);
	};

	return (
		<main className="min-h-screen flex flex-col items-center justify-center bg-gray-800 text-white">
			<TodoForm addTodo={addTodo} />

			{products.length > 0 ? (
				<TodoList products={products} handleDelete={handleDelete} />
			) : (
				<h2>Aqui se veran tus productos...</h2>
			)}
		</main>
	);
}

export default App;
