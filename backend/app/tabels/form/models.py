from sqlalchemy.orm import relationship, Mapped
from app.database import Base, str_uniq, int_pk


# создаем модель таблицы студентов
class Form(Base):
    id: Mapped[int_pk]
    FIO: Mapped[str]
    phone_number: Mapped[str_uniq]
    email: Mapped[str_uniq]
    description: Mapped[str]
    consent: Mapped[bool]
    major: Mapped["Major"] = relationship("Major", back_populates="forms")

    def __str__(self):
        return (f"{self.__class__.__name__}(id={self.id}, "
                f"FIO={self.FIO!r},"
                f"phone_number={self.phone_number!r})")

    def __repr__(self):
        return str(self)