1. Finish Activity 2.2: Create a React app from the previous chapter.

2. Add a new component to the `src/components` folder, a component function named `GoalItem`, in a new `GoalItem.jsx` file.

3. Copy the component function (including the returned JSX code) from `FirstGoal.jsx` and add a new `props` parameter to the function. Remove the title and description text from the JSX code:

```jsx
function GoalItem(props) {
  return (
    <li>
      <article>
        <h2></h2>
        <p>
          
        </p>
      </article>
    </li>
  );
}

export default GoalItem;
```

4.	Output the title and description in the `GoalItem` component via props—for example, by using `props.title` and `props.children` (in the fitting places in the JSX code, in other words, between the `<h2>` and `<p>` tags).

5.	In the `GoalList` component, remove the `FirstGoal`, `SecondGoal`, and so on components (imports and JSX code) and import and use the new `GoalItem` component instead. Output `<GoalItem>` once for every goal that should be displayed, and pass the `title` prop and a value for the `children` prop to these components:

```jsx
import GoalItem from './GoalItem.jsx';

function GoalList() {
  return (
    <ul>
      <GoalItem title="Teach React in a highly-understandable way">
        Some goal text…
      </GoalItem>
      <GoalItem title="Allow you to practice what you learned">
        Some goal text…
      </GoalItem>
      <GoalItem title="Motivate you to continue learning">
        Some goal text…
      </GoalItem>
    </ul>
  );
}

export default GoalList;
```

6.	Delete the redundant `FirstGoal.jsx`, `SecondGoal.jsx`, and so on files.
