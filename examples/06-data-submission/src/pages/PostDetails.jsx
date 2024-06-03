import { useParams, useRouteLoaderData } from 'react-router-dom';

function PostDetails() {
  const params = useParams();
  const posts = useRouteLoaderData('posts');
  const post = posts.find((post) => post.id.toString() === params.id);
  return (
    <div id="post-details">
      <h1>{post.title}</h1>
      <p>{post.body}</p>
    </div>
  );
}

export default PostDetails;
