export type Role = 'CUSTOMER' | 'WORKER' | 'ADMIN';
export type BookingMode = 'INSTANT' | 'SCHEDULED';
export type BookingStatus = 'REQUESTED'|'MATCHING'|'ASSIGNED'|'ACCEPTED'|'ON_THE_WAY'|'ARRIVED'|'IN_PROGRESS'|'COMPLETED'|'PAYMENT_PENDING'|'PAID'|'CANCELLED';
export interface WorkerCandidate { workerId:string; skillCompatibility:number; distanceKm:number; predictedEtaMin:number; acceptanceProbability:number; rating:number; workload:number; rankingScore?:number; }
export interface MatchRequest { bookingId:string; serviceId:string; latitude:number; longitude:number; mode:BookingMode; scheduledAt?:string; }
export interface PredictionEnvelope<T> { modelVersion:string; prediction:T; }
