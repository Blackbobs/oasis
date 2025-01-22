# Oasis Notifications Library

A lightweight, customizable toast notifications system for React applications.

## Introduction

Oasis provides an elegant and user-friendly way to display notifications in your React applications. Built with TypeScript and styled with TailwindCSS, it offers a seamless integration experience with modern React applications.

Key features:
- 🎯 Four distinct toast types (success, error, info, warning)
- 🎨 Beautiful, customizable designs
- ⚡ Zero-configuration setup
- 🔧 TypeScript support out of the box
- 📱 Fully responsive
- 🎉 Auto-dismiss functionality

> **Important**: This library is designed to work exclusively with Tailwind CSS. Make sure your project has Tailwind CSS installed and configured before using this library.


## Installation

To use the Toast Notifications system in your React application, install the library using npm:

```bash
npm install oasis-toast
```

## Prerequisites

- React 16.8+ 
- Tailwind CSS 3.0+

## Setup

### Wrap your Application with ToastProvider

To enable toast notifications throughout your app, wrap your root component with the `ToastProvider`. This provider manages the display of toast notifications and ensures they appear properly across the app.

```tsx
import React from 'react';
import { ToastProvider } from 'toast-notifications-library';
import App from './App';

const Root: React.FC = () => (
  <ToastProvider>
    <App />
  </ToastProvider>
);

export default Root;
```

Make sure to wrap your entire application (or at least the components that require toasts) with the `ToastProvider` component.

## Usage

You can trigger toast notifications using the following helper functions:

- `successToast(message: string, description: string)`: Show a success toast
- `errorToast(message: string, description: string)`: Show an error toast
- `infoToast(message: string, description: string)`: Show an info toast
- `warningToast(message: string, description: string)`: Show a warning toast

### Example

```tsx
import { successToast, errorToast, infoToast, warningToast } from 'toast-notifications-library';

const SomeComponent: React.FC = () => {
  const handleSuccess = () => {
    successToast("Operation Successful", "Your operation completed successfully.");
  };

  const handleError = () => {
    errorToast("Operation Failed", "There was an error with the operation.");
  };

  const handleInfo = () => {
    infoToast("Information", "This is some important information.");
  };

  const handleWarning = () => {
    warningToast("Warning", "This is a warning message.");
  };

  return (
    <div>
      <button onClick={handleSuccess}>Show Success Toast</button>
      <button onClick={handleError}>Show Error Toast</button>
      <button onClick={handleInfo}>Show Info Toast</button>
      <button onClick={handleWarning}>Show Warning Toast</button>
    </div>
  );
};

export default SomeComponent;
```

## Toast Types

There are four types of toasts available, each with its own distinct visual style:

| Type    | Color  | Purpose                                      |
|---------|--------|----------------------------------------------|
| Success | Green  | Displays a success message                   |
| Error   | Red    | Displays an error message                    |
| Info    | Blue   | Displays an informational message            |
| Warning | Yellow | Displays a warning message                   |

Each toast type is visually distinct, making it easy to convey the message's importance to the user.


### Success Toast
![Success Toast](/docs/img/success.png)
- Used for successful operations
- Green color scheme
- Includes a checkmark icon

### Error Toast
![Error Toast](/docs/img/error.png)
- Used for error messages
- Red color scheme
- Includes an X icon

### Info Toast
![Info Toast](/docs/img/info.png)
- Used for informational messages
- Blue color scheme
- Includes an information icon

### Warning Toast
![Warning Toast](/docs/img/warning.png)
- Used for warning messages
- Yellow color scheme
- Includes an exclamation icon

## TailwindCSS Configuration

If you're using TailwindCSS in your project, update your `tailwind.config.js` file to include the path to the node_modules where the library components are located:

```js
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    './node_modules/toast-notifications-library/**/*.{js,ts,jsx,tsx}'  // Add this line
  ],
  theme: {
    extend: {
      colors: {
        brand: "#845EC2",
        primary: "#D3ECF7",
        secondary: "#1D87A4"
      },
    },
  },
  plugins: [],
}
```

> **Note**: It's essential to add the path `./node_modules/toast-notifications-library/**/*.{js,ts,jsx,tsx}` to ensure that TailwindCSS scans the library's components and applies styles properly.

## Customization

- By default, each toast will automatically hide after 5 seconds
- There is no need to manage toast visibility manually—just use the provided functions to show toasts