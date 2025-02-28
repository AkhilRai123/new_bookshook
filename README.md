# BookShook - Online Room Booking Platform

BookShook is a web application designed to facilitate the online booking of rooms. It utilizes React for the frontend and Node.js/Express for the backend, providing a seamless user experience from browsing rooms to payment processing.

## Features

### Frontend (React)

- **User Authentication**: Secure registration and login functionality.
- **Room Listings**: Display available rooms with details such as images, max capacity, and type.
- **Date Filtering**: Filter rooms based on availability for selected dates.
- **Room Booking**: Book rooms for specific dates with integrated payment processing.
- **Responsive Design**: Optimized for use on desktop and mobile devices.

### Backend (Node.js/Express)

- **User Authentication**: Register and login functionality using MongoDB for user storage.
- **Room Management**: CRUD operations for rooms, including fetching all rooms and retrieving a room by its ID.
- **Booking Management**: Integration with Stripe API for secure payment processing and booking handling.
- **Database**: MongoDB Atlas used for cloud database storage.

## Technologies Used

### Frontend

- **React**: JavaScript library for building user interfaces.
- **React Router**: Declarative routing for React applications.
- **React Bootstrap**: Bootstrap components rebuilt for React.
- **Axios**: Promise-based HTTP client for making API requests.
- **Ant Design**: UI library for components like date picker.
- **Stripe Checkout**: Integration for secure payment processing.
- **CSS**: Custom styling and Bootstrap for UI design.

### Backend

- **Node.js**: Server-side JavaScript runtime.
- **Express**: Web framework for Node.js.
- **MongoDB**: NoSQL database for storing application data.
- **Mongoose**: Object modeling tool for MongoDB.
- **Stripe API**: Payment processing API for handling transactions.

## Project Structure

### Frontend Structure

- **Components**: Reusable UI components such as Navbar, Room, Loader, Error, Success, etc.
- **Screens**: Main screens including HomeScreen (room listings), LoginScreen, RegisterScreen, BookingScreen, and LandingScreen (landing page).
- **Utilities**: Axios for API requests, moment.js for date manipulation.

### Backend Structure

- **server.js**: Main entry point of the backend server. Configures Express, sets up CORS, connects to MongoDB, and defines API routes.
- **database/dbConnection.js**: Handles MongoDB connection using Mongoose. Logs connection status.
- **Models**: Defines schemas for MongoDB collections (user.js, room.js, booking.js).
- **Routes**: Handles HTTP requests and defines API endpoints (bookingsRoutes.js, roomsRoute.js, userRoute.js).

## Getting Started

### Prerequisites

- Node.js and npm installed locally.
- MongoDB Atlas account for cloud database storage.

### Installation

1. Clone the repository:
2. Install dependencies:

3. Configure MongoDB connection:
- Update connection URL in `database/dbConnection.js`.

4. Start the frontend and backend servers:

5. Access the application locally:
- Frontend: `http://localhost:3000`
- Backend APIs: `http://localhost:{PORT}/api`

## Credits

- Designed and developed by [Akhil Rai, Aditya Kumar Dwivedi, Adarsh Dixit, Dhruv Patel & Bhuvnesh Singh].
- Created as part of learning React and integrating with backend technologies.

## Future Improvements

- Implement user profile management and booking history.
- Enhance booking management and notifications.
- Add advanced search and filtering options.
- Improve UI/UX for a more seamless experience.

## License

This project is licensed under the MIT License - see the LICENSE file for details.

