import { Form, redirect } from 'react-router-dom';

import Modal from '../components/Modal';
import { addTodo } from '../data/todos';

function NewTodoPage() {
  return (
    <Modal>
      <Form method="post">
        <p>
          <label htmlFor="text">Your todo</label>
          <input type="text" id="text" name="text" />
        </p>
        <p className="form-actions">
          <button>Save Todo</button>
        </p>
      </Form>
    </Modal>
  );
}

export default NewTodoPage;

export async function action({ request }) {
  const formData = await request.formData();
  const enteredText = formData.get('text');
  addTodo(enteredText);
  return redirect('/');
}
