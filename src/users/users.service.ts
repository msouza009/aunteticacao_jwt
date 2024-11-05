import { Injectable } from '@nestjs/common';

@Injectable()
export class UsersService {
  private readonly users = [
    {
      userId: 1,
      email: 'john@example.com',
      password: 'senha123', // Lembre-se de que, em produção, você deve usar bcrypt ou outra forma de hash
    },
  ];

  async findOneByEmail(email: string): Promise<any | undefined> {
    return this.users.find(user => user.email === email);
  }
}
