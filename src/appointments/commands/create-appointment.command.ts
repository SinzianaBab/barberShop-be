import { CreateAppointmentDto } from '../dtos/create-appointment.dto';

export class CreateAppointmentCommand {
  readonly payload: CreateAppointmentDto;
  readonly name: string;

  constructor(payload: CreateAppointmentDto) {
    this.payload = payload;
    this.name = CreateAppointmentCommand.name;
  }
}
