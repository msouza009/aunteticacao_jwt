import { Injectable } from '@nestjs/common';
import * as bcrypt from 'bcryptjs';

export type User = {
  userId: number;
  username: string;
  email: string;
  password: string;
};

@Injectable()
export class UsersService {
  private users: User[] = [
    {
      userId: 1,
      username: 'john',
      email: 'john@example.com',
      password: '$2b$10$Xl0kg1K4Dl/CM3tE3wdDJ.WCCOVVhQH1w17xWdCdX1gzAStAXdOeK', // senha "changeme" criptografada com bcrypt
    },
  ];

  // Função que encontra um usuário pelo email
  async findOneByEmail(email: string): Promise<User | undefined> {
    return this.users.find(user => user.email === email);
  }

  // Função para criar um novo usuário (opcional)
  async create(username: string, email: string, password: string): Promise<User> {
    const salt = await bcrypt.genSalt();
    const hashedPassword = await bcrypt.hash(password, salt);

    const newUser: User = {
      userId: this.users.length + 1,
      username,
      email,
      password: hashedPassword,
    };

    this.users.push(newUser);
    return newUser;
  }
}