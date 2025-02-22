from pydantic import BaseModel, EmailStr, Field
from typing_extensions import Annotated


class FormBase(BaseModel):
    fio: str = Field(..., min_length=2, max_length=100)
    phone_number: Annotated[str, Field(pattern=r"^7\d{10}$")] = Field(
        ..., description="Номер телефона в формате 7XXXXXXXXXX"
    )
    email: EmailStr
    description: str = Field(..., min_length=0, max_length=1000)
    consent: bool = Field(..., description="Согласие на обработку персональных данных")


class FormCreate(FormBase):
    pass


class FormResponse(FormBase):
    id: int

    class Config:
        from_attributes = True
