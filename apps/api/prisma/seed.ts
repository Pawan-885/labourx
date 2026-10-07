import { PrismaClient, Role } from '@prisma/client';
const prisma=new PrismaClient();
async function main(){
 const plumbing=await prisma.service.upsert({where:{slug:'plumbing'},update:{},create:{name:'Plumbing',slug:'plumbing'}});
 for(const [email,name,rating] of [['arun@labourx.dev','Arun Kumar',4.8],['suresh@labourx.dev','Suresh M',4.7]] as const){const u=await prisma.user.upsert({where:{email},update:{},create:{email,passwordHash:'$2b$12$development-only-seed-hash',role:Role.WORKER}});const w=await prisma.workerProfile.upsert({where:{userId:u.id},update:{},create:{userId:u.id,name,experienceYears:5,rating,verified:true}});await prisma.workerSkill.upsert({where:{workerId_serviceId:{workerId:w.id,serviceId:plumbing.id}},update:{},create:{workerId:w.id,serviceId:plumbing.id}});}
 console.log('Seeded development LabourX data.');
} main().finally(()=>prisma.$disconnect());
