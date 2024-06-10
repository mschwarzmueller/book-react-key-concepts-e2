export default function EventsPage() {
  return (
    <div id="events">
      <h2>Browse available events</h2>
      <ul>
        <li>
          <img
            src="events/learning-session.jpg"
            alt="Computer science students"
          />
          <div>
            <h2>Power React</h2>
            <p>
              An online learning group for high-efficiency learners that want to
              master React.
            </p>
            <p>
              <button>Sign up</button>
            </p>
          </div>
        </li>
        <li>
          <img src="events/morning-yoga.jpg" alt="Morning yoga session" />
          <div>
            <h2>Morning Yoga</h2>
            <p>
              Start your day with a relaxing, yet energizing yoga session. Suitable for all levels.
            </p>
            <p>
              <button>Sign up</button>
            </p>
          </div>
        </li>
      </ul>
    </div>
  );
}
