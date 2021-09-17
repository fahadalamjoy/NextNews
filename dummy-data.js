const DUMMY_EVENTS = [
  {
    id: 'e1',
    title: 'why next js is good',
    description:
      'js provides an out-of-the-box solution for server side rendering (SSR) of React components. With Next. ... js can also help you with static site generation (SSG) – another SEO friendly way of building websites and applications. In this case, rather than during runtime, your HTML is generated during build time.',
    location: 'Somestreet 25, 12345 San Somewhereo',
    date: '2021-01-12',
    image: 'images/next-js-used-for_.png',
    isFeatured: true,
  },
  {
    id: 'e2',
    title: 'Why You Should Learn Next.js as a React Developer',
    description:
      'We can all likely agree on one thing: React is one of the most popular solutions out there for building interactive web applications, both small and large.',
    location: 'New Wall Street 5, 98765 New Work',
    date: '2021-02-30',
    image: 'images/meme.jpg',
    isFeatured: true,
  },
  {
    id: 'e3',
    title: 'Networking for extroverts',
    description:
      'You probably need no help with networking in general. But focusing your energy correctly - that is something where most people can improve.',
    location: 'My Street 12, 10115 Broke City',
    date: '2022-04-10',
    image: 'images/extrovert-event.jpg',
    isFeatured: false,
  },
  {
    id: 'e4',
    title: 'Is it worth using next JS?',
    description:
      'Faster time to market – NextJS is a great way of creating MVP as fast as possible thanks to many premade components. This way of building allows you to get feedback quickly and improve your product accordingly without wasting both time and money.',
    location: 'My Street 12, 10115 Broke City',
    date: '2022-03-10',
    image: 'images/extrovert-event.jpg',
    isFeatured: true,
  },
]

export function getFeaturedEvents() {
  return DUMMY_EVENTS.filter((event) => event.isFeatured)
}

export function getAllEvents() {
  return DUMMY_EVENTS
}

export function getFilteredEvents(dateFilter) {
  const { year, month } = dateFilter

  let filteredEvents = DUMMY_EVENTS.filter((event) => {
    const eventDate = new Date(event.date)
    return (
      eventDate.getFullYear() === year && eventDate.getMonth() === month - 1
    )
  })

  return filteredEvents
}

export function getEventById(id) {
  return DUMMY_EVENTS.find((event) => event.id === id)
}
