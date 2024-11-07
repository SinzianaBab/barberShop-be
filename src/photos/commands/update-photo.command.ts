import { UpdatePhotoDto } from '../dtos/update-photo.dto';

export class UpdatePhotoCommand {
  readonly payload: UpdatePhotoDto;
  readonly name: string;

  constructor(payload: UpdatePhotoDto) {
    this.payload = payload;
    this.name = UpdatePhotoCommand.name;
  }
}
