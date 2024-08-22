import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DataSource } from 'typeorm';
import { AppointmentsModule } from './appointments/appointments.module';
import { AppointmentEntity } from './appointments/enities/appointments.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: 'PromovezCu10',
      database: 'barberShop',
      schema: 'public',
      entities: [__dirname + '/**/*.entity{.ts,.js}'],
      synchronize: true,
    }),
    AppointmentsModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {
  constructor(private dataSource: DataSource) {}
}
