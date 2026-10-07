import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';

import { HealthController } from './health.controller';
import { PrismaModule } from './database/prisma.module';

import { AuthModule } from './modules/auth/auth.module';
import { ServicesModule } from './modules/services/services.module';
import { WorkersModule } from './modules/workers/workers.module';
import { BookingsModule } from './modules/bookings/bookings.module';
import { MatchingModule } from './modules/matching/matching.module';
import { envValidationSchema } from './config/env.validation';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      validationSchema: envValidationSchema,
    }),

    PrismaModule,

    AuthModule,
    ServicesModule,
    WorkersModule,
    BookingsModule,
    MatchingModule,
  ],
  controllers: [HealthController],
})
export class AppModule {}