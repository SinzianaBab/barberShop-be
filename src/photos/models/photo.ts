import { PhotoEntity } from '../entities/photo.entity';
import { IPhoto } from '../interfaces/photo.interface';
import { v4 as uuidv4 } from 'uuid';
import { Express } from 'express';
import { CreatePhotoDto } from '../dtos/create-photo.dto';

export class Photo {
  public id: string;
  public title: string;
  public description: string;
  public filename: string;
  public mimetype: string;
  public size: number;
  public filePath?: string;

  private constructor(data: IPhoto) {
    this.id = data.id || uuidv4();
    this.title = data.title;
    this.description = data.description;
    this.filename = data.filename;
    this.mimetype = data.mimetype;
    this.size = data.size;
    this.filePath = data.filePath;
  }

  static create(dto: CreatePhotoDto, file: Express.Multer.File): PhotoEntity {
    const photo = new Photo({
      ...dto,
      file: file,
      filename: file.filename,
      mimetype: file.mimetype,
      size: file.size,
      filePath: file.path,
    });

    const entity = new PhotoEntity();
    entity.title = photo.title;
    entity.description = photo.description;
    entity.filename = photo.filename;
    entity.mimetype = photo.mimetype;
    entity.size = photo.size;
    entity.filePath = `./uploads/${photo.filename}`; // Store the file path or URL

    return entity;
  }
}

// import { CreatePhotoCommand } from '../commands/create-photo.command';
// import { PhotoEntity } from '../entities/photo.entity';
// import { IPhoto } from '../interfaces/photo.interface';
// import { v4 as uuidv4 } from 'uuid';
//
// export class Photo {
//   public id: string;
//   public title: string;
//   public file: Express.Multer.File;
//   public description: string;
//   public filename: string;
//   public mimetype: string;
//   public size: number;
//
//   private constructor(data: IPhoto) {
//     this.id = data.id || uuidv4();
//     this.title = data.title;
//     this.file = data.file;
//     this.description = data.description;
//     this.filename = data.filename;
//     this.mimetype = data.mimetype;
//     this.size = data.size;
//   }
//
//   static create(command: CreatePhotoCommand): PhotoEntity {
//     const photo = new Photo({
//       ...command.payload.dto,
//       file: command.payload.file,
//     });
//     const entity = new PhotoEntity();
//     entity.title = photo.title;
//     entity.file = photo.file;
//     entity.description = photo.description;
//     entity.filename = photo.filename;
//     entity.mimetype = photo.mimetype;
//     entity.size = photo.size;
//
//     return entity;
//   }
// }
