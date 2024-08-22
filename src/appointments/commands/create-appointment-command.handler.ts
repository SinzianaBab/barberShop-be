import { CommandHandler, EventBus, ICommandHandler } from '@nestjs/cqrs';
import { CreateAppointmentCommand } from './create-appointment.command';
import { AppointmentRepository } from '../repositories/appointment.repository';
import { Appointment } from '../models/appointment';

@CommandHandler(CreateAppointmentCommand)
export class CreateAppointmentCommandHandler
  implements ICommandHandler<CreateAppointmentCommand>
{
  constructor(
    private repository: AppointmentRepository,
    private readonly eventBus: EventBus,
  ) {}

  async execute(command: CreateAppointmentCommand): Promise<Appointment> {
    const appointment = Appointment.create(command);
    return await this.repository.save(appointment);
  }
}
