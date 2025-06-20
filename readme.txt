💬 Feedback Form - Full Stack Application

This is a full-stack feedback form project built for Task 3 . Users can submit their feedback via a responsive form. The data is validated on the frontend, sent to a backend API, and consoled in backend.

---

🔧 Tech Stack

🔹 Frontend
- React (with Vite)
- Tailwind CSS – modern utility-first styling
- Axios – to handle HTTP requests
- Lucide React** – for elegant icons
- React Hot Toast – for success and error notifications

🔹 Backend
- Node.js
- Express.js
- CORS, dotenv – to handle environment & cross-origin

---

📁 Folder Structure

├── Backend/
│ ├── Controller/
│ ├── Router/
│ ├── index.js # Express server with feedback routes
│ ├── .env
│ └── package.json
│
├── Frontend/
│ ├── public/
│ ├── src/
│ │ ├── assets/ # Images and static files
│ │ ├── Components/ # Form, FeedbackList etc.
│ │ ├── Utils/ # Helper functions
│ │ ├── App.jsx # App layout
│ │ ├── main.jsx # Entry point
│ │ └── index.css # Tailwind CSS
│ ├── .env
│ └── vite.config.js
