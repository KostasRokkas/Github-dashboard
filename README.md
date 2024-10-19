# GitHub Information Viewer

This project is a React-based application that utilizes the GitHub API to allow users to search for GitHub profiles and view key information, including user details, repositories, and followers. The application is styled for a modern, responsive experience and is deployed using Netlify.

## Table of Contents

- [Overview](#overview)
- [Features](#features)
- [Technologies Used](#technologies-used)
- [Installation](#installation)
- [Live Demo](#live-demo)

## Overview

The **GitHub Information Viewer** is designed to provide users with easy access to detailed information about GitHub profiles. Users can search for any GitHub username, view profile details, and explore lists of public repositories and followers. The app also includes modals for displaying additional data and uses React Query to fetch data efficiently.

## Features

- **User Search**: Easily search for any GitHub username and retrieve their profile information.
- **Profile Details**: View information such as name, bio, location, followers count, and public repositories.
- **Repositories and Followers**: Access a list of the user's repositories and followers.
- **Modals**: Display followers and repositories in dedicated modal windows.
- **Responsive Design**: Optimized for both desktop and mobile views.
- **Toast Notifications**: Provides feedback for errors like invalid usernames.

## Technologies Used

- [React](https://reactjs.org/) - JavaScript library for building user interfaces.
- [React Query](https://react-query.tanstack.com/) - Data-fetching and caching for handling API requests.
- [GitHub API](https://developer.github.com/v3/) - GitHub's REST API for accessing user data.
- [React Router](https://reactrouter.com/) - For handling client-side routing.
- [React Toastify](https://fkhadra.github.io/react-toastify/) - For displaying notifications to users.
- [CSS Modules](https://github.com/css-modules/css-modules) - Scoped and modular CSS styling.
- [Netlify](https://www.netlify.com/) - Hosting and deploying the application.

## Installation

To get started with the project, clone the repository and install the necessary dependencies using yarn:

```bash
git clone <repository-url>
cd <project-directory>
yarn install
```
