import React from 'react';
import { useLocation, useParams } from 'react-router-dom';

/**
 * {match}
 * {match.params.id}
 */
const Post = () => {
  const { id } = useParams();
  const query = new URLSearchParams(useLocation().search);

  return (
    <>
      <h1>Posts</h1>
      <h2>ID is {id}</h2>
      <h2>
        Name is {query.get('first')} {query.get('last')}
      </h2>
    </>
  );
};

export default Post;
