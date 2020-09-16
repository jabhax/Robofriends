import React from 'react';


const SearchBox = ({ searchfield, searchChanged }) => {
  return (
    <div className='pa2'>
      <input
        className='pa3 ba b--green bg-lightest-blue'
        type="search"
        onChange={ searchChanged }
        placeholder='search robots' />
    </div>
  );
}

export default SearchBox;
