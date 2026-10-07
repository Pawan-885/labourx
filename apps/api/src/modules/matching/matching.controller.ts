import { Body, Controller, Post } from '@nestjs/common';
@Controller('matching') export class MatchingController { @Post('rank') rank(@Body() body:any){ const candidates=(body.candidates??[]).map((c:any)=>({...c,rankingScore:undefined})); return {modelVersion:'development-ranking-v1',candidates}; } }
