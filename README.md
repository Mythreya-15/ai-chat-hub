# AI Chat Hub - Universal Multi-Provider Assistant 
A modern, responsive AI chat bot application supporting multiple AI providers including Google Gemini, Groq, OpenRouter, Hugging Face, and OpenAI and enable to store the chat history. Built with React, TypeScript, and Vite including business-insights analytics and performance dashboard, typewriter effect, and animated icons for the best user experience.

> 🌟 **Open Source Project** - This is an open-source project. Feel free to use, enhance, and extend this project to the next level! Contributions, improvements, forks, and stars are always welcome. Together, we can make this portfolio template even better!

## Table of Contents

- [Overview](#overview)
- [Features](#features)
- [Technologies Used](#technologies-used)
- [Project Structure](#project-structure)
- [Installation](#installation)
- [Configuration](#configuration)
- [Usage](#usage)
- [Project Walkthrough](#project-walkthrough)
- [Component Details](#component-details)
- [API Integration](#api-integration)
- [Reusing Components](#reusing-components)
- [Deployment](#deployment)
- [Conclusion](#conclusion)

---

## Overview

AI Chat Hub is a comprehensive, production-ready chat application that integrates with multiple AI providers, offering users the flexibility to choose their preferred AI model or let the system automatically select the best available option. The application features a modern UI with dark theme, responsive design, chat history management, and real-time AI interactions.

---

## Features

### Core Functionalities

- **Multi-Provider AI Support**: Seamlessly switch between Google Gemini, Groq, OpenRouter, Hugging Face, and OpenAI
- **Auto Fallback System**: Automatic provider switching when one fails
- **Chat History Management**: Save and manage multiple conversation threads with local storage persistence
- **Real-time Typing Indicator**: Visual feedback when AI is processing
- **Emoji Picker**: Add emojis to messages with an intuitive picker interface
- **Business Insights Dashboard**: Real-time analytics and performance metrics for admin monitoring
- **Anonymous Session Tracking**: Track usage patterns, API calls, and user engagement without authentication
- **Responsive Design**: Optimized for desktop, tablet, and mobile devices
- **Dark Theme**: Modern dark UI with gradient accents
- **Typewriter Effect**: Elegant text animation for enhanced user experience
- **Collapsible Sidebar**: Efficient space management on all screen sizes
- **Tooltip System**: Informative tooltips for better UX

---

## Technologies Used

### Frontend Framework & Libraries

- **React 18.3.1**: Modern UI library with hooks
- **TypeScript 5.6.3**: Type-safe JavaScript
- **Vite 7.1.12**: Fast build tool and dev server
- **Lucide React**: Modern icon library

### Backend & Database

- **Prisma ORM**: Type-safe database access
- **PostgreSQL (Neon)**: Serverless PostgreSQL database
- **Vercel Serverless Functions**: API endpoints for analytics

### UI Components & Assets

- **Emoji Mart**: Professional emoji picker component
- **Boxicons**: Modern icon library
- **Font Awesome**: Additional icon set

### Developer Tools

- **ESLint**: Code quality and linting
- **TypeScript ESLint**: TypeScript-specific linting rules

---

## Project Structure

```bash
ai-chat-bot/
├── api/                        # Vercel serverless functions
│   ├── events.ts              # POST /api/events - Track analytics events
│   ├── usage.ts               # GET /api/usage - Usage statistics
│   ├── insights.ts            # GET /api/insights - Provider analytics
│   ├── providers.ts           # GET /api/providers - Provider details
│   └── dashboard.ts           # GET /api/dashboard - All analytics data
├── prisma/
│   └── schema.prisma          # Database schema (PostgreSQL)
├── public/
│   ├── ai.svg                 # Background SVG
│   ├── chatbot.svg           # App icon
│   └── favicon.ico           # Browser favicon
├── src/
│   ├── Components/
│   │   ├── ChatBotApp.tsx    # Main chat interface
│   │   ├── ChatBotApp.css    # Chat styles
│   │   ├── ChatBotStart.tsx  # Welcome screen
│   │   ├── ChatBotStart.css # Welcome styles
│   │   ├── BusinessInsights.tsx  # Analytics dashboard
│   │   ├── BusinessInsights.css # Dashboard styles
│   │   ├── Tooltip.tsx       # Tooltip component
│   │   ├── Tooltip.css       # Tooltip styles
│   │   ├── TypingIndicator.tsx
│   │   └── TypingIndicator.css
│   ├── hooks/
│   │   └── useTypewriter.ts  # Typewriter animation hook
│   ├── services/
│   │   ├── aiService.ts       # AI API integration
│   │   └── aiProviders.ts    # Provider configurations
│   ├── App.tsx                # Root component
│   ├── main.tsx              # Entry point
│   ├── index.css             # Global styles
│   └── vite-env.d.ts         # TypeScript environment types
├── .env                       # Environment variables
├── index.html                # HTML template
├── package.json              # Dependencies & scripts
├── tsconfig.json             # TypeScript config
├── vite.config.ts            # Vite configuration
└── README.md                 # This file
```

---

## Installation

### Prerequisites

- Node.js (v18 or higher)
- npm or yarn package manager
- Git (for cloning)

### Setup Steps

1. **Clone the repository**

   ```bash
   git clone https://github.com/yourusername/ai-chat-bot.git
   cd ai-chat-bot
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Configure environment variables** (See Configuration section below)

4. **Start the development server**

   ```bash
   npm run dev
   ```

5. **Open your browser**
   Navigate to `http://localhost:5173` (or the port shown in terminal)

---

## Configuration

### Environment Variables Setup

Create a `.env` file in the root directory with your AI provider API keys and database connection:

```env
# Google Gemini AI API (1.5M free tokens/month)
VITE_GEMINI_API_KEY=your_gemini_api_key_here

# Groq API (Fast Llama 3 - Always-free daily quota)
VITE_GROQ_API_KEY=your_groq_api_key_here

# OpenRouter API (Multi-model aggregator)
VITE_OPENROUTER_API_KEY=your_openrouter_api_key_here

# Hugging Face Inference API
VITE_HUGGINGFACE_API_KEY=your_huggingface_api_key_here

# OpenAI API
VITE_OPENAI_API_KEY=your_openai_api_key_here

# PostgreSQL Database Connection (for Analytics)
DATABASE_URL=postgresql://username:password@hostname:port/database?sslmode=require
```


const { displayText, isComplete } = useTypewriter({
  text: "Your text here",
  speed: 50,
  delay: 500,
});
```

**Features**:

- Configurable typing speed
- Optional delay before starting
- Returns completion status

---

## API Integration

### Analytics API Endpoints

The project includes serverless API endpoints for tracking and analytics:

**Location**: `api/` directory (Vercel serverless functions)

#### Available Endpoints

1. **POST `/api/events`**: Track analytics events
   - Records: API calls, success/failure, duration, provider
   - Creates/updates session records
   - Used by frontend to log all user interactions

2. **GET `/api/usage`**: Fetch usage statistics
   - Returns: Total events, sessions, recent activity
   - Aggregates session and event data

3. **GET `/api/insights`**: Fetch provider insights
   - Returns: Provider stats, success rates, daily trends
   - Calculates provider performance metrics

4. **GET `/api/providers`**: Fetch detailed provider data
   - Returns: Individual provider analytics
   - Includes: Total calls, success/failure counts, avg duration

5. **GET `/api/dashboard`**: Fetch all dashboard data
   - Returns: Combined data from all analytics endpoints
   - Single request for complete dashboard view

#### Database Schema

The analytics system uses PostgreSQL with the following schema:

```prisma
model Event {
  id        String    @id @default(uuid())
  sessionId String
  eventType String
  provider  String?
  success   Boolean   @default(true)
  duration  Int?      // Duration in milliseconds
  metadata  String?   // JSON string for additional data
  timestamp DateTime  @default(now())
}

model Session {
  sessionId String   @id @unique
  userAgent String?
  platform  String?
  startedAt DateTime @default(now())
  lastSeen  DateTime @updatedAt
}
```

### AI Service Architecture

**Location**: `src/services/aiService.ts`

**Purpose**: Centralized AI API integration with fallback mechanism

### Provider Configuration

**Location**: `src/services/aiProviders.ts`

**Purpose**: Defines all AI provider configurations

**Supported Providers**:

1. **Google Gemini** (`gemini-2.5-flash`)
   - Endpoint: `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent`
   - Model: `gemini-2.5-flash`
   - **Note**: Updated from Gemini 2.0 (discontinued March 31, 2026) to Gemini 2.5

2. **Groq** (`llama-3.1-8b-instant`)
   - Endpoint: `https://api.groq.com/openai/v1/chat/completions`
   - Model: `llama-3.1-8b-instant`

3. **OpenRouter** (`meta-llama/llama-3.2-3b-instruct:free`)
   - Endpoint: `https://openrouter.ai/api/v1/chat/completions`
   - Model: `meta-llama/llama-3.2-3b-instruct:free`

4. **Hugging Face** (16 models with fallback - New Inference Providers API)
   - Endpoint: `https://router.huggingface.co/v1/chat/completions` (OpenAI-compatible)
   - Primary Models: `meta-llama/Llama-3.1-8B-Instruct`, `mistralai/Mistral-7B-Instruct-v0.3`, `HuggingFaceH4/zephyr-7b-beta`, `tiiuae/falcon-7b-instruct`, `google/gemma-2b-it`, `NousResearch/Hermes-2-Pro-Mistral-7B`
   - Fallback Models: `mistralai/Mistral-7B-Instruct-v0.2`, `google/gemma-2b`, `google/gemma-7b`, `mistralai/Mixtral-8x7B-Instruct-v0.1`, `tiiuae/falcon-7b`, `microsoft/phi-1_5`, `bigscience/bloomz-560m`, `HuggingFaceH4/zephyr-7b-alpha`, `tiiuae/falcon-40b-instruct`, `facebook/bart-large-cnn`

5. **OpenAI** (`gpt-4o-mini`)
   - Endpoint: `https://api.openai.com/v1/responses`
   - Model: `gpt-4o-mini`

### Fallback Mechanism

The AI service automatically tries providers in this order:

1. Gemini
2. Groq
3. OpenRouter
4. Hugging Face
5. OpenAI

If one provider fails, it automatically tries the next available provider.

---

## Reusing Components

This project is designed with reusable components that can be easily integrated into other projects.

### Using the Tooltip Component

```tsx
import Tooltip from "./Components/Tooltip";

function MyComponent() {
  return (
    <Tooltip text="This is a tooltip" position="top">
      <button>Hover me</button>
    </Tooltip>
  );
}
```

### Using the Typewriter Hook

```tsx
import { useTypewriter } from "./hooks/useTypewriter";

function MyComponent() {
  const { displayText, isComplete } = useTypewriter({
    text: "Loading...",
    speed: 50,
    delay: 0,
  });

  return <div>{displayText}</div>;
}
```

### Using the AI Service

```tsx
import { aiService } from "./services/aiService";
import { AIProvider } from "./services/aiProviders";

async function sendMessage(message: string) {
  try {
    const response = await aiService.getChatResponse(message, "gemini");
    console.log(response.content);
  } catch (error) {
    console.error("Error:", error);
  }
}
```

### Integration Example

Here's how to integrate this chat system into your own project:

1. **Copy the Components folder** to your project
2. **Copy the services folder** for AI integration
3. **Copy the hooks folder** for reusable hooks
4. **Update API keys** in your `.env` file
5. **Import and use** components as needed

---

## Deployment

### Build for Production

```bash
npm run build
```

This creates an optimized production build in the `dist/` folder.

### Deploy to Vercel

1. **Install Vercel CLI**

   ```bash
   npm install -g vercel
   ```

2. **Set up Database**
   - Create a Neon PostgreSQL database
   - Copy your connection string
   - Update your `DATABASE_URL` in `.env`

3. **Deploy**

   ```bash
   vercel
   ```

4. **Set Environment Variables in Vercel**
   - Go to your Vercel project settings
   - Navigate to Environment Variables
   - Add all your API keys from `.env` file
   - **Important**: Add `DATABASE_URL` from your Neon database

5. **Run Database Migrations**

   After deployment, trigger a build that runs Prisma:

   ```bash
   npx prisma generate
   npx prisma db push
   ```

   Or add to your `package.json`:

   ```json
   "scripts": {
     "vercel-build": "prisma generate && prisma db push && npm run build"
   }
   ```

### Deploy to Netlify

1. **Connect GitHub repository** to Netlify
2. **Build command**: `npm run build`
3. **Publish directory**: `dist`
4. **Add environment variables** in site settings

### Deploy to GitHub Pages

1. **Install gh-pages**

   ```bash
   npm install --save-dev gh-pages
   ```

2. **Add deploy script** to `package.json`

   ```json
   "deploy": "vite build && gh-pages -d dist"
   ```

3. **Run deploy**

   ```bash
   npm run deploy
   ```

---

## Conclusion

### Learning Outcomes

This project demonstrates:

- React component architecture and state management
- TypeScript type safety and interfaces
- API integration with multiple providers
- Responsive design principles
- Modern UI/UX patterns
- Local storage management
- Custom React hooks
- Error handling and fallback mechanisms
- Serverless API development (Vercel Functions)
- PostgreSQL database integration (Prisma ORM)
- Analytics and performance monitoring
- Anonymous session tracking

### Key Takeaways

- **Modular Architecture**: Well-organized component structure
- **Type Safety**: Leveraging TypeScript for better code quality
- **User Experience**: Smooth animations and responsive design
- **Scalability**: Easy to add new AI providers or features
- **Analytics**: Real-time performance monitoring with anonymous tracking
- **Full-Stack**: Complete solution with frontend, backend, and database
- **Best Practices**: Following React and TypeScript conventions

### Future Enhancements

- [x] Add analytics dashboard (Business Insights)
- [x] Implement anonymous session tracking
- [x] Add PostgreSQL database integration
- [ ] Add authentication system
- [ ] Implement user accounts
- [ ] Add message search functionality
- [ ] Create chat export feature
- [ ] Add voice input/output
- [ ] Implement markdown support
- [ ] Add code syntax highlighting
- [ ] Create mobile app version
- [ ] Add real-time charts and visualizations

---

## Happy Coding! 🎉

Feel free to use this project repository and extend this project further!

If you have any questions or want to share your work, reach out via GitHub or my portfolio at [https://arnob-mahmud.vercel.app/](https://arnob-mahmud.vercel.app/).

**Enjoy building and learning!** 🚀

Thank you! 😊
