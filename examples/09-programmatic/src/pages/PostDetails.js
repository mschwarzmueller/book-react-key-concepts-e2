import {
  redirect,
  useParams,
  useRouteLoaderData,
  useSubmit,
} from 'react-router-dom';

function PostDetails() {
  const params = useParams();
  const posts = useRouteLoaderData('posts');
  const post = posts.find((post) => post.id.toString() === params.id);

  const submit = useSubmit();

  function submitHandler(event) {
    event.preventDefault();

    const proceed = window.confirm('Are you sure?');

    if (proceed) {
      submit(
        { message: 'Your data, if needed' },
        {
          method: 'delete',
        }
      );
    }
  }

  return (
    <main id="post-details">
      <h1>{post.title}</h1>
      <p>{post.body}</p>
      <form onSubmit={submitHandler}>
        <button>Delete</button>
      </form>
    </main>
  );
}

export default PostDetails;

export async function action({ request }) {
  const formData = await request.formData();
  console.log(formData.get('message'));
  console.log(request.method);
  return redirect('/posts');
}
