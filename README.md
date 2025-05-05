# Chatbot Interface – React Project

A responsive, React-based chatbot website with dynamic navigation, live search filtering, and a real-time chat UI with timer.

---

## 🚀 Features

- 🔍 Live search with text highlighting
- 🤖 Floating chatbot with mock responses
- 🧭 Side navigation with dynamic page content
- ⏱ Elapsed timer inside chatbot (auto-reset on close/reset)
- 📱 Fully responsive (mobile: fullscreen chatbot)
- 🧼 Custom hook (`useTimer`) and global state via Context API

---

## 🛠 Tech Stack

- React (with Vite or Create React App)
- Context API for global state
- Custom React hooks
- CSS (modular or global stylesheet)

---

## 📦 Getting Started

### 1. Clone the Repository

```bash
git clone https://github.com/your-username/chatbot-interface.git
cd chatbot-interface
```

### 2. Install Dependencies
```bash
npm install
```

### 3.Run the Project
```bash
npm start
```
Then open http://localhost:3000 in your browser.

---

## 📁 Folder Structure
src/
├── components/
│   ├── Chatbot.jsx
│   ├── Content.jsx
│   └── Navbar.jsx
├── context/
│   └── AppContext.js
├── hooks/
│   └── useTimer.js
├── styles/
│   └── global.css
├── App.jsx
└── main.jsx

---

## 📌 Design Decisions
Global State: Used Context API to manage chatbot visibility across the app.
Timer: Custom useTimer hook keeps chatbot time logic isolated and reusable.
Search Filtering: Uses regex to highlight and filter matching paragraph content.
Responsiveness: CSS media queries adapt chatbot between fixed (desktop) and fullscreen (mobile) views.
Message Handling: Messages can be sent via both Enter key and Send button.

---

## ✅ Future Enhancements
Add persistent message history (e.g., with localStorage)
Integrate OpenAI or other chatbot APIs
Improve animations and transitions
Add typing indicators and message timestamps

## 🚀 Deployment
