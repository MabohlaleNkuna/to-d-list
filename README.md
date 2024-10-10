# React To-Do List App

This is a simple and efficient To-Do List application built using React.js. It allows users to manage tasks with features like adding, editing, deleting, and filtering tasks by priority.

## Table of Contents
- [Features](#features)
- [Installation](#installation)
- [Usage](#usage)
- [Available Scripts](#available-scripts)
- [Project Structure](#project-structure)
- [License](#license)

## Features
- **Add tasks**: Easily add tasks with priority settings.
- **Edit tasks**: Update tasks that need modifications.
- **Delete tasks**: Remove tasks when they are no longer needed.
- **Filter tasks**: Filter tasks by priority to manage them efficiently.
- **Persistent data**: Tasks are saved to `localStorage`, so they remain available after refreshing the page.

## Installation

Follow these steps to get the app up and running:

1. **Clone the repository**:
    ```bash
    git clone https://github.com/MabohlaleNkuna/to-d-list.git
    ```

2. **Navigate to the project folder**:
    ```bash
    cd react-todo-app
    ```

3. **Install the dependencies**:
    ```bash
    npm install
    ```

4. **Start the development server**:
    ```bash
    npm start
    ```

The app will run on [http://localhost:3000](http://localhost:3000) in your browser.

## Usage

1. **Add a Task**: Enter the task details and assign it a priority.
2. **Edit a Task**: Click the edit button next to a task, modify the details, and save.
3. **Delete a Task**: Remove a task by clicking the delete button.
4. **Filter by Priority**: Use the filter dropdown to view tasks based on their priority level.

## Available Scripts

In the project directory, you can run the following scripts:

### `npm start`
- Starts the app in development mode.
- Open [http://localhost:3000](http://localhost:3000) to view it in your browser.
- The page reloads automatically when you make changes.

### `npm test`
- Launches the test runner in the interactive watch mode.
- Useful for running tests as you develop.

### `npm run build`
- Builds the app for production in the `build` folder.
- It bundles and optimizes the code for the best performance in production.

### `npm run eject`
- Use this to eject the configuration files and take full control of the app setup.
- **Caution**: This action is irreversible.

## Project Structure

```bash
├── public
│   ├── index.html
├── src
│   ├── components
│   │   ├── Header.js
│   │   ├── TaskForm.jsx
│   │   ├── TaskList.jsx
│   │   ├── UserForm.jsx
│   ├── pages
│   │   ├── Home.js
│   │   ├── Login.js
│   │   ├── Register.js
│   │   ├── Logout.jsx
│   │   ├── Profile.js
│   ├── styles.css
│   ├── App.js
│   ├── index.js
└── README.md
