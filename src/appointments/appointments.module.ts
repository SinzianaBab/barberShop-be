import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppointmentEntity } from './enities/appointments.entity';
import { AppointmentService } from './services/appointment.service';
import { AppointmentController } from './controllers/appointment.controller';
import { CqrsModule } from '@nestjs/cqrs';
import { CreateAppointmentCommandHandler } from './commands/create-appointment-command.handler';
import { AppointmentRepository } from './repositories/appointment.repository';
import { GetAllAppointmentsQueryHandler } from './queries/get-all-appointments-query.handler';

const Entities = [AppointmentEntity];

const Controllers = [AppointmentController];

const Repositories = [AppointmentRepository];

const Services = [AppointmentService];
const QueryHandlers = [GetAllAppointmentsQueryHandler];
const CommandHandlers = [CreateAppointmentCommandHandler];

@Module({
  imports: [TypeOrmModule.forFeature(Entities), CqrsModule],
  providers: [
    ...Services,
    ...CommandHandlers,
    ...Repositories,
    ...QueryHandlers,
  ],
  controllers: Controllers,
})
export class AppointmentsModule {}
