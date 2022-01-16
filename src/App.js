import React, { useState, useEffect } from 'react';
import './App.css';
import Menu from './components/Navbar';
import { Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import People from './components/People';
import Details from './components/Details';
import Planets from './components/Planets';
import Starships from './components/Starships';

function App() {
	const [ people, setPeople ] = useState([]);
	const [ planets, setPlanets ] = useState([]);
	const [ starships, setStarships] = useState([]);

	
	useEffect(() => {
		async function fetchPeople() {
			let res = await fetch('https://swapi.py4e.com/api/people');
			let data = await res.json();
			setPeople(data.results)
		}

		async function fetchPlanets() {
			let res = await fetch('https://swapi.py4e.com/api/planets');
			let data = await res.json();
			setPlanets(data.results);
		}

		async function fetchStarships() {
			let res = await fetch('https://swapi.py4e.com/api/starships');
			let data = await res.json();
			setStarships(data.results);
		}

		fetchPeople();
		fetchPlanets();
		fetchStarships()
	}, [])


	return (
	<>
		<Routes>
			<Route path="/" element={<Menu />}>
				<Route index element={<Home />} />
				<Route path="people" element={<People data={people} />} />
				<Route path="/people/:name" element={<Details data={people} />} />
				<Route path="planets" element={<Planets data={planets} />} />
				<Route path="starships" element={<Starships data={starships} />} />
			</Route>
		</Routes>

	</>
	);
}

export default App;
