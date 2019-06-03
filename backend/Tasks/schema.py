import graphene
from graphene_django.types import DjangoObjectType
from Tasks.models import Task

class TaskType(DjangoObjectType):
    class Meta:
        model = Task

class Query(object):
    task = graphene.Field(TaskType, id=graphene.Int())
    all_tasks = graphene.List(TaskType)

    def resolve_task(self, info, **kwargs):
        id = kwargs.get('id')

        if id is not None:
            return Task.objects.get(pk=id)

        return None

    def resolve_all_tasks(self, info, **kwargs):
        return Task.objects.all()
