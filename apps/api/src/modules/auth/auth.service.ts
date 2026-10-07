import { Injectable, UnauthorizedException } from '@nestjs/common';
import * as bcrypt from 'bcrypt';
import { JwtService } from '@nestjs/jwt';
@Injectable()
export class AuthService {
  private users = new Map<string,{id:string,email:string,passwordHash:string,role:'CUSTOMER'|'WORKER'|'ADMIN'}>();
  private jwt = new JwtService({secret:process.env.JWT_SECRET || 'development-only-secret'});
  async register(email:string,password:string,role:'CUSTOMER'|'WORKER'|'ADMIN'='CUSTOMER') {
    if(this.users.has(email)) throw new UnauthorizedException('Account already exists');
    const user={id:crypto.randomUUID(),email,passwordHash:await bcrypt.hash(password,12),role}; this.users.set(email,user);
    return this.issue(user);
  }
  async login(email:string,password:string){const u=this.users.get(email); if(!u || !(await bcrypt.compare(password,u.passwordHash))) throw new UnauthorizedException('Invalid credentials'); return this.issue(u);}
  private issue(u:{id:string,email:string,role:string}){return {accessToken:this.jwt.sign({sub:u.id,email:u.email,role:u.role}),user:{id:u.id,email:u.email,role:u.role}};}
}
