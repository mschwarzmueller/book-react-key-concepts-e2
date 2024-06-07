import { useRef, useState } from 'react';

async function submitFeedback(title, text) {
  await new Promise((resolve) => setTimeout(resolve, 3000)); // simulate a slow network or server
  console.log(`Feedback: ${title} - ${text}`);
  return { title, text, id: new Date().getTime() };
}

function App() {
  const titleRef = useRef(null);
  const bodyRef = useRef(null);
  const [feedbackSubmissions, setFeedbackSubmissions] = useState([]);

  async function handleSaveFeedback(event) {
    event.preventDefault();

    const title = titleRef.current.value;
    const text = bodyRef.current.value;

    const savedFeedback = await submitFeedback(title, text);

    setFeedbackSubmissions((prevSubmissions) => [
      ...prevSubmissions,
      savedFeedback,
    ]);
  }

  return (
    <>
      <header>
        <h1>Feedback Form</h1>
      </header>
      <form onSubmit={handleSaveFeedback}>
        <p>
          <label htmlFor="title">Title</label>
          <input type="text" id="title" ref={titleRef} />
        </p>
        <p>
          <label htmlFor="feedback">Your Feedback</label>
          <textarea id="feedback" ref={bodyRef} rows={3} />
        </p>

        {/* Todo: Output <ul> list of validation errors here! */}

        <p className="actions">
          <button>Send Feedback</button>
        </p>
      </form>
      <div id="user-feedback">
        <h2>Your Submissions</h2>
        {feedbackSubmissions.length === 0 && (
          <p>No feedback submitted yet.</p>
        )}
        {feedbackSubmissions.length > 0 && (
          <ul>
            {feedbackSubmissions.map((submission) => (
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
