import React from 'react';
import './searchbox.styles.css';

const SearchBox = ({ className, placeholder, onChangeHandler }) => (
	<div className='search'>
		<input
			type='search'
			placeholder={placeholder}
			onChange={onChangeHandler}
		/>
		<button>
			Search
		</button>

	</div>


);

export default SearchBox;

