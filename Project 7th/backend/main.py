import uvicorn
from fastapi import fastapi

app = FastAPI()

@app.get('/')
def index():
    return {'messsage': 'Hello World'}