import { Controller, Get } from '@nestjs/common';
@Controller('services') export class ServicesController { @Get() list(){ return [{id:'plumbing',name:'Plumbing',slug:'plumbing',active:true},{id:'electrical',name:'Electrical',slug:'electrical',active:true},{id:'carpentry',name:'Carpentry',slug:'carpentry',active:true},{id:'cleaning',name:'Cleaning',slug:'cleaning',active:true}]; } }
