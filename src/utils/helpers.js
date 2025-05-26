/**
 * Helpers Module
 * 
 * This module contains utility functions used throughout the Taste of Caribbean App.
 * These are general-purpose functions that aren't specific to any particular feature
 * but provide common functionality needed in multiple places.
 * 
 * Categories of helpers include:
 * - Formatting (currency, dates, text)
 * - Validation (input validation, form validation)
 * - Calculations (totals, discounts, taxes)
 * - Data transformation (mapping, filtering)
 * - Storage utilities (local storage, async storage)
 * 
 * Example usage:
 * ```
 * import { formatCurrency, validateEmail, calculateDiscount } from '../utils/helpers';
 * 
 * // Format a price
 * const formattedPrice = formatCurrency(12.99);
 * 
 * // Validate user input
 * const isValidEmail = validateEmail(email);
 * ```
 */

/**
 * Format a number as currency (USD)
 * @param {number} amount - The amount to format
 * @returns {string} Formatted currency string (e.g., "$12.99")
 */
export const formatCurrency = (amount) => {
  return `$${amount.toFixed(2)}`;
};

/**
 * Validate an email address format
 * @param {string} email - The email address to validate
 * @returns {boolean} True if the email format is valid
 */
export const validateEmail = (email) => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

/**
 * Calculate discount amount based on percentage
 * @param {number} price - The original price
 * @param {number} discountPercent - The discount percentage (0-100)
 * @returns {number} The discounted amount to subtract
 */
export const calculateDiscount = (price, discountPercent) => {
  return price * (discountPercent / 100);
};

/**
 * Calculate total price with tax
 * @param {number} subtotal - The subtotal before tax
 * @param {number} taxRate - The tax rate as a percentage (e.g., 8 for 8%)
 * @returns {number} The total price including tax
 */
export const calculateTotalWithTax = (subtotal, taxRate) => {
  return subtotal * (1 + taxRate / 100);
};

/**
 * Format a date in a user-friendly format
 * @param {Date} date - The date to format
 * @returns {string} Formatted date string (e.g., "May 26, 2025")
 */
export const formatDate = (date) => {
  return new Date(date).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });
};

// Additional helper functions will be added as needed
