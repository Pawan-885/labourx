import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { HealthController } from './health.controller';
import { PrismaService } from './prisma.service';
import { AuthModule } from './modules/auth/auth.module';
import { ServicesModule } from './modules/services/services.module';
import { WorkersModule } from './modules/workers/workers.module';
import { BookingsModule } from './modules/bookings/bookings.module';
import { MatchingModule } from './modules/matching/matching.module';

@Module({imports:[ConfigModule.forRoot({isGlobal:true}),AuthModule,ServicesModule,WorkersModule,BookingsModule,MatchingModule],controllers:[HealthController],providers:[PrismaService]})
export class AppModule {}
