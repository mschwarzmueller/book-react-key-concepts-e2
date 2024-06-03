import { useLoaderData } from 'react-router-dom';

function PostDetails() {
  const post = useLoaderData();
  return (
    <main id="post-details">
      <h1>{post.title}</h1>
      <p>{post.body}</p>
    </main>
  );
}

export default PostDetails;

export async function loader({ params }) {
  const response = await fetch(
    'https://jsonplaceholder.typicode.com/posts/' + params.id
  );
  if (!response.ok) {
    throw new Error('Could not fetch post for id ' + params.id);
  }
  return response;
}
