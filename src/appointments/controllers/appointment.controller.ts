import { Body, Controller, Get, Post } from '@nestjs/common';
import { AppointmentService } from '../services/appointment.service';
import { CreateAppointmentDto } from '../dtos/create-appointment.dto';

@Controller({ path: 'appointments' })
export class AppointmentController {
  constructor(private service: AppointmentService) {}

  @Post()
  async create(@Body() dto: CreateAppointmentDto) {
    return await this.service.create(dto);
  }

  @Get()
  async findAll() {
    return await this.service.findAll();
  }
}
