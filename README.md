# Lobocon

Construction Project Management Simplified

## Overview

Lobocon is a comprehensive construction project management platform designed for the Kenyan and African construction market. Built by construction professionals for construction professionals, Lobocon provides real-time visibility into project profitability, schedule performance, and resource allocation.

## Key Features

### Earned Value Management

Track project performance using industry-standard EVM metrics including Cost Performance Index (CPI), Schedule Performance Index (SPI), and variance analysis. Know if your project will make money before it's too late.

### Project Scheduling

Plan and track construction schedules with Gantt charts, task dependencies, and milestone tracking. Monitor progress across multiple phases and identify schedule delays early.

### Financial Management

- Real-time budget tracking with variance analysis
- Cost forecasting and profit margin calculations
- Multi-project financial reporting
- Integration with Kenya's Standard Method of Measurement (KSMM)

### Labor Management

- Digital worker sign-in and attendance tracking
- Ghost worker detection and prevention
- Automated payroll integration
- Multi-site labor allocation

### Bill of Quantities (BOQ)

- Digital BOQ creation and management
- 601+ digitized KSMM clauses
- Multi-user collaboration
- Automated quantity calculations

## Technology Stack

### Frontend

- Next.js 16.1.1
- React
- TypeScript
- Tailwind CSS
- TanStack Query

### Backend

- NestJS
- PostgreSQL
- TypeScript

### Infrastructure

- Frontend: Vercel
- Backend: OVH VPS
- Process Management: PM2
- Reverse Proxy: Nginx
- SSL: Let's Encrypt

### Authentication

- WorkOS (Enterprise-grade RBAC)

## Getting Started

### Prerequisites

- Node.js 18+
- PostgreSQL 14+
- npm or yarn

### Installation

```bash
# Clone the repository
git clone https://github.com/yourusername/lobocon.git

# Install frontend dependencies
cd lobocon/frontend
npm install

# Install backend dependencies
cd ../backend
npm install
```

### Environment Configuration

Create `.env` files in both frontend and backend directories:

**Frontend (.env.local)**

```
NEXT_PUBLIC_API_URL=your_api_url
NEXT_PUBLIC_WORKOS_CLIENT_ID=your_workos_client_id
```

**Backend (.env)**

```
DATABASE_URL=your_database_url
WORKOS_API_KEY=your_workos_api_key
JWT_SECRET=your_jwt_secret
```

### Running Locally

```bash
# Start backend
cd backend
npm run start:dev

# Start frontend (in new terminal)
cd frontend
npm run dev
```

Access the application at `http://localhost:3000`

## Deployment

### Frontend Deployment (Vercel)

```bash
cd frontend
vercel --prod
```

### Backend Deployment

The backend is deployed on OVH VPS using PM2 for process management and Nginx as reverse proxy.

```bash
# Build
npm run build

# Start with PM2
pm2 start dist/main.js --name lobocon-api

# Configure Nginx reverse proxy
# SSL certificates managed via Let's Encrypt
```

## Project Structure

```
lobocon/
├── frontend/
│   ├── app/
│   │   ├── (marketing)/
│   │   │   ├── page.tsx
│   │   │   └── about/
│   │   └── (platform)/
│   ├── components/
│   │   ├── landing/
│   │   └── ui/
│   └── public/
├── backend/
│   ├── src/
│   │   ├── modules/
│   │   ├── common/
│   │   └── main.ts
│   └── prisma/
└── README.md
```

## Architecture

Lobocon follows a multi-tenant architecture with role-based access control. Each organization has isolated data with support for multiple projects, users, and permissions.

### Multi-Tenancy

- Organization-level data isolation
- Project-based permissions
- Role-based access control (RBAC)

### Data Model

```
Organization → Projects → Bills → Sections → Items → Collections
```

## Features in Development

- Advanced scheduling with critical path analysis
- Mobile applications for field workers
- AWS S3 integration for document management
- BIM integration for quantity takeoffs
- Automated progress reporting
- Advanced financial forecasting

## Market Focus

Lobocon is specifically designed for the Kenyan and African construction market, with localized features including:

- Kenya Standard Method of Measurement (KSMM) digitization
- Local currency support (KSh)
- Multi-language support (planned)
- Region-specific compliance and reporting

## Contributing

We welcome contributions from the community. Please read our contributing guidelines before submitting pull requests.

## License

Copyright 2025 Lobocon. All rights reserved.

## Support

For technical support or inquiries:

- Email: support@nexaslab.com
- Website: https://lobocon.co

## Roadmap

**Q1 2025**

- Launch to first 10 paying customers
- Enhanced labor management features
- Mobile app beta

**Q2 2025**

- Advanced scheduling features
- Document management system
- API integrations

**Q3-Q4 2025**

- BIM integration
- Quantity takeoff automation
- Regional expansion across East Africa

## Authors

- Francis Ndungu - Founder, Engineering
- Maxwell Makosi - Founder, Construction Operations

## Acknowledgments

Built with insights from construction professionals managing large-scale infrastructure projects across Kenya, including dams, irrigation systems, and residential construction.
