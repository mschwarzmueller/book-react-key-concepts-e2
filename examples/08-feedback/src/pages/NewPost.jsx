import { Form, redirect, useActionData, useNavigation } from 'react-router-dom';

function NewPost() {
  const validationErrors = useActionData();

  const navigation = useNavigation();

  const isSubmitting = navigation.state !== 'idle';

  return (
    <Form method="post" id="post-form">
      <p>
        <label htmlFor="title">Title</label>
        <input type="text" id="title" name="title" />
      </p>
      <p>
        <label htmlFor="text">Text</label>
        <textarea id="text" name="text" rows={3} />
      </p>
      <ul>
        {validationErrors &&
          validationErrors.map((err) => <li key={err}>{err}</li>)}
      </ul>
      <p className="actions">
        <button disabled={isSubmitting}>
          {isSubmitting ? 'Saving...' : 'Save Post'}
        </button>
      </p>
    </Form>
  );
}

export default NewPost;

export async function action({ request }) {
  const formData = await request.formData();
  const postData = Object.fromEntries(formData);

  let validationErrors = [];

  if (postData.title.trim().length === 0) {
    validationErrors.push('Invalid post title provided.');
  }
  if (postData.text.trim().length === 0) {
    validationErrors.push('Invalid post text provided.');
  }

  if (validationErrors.length > 0) {
    return validationErrors;
  }

  await new Promise((resolve) => setTimeout(resolve, 5000));

  await fetch('https://jsonplaceholder.typicode.com/posts', {
    method: 'POST',
    body: JSON.stringify(postData),
    headers: { 'Content-Type': 'application/json' },
  });
  return redirect('/posts');
}
