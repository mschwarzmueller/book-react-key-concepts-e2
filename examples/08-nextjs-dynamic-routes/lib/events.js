const DUMMY_EVENTS = [
  {
    id: 'e1',
    title: 'Power React',
    description:
      'An online learning group for high-efficiency learners that want to master React.',
    location: 'Somestreet 25, 12345 San Somewhereo',
    date: '2025-12-24',
    image: 'events/coding-session.jpg',
  },
  {
    id: 'e2',
    title: 'Morning Yoga',
    description:
      'Start your day with a relaxing, yet energizing yoga session. Suitable for all levels.',
    location: 'New Wall Street 5, 98765 New Work',
    date: '2025-12-25',
    image: 'events/morning-yoga.jpg',
  },
];

export function getEvents() {
  return DUMMY_EVENTS;
}

export function getEventById(eventId) {
  return DUMMY_EVENTS.find((event) => event.id === eventId);
}
