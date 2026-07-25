# RiyadNova AI Database Schema

## Overview

This document defines the database structure of RiyadNova AI.

The database stores and manages user information, business projects, AI interactions, subscriptions, analytics data, and platform operations.

---

# Database Goals

The main objectives are:

- Store data securely.
- Organize platform information.
- Support AI features.
- Enable scalability.
- Maintain high performance.

---

# Database Architecture
Application
↓
Backend Services
↓
Database Layer
↓
Data Storage

---

# Main Database Entities

The database contains the following main tables:
Database
├── Users
├── Projects
├── AI Conversations
├── AI Reports
├── Subscriptions
├── Payments
├── Analytics
└── Notifications

---

# 1. Users Table

## Purpose

Stores user account information.

Fields:user_id name email password_hash profile_image account_type created_at updated_at

---

# 2. Projects Table

## Purpose

Stores user business ideas and projects.

Fields:project_id user_id project_name description industry status created_at updated_at
Relationship:

One user can have multiple projects.

---

# 3. AI Conversations Table

## Purpose

Stores communication between users and AI agents.

Fields:conversation_id user_id agent_type message response created_at
---

# 4. AI Reports Table

## Purpose

Stores generated business reports.

Fields:report_id project_id report_type content created_at
Examples:

- Market research reports.
- Business plans.
- Strategy reports.

---

# 5. Subscription Table

## Purpose

Manages user plans.

Fields:subscription_id user_id plan_name status start_date end_date
Plans:

- Free.
- Professional.
- Enterprise.

---

# 6. Payments Table

## Purpose

Stores payment records.


---

# 7. Analytics Table

## Purpose

Stores platform usage information.

Fields:analytics_id user_id event_name event_data created_at
---

# 8. Notifications Table

## Purpose

Stores user notifications.

Fields:
Fields:payment_id user_id amount currency payment_method payment_status created_at

---

# Database Relationships

Example:User
↓
Projects
↓
AI Reports
↓
AI Conversations
---

# Security Requirements

Database security includes:

- Data encryption.
- Access permissions.
- Regular backups.
- Secure authentication.
- Privacy protection.

---

# Performance Optimization

The database should support:

- Indexing.
- Query optimization.
- Data caching.
- Scalable storage.

---

# Future Database Expansion

Future additions:

- Advanced AI memory system.
- Enterprise databases.
- Data warehouse.
- Predictive analytics storage.

---

# Database Goal

Build a secure, scalable, and efficient data foundation that supports RiyadNova AI growth as a global AI business platform.
