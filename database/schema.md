# RiyadNova AI Database Schema

## Overview

The RiyadNova AI database stores user information, business projects, AI interactions, reports, subscriptions, and platform activities.

The database is designed to be scalable, secure, and capable of supporting millions of users.

---

# 1. Users Table

Stores user account information.

Fields:

- user_id
- full_name
- email
- password_hash
- account_type
- profile_image
- country
- created_at
- updated_at

Account Types:

- Entrepreneur
- Student
- Business Owner
- Investor

---

# 2. Projects Table

Stores business projects created by users.

Fields:

- project_id
- user_id
- project_name
- industry
- description
- target_market
- project_status
- created_at
- updated_at

Project Status:

- Idea
- Analysis
- Planning
- Development
- Launch
- Growth

---

# 3. Ideas Table

Stores business ideas submitted by users.

Fields:

- idea_id
- project_id
- idea_title
- idea_description
- industry
- target_customer
- location
- created_at

---

# 4. AI Analysis Table

Stores AI-generated analysis results.

Fields:

- analysis_id
- project_id
- opportunity_score
- market_score
- risk_score
- strengths
- weaknesses
- opportunities
- recommendations
- created_at

---

# 5. Market Research Table

Stores market research reports.

Fields:

- research_id
- project_id
- market_size
- competitors
- customer_segments
- trends
- opportunities
- created_at

---

# 6. Business Plans Table

Stores generated business plans.

Fields:

- plan_id
- project_id
- executive_summary
- business_model
- marketing_strategy
- operations_plan
- financial_plan
- created_at

---

# 7. AI Conversations Table

Stores conversations between users and AI Co-Founder.

Fields:

- conversation_id
- user_id
- project_id
- user_message
- ai_response
- created_at

---

# 8. Tasks Table

Stores project tasks and progress.

Fields:

- task_id
- project_id
- task_name
- description
- priority
- status
- due_date
- created_at

Task Status:

- Pending
- In Progress
- Completed

---

# 9. Subscriptions Table

Stores user subscription plans.

Fields:

- subscription_id
- user_id
- plan_name
- start_date
- end_date
- payment_status

Plans:

- Free
- Pro
- Business

---

# 10. Notifications Table

Stores user notifications.

Fields:

- notification_id
- user_id
- title
- message
- read_status
- created_at

---

# Database Relationships

User

↓

Creates Projects

↓

Projects contain Ideas

↓

Ideas generate AI Analysis

↓

Projects generate Business Plans

↓

Projects have Tasks

↓

Users communicate with AI Co-Founder

---

# Future Database Expansion

Future tables:

- Investors
- Funding Requests
- AI Agents
- API Keys
- Teams
- Analytics
- Integrations
