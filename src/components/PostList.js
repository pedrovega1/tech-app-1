import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import SearchBar from './SearchPost.js';
import ReactPaginate from 'react-paginate';

const PostList = () => {
  const [posts, setPosts] = useState([]);
  const [filteredPosts, setFilteredPosts] = useState([]);
  const [currentPage, setCurrentPage] = useState(0);
  const [postsPerPage] = useState(5);
  const [sortDirection, setSortDirection] = useState('asc');

  useEffect(() => {
    axios
      .get('https://jsonplaceholder.typicode.com/posts')
      .then((response) => {
        setPosts(response.data);
        setFilteredPosts(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  // Calculate pagination values
  const offset = currentPage * postsPerPage;
  const pageCount = Math.ceil(filteredPosts.length / postsPerPage);
  const currentPosts = filteredPosts.slice(offset, offset + postsPerPage);

  // Change page
  const handlePageChange = ({ selected }) => {
    setCurrentPage(selected);
  };

  // Sort posts by title
  const sortPosts = () => {
    const sortedPosts = [...filteredPosts].sort((a, b) => {
      if (sortDirection === 'asc') {
        return a.title.localeCompare(b.title);
      } else {
        return b.title.localeCompare(a.title);
      }
    });
    setFilteredPosts(sortedPosts);
    setSortDirection(sortDirection === 'asc' ? 'desc' : 'asc');
  };

  return (
    <div className="flex flex-col items-center justify-center">
      <h1 className="text-3xl font-bold mb-6">Список постов</h1>
      <div className="flex items-center justify-between w-3/4 mb-4">
        <SearchBar posts={posts} setFilteredPosts={setFilteredPosts} />
        <button
          className="px-4 py-2 bg-blue-500 text-white rounded font-medium"
          onClick={sortPosts}
        >
          {sortDirection === 'asc' ? 'Сортировать по возрастанию' : 'Сортировать по убыванию'}
        </button>
      </div>
      <ul className="mx-auto w-3/4 divide-y divide-gray-300">
        {currentPosts.map((post) => (
          <li key={post.id} className="py-4">
            <Link
              to={`/posts/${post.id}`}
              className="block hover:bg-gray-100 transition duration-300"
            >
              <h2 className="text-xl font-bold text-blue-500 mb-2 hover:underline">
                {post.title}
              </h2>
              <p className="text-lg text-gray-700">{post.body}</p>
            </Link>
          </li>
        ))}
      </ul>
      <div className="mt-4 flex items-center">
        {filteredPosts.length > postsPerPage && (
          <ReactPaginate className='flex mx-auto space-x-8 items-center'
            previousLabel={
                <img src='https://png.pngtree.com/png-clipart/20190705/original/pngtree-vector-forward-icon-png-image_4184777.jpg' className='h-5 w-5 transform rotate-180 '></img>
            }
            nextLabel={
                <img src='https://png.pngtree.com/png-clipart/20190705/original/pngtree-vector-forward-icon-png-image_4184777.jpg' className='h-5 w-5'></img>
            }
            pageCount={pageCount}
            onPageChange={handlePageChange}
            containerClassName={'pagination'}
            previousLinkClassName={'pagination__link'}
            nextLinkClassName={'pagination__link'}
            disabledClassName={'pagination__link--disabled'}
            activeClassName={'pagination__link--active'}
          />
        )}
      </div>
    </div>
  );
};

export default PostList;
