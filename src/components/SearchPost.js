import React, { useState } from 'react';

const SearchBar = ({ posts, setFilteredPosts }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = (event) => {
    const searchTerm = event.target.value;
    setSearchTerm(searchTerm);

    const filteredPosts = posts.filter((post) =>
      post.title.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredPosts(filteredPosts);
  };

  const clearSearch = () => {
    setSearchTerm('');
    setFilteredPosts(posts);
  };

  return (
    <div className="flex items-center mb-4">
      <input
        type="text"
        value={searchTerm}
        onChange={handleSearch}
        placeholder="Поиск по заголовку"
        className="border border-gray-300 rounded px-4 py-2 mr-2 focus:outline-none"
      />
      {searchTerm && (
        <button
          onClick={clearSearch}
          className="text-gray-500 hover:text-gray-700 focus:outline-none"
        >
         <img src='https://s1.iconbird.com/ico/2013/10/464/w512h5121380984608delete.png' className='h-8 w-8 rounded-full'></img>
        </button>
      )}
    </div>
  );
};

export default SearchBar;
