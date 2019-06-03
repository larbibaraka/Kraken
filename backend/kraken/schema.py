import graphene
from Tasks.schema import Query as tasks_query
from Columns.schema import Query as columns_query
from Columns.schema import Mutation as columns_mutation

class Query(tasks_query ,columns_query ,graphene.ObjectType):
  pass

class Mutation(columns_mutation, graphene.ObjectType):
    pass

schema = graphene.Schema(query=Query, mutation=Mutation)
