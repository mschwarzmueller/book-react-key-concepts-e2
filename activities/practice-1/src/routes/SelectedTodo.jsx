import { Form, redirect, useLoaderData } from 'react-router-dom';

import Modal from '../components/Modal.jsx';
import { deleteTodo, getTodo, updateTodo } from '../data/todos.js';

function SelectedTodo() {
  const todo = useLoaderData();

  return (
    <Modal>
      <Form method="patch">
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

export default SelectedTodo;

export async function loader({ params }) {
  return getTodo(params.id);
}

export async function action({ request, params }) {
  const todoId = params.id;

  if (request.method === 'PATCH') {
    const formData = await request.formData();
    const enteredText = formData.get('text');
    updateTodo(todoId, enteredText);
  }

  if (request.method === 'DELETE') {
    deleteTodo(todoId);
  }
  return redirect('/');
}
