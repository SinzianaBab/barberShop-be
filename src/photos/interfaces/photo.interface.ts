export interface IPhoto {
  id?: string;
  title: string;
  description: string;
  filename: string;
  mimetype: string;
  size: number;
  filePath: string;
  file: Express.Multer.File;
}
