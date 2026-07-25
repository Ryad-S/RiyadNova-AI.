# RiyadNova AI API Documentation

## Overview

The RiyadNova AI API provides communication between the frontend application, backend services, AI agents, and database systems.

The API allows users to manage accounts, create projects, analyze ideas, generate business plans, and interact with AI Co-Founder.

---

# Authentication API

## User Registration

Endpoint:

POST /api/auth/register

Purpose:

Create a new user account.

Request:

- Full name
- Email
- Password
- Account type

Response:

- User ID
- Account information
- Authentication token

---

## User Login

Endpoint:

POST /api/auth/login

Purpose:

Authenticate users.

Request:

- Email
- Password

Response:

- Access token
- User profile

---

# User API

## Get User Profile

Endpoint:

GET /api/users/profile

Purpose:

Retrieve user information.

Response:

- Name
- Email
- Account type
- Projects

---

# Project API

## Create Project

Endpoint:

POST /api/projects

Purpose:

Create a new business project.

Request:

- Project name
- Industry
- Description
- Target market

Response:

- Project ID
- Project details

---

## Get Projects

Endpoint:

GET /api/projects

Purpose:

Retrieve all user projects.

---

# AI Idea Analyzer API

## Analyze Business Idea

Endpoint:

POST /api/ai/analyze

Purpose:

Analyze a business idea using AI.

Request:

- Idea description
- Industry
- Target customers
- Location

Response:

- Opportunity score
- Market potential
- Risks
- Recommendations

---

# Market Research API

## Generate Market Research

Endpoint:

POST /api/ai/market-research

Purpose:

Generate market analysis.

Response:

- Market size
- Competitors
- Customer segments
- Trends

---

# Business Plan API

## Generate Business Plan

Endpoint:

POST /api/ai/business-plan

Purpose:

Create a complete business plan.

Response:

- Executive summary
- Business model
- Marketing strategy
- Financial plan

---

# AI Co-Founder API

## Chat With AI

Endpoint:

POST /api/ai/chat

Purpose:

Allow users to communicate with their AI Co-Founder.

Request:

- User message
- Project ID

Response:

- AI response
- Recommendations
- Next actions

---

# Subscription API

## Get Subscription

Endpoint:

GET /api/subscription

Purpose:

Retrieve user subscription information.

---

## Upgrade Plan

Endpoint:

POST /api/subscription/upgrade

Purpose:

Upgrade user plan.

Plans:

- Free
- Pro
- Business

---

# Notification API

## Get Notifications

Endpoint:

GET /api/notifications

Purpose:

Retrieve user notifications.

---

# Future API Expansion

Future endpoints:

- Investor Matching API
- AI Employee API
- Website Generator API
- Automation API
- External Business Tools Integration

---

# API Security

Security requirements:

- Authentication tokens
- Data encryption
- Rate limiting
- Permission management
- Secure API communication
