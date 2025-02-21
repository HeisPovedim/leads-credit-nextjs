from fastapi import FastAPI, Depends
from sqlalchemy.orm import Session
from app.tabels.form.models import Form
from app.database import async_session_maker
from app.services.form_service import FormService

app = FastAPI()

@app.get("/")
def read_root():
    return {"message": "Hello, World!"}

@app.post("/form")
def create_form(form: Form, db: Session = Depends(async_session_maker)):
    form_service = FormService(db)
    return form_service.create_form(form)
