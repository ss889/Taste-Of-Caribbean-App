# Taste of Caribbean App

A React-based food ordering application for Caribbean cuisine.

## Project Structure

```
src/
├── components/
│   ├── auth/
│   │   ├── Login.js         # User login functionality
│   │   └── Register.js      # User registration
│   ├── home/
│   │   └── Home.js         # Main landing page with tabs
│   ├── menu/
│   │   └── Menu.js         # Food menu with categories
│   ├── checkout/
│   │   └── Checkout.js     # Order processing and payment
│   └── rewards/
│       └── Rewards.js      # Customer points and offers
├── services/
│   └── firebase.js         # Firebase configuration
├── styles/                 # CSS/SCSS files
├── utils/                  # Helper functions
└── App.js                 # Main application component

```

## Features

- User Authentication (Registration/Login)
- Menu Browsing with Categories
- Shopping Cart
- Checkout Process
- Rewards System

## Setup Instructions

1. Install dependencies:
```bash
npm install
```

2. Set up environment variables:
Create a `.env` file with your Firebase configuration:
```
REACT_APP_FIREBASE_API_KEY=your_api_key
REACT_APP_FIREBASE_AUTH_DOMAIN=your_auth_domain
REACT_APP_FIREBASE_PROJECT_ID=your_project_id
REACT_APP_FIREBASE_STORAGE_BUCKET=your_storage_bucket
REACT_APP_FIREBASE_MESSAGING_SENDER_ID=your_sender_id
REACT_APP_FIREBASE_APP_ID=your_app_id
```

3. Start the development server:
```bash
npm start
```

## Technologies Used

- React.js
- Firebase (Authentication & Database)
- React Router
- CSS/SCSS for styling