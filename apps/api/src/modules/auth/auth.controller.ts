import { Body, Controller, Post } from '@nestjs/common';
import { IsEmail, IsIn, IsString, MinLength } from 'class-validator';
import { AuthService } from './auth.service';
class RegisterDto { @IsEmail() email!:string; @IsString() @MinLength(8) password!:string; @IsIn(['CUSTOMER','WORKER','ADMIN']) role:'CUSTOMER'|'WORKER'|'ADMIN'='CUSTOMER'; }
class LoginDto { @IsEmail() email!:string; @IsString() password!:string; }
@Controller('auth') export class AuthController { constructor(private readonly auth:AuthService){} @Post('register') register(@Body() d:RegisterDto){return this.auth.register(d.email,d.password,d.role);} @Post('login') login(@Body() d:LoginDto){return this.auth.login(d.email,d.password);} }
