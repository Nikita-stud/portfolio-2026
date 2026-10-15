# Portfolio

This is my personal portfolio, built with Next.js and React and backed by a small MySQL database. It presents who I am, the stack I work with, how a project request goes from idea to launch, and a selection of my works, each with its own details page.

Explore the website by visiting the link - [Fedorov Utvikler](ADD_LIVE_LINK_HERE)

## Key Features

- Built on Next.js 16 (App Router) with TypeScript
- One page home with About, Stack, Conquest, Works and Contact sections
- Navigation highlights the section you are currently in
- Bio popup made with the native HTML popover, no JavaScript needed
- Works loaded from MySQL with Sequelize, with built in defaults if the database is offline
- Details page for every work, with GitHub and live site links
- REST API returning jsend responses for all works and for a single work
- Animated stack ticker, front end moving right and back end moving left
- CSS only animations, such as scroll driven image swaps and a rotating gold frame
- Accessible markup with semantic lists, alt text and screen reader labels

## Tech Stack

- Language = TypeScript 5
- Framework = Next.js 16 + React 19
- Styling = Tailwind CSS 4
- Fonts = Cormorant Garamond (next/font) + system font
- Icons = Font Awesome
- Database = MySQL hosted on Aiven
- ORM = Sequelize 6 + mysql2
- API responses = jsend
- Hosting = Netlify

## Getting Started

### Prerequisites

- Node.js (v20 or later recommended)
- npm
- A MySQL database (optional, the site falls back to default works without it)

### Installing

1. Clone the repo:

```bash
git clone https://github.com/Nikita-stud/portfolio-2026
```

2. Install the dependencies:

```bash
npm install
```

3. Run the dev server:

```bash
npm run dev
```

### Available Scripts

- `npm run dev` - Starts the Next.js dev server
- `npm run build` - Compiles TypeScript and bundles the app for production
- `npm run start` - Serves the production build locally for testing
- `npm run lint` - Runs ESLint

### Script Details

```json
  "scripts": {
    "dev": "next dev",
    "build": "next build",
    "start": "next start",
    "lint": "eslint"
  },
```

### API Endpoints

- `GET /api/works` - Returns all works with their category
- `GET /api/works/[title]` - Returns one work by its name

### Environment Variables

```
DATABASE_NAME=[your_db_name]
ADMIN_USERNAME=[your_username]
ADMIN_PASSWORD=[your_password]
DB_PORT=[your_port]
HOST=[your_host].aivencloud.com
DIALECT=mysql
```

### Contact

You can always contact me through kontakt@fedutvikler.com

@Nikita-stud
