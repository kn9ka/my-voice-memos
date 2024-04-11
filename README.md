# Project Overview: NotesKeeper

## Introduction

The primary objective of this project is to develop an application dedicated to organizing and storing personal notes efficiently. This application will leverage modern technologies to provide users with a seamless and intuitive note-taking experience.

## Key Technologies

- [WebSpeechAPI](https://developer.mozilla.org/en-US/docs/Web/API/Web_Speech_API): Integration of speech recognition and synthesis capabilities to enable voice-based note-taking.
- [Vite](https://vitejs.dev/): A fast and efficient build tool that enhances the development workflow by offering lightning-fast cold server starts.
- [React](https://react.dev/): A popular JavaScript library for building user interfaces, ensuring a responsive and dynamic user experience.
- [Feature Sliced Design](https://feature-sliced.design/docs/get-started/overview): An architectural pattern that promotes modularity, scalability, and maintainability by organizing codebase into feature-specific slices.
- [Indexed DB](https://developer.mozilla.org/en-US/docs/Web/API/IndexedDB_API): A web browser-based database system for storing large amounts of structured data in the browser.

## Architecture Overview

- `app`: Houses the main application configuration, including routing and style management.
- `config`: Centralizes all configuration-related aspects of the application.
- `entities`: Manages entities, helpers, constants, and data manipulation logic.
- `shared`: Contains components shared across different layouts, including API integrations, libraries, UI components, and layout structures.
- `widgets`: Also known as containers, this directory facilitates the integration of components with entities and other business logic.
- `pages`: Stores individual pages of the application.

This architectural structure ensures a clean separation of concerns, promotes reusability, and facilitates the maintenance and scalability of the application.
