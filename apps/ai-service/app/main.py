from fastapi import FastAPI
from pydantic import BaseModel, Field
from typing import List
import math

app=FastAPI(title='LabourX AI Service',version='0.1.0')
class Candidate(BaseModel):
    worker_id:str
    skill_compatibility:float=Field(ge=0,le=1)
    distance_km:float=Field(ge=0)
    rating:float=Field(ge=0,le=5)
    workload:float=Field(ge=0)
    experience_years:float=Field(ge=0)
class RankRequest(BaseModel): candidates:List[Candidate]
@app.get('/health')
def health(): return {'status':'ok','service':'labourx-ai','models':['demand','duration','eta','acceptance','ranking']}
@app.post('/predict-eta')
def predict_eta(distance_km:float,time_of_day:int=12):
    # Development inference contract. Production models replace this endpoint implementation.
    speed=max(12.0,28.0-0.4*abs(time_of_day-14)); return {'model_version':'development-eta-v1','eta_minutes':round(distance_km/speed*60,2)}
@app.post('/rank-workers')
def rank_workers(req:RankRequest):
    # Development fallback only: deterministic business fallback until trained ranking artifact exists.
    ranked=[]
    for c in req.candidates:
        score=.35*c.skill_compatibility+.20*min(c.rating/5,1)+.15*min(c.experience_years/10,1)+.15*(1/(1+c.distance_km))+.15*(1/(1+c.workload))
        ranked.append({'worker_id':c.worker_id,'score':round(score,6)})
    return {'model_version':'development-ranking-fallback-v1','is_trained_model':False,'ranked':sorted(ranked,key=lambda x:x['score'],reverse=True)}
