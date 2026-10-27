# 🟧 HN Clean - Modern Hacker News Redesign

A sleek, fast, and minimalist redesign of Hacker News built with **Next.js (App Router)**, **Tailwind CSS**, and **TypeScript**. Powered directly by the official public **Hacker News Firebase API**.

---

## ✨ Key Features

* **Modern Dark UI:** High-contrast, developer-friendly dark interface powered by Tailwind's zinc color palette.
* **Live Hacker News Data:** Connects directly to `https://hacker-news.firebaseio.com/v0/` with zero third-party dependencies or API keys required.
* **Category Filtering:** Quick navigation across Top, New, Ask HN, Show HN, and Jobs feeds.
* **Human-Readable Timestamps:** Custom relative time calculation (e.g., `2h ago`, `15m ago`).
* **Modular Architecture:** Clean separation of concerns with isolated API utilities, custom helper functions, and reusable UI components.

---

## 🛠️ Tech Stack

* **Framework:** [Next.js](https://nextjs.org/) (App Router)
* **Language:** [TypeScript](https://www.typescriptlang.org/)
* **Styling:** [Tailwind CSS](https://tailwindcss.com/)
* **Data Source:** [Hacker News Official Firebase API](https://github.com/HackerNews/API)

---

## 📁 Project Structure

```text
├── app/
│   ├── page.tsx          # Main feed view & category state
│   ├── layout.tsx        # Root layout & global metadata
│   └── globals.css       # Tailwind base directives
├── components/
│   └── StoryCard.tsx     # Modular post list item component
└── lib/
    ├── hnApi.ts          # HN API fetch utility helpers
    └── utils.ts          # Relative timestamp & helper functions
```

---

## 🚀 Getting Started

### 1. Prerequisites

Ensure you have **Node.js** (v18.0.0 or higher) installed on your system.

### 2. Installation & Setup

1. Clone or download this repository.
2. Install dependencies:
   ```bash
   npm install
   ```

### 3. Running the Development Server

Start the local Next.js development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to view the live application.

---

## 📡 API Overview

The project interacts directly with the live public Hacker News Firebase endpoints:

* **Top Stories:** `https://hacker-news.firebaseio.com/v0/topstories.json`
* **Item Details:** `https://hacker-news.firebaseio.com/v0/item/{id}.json`

No environment variables or authorization tokens are needed.