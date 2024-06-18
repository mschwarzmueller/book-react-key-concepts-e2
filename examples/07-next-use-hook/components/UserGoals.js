
import { use, Suspense } from 'react';

function Goals({ fetchGoalsPromise }) {
  const goals = use(fetchGoalsPromise);

  return (
    <ul>
      {goals.map((goal) => (
        <li key={goal}>{goal}</li>
      ))}
    </ul>
  );
}

export default function UserGoals({ promise }) {
  return (
    <Suspense fallback={<p id="fallback">Fetching user goals...</p>}>
      <Goals fetchGoalsPromise={promise} />
    </Suspense>
  );
}
