import graphene
from graphene_django.types import DjangoObjectType
from Columns.models import Column

class ColumnType(DjangoObjectType):
    class Meta:
        model = Column

class Query(object):
    columns = graphene.List(ColumnType)

    def resolve_columns(self, info, **kwargs):
        return Column.objects.all()

class CreateColumn(graphene.Mutation):
    name = graphene.String(required=True)
    id = graphene.ID()

    class Arguments:
        name = graphene.String(required=True)
        id = graphene.ID()

    def mutate(self, info, name):
        column = Column.objects.create(name=name)
        return CreateColumn(name=column.name)

class Mutation(graphene.ObjectType):
    create_column = CreateColumn.Field()
