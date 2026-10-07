import { Injectable } from '@nestjs/common';

@Injectable()
export class UserService {
  private users = [
    { id: 1, name: 'Ahmet Yılmaz', email: 'ahmet@example.com' },
    { id: 2, name: 'Ayşe Kaya', email: 'ayse@example.com' },
  ];

  findAll() {
    return this.users;
  }

  findOne(id: number) {
    return this.users.find((user) => user.id === id) || null;
  }
}
