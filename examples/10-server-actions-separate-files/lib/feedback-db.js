import fs from 'node:fs/promises';

export async function storeFeedback(text) {
  const storedFeedback = await fs.readFile('data/user-feedback.json');
  const feedback = JSON.parse(storedFeedback);

  feedback.push({ id: new Date().getTime(), text });

  await fs.writeFile('data/user-feedback.json', JSON.stringify(feedback));
}
