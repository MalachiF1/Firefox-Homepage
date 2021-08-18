import './App.css';
import moment from 'moment';
import { useState, useEffect } from 'react';
import Bookmark from './Bookmark';

const App = () => {
	const [currentDate, setCurrentDate] = useState('');
	const [currentTime, setCurrentTime] = useState('');
	const [currentDay, setCurrentDay] = useState('');
	const [timeOfDay, SetTimeOfDay] = useState('');
	const [query, setQuery] = useState('');

	useEffect(() => {
		init();
		setInterval(() => init(), 1000);
	}, []);

	const init = () => {
		setCurrentDate(moment().format('DD MMM YYYY'));
		setCurrentTime(moment().format('HH:mm'));
		setCurrentDay(moment().format('dddd'));
		SetTimeOfDay(getTimeOfDay());
	};

	const getTimeOfDay = () => {
		let timeOfDay = '';
		if (parseInt(moment().format('HH')) < 12) {
			timeOfDay = 'morning';
		} else if (parseInt(moment().format('HH')) < 18) {
			timeOfDay = 'afternoon';
		} else if (parseInt(moment().format('HH')) < 22) {
			timeOfDay = 'evening';
		} else {
			timeOfDay = 'night';
		}
		return timeOfDay;
	};

	const handleChange = e => {
		setQuery(e.target.value);
	};

	const handleSubmit = e => {
		e.preventDefault();
		if (!query) return;
		//window.location.replace(`https://www.google.com/search?q=${stringToQuery(query)}`);
		//window.open(`https://www.google.com/search?q=${stringToQuery(query)}`, '_self');
		window.location.href = `https://www.google.com/search?q=${stringToQuery(query)}`;
	};

	const stringToQuery = str => {
		const newQuery = str.toLowerCase().split(/\s+/).join('+');
		return newQuery;
	};

	return (
		<div className='App'>
			<div className='time-display'>
				<h2 className='time'>{currentTime}</h2>
				<h3 className='day'>{currentDay}, </h3>
				<h3 className='date'>{currentDate}</h3>
			</div>
			<p className='greeting'>Good {timeOfDay}, Malachi.</p>

			<form onSubmit={handleSubmit} autocomplete='off' className='search-bar-container'>
				<input type='text' placeholder='Search with google' autoFocus id='search-bar' onChange={handleChange} />
			</form>

			<div className='bookmarks-container'>
				<Bookmark website='gmail' />
				<Bookmark website='youtube' />
				<Bookmark website='netflix' />
				<Bookmark website='plex' />
				<Bookmark website='reddit' />
				<Bookmark website='twitch' />
			</div>
		</div>
	);
};

export default App;
