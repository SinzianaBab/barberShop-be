import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { AppointmentEntity } from '../enities/appointments.entity';
import { Repository } from 'typeorm';
import { Appointment } from '../models/appointment';

@Injectable()
export class AppointmentRepository {
  constructor(
    @InjectRepository(AppointmentEntity)
    protected readonly repository: Repository<AppointmentEntity>,
  ) {}

  async save(appointment: Appointment): Promise<Appointment> {
    return this.repository.save(appointment);
  }

  async findAll(): Promise<Appointment[]> {
    return this.repository.find();
  }
}
