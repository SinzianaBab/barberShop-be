import {
  Body,
  Controller,
  Post,
  UploadedFile,
  UseInterceptors,
} from '@nestjs/common';
import { CommandBus } from '@nestjs/cqrs';
import { CreatePhotoDto } from '../dtos/create-photo.dto';
import { FileInterceptor } from '@nestjs/platform-express';
import { PhotoService } from '../services/photo.service';

@Controller('photos')
export class PhotosController {
  constructor(private service: PhotoService) {}

  @Post('upload')
  @UseInterceptors(FileInterceptor('file'))
  async uploadFile(
    @UploadedFile() file: Express.Multer.File,
    @Body() createPhotoDto: CreatePhotoDto,
  ) {
    return this.service.create(createPhotoDto, file);
    console.log(file);
    console.log(createPhotoDto);
  }

  // @Get(':id')
  // getOne(@Param('id') id: string) {
  //   return this.photoService.getById(id);
  // }
  //
  // @Get()
  // getAll() {
  //   return this.photoService.getAll();
  // }
  //
  // @Put(':id')
  // update(
  //   @Param('id') id: string,
  //   @Body()
  //   body: { title: string; file: Express.Multer.File; description?: string },
  // ) {
  //   return this.photoService.update(
  //     id,
  //     body.title,
  //     body.file,
  //     body.description,
  //   );
  // }
  //
  // @Delete(':id')
  // delete(@Param('id') id: string) {
  //   return this.photoService.delete(id);
  // }
}
