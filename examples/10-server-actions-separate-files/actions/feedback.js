'use server';

import { redirect } from 'next/navigation';

import { storeFeedback } from '../lib/feedback-db';

export async function saveFeedback(prevState, formData) {
  const feedback = formData.get('feedback');

  if (!feedback || feedback.trim() === '') {
    return { error: 'Please provide some feedback!' };
  }

  await storeFeedback(feedback);
  redirect('/thanks');
}