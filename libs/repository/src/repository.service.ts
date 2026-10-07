import { Injectable } from '@nestjs/common';

@Injectable()
export class RepositoryService {
  findData(collectionName: string) {
    return [
      { id: 1, collection: collectionName, item: 'Veritabanı Verisi #1' },
      { id: 2, collection: collectionName, item: 'Veritabanı Verisi #2' },
    ];
  }
}
