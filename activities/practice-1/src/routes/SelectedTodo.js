import { Form, redirect, useLoaderData } from 'react-router-dom';

import Modal from '../components/Modal';
import { deleteTodo, getTodo, updateTodo } from '../data/todos';

function SelectedTodoPage() {
  const todo = useLoaderData();

  return (
    <Modal>
      <Form method="post">
        <p>
          <label htmlFor="text">Your todo</label>
          <input type="text" id="text" name="text" defaultValue={todo.text} />
        </p>
        <p className="form-actions">
          <button>Update Todo</button>
        </p>
      </Form>
      <Form method="delete">
        <p className="form-actions">
          <button className='btn-alt'>Delete Todo</button>
        </p>
      </Form>
    </Modal>
  );
}

export default SelectedTodoPage;

export async function loader({ params }) {
  return getTodo(params.id);
}

export async function action({ request, params }) {
  const todoId = params.id;

  if (request.method === 'POST') {
    const formData = await request.formData();
    const enteredText = formData.get('text');
    updateTodo(todoId, enteredText);
  }

  if (request.method === 'DELETE') {
    deleteTodo(todoId);
  }
  return redirect('/');
}
