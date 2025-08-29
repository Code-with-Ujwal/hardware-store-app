# 🛠 Hardware Store App  

![React](https://img.shields.io/badge/Frontend-React-blue)  
![Node.js](https://img.shields.io/badge/Backend-Node.js-green)  
![Express](https://img.shields.io/badge/API-Express-orange)  
![Firebase](https://img.shields.io/badge/Database-Firebase-yellow)  
![License](https://img.shields.io/badge/License-MIT-lightgrey)  
## 🚀 Features

### 🛒 Customer Side
- Product catalog with categories (Tiles, Cement, Paint, Tools, etc.)
- Search and filter options
- Add to cart & checkout
- Multiple payment options (Cash on Delivery, eSewa, Khalti)
- Order history & tracking
- PWA support (installable, works offline for cached pages)

### 🛠 Admin Side
- Add/Edit/Delete products
- Inventory management
- Order management (approve/update/deliver)
- Sales reports & analytics

---

## 🏗 Tech Stack

### Frontend
- ⚛️ React.js (with PWA support)  
- 🎨 Tailwind CSS (for styling)  
- 🔀 React Router (navigation)  
- 🌐 Axios (API calls)  

### Backend
- 🟢 Node.js  
- ⚡ Express.js  
- 🔑 Firebase Admin SDK (for Firestore access)  

### Database
- 🔥 Firebase Firestore (real-time, NoSQL)  

### Other
- 🔐 Firebase Authentication (optional for users/admins)  
- 📲 Firebase Cloud Messaging (push notifications)  
- ☁️ Deployment: Vercel (frontend) + Render/Heroku (backend)  

---

## 📂 Project Structure

hardware-store-app/
│
├── backend/ # Node.js + Express server
│ ├── index.js # Entry point
│ ├── routes/ # API routes
│ ├── controllers/ # Business logic
│ ├── models/ # Firestore helpers
│ └── config/ # Firebase config
│
├── frontend/ # React PWA
│ ├── public/
│ │ └── manifest.json # PWA manifest
│ ├── src/
│ │ ├── components/ # UI components
│ │ ├── pages/ # Pages (Home, Product, Cart, Admin, etc.)
│ │ ├── services/ # API & Firestore utils
│ │ └── App.jsx # Root app
│ └── package.json
│
└── README.md
