import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class AppointmentEntity {
  @PrimaryGeneratedColumn()
  id: string;

  @Column()
  name: string;

  @Column()
  phoneNumber: string;

  @Column()
  date: Date;
}
