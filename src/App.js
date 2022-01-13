import React, { useState, useEffect } from 'react';
import './App.css';
import Menu from './components/Navbar';
import { Routes, Route, Outlet } from 'react-router-dom';
import Home from './components/Home';
import People from './components/People';
import Planets from './components/Planets';

function App() {
	const [ people, setPeople ] = useState([]);
	const [ planets, setPlanets ] = useState([]);
	const [ currentPage, setCurrentPage ] = useState(1);
	const [ postsPerPage ] = useState(5);

	
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
		fetchPeople();
		fetchPlanets();
	}, [])

	const indexOfLastPost = currentPage * postsPerPage;
	const indexOfFirstPost = indexOfLastPost - postsPerPage;
	const currentPosts = people.slice(indexOfFirstPost, indexOfLastPost);
  
	// Change page
	const paginate = pageNumber => setCurrentPage(pageNumber);

	return (
	<>
		<Routes>
			<Route path="/" element={<Menu />}>
				<Route index element={<Home />} />
				<Route path="people" element={
					<People data={currentPosts} />
				} />
				<Route path="planets" element={<Planets data={planets} />} />
			</Route>
		</Routes>

	</>
	);
}

export default App;
