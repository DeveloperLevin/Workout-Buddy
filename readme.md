# Workout Buddy

A simple MERN (MongoDB, Express, React, Node.js) app to manage and track workouts.

## Features

- User authentication (Sign Up/Login)
- Add, view, update, and delete workouts
- Responsive design

## Tech Stack

- **Frontend**: React
- **Backend**: Node.js, Express.js
- **Database**: MongoDB

## Setup

1. **Clone the repository:**

    ```bash
    git clone https://github.com/DeveloperLevin/workout-buddy.git
    cd workout-buddy
    ```

2. **Install dependencies:**

    ```bash
    cd client
    npm install
    cd ../server
    npm install
    ```

3. **Create a `.env` file in the `server` folder:**

    ```plaintext
    MONGO_URI=your-mongo-uri
    JWT_SECRET=your-jwt-secret
    PORT=5000
    ```

4. **Run the app:**

    - Backend: `npm start` (in `server` folder)
    - Frontend: `npm start` (in `client` folder)

## Usage

- Sign up or log in to manage your workouts.
- Add, view, edit, and delete workout records.

## License

MIT
