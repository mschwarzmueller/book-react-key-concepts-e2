import { Suspense } from 'react';

import UserGoals from '../../components/UserGoals';

export default async function GoalsPage() {
  return (
    <>
      <h1>Top User Goals</h1>
      <Suspense fallback={<p id="fallback">Fetching user goals...</p>}>
        <UserGoals />
      </Suspense>
    </>
  );
}
