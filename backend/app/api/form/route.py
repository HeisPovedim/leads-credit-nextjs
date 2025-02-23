from fastapi import APIRouter, Response, Request, HTTPException, Depends
from sqlalchemy import select
from sqlalchemy.exc import IntegrityError

# МОДЕЛИ
from api.form.model import Form
from api.users.model import User
from api.form.schemas import FormCreate, FormResponse
from core.models.database import database, AsyncSession

# Роутер
router = APIRouter(
    prefix="/form",
    tags=["form"],
)


# Добавляем форму в базу данных
@router.post("/add", response_model=FormResponse)
async def add_form(
    response: Response,
    request: Request,
    form: FormCreate,
    session: AsyncSession = Depends(database.session_getter),
) -> FormResponse:
    try:
        # Проверяем существование пользователя по email
        query = select(User).where(User.email == form.email)
        user = (await session.execute(query)).scalar_one_or_none()

        if not user:
            # Создаем нового пользователя
            user = User(fio=form.fio, phone_number=form.phone_number, email=form.email)
            session.add(user)
            await session.flush()  # Получаем id пользователя

        # Создаем форму и привязываем к пользователю
        db_form = Form(user_id=user.id, **form.model_dump())
        session.add(db_form)
        await session.commit()
        await session.refresh(db_form)

        return FormResponse.model_validate(db_form)
    except IntegrityError:
        await session.rollback()
        raise HTTPException(
            status_code=400, detail="Форма с таким email или телефоном уже существует"
        )
