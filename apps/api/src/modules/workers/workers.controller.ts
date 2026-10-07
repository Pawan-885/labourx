import { Controller, Get, Param, Query } from '@nestjs/common';
@Controller('workers') export class WorkersController {
 @Get() list(@Query('service') service='plumbing'){ return {service,items:[{id:'worker-demo-1',name:'Arun Kumar',skills:['plumbing'],rating:4.8,experienceYears:7,verified:true},{id:'worker-demo-2',name:'Suresh M',skills:['plumbing'],rating:4.7,experienceYears:5,verified:true}]}; }
 @Get(':id') get(@Param('id') id:string){ return {id,name:'Arun Kumar',skills:['plumbing','pipe repair'],rating:4.8,experienceYears:7,verified:true}; }
}
