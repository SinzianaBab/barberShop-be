import { IQueryHandler, QueryBus, QueryHandler } from '@nestjs/cqrs';
import { GetAllAppointmentsQuery } from './get-all-appointments.query';
import { Appointment } from '../models/appointment';
import { AppointmentRepository } from '../repositories/appointment.repository';

@QueryHandler(GetAllAppointmentsQuery)
export class GetAllAppointmentsQueryHandler
  implements IQueryHandler<GetAllAppointmentsQuery>
{
  constructor(
    private readonly queryBus: QueryBus,
    private readonly repository: AppointmentRepository,
  ) {}

  async execute(query: GetAllAppointmentsQuery): Promise<Appointment[]> {
    return await this.repository.findAll();
  }
}
