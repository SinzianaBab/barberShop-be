import { CommandHandler, EventBus, ICommandHandler } from '@nestjs/cqrs';
import { CreatePhotoCommand } from '../create-photo.command';
import { PhotoRepository } from '../../repositories/photo.repository';
import { PhotoEntity } from '../../entities/photo.entity';

@CommandHandler(CreatePhotoCommand)
export class CreatePhotoHandler implements ICommandHandler<CreatePhotoCommand> {
  constructor(
    private photoRepository: PhotoRepository,
    private readonly eventBus: EventBus,
  ) {}

  async execute(command: CreatePhotoCommand): Promise<PhotoEntity> {
    const { dto, file } = command.payload;

    const allowedMimeTypes = ['image/png', 'image/jpeg'];
    if (!allowedMimeTypes.includes(file.mimetype)) {
      throw new Error('Unsupported file type. Only PNG and JPG are allowed.');
    }

    const photoEntity = new PhotoEntity();
    photoEntity.title = dto.title;
    photoEntity.description = dto.description;
    photoEntity.filename = file.filename;
    photoEntity.mimetype = file.mimetype;
    photoEntity.size = file.size;
    photoEntity.filePath = file.path;
    try {
      const savedPhoto = await this.photoRepository.save(photoEntity);
      return savedPhoto;
    } catch (error) {
      throw new Error(`Failed to save photo: ${error.message}`);
    }
  }
}
