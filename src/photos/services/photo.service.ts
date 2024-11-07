import { Injectable } from '@nestjs/common';
import { CommandBus, QueryBus } from '@nestjs/cqrs';
import { CreatePhotoCommand } from '../commands/create-photo.command';
import { UpdatePhotoCommand } from '../commands/update-photo.command';
import { DeletePhotoCommand } from '../commands/delete-photo.command';
import { GetPictureQuery } from '../queries/get-picture-by-id.query';
import { GetAllPicturesQuery } from '../queries/get-all-pictures.query';
import { CreatePhotoDto } from '../dtos/create-photo.dto';
import { UpdatePhotoDto } from '../dtos/update-photo.dto';

@Injectable()
export class PhotoService {
  constructor(
    private commandBus: CommandBus,
    private queryBus: QueryBus,
  ) {}

  create(dto: CreatePhotoDto, file: Express.Multer.File) {
    return this.commandBus.execute(new CreatePhotoCommand({ dto, file }));
  }

  update(dto: UpdatePhotoDto) {
    return this.commandBus.execute(new UpdatePhotoCommand(dto));
  }

  delete(id: string) {
    return this.commandBus.execute(new DeletePhotoCommand(id));
  }

  getById(id: string) {
    return this.queryBus.execute(new GetPictureQuery(id));
  }

  getAll() {
    return this.queryBus.execute(new GetAllPicturesQuery());
  }
}
