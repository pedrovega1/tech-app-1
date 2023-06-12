import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams, Link } from 'react-router-dom';

const UserDetails = () => {
  const { userId } = useParams();
  const [user, setUser] = useState(null);
  const [posts, setPosts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const userResponse = await axios.get(
          `https://jsonplaceholder.typicode.com/users/${userId}`
        );
        setUser(userResponse.data);

        // Add an artificial delay of 0.5 seconds
        await new Promise((resolve) => setTimeout(resolve, 500));

        const postsResponse = await axios.get(
          `https://jsonplaceholder.typicode.com/posts?userId=${userId}`
        );
        setPosts(postsResponse.data);

        setIsLoading(false);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, [userId]);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="flex flex-col items-center justify-center">
      <h1 className="text-3xl font-bold mb-4">{user.name}</h1>
      <p className="text-lg mb-2 font-semibold">Email: {user.email}</p>
      <h2 className="text-2xl font-bold mt-4 mb-2">Посты</h2>
      <ul className="w-full max-w-md space-y-2">
        {posts.map((post) => (
          <li key={post.id} className="text-lg border border-gray-300 rounded-md p-4">
            {post.title}
          </li>
        ))}
      </ul>
      <Link to="/" className="text-blue-500 underline mt-4">
        Назад
      </Link>
    </div>
  );
};

export default UserDetails;
