# College Event Management

A MERN stack web application for managing college events, including creating, viewing, updating, and deleting events.

## Features
- Add new events with name, date, time, venue, organizer, and participants
- View all upcoming events in a clean card layout
- Update existing event information
- Delete event records
- Responsive interface for desktop and mobile

## Tech Stack
- MongoDB
- Express.js
- React.js
- Node.js

## Project Structure
- `server/` — backend API and database logic
- `client/` — React frontend application

## Setup

### 1. Install dependencies

```bash
cd server && npm install
cd ../client && npm install
```

### 2. Configure environment variables

Copy the example file and update it with your MongoDB connection details:

```bash
cd server
cp .env.example .env
```

Example:

```env
PORT=5000
MONGO_URI=mongodb://127.0.0.1:27017/college-event-management
```

### 3. Run the application

Backend:
```bash
cd server
npm run dev
```

Frontend:
```bash
cd client
npm run dev
```

Then open:
- Frontend: http://localhost:3000
- Backend API: http://localhost:5000/api/events

## API Endpoints

- `GET /api/events` — fetch all events
- `POST /api/events` — create an event
- `GET /api/events/:id` — fetch one event
- `PUT /api/events/:id` — update an event
- `DELETE /api/events/:id` — delete an event

## Screenshot

The website includes a modern event dashboard with a form on the left and event cards on the right.
