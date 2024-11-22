import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { APP_FILTER } from '@nestjs/core';

import { GlobalExceptionFilter } from './common/filters/global-exception.filter';
import configuration from './configs/configuration';
import { AuthModule } from './modules/auth/auth.module';
import { CarShowroomModule } from './modules/carShowroom/car-showroom.module';
import { LoggerModule } from './modules/logger/logger.module';
import { MechanicsModule } from './modules/mechanics/mechanics.module';
import { OffersModule } from './modules/offers/offers.module';
import { PostgresModule } from './modules/postgres/postgres.module';
import { RedisModule } from './modules/redis/redis.module';
import { RepositoryModule } from './modules/repository/repository.module';
import { StatisticModule } from './modules/statistic/statistic.module';
import { UsersModule } from './modules/users/users.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      load: [configuration],
      isGlobal: true,
    }),
    LoggerModule,
    RedisModule,
    PostgresModule,
    RepositoryModule,
    AuthModule,

    UsersModule,
    OffersModule,
    CarShowroomModule,
    MechanicsModule,
    StatisticModule,
  ],
  providers: [
    {
      provide: APP_FILTER,
      useClass: GlobalExceptionFilter,
    },
  ],
})
export class AppModule {}
