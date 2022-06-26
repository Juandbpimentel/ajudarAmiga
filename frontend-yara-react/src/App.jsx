import { useState } from 'react';
import './App.css';

function App() {
	const [name, setName] = useState(0);
	const [genereType, setGenereType] = useState([
		'Romance',
		'Terror',
		'Ficção Científica',
	]);
	const Genere = genereType.map((Genere) => Genere);

	const handleGenereTypeChange = (e) =>
		console.log(genereType[e.target.value]);

	return (
		<div
			className='container'
			style={{
				display: 'flex',
				flexDirection: 'column',
				alignItems: 'center',
				padding: '2em',
				width: '100vw',
				height: '100vh',
			}}>
			<h1>Cadastro de Livro</h1>
			<form
				style={{
					padding: '1em',
					border: '1px solid #afafaf',
					borderRadius: '15px',
					height: '100%',
					width: '70%',
				}}>
				<div className='mb-3'>
					<label className='form-label'>Nome</label>
					<input
						type='text'
						className='form-control'
						id='name'
						aria-describedby='bookName'
						placeholder='Digite aqui o nome do seu livro'
					/>
				</div>
				<div className='mb-3'>
					<label className='form-label'>Gênero</label>
					<select
						className='form-select'
						aria-label='Default select example'
						onChange={(e) => handleGenereTypeChange(e)}>
						<option defaultValue>Selecione um gênero</option>
						{Genere.map((address, key) => (
							<option value={key}>{address}</option>
						))}
					</select>
				</div>
				<div
					style={{ display: 'flex', justifyContent: 'space-evenly' }}>
					<button
						type='submit'
						className='btn btn-primary'
						style={{ width: '80px' }}>
						Submit
					</button>
					<button
						type='button'
						onClick={() => {}}
						className='btn btn-primary'
						style={{ width: '80px' }}>
						Clear
					</button>
				</div>
			</form>
		</div>
	);
}

export default App;
