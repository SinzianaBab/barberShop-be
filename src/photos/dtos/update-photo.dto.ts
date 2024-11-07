export class UpdatePhotoDto {
  title?: string;
  file: Express.Multer.File;
  description?: string;
}
