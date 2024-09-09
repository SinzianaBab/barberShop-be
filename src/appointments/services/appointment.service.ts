import { Injectable } from '@nestjs/common';
import { CreateAppointmentDto } from '../dtos/create-appointment.dto';
import { CommandBus, QueryBus } from '@nestjs/cqrs';
import { CreateAppointmentCommand } from '../commands/create-appointment.command';
import { Appointment } from '../models/appointment';
import { GetAllAppointmentsQuery } from '../queries/get-all-appointments.query';

@Injectable()
export class AppointmentService {
  constructor(
    private commandBus: CommandBus,
    private queryBus: QueryBus,
  ) {}

  async create(appointmentDto: CreateAppointmentDto) {
    return this.commandBus.execute(
      new CreateAppointmentCommand(appointmentDto),
    );
  }

  async findAll(): Promise<Appointment[]> {
    const query = new GetAllAppointmentsQuery();
    return this.queryBus.execute(query);
  }
}
