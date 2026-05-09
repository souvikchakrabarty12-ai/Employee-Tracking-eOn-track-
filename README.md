# eOn Track - Enterprise Employee Tracking Platform

This repository provides a production-oriented scaffold for a field-force tracking SaaS with employee management, route/POS geofencing, attendance, live GPS tracking, and analytics.

## Project structure

- `apps/api`: Express API scaffold (modular architecture)
- `apps/web`: Frontend scaffold (dashboard shell)
- `prisma`: PostgreSQL schema with multi-company support
- `docs`: API design and implementation guidance
- `scripts`: seed utilities

## Delivered capabilities in this scaffold

1. **Employee Master Management**: schema supports employee code uniqueness, manager hierarchy, department, designation, territory, profile status, and route assignment.
2. **Route Management**: route, route points, planner, and route history models.
3. **Office/POS Geo-fencing**: dedicated geofence plus geocheck and POS visit models with fake GPS flags.
4. **Live Tracking**: tracking logs with battery/device status for real-time dashboarding.
5. **Notifications**: multi-channel notifications for route/geofence/performance alerts.
6. **Performance + Analytics Inputs**: attendance, visits, tracking, route, and audit events required for KPI/report generation.

## Setup

1. Copy env:
   ```bash
   cp .env.example .env
   ```
2. Start infra:
   ```bash
   docker compose up -d
   ```
3. Install dependencies and run services in each app.
4. Run prisma migrations and seed script.

## Scalability notes (10k+ employees)

- Partition tracking and visit logs by date/company.
- Stream live location via WebSockets + Redis pub/sub.
- Use adaptive GPS polling (battery-aware).
- Precompute KPI aggregates in scheduled jobs.
- Cache dashboards and map tiles.

## Google Maps integration plan

- JS Maps SDK for live markers and route polylines
- Directions API for route sequencing
- Distance Matrix API for travel estimates + TAT baselines
- Places API for nearby POS suggestions
- Heatmap layer for productivity and coverage density

## Deployment

- Containerized services (API, worker, web, postgres, redis)
- Reverse proxy with TLS
- Background worker for reports/notifications
- Object storage for profile photos and exports (PDF/Excel)
