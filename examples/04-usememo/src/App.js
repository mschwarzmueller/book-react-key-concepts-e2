import { useState } from 'react';

import List from './components/List';

const DUMMY_ITEMS = [
  {
    id: 5,
    title: 'A Book',
  },

  {
    id: 53,
    title: 'A Video Game',
  },
  {
    id: 1,
    title: 'A Carpet',
  },
  {
    id: 10,
    title: 'A Movie',
  },
  {
    id: 4,
    title: 'A Shirt',
  },
];

function App() {
  const [maxNumberOfItems, setMaxNumberOfItems] = useState(3);

  function updateMaxNumHandler(event) {
    setMaxNumberOfItems(event.target.value);
  }

  return (
    <>
      <div>
        <label htmlFor="max">Max. number of items</label>
        <input
          type="number"
          id="max"
          onChange={updateMaxNumHandler}
          value={maxNumberOfItems}
        />
      </div>
      <List items={DUMMY_ITEMS} maxNumber={maxNumberOfItems} />
    </>
  );
}

export default App;
