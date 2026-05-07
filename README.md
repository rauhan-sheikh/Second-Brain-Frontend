# SecondBrain Frontend

SecondBrain is a personal knowledge management application that allows users to collect, organize, and share various types of content such as articles, tweets, videos, books, and other resources. Think of it as your digital "second brain" where you can store and categorize information for easy retrieval and sharing.

This is the frontend application for SecondBrain, built with React, TypeScript, and Vite.

## Features

- **Content Management**: Store and organize different types of content (articles, tweets, videos, books, other)
- **Responsive Masonry Layout**: Beautiful grid layout that adapts to different screen sizes
- **Content Filtering**: Filter content by type (article, tweet, video, book, other)
- **Brain Sharing**: Generate shareable links to publicly share your entire content collection
- **User Authentication**: Secure signup/signin with JWT tokens
- **Real-time Updates**: Content refreshes automatically every 10 seconds
- **Mobile Responsive**: Works seamlessly on desktop and mobile devices

## Tech Stack

### Frontend

- **React 19** with **TypeScript**
- **Vite** for fast development and building
- **Tailwind CSS** for styling
- **React Router** for navigation
- **Axios** for API calls
- **React Hot Toast** for notifications
- **Macy.js** for masonry layout
- **React Icons** for icon components

## Getting Started

1. Install dependencies:

   ```bash
   npm install
   ```

2. Set up environment variables:
   Create a `.env` file with:

   ```
   VITE_BACKEND_URL=http://localhost:3000
   VITE_FRONTEND_URL=http://localhost:5173
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run lint` - Run ESLint
- `npm run preview` - Preview production build

## Usage

1. **Sign Up**: Create a new account
2. **Add Content**: Click "Add Content" to create new entries
3. **Organize**: Use tags and content types to organize your knowledge
4. **Filter**: Use the sidebar to filter content by type
5. **Share**: Generate a shareable link to share your brain publicly

## Content Types

- **Article**: Blog posts, news articles, web pages
- **Tweet**: Twitter/X posts
- **Video**: YouTube videos and other video content
- **Book**: Books with links to Open Library or other sources
- **Other**: Any other type of content

## Future Enhancements

- Search functionality
- Content import from various sources
- Collaboration features
- Advanced tagging and categorization
- Export functionality
