import { Injectable } from '@nestjs/common';

@Injectable()
export class MediaService {
  uploadFile(filename: string) {
    return {
      message: 'Dosya başarıyla yüklendi',
      url: `https://cdn.example.com/uploads/${filename}`,
    };
  }
}
