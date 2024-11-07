export class PhotoResponseDto {
  id: string;
  title: string;
  file: Express.Multer.File;
  description?: string;
}
