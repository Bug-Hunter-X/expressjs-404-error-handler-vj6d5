# Express.js 404 Error Handling

This repository demonstrates a common error in Express.js route handlers: not properly handling the case where a requested resource is not found.  The example shows a route that fetches a user by ID. If the user is not found, it currently sends a generic error message, potentially exposing sensitive information about database structure or lack thereof.  The solution showcases a more robust method that returns a proper 404 response.

## Bug

The `bug.js` file contains an Express.js route handler that fetches a user by ID.  If the user is not found, it returns a simple 'User not found' message, which is not a proper HTTP status code for a 404 error.  In production, you might want to be more explicit about the error, but you do not want to display internal details about your app, which can be exploited by bad actors.

## Solution

The `bugSolution.js` file provides the improved code handling 404 errors gracefully by utilizing appropriate HTTP status codes and standardized response formats.
