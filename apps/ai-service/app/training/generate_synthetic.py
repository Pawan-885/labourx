from pathlib import Path
import numpy as np, pandas as pd
rng=np.random.default_rng(42); n=5000
out=Path(__file__).resolve().parents[2]/'data'; out.mkdir(exist_ok=True)
df=pd.DataFrame({'distance_km':rng.uniform(.2,10,n),'hour':rng.integers(0,24,n),'experience_years':rng.integers(0,15,n),'rating':rng.uniform(3,5,n),'workload':rng.uniform(0,1,n),'acceptance':rng.binomial(1,.65,n)})
df['eta_min']=df.distance_km*(2.0+.8*np.sin(df.hour/24*2*np.pi))+rng.normal(0,.8,n)
df['duration_min']=35+8*df.experience_years/10+15*(1-df.rating/5)+rng.normal(0,5,n)
df.to_csv(out/'development_matching.csv',index=False)
print('Generated clearly labeled synthetic development data:',out/'development_matching.csv')
