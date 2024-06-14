'use client';

import { saveFeedback } from '../actions/feedback';
import { useActionState } from 'react';

export default function UserFeedback() {
  const [formState, formAction] = useActionState(saveFeedback, {
    error: null,
  });
  return (
    <form action={formAction}>
      <p>
        <label htmlFor="feedback">Your feedback</label>
        <textarea id="feedback" name="feedback" rows={3} />
      </p>
      {formState.error && <p id="error">{formState.error}</p>}
      <p>
        <button>Submit</button>
      </p>
    </form>
  );
}
