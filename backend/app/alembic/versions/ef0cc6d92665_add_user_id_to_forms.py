"""add user_id to forms

Revision ID: ef0cc6d92665
Revises: 942d7bd68ddc
Create Date: 2025-02-23 18:05:38.003009

"""
from typing import Sequence, Union

from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision: str = 'ef0cc6d92665'
down_revision: Union[str, None] = '942d7bd68ddc'
branch_labels: Union[str, Sequence[str], None] = None
depends_on: Union[str, Sequence[str], None] = None


def upgrade() -> None:
    # ### commands auto generated by Alembic - please adjust! ###
    op.add_column('forms', sa.Column('user_id', sa.Integer(), nullable=False))
    op.create_foreign_key(None, 'forms', 'users', ['user_id'], ['id'])
    # ### end Alembic commands ###


def downgrade() -> None:
    # ### commands auto generated by Alembic - please adjust! ###
    op.drop_constraint(None, 'forms', type_='foreignkey')
    op.drop_column('forms', 'user_id')
    # ### end Alembic commands ###
