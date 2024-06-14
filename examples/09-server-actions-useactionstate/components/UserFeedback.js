import { redirect } from 'next/navigation';

import { storeFeedback } from '../lib/feedback-db';
import FeedbackForm from './FeedbackForm';

export default function UserFeedback() {
  async function saveFeedback(prevState, formData) {
    'use server';
    const feedback = formData.get('feedback');

    if (!feedback || feedback.trim() === '') {
      return { error: 'Please provide some feedback!' };
    }

    await storeFeedback(feedback);
    redirect('/thanks');
  }

  return <FeedbackForm action={saveFeedback} />;
}
