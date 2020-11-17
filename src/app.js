import { useState } from 'react';
import useSWR from 'swr';
import { DOMParser, ApplyTemplate, ValueOf } from 'react-xslt';
import './app.css';

const fetcher = (url) => {
	return fetch(url)
		.then(response => response.text())
		.then(response => new DOMParser().parseFromString(response));
}

const Item = ({ xml }) => {
	return <div className="card">
		<img src={ValueOf({xml, select: 'image'})} style={{ maxHeight: '200px' }} alt="" />
		<div>
			<ValueOf xml={xml} select="name" />{" "}(<ValueOf xml={xml} select="yearpublished" />)
		</div>
	</div>;
};

const User = ({ username }) => {
	const { data, error } = useSWR(
		`https://boardgamegeek.com/xmlapi2/collection?username=${username}`,
		fetcher,
		{
			revalidateOnFocus: false,
			revalidateOnReconnect: false,
			refreshWhenOffline: false,
			refreshWhenHidden: false,
			refreshInterval: 0
		},
	);

	if(!data && !error) return <div> Loading... </div>;
	if(error) {
		console.log(error);
		return <div> Error loading </div>;
	}

	return <ApplyTemplate xml={data} select="//item" Component={Item} />;
};

const App = () => {
	const [ user, setUser ] = useState("");
	const [ userToLoad, setUserToLoad ] = useState();
	const onChange = (e) => setUser(e.target.value);
	const onClick = () => setUserToLoad(user);

	return <div>
		<label>
			<h1> BGG User </h1>
			<input value={user} onChange={onChange} />
		</label>
		<div>
		{
			!userToLoad ? (
				<button onClick={onClick}>Load {user}</button>
			) : (
				<User username={userToLoad} />
			)
		}
		</div>
	</div>;
};

export default App;
