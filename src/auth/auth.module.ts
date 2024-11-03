import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { JwtModule } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport';
import { JwtStrategy } from './jwt.strategy';
import { UsersModule } from '../users/users.module'; // Módulo de usuários

@Module({
  imports: [
    UsersModule,
    PassportModule,
    JwtModule.register({
      secret: '32a2b36ae29cc1a6ca9d5008ea26cd5c41b6fa0bb79ae838e20d02f15e39950a3ff7118cd697f71c2ca421cca6be8c544e282ca566c0f8a954021a4f35cd7596',
      signOptions: { expiresIn: '60m' },
    }),
  ],
  providers: [AuthService, JwtStrategy],
  controllers: [AuthController],
})
export class AuthModule {}
