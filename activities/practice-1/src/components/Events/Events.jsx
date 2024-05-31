import dummyEvents from '../../data/dummy-events.js';
import EventItem from './EventItem.jsx';
import classes from './Events.module.css';

function Events() {
  return (
    <ul className={classes.events}>
      {dummyEvents.map((event) => (
        <EventItem key={event.id} event={event} />
      ))}
    </ul>
  );
}

export default Events;
