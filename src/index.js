/**
 * Application Entry Point
 * 
 * This is the main entry file for the Taste of Caribbean App.
 * It registers the root App component with Expo's framework.
 * 
 * The application structure follows a standard React Native pattern:
 * - index.js: Entry point that registers the main App component
 * - App.js: Root component that manages state and navigation
 * - components/: Individual UI components organized by feature
 * - utils/: Utility functions and helpers
 * - services/: External service integrations (e.g., Firebase)
 */
import { registerRootComponent } from 'expo';
import App from './App';

// Register the App component as the root component
// This is the standard way to bootstrap an Expo application
registerRootComponent(App);

