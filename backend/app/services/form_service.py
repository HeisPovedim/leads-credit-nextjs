from sqlalchemy.orm import Session
from app.tabels.form.models import Form

class FormService:
    def __init__(self, db: Session):
        self.db = db

    def create_form(self, form_data: Form) -> Form:
        new_form = Form(**form_data.model_dump())
        self.db.add(new_form)
        self.db.commit()
        self.db.refresh(new_form)
        return new_form 