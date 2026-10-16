import type { Work } from '@/types';

export const defaultWorks: Work[] = [
  {
    id: 4,
    name: 'Holidaze',
    teaser:
      'Next.js and TypeScript venue booking site where guests and venue managers register, browse venues and book stays.',
    description:
      'Holidaze is a venue booking website where guests can find and book places to stay, and venue managers can handle their bookings. Users register as either a regular guest or a venue manager. Visitors can browse every available venue on a paginated listing, showing twelve venues per page. Each venue has its own detail page with a date picker that shows which dates are free, so booking a stay only takes a few clicks. Once booked, guests can see their upcoming stays, and venue managers can book stays too and keep track of their upcoming bookings. Every form on the site is validated with Zod, so users get clear feedback when something is missing or wrong before anything is sent.',
    thumbnail: '/ep2.jpg',
    github: 'https://github.com/Nikita-stud/Project-Exam2',
    live_url: 'https://holidaze-home.netlify.app/',
    date: '2026-09-13',
    status: 'Completed',
    Category: { id: 1, name: 'Front-end' },
  },
  {
    id: 2,
    name: 'Prod Inc',
    teaser:
      'Team project, React and TypeScript shop with TanStack Router, Zustand cart, URL-based search and paginated product listings.',
    description:
      'PROD INC is an online shop where users can browse products, search the catalogue and build up a shopping cart. It was built as a team project. Anyone can explore the full product catalogue without logging in. Products are shown on a paginated listing with ten items per page. A search bar filters products through the URL query, so search results can be shared or bookmarked. Each product has its own detail page showing its price and rating. Users can add products to their cart or remove them, and the cart calculates the total automatically as items change.',
    thumbnail: '/jsframework.jpg',
    github: 'https://github.com/Nikita-stud/Prod-Inc',
    live_url: 'https://js-frameworkca.netlify.app/',
    date: '2026-03-29',
    status: 'Completed',
    Category: { id: 1, name: 'Front-end' },
  },
  {
    id: 3,
    name: 'FarmersBid',
    teaser:
      'An auction site where users sign up, list items and bid with credits, plus search and user profiles.',
    description:
      "FarmersBid is an auction website where users can buy and sell through live bidding. New users register an account and receive a starting balance of credits, which they use to bid on other users' listings. Anyone can visit the site, browse the auctions and search for specific items without needing an account. Once logged in, users get access to the full experience. They can place bids, edit their profile and keep track of how many credits they have left. Each user has a personal overview of their activity, showing their active bids, auctions they've won, expired listings and the items they have listed themselves. This makes it easy to follow everything happening on their account in one place.",
    thumbnail: '/sp2.jpg',
    github: 'https://github.com/Nikita-stud/Semester-Project2',
    live_url: 'https://semester-project-two.netlify.app/',
    date: '2025-09-14',
    status: 'Completed',
    Category: { id: 1, name: 'Front-end' },
  },
  {
    id: 1,
    name: 'Travel Blog',
    teaser:
      'A travel blog powered by WordPress, with featured posts, filtering, load-more listings and clickable images.',
    description:
      'I put all my design knowledge into making the website as visually balanced and appealing as possible, and the result reflects my enthusiasm for both the technical and the creative side of web development.All content on the site is fetched from a WordPress account, which acts as a headless CMS. This means the posts are written and managed in WordPress, while the website itself retrieves the data through the API and displays it in its own custom design. The home page gives visitors an overview of the blog, with a featured post, the latest articles and a selection of posts from a chosen continent. The posts page lists ten articles at a time, with a load more button to reveal further posts and a filter to narrow down the results. Opening a post leads to its details page, which displays the full article along with images that can be clicked to view in larger size.',
    thumbnail: '/travel.jpg',
    github: 'https://github.com/Nikita-stud/project-exam-1',
    live_url: 'https://the-traveler-blog.netlify.app/list-of-posts',
    date: '2024-10-13',
    status: 'Completed',
    Category: { id: 1, name: 'Front-end' },
  },
  {
    id: 6,
    name: 'Interaction Design',
    teaser:
      'My first website, a jacket store in HTML and CSS, later upgraded with JavaScript, loading states and error handling.',
    description:
      'RainyDays was my very first website and the starting point of my journey into web development. It was created as my first exam project, at a stage when I had only just learned the basics of design, HTML and CSS. The original version was built entirely with no JavaScript, loading indicators or error handling. The project was revisited and upgraded to reflect the new skills I had gained. Products are now fetched dynamically with JavaScript, and the site displays loading states while content is on its way and clear error messages if something goes wrong. The home page introduces the store with a selection of jackets and the categories available to browse. Selecting a jacket opens its details page, where the visitor can read more about it before moving on to purchase.',
    thumbnail: '/interaction.jpg',
    github: 'https://github.com/Nikita-stud/Interaction-Design',
    live_url: 'https://rainjackets.netlify.app/list-of-jackets',
    date: '2024-10-13',
    status: 'Completed',
    Category: { id: 1, name: 'Front-end' },
  },
  {
    id: 5,
    name: 'Exam Project 1',
    teaser:
      'Express and Sequelize e-commerce API on MySQL, with an EJS admin panel for products, users, discounts and categories.',
    description:
      'The back end (port 3000) is a REST API built with Express and Sequelize, connected to a MySQL database. It owns all the data and business logic: the Sequelize models that define the 3NF database tables, product management with soft delete, categories and brands, membership discounts, the cart and the calculation of order totals. It also handles authentication and issues a JWT when a user logs in. The back end never renders any pages; it only receives requests and responds with JSON. The front end (port 3001) is the admin interface, built with Express, EJS templates and Bootstrap. Every action an admin takes in the UI, such as adding a product, editing a brand or promoting a user to admin, is sent as an HTTP request to the back-end API on port 3000.',
    thumbnail: '/ep1.jpg',
    github: 'https://github.com/Nikita-stud/Backend-Admin1',
    live_url: null,
    date: '2026-10-11',
    status: 'Completed',
    Category: { id: 2, name: 'Back-end' },
  },
];
