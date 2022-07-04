import dummyEvents from '../../data/dummy-events';
import EventItem from './EventItem';
import classes from './Events.module.css';

function Events({ onAddItemToCart, onRemoveItemFromCart, cartItems }) {
  return (
    <ul className={classes.events}>
      {dummyEvents.map((event) => (
        <EventItem
          key={event.id}
          event={event}
          isInCart={cartItems.some((item) => item.id === event.id)}
          onAddToCart={() => onAddItemToCart(event)}
          onRemoveFromCart={() => onRemoveItemFromCart(event.id)}
        />
      ))}
    </ul>
  );
}

export default Events;
