import './Bookmark.css';
import { useState, useEffect } from 'react';
import youtubeIcon from './images/youtube-icon.png';
import gmailIcon from './images/gmail-icon.png';
import netflixIcon from './images/netflix-icon.png';
import plexIcon from './images/plex-icon.png';
import redditIcon from './images/reddit-icon.png';
import twitchIcon from './images/twitch-icon.png';

const Bookmark = ({ website }) => {
	const [icon, setIcon] = useState('');
	const [link, setLink] = useState('');

	useEffect(() => {
		init();
	}, []);

	const init = () => {
		if (website === 'youtube') {
			setIcon(youtubeIcon);
			setLink('https://www.youtube.com');
		} else if (website === 'gmail') {
			setIcon(gmailIcon);
			setLink('https://mail.google.com');
		} else if (website === 'netflix') {
			setIcon(netflixIcon);
			setLink('https://www.netflix.com');
		} else if (website === 'plex') {
			setIcon(plexIcon);
			setLink('https://app.plex.tv/desktop/#!/');
		} else if (website === 'reddit') {
			setIcon(redditIcon);
			setLink('https://www.reddit.com');
		} else if (website === 'twitch') {
			setIcon(twitchIcon);
			setLink('https://www.twitch.tv');
		}
	};

	return (
		<div className='bookmark-background'>
			<div className='icon-container'>
				<a href={link} target='_self'>
					<img className='bookmark-icon' src={icon} alt='icon' />
				</a>
			</div>
		</div>
	);
};

export default Bookmark;
