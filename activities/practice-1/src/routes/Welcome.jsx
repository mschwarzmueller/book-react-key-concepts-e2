import { Link } from 'react-router-dom';

function Welcome() {
  return (
    <main>
      <h1>Welcome to our shop!</h1>
      <p>
        Please explore <Link to="/products">our products</Link> or share this
        site with others.
      </p>
    </main>
  );
}

export default Welcome;
