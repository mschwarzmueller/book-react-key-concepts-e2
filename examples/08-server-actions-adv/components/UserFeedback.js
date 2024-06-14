import { redirect } from 'next/navigation';
import { storeFeedback } from '../lib/feedback-db';

export default function UserFeedback() {
  async function saveFeedback(formData) {
    'use server';
    const feedback = formData.get('feedback');
    await storeFeedback(feedback);
    redirect('/thanks')
  }

  return (
    <form action={saveFeedback}>
      <p>
        <label htmlFor="feedback">Your feedback</label>
        <textarea id="feedback" name="feedback" rows={3} />
      </p>
      <p>
        <button>Submit</button>
      </p>
    </form>
  );
}
