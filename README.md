# Sports Eventer React App

## Overview

SportsEventer is a dynamic web application built with React that facilitates the registration process for sports events. Designed to streamline event management and enhance user experience, SportsEventer allows users to easily register for various sports events scheduled for a sports day. The application is intuitive, user-friendly, and packed with features that make event registration hassle-free. It uses MOCK API to fetch and display event data.

## Features

-   Users can see the list of all the events, where each event is displayed in an engaging card tile format.
-   Each card tile displays essential details about the event, including the Name, Category, and Timings for the corresponding event.
-   Users can route to a separate list of all the selected events, making it easy to manage their event selections.
-   For All Events as well as Selected Events list, there is a button next to it that allows the user to select and deselect that event from that list respectively.
-   Persisting user selection using LocalStorage.
-   Tailwing CSS for completely responsive design.

## Constraints Handled

-   The application enforces a constraint where the user can select a maximum of 3 events. This ensures that users do not overcommit and can manage their participation effectively.
-   The user cannot select an event that conflicts with the timings of already selected events. This constraint ensures that the user cannot participate in more than one event at the same time, preventing scheduling conflicts and ensuring a smooth experience on the sports day.

## Technologies Used

-   `React`: JavaScript library for building user interfaces.
-   `Vite`: Next-generation frontend tooling for fast builds.
-   `mockAPI`: Creating and fetching api event data.
-   `Context API`: For state management across the application.
-   `Tailwind CSS`: For styling the application.
-   `JavaScript (ES6+)`: For building the components and application logic.
-   `Netlify`: Hosting the final production build.

## Installation

-   Clone the repository.
-   Install dependencies using `npm install`.
-   Start the development server using `npm run dev`.

Install the dependencies and devDependencies and start the server.

```sh
cd <your app directory>
npm install
npm run dev
```
