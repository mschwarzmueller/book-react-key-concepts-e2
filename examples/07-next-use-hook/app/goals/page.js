import fs from 'node:fs/promises';

import UserGoals from '../../components/UserGoals';

async function fetchGoals() {
  await new Promise((resolve) => setTimeout(resolve, 3000)); // delay

  const goals = await fs.readFile('./data/user-goals.json', 'utf-8');
  return JSON.parse(goals);
}

export default async function GoalsPage() {
  const fetchGoalsPromise = fetchGoals();
  return (
    <>
      <h1>Top User Goals</h1>

      <UserGoals promise={fetchGoalsPromise} />
    </>
  );
}
