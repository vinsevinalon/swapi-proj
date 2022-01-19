import React, { useState, useEffect } from 'react';
import './App.css';
import Menu from './components/Navbar';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import People from './pages/People';
import Details from './components/Details';
import Planets from './pages/Planets';
import Starships from './pages/Starships';
import Stories from './pages/Stories';
import axios from 'axios';

function App() {
	const [ people, setPeople ] = useState([]);
	const [ planets, setPlanets ] = useState([]);
	const [ starships, setStarships] = useState([]);

	
	useEffect(() => {
		axios.get('https://swapi.dev/api/people/').then((res) => {
			setPeople(res.data.results);
		});

		axios.get('https://swapi.dev/api/planets/').then((res) => {
			setPlanets(res.data.results);
		});

		axios.get('https://swapi.dev/api/starships/').then((res) => {
			setStarships(res.data.results);
		});
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
				<Route path="stories" element={<Stories />} />
			</Route>
		</Routes>

	</>
	);
}

export default App;
