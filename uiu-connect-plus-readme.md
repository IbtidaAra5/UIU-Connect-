🎓 UIU Connect+
A professional social networking platform for the United International University (UIU) community.
Features • Installation • Usage • Documentation • Contributing
📋 Table of Contents
About
Features
Tech Stack
Project Structure
Installation
Configuration
Database Setup
Usage
API Documentation
Admin Panel
Screenshots
Security
Contributing
License
Contact
🎯 About
UIU Connect+ is a comprehensive social networking platform designed for the UIU community. It provides a secure, feature-rich environment where students, faculty, alumni, and staff can connect, collaborate, and share knowledge.
Why UIU Connect+?
University-Focused: Tailored specifically for academic communities
Role-Based Access: Students, Faculty, Alumni, Staff, and Club Forums
Content Moderation: Admin approval system ensures quality content
Professional Design: Modern, responsive UI with glass-morphism effects
Secure: Built with security best practices and input validation
✨ Features
👥 User Features
Authentication & Profiles
Secure registration with email verification
Login system with session management
User profiles with customizable bio, skills, and contact info
Profile & cover photos with uploads
Role-based registration: Student, Faculty, Alumni, Staff, Club Forum
Social Networking
News feed with real-time posts
Create posts with text, images, videos
Like, comment, share posts
Follow system and activity feed
Communication
Direct messaging with real-time chat
Message notifications and group chat
File sharing and online status indicators
Academic Features
Course groups organized by department/batch
Document sharing (PDF, DOC, PPT) with admin approval
Academic notices and event calendar
Job board for internships and career opportunities
Community Features
Marketplace for buying/selling items
Event management with RSVP
Groups & forums for clubs/interests
Search and notifications system
🔧 Admin Features
Dashboard & Analytics
User, post, and engagement metrics
Real-time platform monitoring
Content metrics and analytics by role/department/batch
Content Moderation
User approvals, post moderation
Event & job listing approvals
Bulk approval actions
User Management
View all users with filters/search
Ban/unban users, role management
Batch management for students
Content Management
Manage posts, events, jobs, groups
Document management with version control
Notices & Announcements
Create university-wide notices
Schedule and target specific roles
Use templates for common announcements
🛠️ Tech Stack
Backend: PHP 8.0+, MySQL 5.7+, PDO, Sessions
Frontend: HTML5, CSS3 (Glassmorphism), JavaScript, AJAX
Design: Custom CSS Framework, Responsive Design, CSS Animations, Google Fonts (Poppins)
Development Tools: XAMPP, Git, VS Code
📁 Project Structure
Copy code

UIU-Connect-Plus/
├── index.php          # Login page
├── landing.php        # Landing page
├── register.php       # Registration page
├── admin/             # Admin panel
├── dashboard/         # User dashboard
├── api/               # REST API endpoints
├── includes/          # PHP includes & config
├── assets/            # CSS, JS, uploads
├── database/          # SQL schema & sample data
└── guidelines/        # Project guidelines
🚀 Installation
Prerequisites: XAMPP, PHP 8+, MySQL 5.7+, Git
Clone the repository:
Bash
Copy code
git clone https://github.com/yourusername/UIU-Connect-Plus.git
cd UIU-Connect-Plus
Start Apache & MySQL in XAMPP
Create database uiu_connect_plus
Import database/schema.sql
Configure includes/config.php
Access platform: http://localhost/UIU-Connect-Plus/landing.php