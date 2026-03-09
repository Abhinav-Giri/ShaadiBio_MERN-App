ShaadiBio is a full-stack MERN web application that allows users to create beautiful marriage biodata documents using customizable templates.

Users can enter personal details, upload photos, preview templates in real time, and download a PDF biodata.

This project demonstrates full-stack architecture, authentication, dynamic UI rendering, and document generation.

🌐 Live Demo

Frontend

https://shaadibio.vercel.app

Backend API

https://shaadibio-backend.onrender.com
✨ Key Features
🔐 Authentication

User Registration

Secure Login

JWT Authentication

Protected Routes

Logout System

🧾 Biodata Builder

Users can create biodata with structured sections:

Personal Details

Education & Profession

Family Details

Horoscope Details

Profile Photo Upload

🎂 Automatic Age Calculation

Age is automatically calculated from Date of Birth including:

Years + Months

With validation for incorrect dates.

🖼 Profile Photo Upload

Users can upload profile photos and see an instant preview.

🎨 Multiple Biodata Templates

Users can choose between several templates:

Classic

Modern

Elegant

Photo Highlight

Minimal

Royal

Templates update instantly in preview mode.

⚡ Real-Time Preview

The biodata updates dynamically as the user edits form fields.

Form Input → React State → Template Preview
📄 PDF Export

Users can download biodata as a high-quality PDF document.

Technologies used:

html2canvas

jsPDF

💾 Save & Edit Biodata

Users can:

Save biodata to database

Edit previously saved biodata

Load biodata automatically after login

📱 Responsive Design

The application works on:

Desktop

Tablet

Mobile

Using responsive layouts and CSS modules.

🏗 System Architecture
                User Browser
                     │
                     ▼
           React Frontend (Vercel)
                     │
                     ▼
            Node.js API (Render)
                     │
                     ▼
              MongoDB Atlas
🗂 Project Structure
ShaadiBio
│
├── backend
│   ├── controllers
│   ├── middleware
│   ├── models
│   ├── routes
│   ├── server.js
│   └── package.json
│
└── frontend
    ├── src
    │   ├── api
    │   ├── components
    │   │   ├── builder
    │   │   ├── forms
    │   │   ├── templates
    │   │   └── upload
    │   │
    │   ├── pages
    │   ├── styles
    │   └── utils
    │
    ├── public
    ├── package.json
    └── vite.config.js

🖥 Screenshots
Login Page

Biodata Builder

Template Preview

PDF Output

⚙ Installation Guide
1️⃣ Clone Repository
git clone https://github.com/yourusername/shaadibio.git
cd shaadibio
🔧 Backend Setup

Navigate to backend:

cd backend

Install dependencies:

npm install

Create .env file:

PORT=5000
MONGO_URI=your_mongodb_connection
JWT_SECRET=your_secret

Run server:

npm start

Backend runs at:

http://localhost:5000
💻 Frontend Setup

Navigate to frontend:

cd frontend

Install dependencies:

npm install

Create .env file:

VITE_API_URL=http://localhost:5000

Run frontend:

npm run dev

Frontend runs at:

http://localhost:5173
📡 API Endpoints
Authentication
POST /api/auth/register
POST /api/auth/login
Biodata
POST /api/biodata
GET /api/biodata
PUT /api/biodata/:id
DELETE /api/biodata/:id
🚀 Deployment
Frontend

Deployed on Vercel

Root Directory: frontend
Build Command: npm run build
Output Directory: dist
Backend

Deployed on Render

Start Command: node server.js
Database

Hosted on MongoDB Atlas

🧠 Technical Highlights

This project demonstrates:

Full Stack MERN Development

REST API Design

JWT Authentication

Dynamic React State Management

Modular Component Architecture

PDF Generation

Responsive UI Design

Deployment Architecture

🔮 Future Improvements

Possible enhancements:

Drag-and-drop biodata builder

Photo cropping before upload

Premium template system

Admin dashboard

Multi-language biodata support

Cloud image storage (Cloudinary)

👨‍💻 Author

Abhinav Giri
Software Engineer

License
This project is for educational and demonstration purposes.



