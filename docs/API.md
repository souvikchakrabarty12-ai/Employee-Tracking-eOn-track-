# API Design (v1)

## Core resources
- /auth/login, /auth/refresh, /auth/logout
- /employees (CRUD, filters, profile)
- /employees/bulk-upload
- /routes, /routes/:id/points, /route-plans
- /attendance/clock-in, /attendance/clock-out, /attendance/live
- /pos, /pos-visits/check-in, /pos-visits/check-out
- /tracking/live, /tracking/playback
- /analytics/kpi, /analytics/reports/daily|weekly|monthly
- /notifications

## Security controls
- JWT auth with role/permission guards
- Rate limiting, audit logs, device fingerprint checks
- TLS-only and encrypted PII at rest
