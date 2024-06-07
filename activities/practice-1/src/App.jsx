import { useActionState, useOptimistic, useState } from 'react';

import SubmitButton from './components/SubmitButton.jsx';

async function submitFeedback(title, text) {
  await new Promise((resolve) => setTimeout(resolve, 3000)); // simulate a slow network or server
  console.log(`Feedback: ${title} - ${text}`);
  return { title, text, id: new Date().getTime() };
}

function App() {
  const [feedbackSubmissions, setFeedbackSubmissions] = useState([]);

  const [optimisticSubmissions, submitOptimistically] = useOptimistic(
    feedbackSubmissions,
    (currentState, optimisticValue) => [
      ...currentState,
      { ...optimisticValue, id: optimisticValue.title },
    ]
  );

  async function saveFeedbackAction(prevState, formData) {
    const title = formData.get('title');
    const text = formData.get('feedback');

    let errors = [];

    if (!title || title.trim() === '') {
      errors.push('A title is required.');
    }
    if (!text || text.trim() === '') {
      errors.push('Feedback text is required.');
    }

    if (errors.length > 0) {
      return {
        errors,
      };
    }

    submitOptimistically({ title, text });

    const savedFeedback = await submitFeedback(title, text);

    setFeedbackSubmissions((prevSubmissions) => [
      ...prevSubmissions,
      savedFeedback,
    ]);

    return {
      errors: [],
    };
  }

  const [formState, formAction] = useActionState(saveFeedbackAction, {
    errors: [],
  });

  return (
    <>
      <header>
        <h1>Feedback Form</h1>
      </header>
      <form action={formAction}>
        <p>
          <label htmlFor="title">Title</label>
          <input type="text" id="title" name="title" />
        </p>
        <p>
          <label htmlFor="feedback">Your Feedback</label>
          <textarea id="feedback" name="feedback" rows={3} />
        </p>
        {formState.errors && (
          <ul id="errors">
            {formState.errors.map((error, index) => (
              <li key={index}>{error}</li>
            ))}
          </ul>
        )}
        <p className="actions">
          <SubmitButton />
        </p>
      </form>
      <div id="user-feedback">
        <h2>Your Submissions</h2>
        {optimisticSubmissions.length === 0 && (
          <p>No feedback submitted yet.</p>
        )}
        {optimisticSubmissions.length > 0 && (
          <ul>
            {optimisticSubmissions.map((submission) => (
              <li key={submission.id}>
                <h3>{submission.title}</h3>
                <p>{submission.text}</p>
              </li>
            ))}
          </ul>
        )}
      </div>
    </>
  );
}

export default App;
