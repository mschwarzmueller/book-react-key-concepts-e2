import { getEventById } from '@/lib/events';

export default function EventDetailsPage({ params }) {
  const { eventId } = params;
  const event = getEventById(eventId);

  return (
    <div id="event-details">
      <header>
        <img src={`/${event.image}`} alt={event.title} />
        <h1>{event.title}</h1>
        <p>
          {event.location} | {event.date}
        </p>
      </header>
      <p>{event.description}</p>
      <p>
        <button>Register</button>
      </p>
    </div>
  );
}