import Link from 'next/link';

import { getEvents } from '@/lib/events';

export default function EventsPage() {
  const events = getEvents();
  return (
    <div id="events">
      <h2>Browse available events</h2>
      <ul>
        {events.map((event) => (
          <li key={event.id}>
            <img src={event.image} alt={event.title} />
            <div>
              <h2>{event.title}</h2>
              <p>{event.description}</p>
              <p>
                <Link href={`/events/${event.id}`}>Explore Event</Link>
              </p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
