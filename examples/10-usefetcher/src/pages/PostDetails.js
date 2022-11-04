import {
  redirect,
  useParams,
  useRouteLoaderData,
  useSubmit,
  useFetcher,
} from 'react-router-dom';
import { FaHeart } from 'react-icons/fa';

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

  const fetcher = useFetcher();

  function likePostHandler() {
    // fetcher.submit(null, {
    //   method: 'post',
    //   action: `/posts/${post.id}/like`,
    // });
    // using submit() from useSubmit() will not work as intended
    submit(null, {
      method: 'post',
      action: `/posts/${post.id}/like`,
    });
  }

  return (
    <main id="post-details">
      <h1>{post.title}</h1>
      <p>{post.body}</p>
      <p>
        <button className="icon-btn" onClick={likePostHandler}>
          <FaHeart />
          <span>Like this post</span>
        </button>
      </p>
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
