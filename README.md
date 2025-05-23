# TenantSync

TenantSync is a web application designed to streamline the rental process for tenants and property owners. It provides property listings, reviews, Q&A, wishlist management, and secure rental transactions.

## Features

- User registration and login for Tenants, Owners, and Admins
- Edit or delete user profiles (Owner & Tenant)
- Homepage with property cards, photos, and brief info
- Search and filter properties by location and room count
- View full property details with images and info
- Tenant dashboard with wishlist management (add/remove properties)
- Rent properties for specific dates and request Owner approval
- View rental history and approval status in Tenant dashboard
- Leave real-time reviews and ratings on property pages
- FAQ section for Tenants and Owners; like/dislike FAQs
- Owner dashboard for managing property ads and answering FAQs
- Owners can approve or reject rental requests
- Owners can view and manage their advertisements
- Admin dashboard to manage and delete user accounts upon reports
- Tenants/Owners can file complaints or reports to Admin for specific properties

## Tech Stack

- **Frontend:** React, Tailwind CSS
- **Backend:** Node.js, Express, MongoDB
- **Authentication:** Session-based

## Getting Started

### Prerequisites

- Node.js (v14+)
- npm
- MongoDB

### Installation

1. **Clone the repository:**

   ```bash
   git clone https://github.com/Mubashirul-Islam/TenantSync.git
   cd tenantsync
   ```

2. **Install backend dependencies:**

   ```bash
   cd backend
   npm install
   ```

3. **Install frontend dependencies:**

   ```bash
   cd ../frontend
   npm install
   ```

4. **Configure environment variables:**

   - Configure `.env` in the backend folder and set your MongoDB URI and other secrets.

5. **Start the backend server:**

   ```bash
   npm start
   ```

6. **Start the frontend development server:**

   ```bash
   cd ../frontend
   npm start
   ```

7. **Visit the app:**
   - Open [http://localhost:3000](http://localhost:3000) in your browser.

## Usage

- Register and log in as a Tenant, Owner, or Admin
- Edit or delete your user profile
- Browse, search, and filter property listings
- View detailed property info with images
- Add or remove properties from your wishlist (Tenant)
- Rent properties for specific dates and request Owner approval
- Track rental history and approval status (Tenant)
- Leave reviews and ratings on properties
- Use the FAQ section and like/dislike answers
- Owners can manage property ads, answer FAQs, and handle rental requests
- Admins can manage user accounts and handle reports
- Submit complaints or reports for specific properties

## License

This project is licensed under the [Apache 2.0 License](./LICENSE).

---
