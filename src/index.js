import React from 'react';
import ReactDOM from 'react-dom';

import SearchBar from './components/search_bar'

const API_KEY = 'AIzaSyCL-P21_-6PA1dPPgrLHkwOchE087R0F4o';

const App = function() {
	return (
		<div>
			<SearchBar />
		</div>
	);
		
};

ReactDOM.render(<App />, document.querySelector('.container'));