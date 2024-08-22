import { IAppointment } from '../interfaces/appointment.interface';
import { CreateAppointmentCommand } from '../commands/create-appointment.command';
import { AppointmentEntity } from '../enities/appointments.entity';
import { v4 as uuidv4 } from 'uuid';

export class Appointment {
  public id: string;
  public name: string;
  public date: Date;
  public phoneNumber: string;

  private constructor(data: IAppointment) {
    this.id = data.id || uuidv4();
    this.name = data.name;
    this.date = data.date;
    this.phoneNumber = data.phoneNumber;
  }

  static create(command: CreateAppointmentCommand): AppointmentEntity {
    const appointment = new Appointment(command.payload);
    const entity = new AppointmentEntity();
    entity.name = appointment.name;
    entity.date = appointment.date;
    entity.phoneNumber = appointment.phoneNumber;

    return entity;
  }
}
