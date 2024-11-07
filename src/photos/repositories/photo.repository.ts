import { DeleteResult, Repository } from 'typeorm';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { PhotoEntity } from '../entities/photo.entity';
import { Photo } from '../models/photo';

@Injectable()
export class PhotoRepository {
  constructor(
    @InjectRepository(PhotoEntity)
    protected readonly repository: Repository<PhotoEntity>,
  ) {}

  async save(photo: PhotoEntity): Promise<PhotoEntity> {
    return this.repository.save(photo);
  }

  async deleteById(id: string): Promise<DeleteResult> {
    return this.repository.delete(id);
  }

  async findById(id: string): Promise<Photo> {
    return this.findById(id);
  }

  async findAll(): Promise<Photo[]> {
    return this.findAll();
  }
}
