# Rofsan Sir - O Level Bengali Coaching Platform

> A modern, full-stack educational web application for O Level Bengali coaching in Dhaka, Bangladesh.

[![Laravel](https://img.shields.io/badge/Laravel-12-FF2D20?logo=laravel)](https://laravel.com)
[![React](https://img.shields.io/badge/React-19-61DAFB?logo=react)](https://react.dev)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.6-3178C6?logo=typescript)](https://www.typescriptlang.org)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-4.0-38B2AC?logo=tailwind-css)](https://tailwindcss.com)

---

## 📚 Table of Contents

- [Overview](#-overview)
- [Features](#-features)
- [Tech Stack](#-tech-stack)
- [Getting Started](#-getting-started)
- [Project Structure](#-project-structure)
- [Documentation](#-documentation)
- [API Reference](#-api-reference)
- [Deployment](#-deployment)
- [Contributing](#-contributing)

---

## 🎯 Overview

**Rofsan Sir** is a comprehensive educational platform designed for Cambridge O Level Bengali (3204) students. The platform connects students with expert instruction, study materials, and administrative tools through a modern web application.

### Key Highlights

- 🎓 **Expert-Led Coaching**: Cambridge-approved examiner with 8+ years of teaching experience
- 📱 **Modern SPA**: Fast, responsive React application with seamless navigation
- 🔐 **Secure Access**: Role-based authentication for students and administrators
- ☁️ **Google Drive Integration**: Centralized course materials and resources
- 📊 **Admin Dashboard**: Complete student and content management system
- 🎨 **Professional Design**: Brand-consistent UI with custom animations

---

## ✨ Features

### Public Website
- 🏠 **Landing Page**: Hero section, statistics, testimonials, and CTAs
- 👨‍🏫 **About Page**: Teacher profile, qualifications, and teaching methodology
- 📚 **Resources**: Book recommendations, study materials, and examiner tips
- 📅 **Class Schedule**: Course timings and batch information
- 📞 **Contact Form**: Admission inquiries and consultation booking

### Student Portal
- 📊 **Dashboard**: Personalized student overview
- 📁 **Google Drive Access**: Browse and access course materials
- 📝 **Script Review**: Submit O Level scripts for examiner feedback
- 📅 **Class Schedule**: View assigned class timings
- 💳 **Payment Plans**: Course fee information
- 🔐 **Secure Login**: Email/password authentication

### Admin Dashboard
- 👥 **Student Management**: CRUD operations for student accounts
- 📝 **Script Review System**: Review and provide feedback on student submissions
- 📧 **Email Collection**: Track and manage student emails
- 📬 **Newsletter Subscribers**: Manage newsletter subscriptions
- 📞 **Contact Submissions**: View and respond to inquiries
- ☁️ **Google Drive Setup**: Configure shared folders for students
- 🚫 **Access Control**: Block/unblock Gmail accounts
- 📊 **Analytics**: Access logs and usage statistics

---

## 🛠️ Tech Stack

### Frontend
- **Framework**: React 19 with TypeScript
- **Routing**: React Router v6 (client-side routing)
- **Styling**: Tailwind CSS v4 with custom theme
- **Build Tool**: Vite 6
- **State Management**: React Context API
- **HTTP Client**: Fetch API with custom hooks
- **Icons**: Lucide React
- **SEO**: React Helmet Async
- **Notifications**: React Hot Toast

### Backend
- **Framework**: Laravel 12
- **PHP Version**: 8.2+
- **Authentication**: Laravel Fortify + Sanctum
- **Database**: SQLite (production: MySQL/PostgreSQL)
- **API**: RESTful JSON API
- **PDF Generation**: DomPDF
- **Google Integration**: Google API PHP Client

### DevOps & Tools
- **Version Control**: Git
- **Package Managers**: Composer, npm
- **Code Quality**: ESLint, Prettier
- **Environment**: Laravel Herd / Valet

---

## 🚀 Getting Started

### Prerequisites

- PHP 8.2 or higher
- Composer 2.x
- Node.js 18+ and npm
- SQLite or MySQL

### Installation

1. **Clone the repository**
```bash
git clone <repository-url>
cd rofsansir
```

2. **Install dependencies**
```bash
# Backend dependencies
composer install

# Frontend dependencies
npm install
```

3. **Environment setup**
```bash
# Copy environment file
cp .env.example .env

# Generate application key
php artisan key:generate
```

4. **Configure environment variables**
```env
APP_NAME="Rofsan Sir"
APP_URL=http://localhost:8000

DB_CONNECTION=sqlite

# Google Drive API (optional)
GOOGLE_CLIENT_ID=your_client_id
GOOGLE_CLIENT_SECRET=your_client_secret
GOOGLE_REDIRECT_URI=http://localhost:8000/api/auth/google/callback

# Firebase (optional)
VITE_FIREBASE_API_KEY=your_api_key
VITE_FIREBASE_AUTH_DOMAIN=your_project.firebaseapp.com
VITE_FIREBASE_PROJECT_ID=your_project_id
```

5. **Database setup**
```bash
# Run migrations
php artisan migrate

# Seed database with test data
php artisan db:seed
```

6. **Build frontend**
```bash
# Development mode (with hot reload)
npm run dev

# Production build
npm run build
```

7. **Start the server**
```bash
php artisan serve
```

Visit `http://localhost:8000` to see the application.

### Default Credentials

**Admin Account**:
- Email: `admin@rofsansir.com`
- Password: `password`

**Test Student**:
- Email: `student@example.com`
- Password: `password`

⚠️ **Change these credentials in production!**

---

## 📁 Project Structure

```
rofsansir/
├── app/
│   ├── Http/
│   │   ├── Controllers/          # API Controllers
│   │   │   ├── AdminController.php
│   │   │   ├── AuthController.php
│   │   │   ├── DriveAccessController.php
│   │   │   └── StudentController.php
│   │   └── Middleware/           # Custom middleware
│   ├── Models/                   # Eloquent Models
│   │   ├── User.php
│   │   ├── AccessLog.php
│   │   ├── BlockedGmail.php
│   │   ├── ContactSubmission.php
│   │   ├── NewsletterSubscriber.php
│   │   ├── PaymentPlan.php
│   │   └── Routine.php
│   └── Services/                 # Business Logic
│       └── GoogleDriveService.php
│
├── resources/
│   ├── js/                       # React Frontend
│   │   ├── components/           # Reusable components
│   │   │   └── SEO/              # SEO components
│   │   ├── contexts/             # React contexts
│   │   │   └── AuthContext.tsx
│   │   ├── features/             # Feature modules
│   │   │   ├── admin/            # Admin dashboard
│   │   │   ├── auth/             # Authentication
│   │   │   ├── public/           # Public pages
│   │   │   └── student/          # Student portal
│   │   ├── layouts/              # Layout components
│   │   │   ├── Navbar.tsx
│   │   │   ├── Footer.tsx
│   │   │   └── AdminLayout.tsx
│   │   ├── utils/                # Utility functions
│   │   ├── app.tsx               # Main app component
│   │   └── index.tsx             # Entry point
│   │
│   ├── css/
│   │   └── new-frontend.css      # Custom styles
│   │
│   └── views/
│       └── app.blade.php         # SPA HTML template
│
├── routes/
│   ├── web.php                   # Web routes (SPA catch-all)
│   └── api.php                   # API endpoints
│
├── database/
│   ├── migrations/               # Database migrations
│   └── seeders/                  # Database seeders
│
├── public/
│   ├── assets/                   # Static assets
│   │   ├── brand-logo.png
│   │   ├── students/             # Student photos
│   │   └── teacher/              # Teacher photos
│   ├── videos/                   # Video files
│   ├── build/                    # Compiled frontend assets
│   ├── robots.txt                # SEO robots file
│   └── sitemap.xml               # SEO sitemap
│
├── docs/                         # Documentation
│   ├── FIREBASE-SETUP.md
│   ├── GOOGLE-OAUTH-SETUP-GUIDE.md
│   ├── GOOGLE-SERVICES-SEO-CHECKLIST.md
│   ├── DEPLOYMENT.md
│   └── TEST-CREDENTIALS.md
│
└── README.md                     # This file
```

---

## 📖 Documentation

Comprehensive documentation is available in the `/docs` folder:

### Setup & Configuration
- [Firebase Setup](docs/FIREBASE-SETUP.md) - Firebase authentication and analytics
- [Google OAuth Setup](docs/GOOGLE-OAUTH-SETUP-GUIDE.md) - Google Drive integration
- [Google Services & SEO](docs/GOOGLE-SERVICES-SEO-CHECKLIST.md) - SEO optimization guide
- [Deployment Guide](docs/DEPLOYMENT.md) - Production deployment instructions

### Development
- [Test Credentials](docs/TEST-CREDENTIALS.md) - Test accounts and API keys
- [Implementation Summary](docs/IMPLEMENTATION-SUMMARY.md) - Feature implementation details
- [Testing Checklist](docs/TESTING-CHECKLIST.md) - QA testing guide
- [Script Review Implementation](docs/SCRIPT-REVIEW-IMPLEMENTATION-PLAN.md) - Personal script review feature
- [Script Review Quick Start](docs/SCRIPT-REVIEW-QUICK-START.md) - Quick implementation guide

### Architecture
- [Admin Drive Integration](docs/ADMIN-DRIVE-INTEGRATION-SUMMARY.md) - Google Drive architecture
- [Project Analysis](docs/PROJECT-ANALYSIS-AND-NEXT-STEPS.md) - Technical analysis

---

## 🔌 API Reference

### Authentication Endpoints

```http
POST   /api/auth/login
POST   /api/auth/logout
GET    /api/auth/user
```

### Student Endpoints

```http
GET    /api/student/dashboard
GET    /api/student/drive-files
GET    /api/student/scripts
POST   /api/student/scripts
GET    /api/student/scripts/{id}
GET    /api/student/scripts/{id}/download
```

### Admin Endpoints

```http
# Students
GET    /api/admin/students
POST   /api/admin/students
PUT    /api/admin/students/{id}
DELETE /api/admin/students/{id}

# Script Review
GET    /api/admin/scripts
GET    /api/admin/scripts/statistics
PUT    /api/admin/scripts/{id}/status
POST   /api/admin/scripts/{id}/feedback
POST   /api/admin/scripts/{id}/comments
DELETE /api/admin/scripts/{id}/comments/{commentId}

# Gmail Access
GET    /api/admin/student-gmails
POST   /api/admin/block-gmail
POST   /api/admin/unblock-gmail

# Google Drive
GET    /api/admin/drive-folders
POST   /api/admin/setup-google-drive
POST   /api/admin/disconnect-google-drive
POST   /api/admin/set-shared-folder
GET    /api/admin/shared-folder

# Newsletter
GET    /api/admin/newsletter-subscribers
GET    /api/admin/export-newsletter-subscribers

# Contact
GET    /api/admin/contact-submissions
PUT    /api/admin/contact-submissions/{id}
DELETE /api/admin/contact-submissions/{id}
GET    /api/admin/export-contact-submissions
```

### Public Endpoints

```http
POST   /api/newsletter/subscribe
POST   /api/contact/submit
```

For detailed API documentation, see the [API Reference](docs/API-REFERENCE.md).

---

## 🚢 Deployment

### Production Build

```bash
# Build frontend assets
npm run build

# Optimize Laravel
php artisan config:cache
php artisan route:cache
php artisan view:cache

# Set permissions
chmod -R 775 storage bootstrap/cache
```

### Environment Configuration

```env
APP_ENV=production
APP_DEBUG=false
APP_URL=https://rofsansir.com

DB_CONNECTION=mysql
DB_HOST=127.0.0.1
DB_PORT=3306
DB_DATABASE=rofsansir
DB_USERNAME=root
DB_PASSWORD=

# Configure Google Drive API
GOOGLE_CLIENT_ID=
GOOGLE_CLIENT_SECRET=
GOOGLE_REDIRECT_URI=https://rofsansir.com/api/auth/google/callback
```

For detailed deployment instructions, see [Deployment Guide](docs/DEPLOYMENT.md).

---

## 🎨 Design System

### Brand Colors

```css
--color-brand-navy: #344871      /* Primary navy */
--color-brand-blue: #006DD6      /* Primary blue */
--color-brand-blue-light: #1877F2
--color-brand-blue-dark: #0054A5
--color-brand-white: #FFFFFF
```

### Typography

- **Headings**: Poppins (font-heading)
- **Body**: Inter (font-body)
- **Bengali**: Kalpurush

### Custom Animations

- `animate-fade-in-up` - Fade in with upward motion
- `animate-float` - Floating effect
- `animate-fade-in` - Simple fade in

---

## 🧪 Testing

```bash
# Run PHP tests
php artisan test

# Run frontend linting
npm run lint

# Type checking
npm run type-check
```

---

## 🤝 Contributing

1. Create a feature branch (`git checkout -b feature/amazing-feature`)
2. Commit your changes (`git commit -m 'Add amazing feature'`)
3. Push to the branch (`git push origin feature/amazing-feature`)
4. Open a Pull Request

---

## 📝 Recent Updates

### Phase 1: Core Features (Completed)
- ✅ React SPA migration from Inertia.js
- ✅ Authentication system (admin & student)
- ✅ Student and admin dashboards
- ✅ Google Drive integration
- ✅ Public marketing pages

### Phase 2: Enhanced Features (Completed)
- ✅ Routine and payment plan management
- ✅ PDF generation for schedules
- ✅ Newsletter subscription system
- ✅ Contact form with admin management
- ✅ Access logging and blocking system

### Phase 3: SEO & Optimization (Completed)
- ✅ SEO meta tags and structured data
- ✅ Sitemap and robots.txt
- ✅ Firebase setup for analytics
- ✅ Password visibility toggle on login pages
- ✅ Documentation organization and cleanup

### Phase 4: Script Review System (Planned)
- 📋 **Personal Script Review**: Students can submit O Level scripts for examiner feedback
- 📋 **Admin Review Interface**: Review submissions and provide detailed feedback
- 📋 **Feedback System**: Text comments, marks, grades, and annotated files
- 📋 **Status Tracking**: Track submission status (pending, in review, completed)
- 📋 **File Management**: Upload/download original and marked scripts
- 📋 **Notifications**: Email alerts when feedback is ready

See [Script Review Implementation Plan](docs/SCRIPT-REVIEW-IMPLEMENTATION-PLAN.md) for details.

---

## 📄 License

This project is proprietary software for Rofsan Sir's O Level Bengali Coaching.

---

## 📞 Contact

**Rofsan Sir - O Level Bengali**
- Website: [rofsansir.com](https://rofsansir.com)
- Email: rofsankhan@gmail.com
- Phone: +880 1948-116595
- Location: Lalmatia, Dhaka, Bangladesh

---

**Last Updated**: March 7, 2026
**Version**: 3.0.0
**Status**: Production Ready
