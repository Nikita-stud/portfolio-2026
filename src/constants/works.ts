import type { Work } from '@/types';

export const defaultWorks: Work[] = [
  {
    id: 1,
    name: 'CSS Frameworks',
    teaser:
      'Short teaser for Exam 0. Replace with a two line summary of the project, up to 130 characters.',
    description:
      'Full description of Exam 0 for the article page. Write as much as you need about the goal, process, stack and result.',
    thumbnail: '/nike.jpg',
    github: null,
    live_url: null,
    date: null,
    status: 'Completed',
    Category: { id: 1, name: 'Front-end' },
  },
  {
    id: 2,
    name: 'JavaScript Frameworks',
    teaser:
      'Short teaser for Exam 1. Replace with a two line summary of the project, up to 130 characters.',
    description:
      'Full description of Exam 1 for the article page. Write as much as you need about the goal, process, stack and result.',
    thumbnail: '/nike.jpg',
    github: null,
    live_url: null,
    date: null,
    status: 'Completed',
    Category: { id: 1, name: 'Front-end' },
  },
  {
    id: 3,
    name: 'Semester Project 2',
    teaser:
      'Semester project: an auction site where users sign up, list items and bid with credits, plus search and user profiles.',
    description:
      'Semester project: an auction site where users sign up, list items and bid with credits, plus search and user profiles. Semester project: an auction site where users sign up, list items and bid with credits, plus search and user profiles.Semester project: an auction site where users sign up, list items and bid with credits, plus search and user profiles.',
    thumbnail: '/sp2.jpg',
    github: 'https://github.com/Nikita-stud/Semester-Project2',
    live_url: 'https://semester-project-two.netlify.app/',
    date: '2026-09-13',
    status: 'Completed',
    Category: { id: 1, name: 'Front-end' },
  },
  {
    id: 4,
    name: 'Exam Project 1',
    teaser:
      'Express and Sequelize e-commerce API on MySQL, with an EJS admin panel for products, users, discounts and categories.',
    description:
      'The back end (port 3000) is a REST API built with Express and Sequelize, connected to a MySQL database. It owns all the data and business logic: the Sequelize models that define the 3NF database tables, product management with soft delete, categories and brands, membership discounts, the cart and the calculation of order totals. It also handles authentication and issues a JWT when a user logs in. The back end never renders any pages; it only receives requests and responds with JSON. The front end (port 3001) is the admin interface, built with Express, EJS templates and Bootstrap. It has no direct access to the database. Instead, every action an admin takes in the UI, such as adding a product, editing a brand or promoting a user to admin, is sent as an HTTP request to the back-end API on port 3000. The front end then renders the response into an EJS view.',
    thumbnail: '/ep1.jpg',
    github:
      'https://github.com/noroff-backend-1/2025-10-onl-pbed1-pbnd2-ft-oct25ft-ep1-ca-nikita-stud',
    live_url: null,
    date: '2026-10-11',
    status: 'Completed',
    Category: { id: 2, name: 'Back-end' },
  },
];
