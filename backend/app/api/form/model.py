from sqlalchemy import Text, String, Boolean, ForeignKey
from sqlalchemy.orm import Mapped, mapped_column, relationship
from core.models.database import Base, str_uniq, int_pk


# создаем модель таблицы студентов
class Form(Base):
    __tablename__ = "forms"  # Добавляем имя таблицы

    id: Mapped[int_pk]
    user_id: Mapped[int] = mapped_column(ForeignKey("users.id"), nullable=False)
    phone_number: Mapped[str_uniq] = mapped_column(
        String(12), nullable=False
    )  # +7 и 10 цифр
    fio: Mapped[str] = mapped_column(Text, nullable=False)
    email: Mapped[str_uniq] = mapped_column(String(255), nullable=False)
    description: Mapped[str] = mapped_column(Text, nullable=False)
    consent: Mapped[bool] = mapped_column(Boolean, nullable=False)

    # Создаем связь с таблицей users
    user: Mapped["User"] = relationship("User", back_populates="forms")

    def __str__(self):
        return str(self.id)

    def __repr__(self):
        return str(self)

    def to_dict(self):
        return {
            "id": self.id,
            "user_id": self.user_id,
            "fio": self.fio,
            "phone_number": self.phone_number,
            "email": self.email,
            "description": self.description,
            "consent": self.consent,
        }
