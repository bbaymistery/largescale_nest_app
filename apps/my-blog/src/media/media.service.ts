import { Injectable } from '@nestjs/common';

/*
MediaService
Nə üçün lazımdır: Fayl yükləmə əməliyyatlarını (`uploadFile`) emal etmək üçün nəzərdə tutulub.
`MediaController` bu servisin metodlarından istifadə edərək faylları yükləyir və URL qaytarır.
*/
@Injectable()
export class MediaService {
  uploadFile(filename: string) {
    return {
      message: 'Dosya başarıyla yüklendi',
      url: `https://cdn.example.com/uploads/${filename}`,
    };
  }
}
