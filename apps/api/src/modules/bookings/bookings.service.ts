import { BadRequestException, Injectable } from '@nestjs/common';
const transitions:Record<string,string[]>={REQUESTED:['MATCHING','CANCELLED'],MATCHING:['ASSIGNED','CANCELLED'],ASSIGNED:['ACCEPTED','MATCHING','CANCELLED'],ACCEPTED:['ON_THE_WAY','CANCELLED'],ON_THE_WAY:['ARRIVED','CANCELLED'],ARRIVED:['IN_PROGRESS','CANCELLED'],IN_PROGRESS:['COMPLETED','CANCELLED'],COMPLETED:['PAYMENT_PENDING'],PAYMENT_PENDING:['PAID'],PAID:[],CANCELLED:[]};
@Injectable() export class BookingsService { private bookings=new Map<string,any>();
 create(input:any){const id=crypto.randomUUID(); const b={id,...input,status:'REQUESTED',createdAt:new Date().toISOString()}; this.bookings.set(id,b); return b;}
 get(id:string){return this.bookings.get(id) ?? null;}
 transition(id:string,next:string){const b=this.get(id); if(!b) throw new BadRequestException('Booking not found'); if(!transitions[b.status]?.includes(next)) throw new BadRequestException(`Invalid transition ${b.status} -> ${next}`); b.status=next; b.updatedAt=new Date().toISOString(); return b;}
}
