from fastapi import APIRouter, Response, Request, HTTPException, Depends
from fastapi.responses import JSONResponse
from sqlalchemy.exc import IntegrityError

# МОДЕЛИ
from api.form.model import Form
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
        db_form = Form(**form.model_dump())
        session.add(db_form)
        await session.commit()
        await session.refresh(db_form)
        return FormResponse.model_validate(db_form)
    except IntegrityError:
        await session.rollback()
        raise HTTPException(
            status_code=400, detail="Форма с таким email или телефоном уже существует"
        )
