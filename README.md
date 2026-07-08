# SigmaGPT

A full-stack ChatGPT replica built from scratch using the MERN stack and the OpenAI API. SigmaGPT supports multiple persistent chat threads, markdown rendering with syntax highlighting, and a clean chat interface.

## Features

- 💬 **Multi-thread chat** — create, switch between, and delete independent conversation threads
- 🧠 **OpenAI GPT-4o-mini** — responses powered by the OpenAI Chat Completions API
- 💾 **Persistent history** — all threads and messages are stored in MongoDB
- 📝 **Markdown rendering** — assistant replies render markdown and syntax-highlighted code blocks
- ⚡ **Fast frontend** — built with React 19 and Vite

## Tech Stack

| Layer    | Technology                              |
|----------|-----------------------------------------|
| Frontend | React 19, Vite, react-markdown, rehype-highlight |
| Backend  | Node.js, Express 5                      |
| Database | MongoDB via Mongoose                    |
| AI       | OpenAI API (gpt-4o-mini)                |

## Project Structure

```
SigmaGPT/
├── Backend/
│   ├── models/
│   │   └── Thread.js        # Mongoose schema for threads & messages
│   ├── routes/
│   │   └── chat.js          # REST API routes
│   ├── utils/
│   │   └── openai.js        # OpenAI API helper
│   └── server.js            # Express server entry point
└── Frontend/
    └── src/
        ├── App.jsx           # Root component & global state
        ├── Sidebar.jsx       # Thread list & new-chat button
        ├── ChatWindow.jsx    # Main chat area
        ├── Chat.jsx          # Individual message display
        └── MyContext.jsx     # React context provider
```

## Getting Started

### Prerequisites

- Node.js ≥ 18
- A running MongoDB instance (local or [MongoDB Atlas](https://www.mongodb.com/atlas))
- An [OpenAI API key](https://platform.openai.com/api-keys)

### 1. Clone the repository

```bash
git clone https://github.com/harshgavandit/SigmaGPT.git
cd SigmaGPT
```

### 2. Configure the Backend

Create a `.env` file inside the `Backend/` directory:

```env
OPENAI_API_KEY=your_openai_api_key_here
MONGODB_URI=your_mongodb_connection_string_here
```

Install dependencies and start the server:

```bash
cd Backend
npm install
node server.js
```

The backend runs on **http://localhost:8080**.

### 3. Start the Frontend

```bash
cd Frontend
npm install
npm run dev
```

The frontend runs on **http://localhost:5173** by default.

## API Reference

| Method | Endpoint                  | Description                          |
|--------|---------------------------|--------------------------------------|
| GET    | `/api/thread`             | Fetch all threads (sorted by latest) |
| GET    | `/api/thread/:threadId`   | Fetch messages for a thread          |
| POST   | `/api/chat`               | Send a message and get a reply       |
| DELETE | `/api/thread/:threadId`   | Delete a thread                      |

### POST `/api/chat`

**Request body:**
```json
{
  "threadId": "uuid-string",
  "message": "Hello!"
}
```

**Response:**
```json
{
  "reply": "Hi there! How can I help you today?"
}
```

