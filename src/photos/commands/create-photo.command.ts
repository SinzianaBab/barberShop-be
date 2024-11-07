import { CreatePhotoDto } from '../dtos/create-photo.dto';

type CommandDataPayload = {
  dto: CreatePhotoDto;
  file: Express.Multer.File;
};

export class CreatePhotoCommand {
  readonly payload: CommandDataPayload;
  readonly name: string;

  constructor(payload: CommandDataPayload) {
    this.payload = payload;
    this.name = CreatePhotoCommand.name;
  }
}
