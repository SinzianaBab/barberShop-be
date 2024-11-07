import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class PhotoEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  title: string;

  @Column()
  filePath: string;

  @Column({ type: 'text', nullable: true })
  description?: string;

  @Column()
  filename: string;

  @Column()
  mimetype: string;

  @Column()
  size: number;
}
