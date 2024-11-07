import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CqrsModule } from '@nestjs/cqrs';
import { PhotoEntity } from './entities/photo.entity';
import { PhotosController } from './controllers/photo.controller';
import { PhotoService } from './services/photo.service';
import { CreatePhotoHandler } from './commands/handlers/create-photo.handler';
import { PhotoRepository } from './repositories/photo.repository';
import { MulterModule } from '@nestjs/platform-express';
import { diskStorage } from 'multer';
import * as fs from 'fs';
import * as path from 'path';

const Entities = [PhotoEntity];

const Controllers = [PhotosController];

const Repositories = [PhotoRepository];

const Services = [PhotoService];
const QueryHandlers = [];
const CommandHandlers = [CreatePhotoHandler];

@Module({
  imports: [
    TypeOrmModule.forFeature(Entities),
    CqrsModule,
    MulterModule.register({
      storage: diskStorage({
        destination: './uploads/',
        filename: (req, file, cb) => {
          const fileExtension = path.extname(file.originalname).toLowerCase();
          const baseName = path.basename(file.originalname, fileExtension);
          const sanitizedBaseName = baseName.replace(/\s+/g, '_');
          let filename = `${sanitizedBaseName}${fileExtension}`;
          let counter = 1;

          while (fs.existsSync(path.join('./uploads', filename))) {
            filename = `${sanitizedBaseName}_${counter}${fileExtension}`;
            counter++;
          }

          cb(null, filename);
        },
      }),
    }),
  ],
  providers: [
    ...Services,
    ...CommandHandlers,
    ...Repositories,
    ...QueryHandlers,
  ],
  controllers: Controllers,
})
export class PhotosModule {}
