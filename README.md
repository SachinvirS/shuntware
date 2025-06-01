# Shuntware Project

## Frontend

1. Navigate to `frontend/`
2. Install dependencies: `npm install`
3. Start development server: `npm run dev`
   - Vite will serve at http://localhost:3000 by default (proxy is set to backend)

## Backend

1. Navigate to `backend/`
2. Install dependencies: `npm install`
3. Copy `.env.example` to `.env` and fill in `JWT_SECRET`
4. Start server: `npm start`
   - Server runs on port 5000

## Usage

1. Start backend
2. Start frontend
3. In browser, go to `http://localhost:3000/login`
4. Log in with:
   - Email: `admin@demo.com`
   - Password: `Admin@123`
5. Navigate to Dashboard

## Deployment

- Backend can be deployed on Railway/Heroku using `npm start`.
- Frontend can be deployed on Vercel (ensure `proxy` is configured in `vite.config.js` or use absolute API URLs).
