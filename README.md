# LabourX

Startup-level intelligent service marketplace with customer/worker mobile experiences, admin web dashboard, NestJS modular backend, PostgreSQL/PostGIS, Redis/BullMQ and a separate FastAPI ML service.

## Repository
- `apps/mobile` React Native + Expo role-based customer/worker app
- `apps/admin` React + Vite admin dashboard
- `apps/api` NestJS modular monolith
- `apps/ai-service` FastAPI ML service
- `packages/types` shared TypeScript domain contracts
- `infra` local PostgreSQL/PostGIS + Redis

## Local setup
1. Install Node 22+, pnpm 10+, Python 3.11+.
2. Copy `.env.example` to the relevant service env files.
3. Run `docker compose -f infra/docker-compose.yml up -d`.
4. Run `pnpm install`.
5. Run Prisma migration/seed from `apps/api`.
6. Start services with `pnpm dev`.

External credentials (Maps, Razorpay, Cloudinary, Sentry) are intentionally not included.

## Architecture
Customer/Worker mobile and Admin web -> NestJS REST + Socket.IO -> PostgreSQL/PostGIS + Redis/BullMQ. Matching calls FastAPI -> versioned ML models. ML predicts; business constraints and OR-Tools determine feasible allocation.

## Development status
This repository is the executable foundation and core domain implementation. External-provider credentials and native-device configuration must be supplied locally before those integrations can be exercised end-to-end.
