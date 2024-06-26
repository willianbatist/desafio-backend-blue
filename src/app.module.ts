import { Module } from '@nestjs/common';
import { APP_GUARD } from '@nestjs/core';
import { UserModule } from './user/user.module';
import { AuthModule } from './auth/auth.module';
import { PrismaService } from './database/prisma.service';
import { JwtAuthGuard } from './auth/guards/jwt-auth.guard';
import { SchedulesModule } from './schedules/schedules.module';

@Module({
  imports: [UserModule, AuthModule, SchedulesModule],
  controllers: [],
  providers: [
    PrismaService,
    {
      provide: APP_GUARD,
      useClass: JwtAuthGuard,
    },
  ],
})
export class AppModule {}
