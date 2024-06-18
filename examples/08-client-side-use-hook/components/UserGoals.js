'use client';

import { use, Suspense, useState, useEffect } from 'react';

import { sendAnalytics } from '../lib/analytics';

function Goals({ fetchGoalsPromise }) {
  const [mainGoal, setMainGoal] = useState();
  const goals = use(fetchGoalsPromise);

  function handleSetMainGoal(goal) {
    setMainGoal(goal);
  }

  return (
    <ul>
      {goals.map((goal) => (
        <li
          key={goal}
          id={goal === mainGoal ? 'main-goal' : undefined}
          onClick={() => handleSetMainGoal(goal)}
        >
          {goal}
        </li>
      ))}
    </ul>
  );
}

export default function UserGoals({ promise }) {
  useEffect(() => {
    sendAnalytics('user-goals-loaded', navigator.userAgent);
  }, []);

  return (
    <Suspense fallback={<p id="fallback">Fetching user goals...</p>}>
      <Goals fetchGoalsPromise={promise} />
    </Suspense>
  );
}
