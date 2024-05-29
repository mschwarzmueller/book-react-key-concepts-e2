import NestedChild from './NestedChild.jsx';

function Child() {
  console.log('<Child /> is called.');

  return (
    <div id="child">
      <p>
        A component, rendered inside another component, containing yet another
        component.
      </p>
      <NestedChild />
    </div>
  );
}

export default Child;
