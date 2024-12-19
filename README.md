# Blog Application

This is a full-stack blog application built using React for the frontend and MySQL for the backend database. The application allows users to create, edit, and view blog posts, providing a seamless user experience with dynamic data handling.

## Features

- User-friendly interface for creating and managing blog posts
- Dynamic rendering of content using React
- MySQL database for storing blog data
- Separation of concerns with a dedicated backend and frontend

## Prerequisites

Before running the application, ensure that you have the following installed:

- Node.js
- MySQL
- npm or yarn

## Getting Started

Follow the steps below to set up and run the application on your local machine:

### Backend Setup

1. Navigate to the backend directory:
   ```bash
   cd backend
   ```
2. Install the required dependencies:
   ```bash
   npm install
   ```
3. Set up the database:
   - Create a MySQL database.
   - Configure the database connection in the backend environment file (e.g., `.env`).
4. Start the backend server:
   ```bash
   npm run dev
   ```

### Frontend Setup

1. Navigate to the frontend directory:
   ```bash
   cd frontend
   ```
2. Install the required dependencies:
   ```bash
   npm install
   ```
3. Start the frontend development server:
   ```bash
   npm run dev
   ```

## Usage

1. Ensure both the backend and frontend servers are running.
2. Open your browser and navigate to the frontend development server's URL (usually `http://localhost:3000` or `http://localhost:5173`).
3. Start creating and managing your blog posts!

## Technologies Used

- **Frontend:** React, TypeScript
- **Backend:** Node.js, Express.js
- **Database:** MySQL

## Folder Structure

```
project-root
├── backend
│   ├──src
│       ├── controllers
│       ├── models
│       ├── routes
│       ├── utils
│       ├── configs
│       ├── .env
│       └── server.ts
├── frontend
│   ├── src
│   │   ├── components
│   │   ├── pages
│   │   ├── utils
│   │   ├── App.tsx
│   │   └── index.tsx
├── README.md
```

##

---

Enjoy using the Blog Application!

