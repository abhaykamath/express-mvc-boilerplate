# Express (MongoDB Atlas) MVC Boilerplate

A clean and minimal Express.js + MongoDB (Atlas) boilerplate following the MVC architecture. Includes full CRUD operations, a basic health check route, and MongoDB Atlas integration.

---

## ✨ Features

- 🔌 Express.js server
- 🌱 MongoDB Atlas connection
- 📁 MVC folder structure
- ✅ CRUD API for a sample `User` model
- 🩺 `/api/health` endpoint to monitor server status
- 📦 Easily extensible for larger projects

---

## 🛠️ Technologies Used

- Node.js
- Express.js
- MongoDB (Atlas)
- Mongoose
- dotenv
- CORS

---

## 🚀 Getting Started

### 1. Clone the repo

```bash
git clone https://github.com/abhaykamath/express-mvc-boilerplate.git
cd express-mvc-boilerplate
```

### 2. Install dependencies

```bash
npm install
```

### 3. Set up environment variables

Create a `.env` file in the root and add your MongoDB connection string:

```env
PORT=5000
MONGO_URI=your_mongodb_atlas_connection_string
```

### 4. Start the server

```env
npm start
```
Server will be running on `http://localhost:5000`


## 📁 Project Structure

```bash
.
├── config/
│   └── db.js              # MongoDB connection
├── controllers/
│   └── userController.js  # Controller logic
├── models/
│   └── userModel.js       # Mongoose schema
├── routes/
│   └── userRoutes.js      # API routes
├── app.js                 # Express app
├── server.js              # Entry point
├── .env                   # Env variables (not committed)
├── package.json
└── README.md
```

## 📡 API Endpoints

### Health Check
```http
GET /api/health
```

### Users
```http
GET    /api/users
POST   /api/users
GET    /api/users/:id
PUT    /api/users/:id
DELETE /api/users/:id
```

## 🧑‍💻 Author

Made with ❤️ by Abhay Kamath
