import { useMemo } from 'react';

function sortItems(items) {
  console.log('Sorting');
  return items.sort(function (a, b) {
    if (a.id > b.id) {
      return 1;
    } else if (a.id < b.id) {
      return -1;
    }
    return 0;
  });
}

function List({ items, maxNumber }) {
  const sortedItems = sortItems(items); // will execute whenever the component function is invoked

  // Use the code below (and remove the sortItems() function above, as well as line 16, to optimize the code)
  // const sortedItems = useMemo(
  //   function () {
  //     console.log('Sorting');
  //     return items.sort(function (a, b) {
  //       if (a.id > b.id) {
  //         return 1;
  //       } else if (a.id < b.id) {
  //         return -1;
  //       }
  //       return 0;
  //     });
  //   },
  //   [items]
  // );

  const listItems = sortedItems.slice(0, maxNumber);

  return (
    <ul>
      {listItems.map((item) => (
        <li key={item.id}>
          {item.title} (ID: {item.id})
        </li>
      ))}
    </ul>
  );
}

export default List;
