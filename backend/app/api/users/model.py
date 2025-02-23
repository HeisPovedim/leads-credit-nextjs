from typing import TYPE_CHECKING

if TYPE_CHECKING:
    from api.form.model import Form

from sqlalchemy import Text, String
from sqlalchemy.orm import Mapped, mapped_column, relationship
from core.models.database import Base, str_uniq, int_pk


# создаем модель таблицы студентов
class User(Base):
    __tablename__ = "users"  # Добавляем имя таблицы

    id: Mapped[int_pk]
    phone_number: Mapped[str_uniq] = mapped_column(
        String(12), nullable=False
    )  # +7 и 10 цифр
    fio: Mapped[str] = mapped_column(Text, nullable=False)
    email: Mapped[str_uniq] = mapped_column(String(255), nullable=False)

    # Добавляем связь с формами
    forms: Mapped[list["Form"]] = relationship("Form", back_populates="user")

    def __str__(self):
        return str(self.id)

    def __repr__(self):
        return str(self)

    def to_dict(self):
        return {
            "id": self.id,
            "fio": self.fio,
            "phone_number": self.phone_number,
            "email": self.email,
        }
