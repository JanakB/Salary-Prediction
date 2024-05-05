# -*- coding: utf-8 -*-
"""
Created on Tue Nov 17 21:40:41 2020

@author: win10
"""

# 1. Library imports
import uvicorn
from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from PredVars import PredVar
import numpy as np
import pickle
import pandas as pd
print("PICKLE VRRO : " + pickle.format_version)
# 2. Create the app object
app = FastAPI()

origins = [
    "http://localhost:5173/predict",
    "http://localhost:5173"
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

pickle_in = open("linearReg.pkl","rb")
model=pickle.load(pickle_in)

model_1=pickle.load(open("decisionTreeRegressor.pkl","rb"))

pickle_in_2 = open("randomForestRegressor.pkl","rb")
model_2=pickle.load(pickle_in_2)

# 3. Index route, opens automatically on http://127.0.0.1:8000
@app.get('/')
def index():
    return {'message': 'Hello, World'}

# 4. Route with a single parameter, returns the parameter within a message
#    Located at: http://127.0.0.1:8000/AnyNameHere
@app.get('/{name}')
def get_name(name: str):
    return {'Welcome To Krish Youtube Channel': f'{name}'}

# 3. Expose the prediction functionality, make a prediction from the passed
#    JSON data and return the predicted Bank Note with the confidence
@app.post('/predict')
def predict_income(data:PredVar):
    print(data)
    data = data.dict()
    print(data)
    age = data['age']
    gender = data['gender']
    education_level = data['education_level']
    job_title = data['job_title']
    years_of_experience = data['years_of_experience']
    modelnum = data['modelnum']

    # print(model.predict([[age,gender,education_level,job_title,years_of_experience]]))


    if(modelnum == 0):
        prediction = model.predict([[age, gender, education_level, job_title, years_of_experience]])
    
    if(modelnum == 1):
        prediction = model_1.predict([[age, gender, education_level, job_title, years_of_experience]])
    
    if(modelnum == 2):
        prediction = model_2.predict([[age, gender, education_level, job_title, years_of_experience]])

    print(prediction)
    return {
        'prediction': prediction[0]
    }

# 5. Run the API with uvicorn
#    Will run on http://127.0.0.1:8000
if __name__ == '__main__':
    uvicorn.run(app, host='127.0.0.1', port=8000)
    
#uvicorn app:app --reload