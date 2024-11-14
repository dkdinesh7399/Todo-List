import React from 'react'

const SearchItem = ({setSearch,Search}) => {
  return (
    <form className='SearchForm' onSubmit={(e)=>e.preventDefault}>
        <label htmlFor='Search'>Search</label>
        <input
        id='Search'
        type='text'
        role ='searchbox'
        placeholder='Search items'
        value={Search}
        onChange={(e)=> setSearch(e.target.value)}
        />
    </form>    
)
}

export default SearchItem