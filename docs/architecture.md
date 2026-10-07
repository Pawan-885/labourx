# LabourX architecture

## Runtime
Mobile/Admin -> REST/Socket.IO -> NestJS modular monolith -> PostgreSQL/PostGIS + Redis/BullMQ.
Matching -> candidate filtering -> ML predictions -> ranking -> constraints/OR-Tools -> assignment.

## ML boundary
FastAPI owns preprocessing, model loading, inference, training and evaluation. NestJS owns business workflow and persistence. No training happens in an HTTP request.

## State machine
REQUESTED -> MATCHING -> ASSIGNED -> ACCEPTED -> ON_THE_WAY -> ARRIVED -> IN_PROGRESS -> COMPLETED -> PAYMENT_PENDING -> PAID. CANCELLED is terminal.
