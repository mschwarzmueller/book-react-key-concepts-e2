import fs from 'node:fs/promises';

async function fetchGoals() {
  await new Promise((resolve) => setTimeout(resolve, 3000)); // delay

  const goals = await fs.readFile('./data/user-goals.json', 'utf-8');
  return JSON.parse(goals);
}

export default async function GoalsPage() {
  const fetchedGoals = await fetchGoals();

  return (
    <>
      <h1>Top User Goals</h1>
      <ul>
        {fetchedGoals.map((goal) => (
          <li key={goal}>{goal}</li>
        ))}
      </ul>
    </>
  );
}
